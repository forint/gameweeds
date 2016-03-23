<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/16/16
 * Time: 11:40 PM
 */
use yii\helpers\Html;
use yii\helpers\Url;

?><a href="/<?=$model->query;?>" title="<?=$model->query;?>" data-id="<?=$model->id;?>" class="query <?=($index==0)?'active':"";?>"><?=$model->query;?></a>