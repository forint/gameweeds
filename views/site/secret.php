<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/22/16
 * Time: 7:38 PM
 */
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Secret';
?>
<?php if (isset($model)){ ?>
<div class="site-login">
    <?php $form = ActiveForm::begin([
        'id' => 'login-form',
        'options' => ['class' => 'form-horizontal'],
        'fieldConfig' => [
            'template' => "{label}\n<div class=\"col-lg-9\">{input}</div>\n<div class=\"col-lg-9 right\" >{error}</div>",
            'labelOptions' => ['class' => 'col-lg-3 control-label'],
        ],
    ]); ?>

    <?= $form->field($model, 'username')->textInput(['autofocus' => true]) ?>

    <?= $form->field($model, 'password')->passwordInput() ?>

    <?= $form->field($model, 'rememberMe')->checkbox([
        'template' => "<div class=\"col-lg-offset-3 col-lg-9\">{input} {label}</div>\n<div class=\"col-lg-9 right\">{error}</div>",
    ]) ?>

    <div class="form-group">
        <div class="col-lg-12  center">
            <?= Html::submitButton('Login', ['class' => 'btn btn-warning', 'name' => 'login-button']) ?>
        </div>
    </div>

    <?php ActiveForm::end(); ?>
</div>
<?php }else{ ?>

    <div>Secret Page</div>
    <p><?php
        print_R("<pre>");
        print_R(Yii::$app->getResponse()->getCookies()->getIterator()->current()->value);
        print_R("</pre>");
        
        ?></p>

<?php } ?>