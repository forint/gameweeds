<?php

namespace app\controllers;

use Yii;
use yii\db\Expression;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\ParserForm;
use app\models\Query;
use app\models\Result;
use yii\data\ArrayDataProvider;

class SiteController extends Controller{

    private $resultPage = 1;
    private $resultPerPage = 5;
    private $maxResults = 10;

    private $api_key = 'AIzaSyB8rc-UAQVTnRRlm5TA6whW84IFRPXM7Y4';

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ]
        ];

    }

    public function actionIndex()
    {

        $itemId = Yii::$app->request->get('itemId');

        $model = new ParserForm();
        $dataProvider = new ArrayDataProvider([
            'id'=>'list',
            'allModels' => Query::find()->all(),
        ]);

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {

            $post = Yii::$app->request->post();

            $queries = explode(',',$post['ParserForm']['query']);
            $queries = array_map('trim',$queries);

            $res = array();

            foreach ($queries as $value){
                $val = explode(' ',$value);
                $arr = array();
                foreach ($val as $v){
                    $arr[] = ucfirst($v);
                }
                $value = implode(' ',$arr);

                $previous = Query::find()
                    ->where(['query' => $value])
                    ->one();

                if (!$previous){

                    $query = new Query();
                    $query->query = $value;
                    $res = $query->save();

                    $this->getYoutubeResults($value,$query->id);

                }else{

                    $this->getYoutubeResults($value,$previous->id);

                }

            }


        }

        if ($itemId){
            $one = Query::find()->where(['id' => $itemId])->one();;
        }else{
            $one = Query::find()->one();
        }
        if ($one){
            $result = Result::find()->where(['query_id' => $one->id]);

            $resultProvider = new ArrayDataProvider([
                'id'=>'result',
                'allModels' => $result->all(),
                'pagination' => [
                    'pageSize' => $this->resultPerPage

                ],
            ]);

            $count = $result->count();
            $sum = ceil($result->average('rating'));
            $name = $one->query;

            $dataList = [ '0' => ["name"  => $name, "count" => $count, "average rating" => $sum] ];
            $ratingProvider = new ArrayDataProvider([
                'id'=>'rating',
                'allModels' => $dataList,
                'sort' => [
                    'attributes' => ['name', 'count', 'sum'],
                ],
            ]);
            return $this->render(
                'index',
                [
                    'model'  => $model,
                    'list'   => $dataProvider,
                    'rating' => $ratingProvider,
                    'result' => $resultProvider
                ]
            );
        }else{
            return $this->render(
                'index',
                [
                    'model'  => $model,
                ]
            );
        }

    }

    private function getYoutubeResults($q,$id){

        // include your composer dependencies
        require_once '../vendor/autoload.php';

        $client = new \Google_Client();
        $client->setApplicationName("gameweeds.com");
        $client->setDeveloperKey($this->api_key);

        $youtube = new \Google_Service_YouTube($client);

        $searchResponse = $youtube->search->listSearch('snippet', array(
            'q' => $q,
            'maxResults' => $this->maxResults,
            'type' => 'video'
        ));

        foreach ($searchResponse['modelData']['items'] as $item => $video){


            if ($video['id']['videoId']){

                $videoParams = array( 'id' => $video['id']['videoId'] );
                $results = $youtube->videos->listVideos('snippet,statistics',$videoParams);

                $video_item = $results['items']['0']['modelData']['snippet'];
                $video_stat = $results['items']['0']['modelData']['statistics'];

                $previous = Result::find()
                    ->where(['youtube_id' => $video['id']['videoId']])
                    ->one();

                $same = Result::find()
                    ->where(['like', 'title', $video_item['title']])
                    ->one();

                if (!$previous && !$same){
                    $result = new Result();
                    $result->query_id = $id;
                    $result->youtube_id = $video['id']['videoId'];
                    $result->title = $video_item['title'];
                    $result->description = $video_item['description'];
                    $result->rating = $video_stat['viewCount'];
                    $result->img = $video_item['thumbnails']['default']['url'];
                    $result->save();
                }
            }
        }
    }

    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    public function actionCv()
    {
        return $this->render('cv');
    }

    public function actionGrow($message = 'Grow with Yii Framework'){
        return $this->render('grow', ['message' => $message]);
    }

    public function actionItems(){

        $post = Yii::$app->request->post();
        $result_page = (isset($post['result-page']) && is_numeric($post['result-page']))?$post['result-page']:$this->resultPage;
        $result_per_page = (isset($post['result-per-page']) && is_numeric($post['result-per-page']))?$post['result-per-page']:$this->resultPerPage;

        $query = Query::find()->where(['id' => $post['id']])->one();
        $name = $query->query;

        $result = Result::find()->where(['query_id' => $post['id']]);
        $count = $result->count();
        $sum = $result->average('rating');
        $items = $result->asArray()->offset($result_page)->limit($result_per_page)->all();

        $response = array(
            'items'=>$items,
            'rating'=> array(
                "name"  => $name,
                "count" => $count,
                "average rating" => ceil($sum)
            )
        );
        return json_encode($response);

    }

}




