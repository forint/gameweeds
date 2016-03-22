<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/22/16
 * Time: 1:07 AM
 */
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

class BackgammonController extends Controller{

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

    public function actionLong(){
        return $this->render('/site/backgammon',['mode'=> $this->action->id]);
    }
    public function actionShort(){
        return $this->render('/site/backgammon',['mode'=> $this->action->id]);
    }


}




