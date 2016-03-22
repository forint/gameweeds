<?php
/**
 * Created by PhpStorm.
 * User: forint
 * Date: 3/16/16
 * Time: 5:42 PM
 */
use yii\helpers\Html;

$this->registerCssFile('/css/backgammon.css');
$this->registerJsFile('/js/raphael.js', ['depends' => [yii\web\JqueryAsset::className()]]);
$this->registerJsFile('/js/backgammon.js', ['depends' => [yii\web\JqueryAsset::className()]]);
$this->registerJsFile('/js/state-machine.js', ['depends' => [yii\web\JqueryAsset::className()]]);
$this->registerJsFile('/js/state.js', ['depends' => [yii\web\JqueryAsset::className()]]);
$this->registerJsFile('http://gameweeds.com:8080/socket.io/socket.io.js', ['depends' => [yii\web\JqueryAsset::className()]]);

$this->title = 'Backgammon';
?>
<div class="game row">
    <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
        <div class="widget">
            <div class="widget_game">
                <span class="module_title">Select game</span>
                <ul class="list_games">
                    <li><a href="/backgammon/long/">Backgammon long</a></li>
                    <li><a href="/backgammon/short/">Backgammon short</a></li>
                </ul>
            </div>
            <div class="widget_game">
                <span class="module_title">Statistics</span>
                <div id="match_stat">
                    <div class="statMatchWrapper" id="sonya">
                        <ul class="statMatch" id="match"></ul>
                    </div>
                </div>
            </div>
            <div class="widget_game">
                <span class="module_title">Online Statistics</span>
                <div id="stats"></div>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">

        <div class="backgammon" id="backgammon">
            <div class="game-popup">
                <div class="game-wrap">
                    <div class="inSaves" id="inSaves" style="margin-top:0px;">
                        <a class="close_message_handler" href="#" onclick="Mode.clear();return false;"></a>
                        <div class="inSavesTitle"><span class="new_font_margin">State name</span></div>
                        <div class="outer_link">
                            <div class="inner_link" id="holder1">
                                <a href="#"><span style="">asfasf</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navigation <?=(isset($mode)?'active':'');?>">
                <ul>
                    <li><a id="create" href="#" title="Create" onclick="Mode.create();">Create</a></li>
                    <li><a id="play" href="#" title="Play" onclick="Mode.play();" id="">Play</a></li>
                    <li><a id="save" href="#" title="Save" onclick="Mode.save();">Save</a></li>
                    <li><a id="download" href="#" title="Download" onclick="Mode.download();">Download</a></li>
                    <li class="music"><a href="#" title="Music" id="music"></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
        <div class="widget">
            <div class="widget_game">
                <span class="module_title">Current games</span>
                <ul class="list_games">
                    <li><a href="">Game 1</a></li>
                    <li><a href="">Game 2</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<input type="hidden" name="side" value="" id="side">
<input type="hidden" name="type" value="" id="type">
<input type="hidden" name="start" value="" id="start">
