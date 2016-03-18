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
        <div class="col-lg-6 col-height">
            <div class="jumbotron">
                <h1>Congratulations!</h1>
                <p class="lead">You can use the Best Youtube Parser in the World by Yuri de Kralya</p>
            </div>
        </div>
        <div class="col-lg-6 col-height">
            <?php
            $form = ActiveForm::begin(); ?>
            <?= $form->field($model, 'query') ?>
            <div class="form-group">
                <?= Html::submitButton('Submit', ['class' => 'btn btn-primary']) ?>
            </div>
            <?php ActiveForm::end();
            ?>
        </div>
    </div>

    <div class="body-content">
        <?php if (isset($list)){ ?>
        <div class="row">
            <div class="row-height">
                <div class="col-lg-2 col-height">
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
                <div class="col-lg-6 col-height" id="info">
                    <?php if (isset($result)){ ?>
                        <h2>Query info</h2>
                        <?php Pjax::begin(); ?>
                        <?= GridView::widget([
                                'dataProvider' => $result,
                                'summary' => '',
                                'columns' => [
                                    [
                                        'attribute' => 'name',
                                        'format' => 'html',
                                        'value'=> function($data) { return Html::tag('div', Html::img($data->img), array('class' => 'center')); }
                                    ],
                                    'title',
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