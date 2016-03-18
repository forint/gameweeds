<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/16/16
 * Time: 6:49 PM
 */

namespace app\models;

use Yii;
use yii\base\Model;

class ParserForm extends Model
{
    public $query;

    public function rules()
    {
        return [
            [['query'], 'required']
        ];
    }
}