<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/16/16
 * Time: 11:40 PM
 */
use yii\helpers\Html;
?>
<ul>
<?php
foreach ($model as $key=>$value){
    ?><li><?=ucfirst($key);?> : <?=$value;?></li><?php
}
?>
</ul>