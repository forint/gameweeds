<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/16/16
 * Time: 7:04 PM
 */
use yii\helpers\Html;
?>
<p>You have entered the following information:</p>

<ul>
    <li><label>Name</label>: <?= Html::encode($model->name) ?></li>
    <li><label>Email</label>: <?= Html::encode($model->email) ?></li>
</ul>