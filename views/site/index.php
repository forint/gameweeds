<?php
/* @var $this yii\web\View */
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\widgets\ListView;
use yii\grid\GridView;
use yii\widgets\Pjax;

$this->title = 'Technomatix exercise';
?>
<div class="site-index">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-title">Find videos in YouTube</h1>
            <div class="jumbotron">

                    <?php
                    $form = ActiveForm::begin();
                    $model->query = 'adriano celentano, sting, pavarotti caruso, celine dion, michael jackson, johnny depp, angelina jolie';
                    ?>
                    <?= $form->field($model, 'query')->textInput()->label(false) ?>
                    <div class="form-group">
                        <?= Html::submitButton('Submit', ['class' => 'btn btn-warning']) ?>
                    </div>
                    <?php ActiveForm::end();
                    ?>
            </div>
        </div>
    </div>

    <div class="body-content">
        <?php if (isset($list)){ ?>
        <div class="row">
            <div class="row-height">
                <div class="col-xs-12 col-lg-2 col-height">
                    <div class="widget">
                    <?php if (isset($list)){ ?>
                        <h2>Queries list</h2>
                        <?= ListView::widget([
                            'dataProvider' => $list,
                            'itemView' => '_item',
                            'summary' => ''
                        ]); ?>
                    <?php } ?>
                    </div>
                    <div  class="widget" id="rating">

                        <?php if (isset($rating)){ ?>
                            <h2>Query results</h2>
                            <?= ListView::widget([
                                'dataProvider' => $rating,
                                'itemView' => '_rating',
                                'summary' => ''
                            ]); ?>
                        <?php } ?>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-6 col-height" id="info">
                    <?php if (isset($result)){ ?>
                        <h2>Query info</h2>
                        <?php Pjax::begin(); ?>
                        <?= GridView::widget([
                                'dataProvider' => $result,
                                'summary' => '',
                                'showHeader' => '',
                                'tableOptions' => [
                                    'class' => 'table table-bordered'
                                ],
                                'columns' => [
                                    [
                                        'attribute' => 'Thumbnail',
                                        'format' => 'html',
                                        'value'=> function($data) { return Html::tag('div', Html::img($data->img), array('class' => 'center')); }
                                    ],
                                    [
                                        'attribute' => 'title',
                                        'format' => 'html',
                                        'value'=> function($data) { return Html::tag('div', Html::a($data->title,'https://www.youtube.com/v/'.$data->youtube_id)).Html::tag('p',$data->description); }
                                    ],
                                    'rating'
                                ],
                                'layout' => "{summary}\n{items}\n<div class='paginator_wrap'>{pager}</div>",

                            ]) ?>
                        <?php Pjax::end(); ?>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
</div>