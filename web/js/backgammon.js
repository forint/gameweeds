/**
 * Created by forint on 3/21/16.
 */
window.onload = function(){
    Backgammon.init();
}

window.onresize = function(){

}
var Backgammon = {
    // Создать или играть (1 - играть; 2 - создать)
    "game" : 1,
    // Параметры звука
    sound: {
        "state" : false,
        "paper": null,
        "sounds": {
            "on" : null,
            "off" : null,
        }
    },
    // Ширина и высота доски
    gameBoard: {
        "width" : 680,
        "height" : 680
    },
    // Обьект выделение допустимых ходов
    fields : {
        "1": {"obj":null,"path":null},
        "2": {"obj":null,"path":null},
        "3": {"obj":null,"path":null},
        "4": {"obj":null,"path":null},
        "5": {"obj":null,"path":null},
        "6": {"obj":null,"path":null},
        "7": {"obj":null,"path":null},
        "8": {"obj":null,"path":null},
        "9": {"obj":null,"path":null},
        "10": {"obj":null,"path":null},
        "11": {"obj":null,"path":null},
        "12": {"obj":null,"path":null},
        "24": {"obj":null,"path":null},
        "23": {"obj":null,"path":null},
        "22": {"obj":null,"path":null},
        "21": {"obj":null,"path":null},
        "20": {"obj":null,"path":null},
        "19": {"obj":null,"path":null},
        "18": {"obj":null,"path":null},
        "17": {"obj":null,"path":null},
        "16": {"obj":null,"path":null},
        "15": {"obj":null,"path":null},
        "14": {"obj":null,"path":null},
        "13": {"obj":null,"path":null}
    },
    // Дополнительные свойства точек на каждой стороне игральной кости
    properties : {
        "1":{"stroke":"#000","fill":"#fff","filler":"#000"},
        "2":{"stroke":"#fff","fill":"#000","filler":"#000"}
    },
    // Обьект фишек
    grid : {
        "1":{
            "col":"15",
            "type":"1",
            "coords":{
                "1":{"x":"46","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "2":{"x":"46","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "3":{"x":"46","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "4":{"x":"46","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "5":{"x":"46","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "6":{"x":"46","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "7":{"x":"46","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "8":{"x":"46","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "9":{"x":"46","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "10":{"x":"46","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "11":{"x":"46","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "12":{"x":"46","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "13":{"x":"46","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "14":{"x":"46","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}},
                "15":{"x":"46","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 448-(i*15);}}
            }
        },
        "2":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"96","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "2":{"x":"96","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "3":{"x":"96","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "4":{"x":"96","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "5":{"x":"96","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "6":{"x":"96","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "7":{"x":"96","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "8":{"x":"96","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "9":{"x":"96","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "10":{"x":"96","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "11":{"x":"96","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "12":{"x":"96","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "13":{"x":"96","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "14":{"x":"96","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}},
                "15":{"x":"96","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 448-(i*15);}}
            }
        },
        "3":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"146","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "2":{"x":"146","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "3":{"x":"146","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "4":{"x":"146","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "5":{"x":"146","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "6":{"x":"146","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "7":{"x":"146","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "8":{"x":"146","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "9":{"x":"146","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "10":{"x":"146","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "11":{"x":"146","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "12":{"x":"146","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "13":{"x":"146","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "14":{"x":"146","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}},
                "15":{"x":"146","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 448-(i*15);}}
            }
        },
        "4":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"196","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "2":{"x":"196","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "3":{"x":"196","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "4":{"x":"196","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "5":{"x":"196","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "6":{"x":"196","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "7":{"x":"196","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "8":{"x":"196","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "9":{"x":"196","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "10":{"x":"196","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "11":{"x":"196","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "12":{"x":"196","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "13":{"x":"196","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "14":{"x":"196","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}},
                "15":{"x":"196","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 448-(i*15);}}
            }
        },
        "5":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"246","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "2":{"x":"246","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "3":{"x":"246","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "4":{"x":"246","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "5":{"x":"246","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "6":{"x":"246","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "7":{"x":"246","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "8":{"x":"246","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "9":{"x":"246","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "10":{"x":"246","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "11":{"x":"246","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "12":{"x":"246","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "13":{"x":"246","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "14":{"x":"246","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}},
                "15":{"x":"246","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 448-(i*15);}}
            }
        },
        "6":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"296","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "2":{"x":"296","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "3":{"x":"296","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "4":{"x":"296","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "5":{"x":"296","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "6":{"x":"296","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "7":{"x":"296","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "8":{"x":"296","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "9":{"x":"296","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "10":{"x":"296","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "11":{"x":"296","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "12":{"x":"296","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "13":{"x":"296","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "14":{"x":"296","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}},
                "15":{"x":"296","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 448-(i*15);}}
            }
        },
        "7":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"386","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "2":{"x":"386","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "3":{"x":"386","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "4":{"x":"386","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "5":{"x":"386","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "6":{"x":"386","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "7":{"x":"386","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "8":{"x":"386","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "9":{"x":"386","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "10":{"x":"386","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "11":{"x":"386","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "12":{"x":"386","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "13":{"x":"386","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "14":{"x":"386","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}},
                "15":{"x":"386","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 448-(i*15);}}
            }
        },
        "8":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"436","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "2":{"x":"436","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "3":{"x":"436","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "4":{"x":"436","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "5":{"x":"436","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "6":{"x":"436","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "7":{"x":"436","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "8":{"x":"436","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "9":{"x":"436","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "10":{"x":"436","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "11":{"x":"436","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "12":{"x":"436","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "13":{"x":"436","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "14":{"x":"436","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}},
                "15":{"x":"436","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 448-(i*15);}}
            }
        },
        "9":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"486","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "2":{"x":"486","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "3":{"x":"486","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "4":{"x":"486","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "5":{"x":"486","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "6":{"x":"486","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "7":{"x":"486","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "8":{"x":"486","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "9":{"x":"486","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "10":{"x":"486","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "11":{"x":"486","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "12":{"x":"486","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "13":{"x":"486","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "14":{"x":"486","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}},
                "15":{"x":"486","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 448-(i*15);}}
            }
        },
        "10":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"536","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "2":{"x":"536","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "3":{"x":"536","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "4":{"x":"536","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "5":{"x":"536","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "6":{"x":"536","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "7":{"x":"536","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "8":{"x":"536","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "9":{"x":"536","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "10":{"x":"536","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "11":{"x":"536","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "12":{"x":"536","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "13":{"x":"536","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "14":{"x":"536","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}},
                "15":{"x":"536","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 448-(i*15);}}
            }
        },
        "11":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"586","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "2":{"x":"586","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "3":{"x":"586","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "4":{"x":"586","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "5":{"x":"586","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "6":{"x":"586","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "7":{"x":"586","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "8":{"x":"586","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "9":{"x":"586","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "10":{"x":"586","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "11":{"x":"586","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "12":{"x":"586","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "13":{"x":"586","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "14":{"x":"586","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}},
                "15":{"x":"586","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 448-(i*15);}}
            }
        },
        "12":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"636","y":"634","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "2":{"x":"636","y":"619","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "3":{"x":"636","y":"604","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "4":{"x":"636","y":"589","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "5":{"x":"636","y":"574","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "6":{"x":"636","y":"559","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "7":{"x":"636","y":"544","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "8":{"x":"636","y":"529","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "9":{"x":"636","y":"514","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "10":{"x":"636","y":"499","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "11":{"x":"636","y":"484","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "12":{"x":"636","y":"469","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "13":{"x":"636","y":"454","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "14":{"x":"636","y":"439","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}},
                "15":{"x":"636","y":"424","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 448-(i*15);}}
            }
        },
        "24":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"46","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "2":{"x":"46","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "3":{"x":"46","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "4":{"x":"46","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "5":{"x":"46","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "6":{"x":"46","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "7":{"x":"46","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "8":{"x":"46","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "9":{"x":"46","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "10":{"x":"46","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "11":{"x":"46","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "12":{"x":"46","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "13":{"x":"46","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "14":{"x":"46","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}},
                "15":{"x":"46","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"15","ay":function(i){return 3+(i*15);}}
            }
        },
        "23":{
            "col":"0",
            "type":"0",
            "coords":{
                "1":{"x":"96","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "2":{"x":"96","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "3":{"x":"96","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "4":{"x":"96","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "5":{"x":"96","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "6":{"x":"96","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "7":{"x":"96","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "8":{"x":"96","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "9":{"x":"96","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "10":{"x":"96","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "11":{"x":"96","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "12":{"x":"96","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "13":{"x":"96","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "14":{"x":"96","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}},
                "15":{"x":"96","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"65","ay":function(i){return 3+(i*15);}}
            }
        },
        "22":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"144","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "2":{"x":"144","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "3":{"x":"144","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "4":{"x":"144","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "5":{"x":"144","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "6":{"x":"144","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "7":{"x":"144","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "8":{"x":"144","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "9":{"x":"144","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "10":{"x":"144","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "11":{"x":"144","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "12":{"x":"144","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "13":{"x":"144","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "14":{"x":"144","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}},
                "15":{"x":"144","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"115","ay":function(i){return 3+(i*15);}}
            }
        },
        "21":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"194","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "2":{"x":"194","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "3":{"x":"194","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "4":{"x":"194","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "5":{"x":"194","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "6":{"x":"194","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "7":{"x":"194","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "8":{"x":"194","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "9":{"x":"194","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "10":{"x":"194","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "11":{"x":"194","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "12":{"x":"194","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "13":{"x":"194","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "14":{"x":"194","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}},
                "15":{"x":"194","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"165","ay":function(i){return 3+(i*15);}}
            }
        },
        "20":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"244","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "2":{"x":"244","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "3":{"x":"244","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "4":{"x":"244","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "5":{"x":"244","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "6":{"x":"244","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "7":{"x":"244","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "8":{"x":"244","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "9":{"x":"244","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "10":{"x":"244","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "11":{"x":"244","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "12":{"x":"244","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "13":{"x":"244","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "14":{"x":"244","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}},
                "15":{"x":"244","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"215","ay":function(i){return 3+(i*15);}}
            }
        },
        "19":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"294","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "2":{"x":"294","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "3":{"x":"294","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "4":{"x":"294","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "5":{"x":"294","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "6":{"x":"294","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "7":{"x":"294","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "8":{"x":"294","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "9":{"x":"294","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "10":{"x":"294","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "11":{"x":"294","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "12":{"x":"294","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "13":{"x":"294","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "14":{"x":"294","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}},
                "15":{"x":"294","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"265","ay":function(i){return 3+(i*15);}}
            }
        },
        "18":{
            "col":"0",
            "type":"0",
            "coords":{
                "1":{"x":"384","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "2":{"x":"384","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "3":{"x":"384","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "4":{"x":"384","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "5":{"x":"384","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "6":{"x":"384","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "7":{"x":"384","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "8":{"x":"384","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "9":{"x":"384","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "10":{"x":"384","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "11":{"x":"384","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "12":{"x":"384","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "13":{"x":"384","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "14":{"x":"384","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}},
                "15":{"x":"384","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"315","ay":function(i){return 3+(i*15);}}
            }
        },
        "17":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"434","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "2":{"x":"434","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "3":{"x":"434","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "4":{"x":"434","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "5":{"x":"434","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "6":{"x":"434","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "7":{"x":"434","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "8":{"x":"434","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "9":{"x":"434","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "10":{"x":"434","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "11":{"x":"434","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "12":{"x":"434","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "13":{"x":"434","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "14":{"x":"434","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}},
                "15":{"x":"434","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"365","ay":function(i){return 3+(i*15);}}
            }
        },
        "16":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"484","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "2":{"x":"484","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "3":{"x":"484","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "4":{"x":"484","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "5":{"x":"484","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "6":{"x":"484","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "7":{"x":"484","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "8":{"x":"484","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "9":{"x":"484","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "10":{"x":"484","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "11":{"x":"484","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "12":{"x":"484","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "13":{"x":"484","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "14":{"x":"484","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}},
                "15":{"x":"484","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"415","ay":function(i){return 3+(i*15);}}
            }
        },
        "15":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"534","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "2":{"x":"534","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "3":{"x":"534","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "4":{"x":"534","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "5":{"x":"534","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "6":{"x":"534","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "7":{"x":"534","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "8":{"x":"534","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "9":{"x":"534","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "10":{"x":"534","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "11":{"x":"534","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "12":{"x":"534","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "13":{"x":"534","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "14":{"x":"534","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}},
                "15":{"x":"534","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"465","ay":function(i){return 3+(i*15);}}
            }
        },
        "14":{
            "col":"0",

            "type":"0",
            "coords":{
                "1":{"x":"584","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "2":{"x":"584","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "3":{"x":"584","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "4":{"x":"584","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "5":{"x":"584","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "6":{"x":"584","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "7":{"x":"584","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "8":{"x":"584","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "9":{"x":"584","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "10":{"x":"584","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "11":{"x":"584","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "12":{"x":"584","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "13":{"x":"584","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "14":{"x":"584","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}},
                "15":{"x":"584","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"515","ay":function(i){return 3+(i*15);}}
            }
        },
        "13":{
            "col":"15",

            "type":"2",
            "coords":{
                "1":{"x":"634","y":"46","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "2":{"x":"634","y":"61","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "3":{"x":"634","y":"76","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "4":{"x":"634","y":"91","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "5":{"x":"634","y":"106","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "6":{"x":"634","y":"121","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "7":{"x":"634","y":"136","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "8":{"x":"634","y":"151","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "9":{"x":"634","y":"166","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "10":{"x":"634","y":"181","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "11":{"x":"634","y":"196","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "12":{"x":"634","y":"211","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "13":{"x":"634","y":"226","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "14":{"x":"634","y":"241","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}},
                "15":{"x":"634","y":"256","shape":null,"click_shape":false,"eve":false,"clickEve":function(i,j){Backgammon.setCliker(i,j);},"ax":"565","ay":function(i){return 3+(i*15);}}
            }
        }
    },
    // Инициализация + сокеты
    init: function() {

        this.paper = Raphael("backgammon",this.gameBoard['width'],this.gameBoard['height']);
        this.paper.setViewBox(0,0,this.gameBoard['width'],this.gameBoard['height'],true);
        this.paper.rect(0,0,this.gameBoard['width'],this.gameBoard['height']).attr({"fill":"#FBEEC4"});

        this.font = this.paper.getFont("foo");

        this.drawCanvas();

        this.setMusic();

        // ok, raphael sets width/height even though a viewBox has been set,
        // so let's rip out those attributes (yes, this will not work for VML)
        var svg = document.querySelectorAll("svg");
        $(svg).each(function(){
            this.removeAttribute("width");
            this.removeAttribute("height");
        });
        //this.sound.paper.rect(420,25,50,30,5).attr({"fill":"#333","stroke-width":"2","stroke":"#000","stroke-linecap":"round","stroke-linejoin":"round"});
        //var li_3 = this.sound.paper.rect(420,25,50,30,5).attr({"fill":"#D3A778","stroke-width":"1","stroke":"#000","stroke-linecap":"round","stroke-linejoin":"round","opacity":"0.2"}).toFront();
        //var sound = this.sound;

        /*li_3.click(function(){
            if (sound.sound_in_the_site == true){
                sound.sound_in_the_site = false;
                sound.sounds_on.hide();
                sound.sounds_off.show().insertBefore(li_3);
            }else {
                sound.sound_in_the_site = true;
                sound.sounds_off.hide();
                sound.sounds_on.show().insertBefore(this);
            }
            sound.siteSounds(this);
        });
        li_3.hover(function(){
            li_3.attr({"cursor":"url(/public/images/cursors/ar.cur),auto"});
            top_gear_3.stop().animate({"fill":"#000"},200);
            if (this.sound_in_the_site == true){
                this.sounds_on.stop().animate({"fill":"#ecff13"},200);
            }else {
                this.sounds_off.stop().animate({"fill":"#ecff13"},200);
            }
        },function(){
            top_gear_3.stop().animate({"fill":"#333"},200);
            if (this.sound_in_the_site == true){
                this.sounds_on.stop().animate({"fill":"#fff"},200);
            }else {
                this.sounds_off.stop().animate({"fill":"#fff"},200);
            }
        },this.sound,this.sound);

        if (this.sound.sound_in_the_site == true){
            this.sound.sounds_on.show().insertBefore(li_3);
        }else {
            this.sound.sounds_off.show().insertBefore(li_3);
        }*/


        //this.drawCanvas();
        //this.drawMenu();
        //Raphael("author",300,50).print(20, -80, "Designed by Forint", this.font, 30).attr({fill: "#000","stroke-width":"1.5","stroke":"#fff"}).toFront();
    },
    // Присоединяемся к игроку
    connect : function ( gameId, userLogin, userId, rival, side, socket_id, obj) {

        if (jQuery("ul.list_real_games").size() > 0){
            if(jQuery("ul.list_real_games li").size() == 1){
                jQuery("ul.list_real_games").replaceWith('<div class="list_of_game_no">Текущих игр нет</div>');
            }else{
                jQuery("ul.list_real_games li a[id="+gameId+"]]").remove();
            }
        }
        jQuery("#saves2").fadeOut(300,function(){
            jQuery(".message_block").fadeIn(300,function(){
                jQuery("#ug1").fadeIn(300,function(){
                    var text = 'Соединяемся c игроком '+userLogin+'...<a href="http://preloaders.net/" class="link_preload"><img src="/public/images/113.png" alt="preloaders.net"></a>';
                    jQuery("#ug1").html(text);
                });
            });
        });

        this.main();

        socket.emit('ready', { "gameId" :gameId,"userLogin":userLogin,"userId":userId,"rival":rival,"side":side,"socket_id":socket_id });

    },
    // Если опции установлены, начинаем игру
    startGame : function(){
        Backgammon.hideMessageHandlerBlock();
        switch(Backgammon.game){
            case 1:
                console.log("Играем с компьютером");
                Backgammon.main();
                //Backgammon.setRozigrishMessage();
            break;
            case 2:
                console.log("Играем человеком");

            break;
        }
        /*if (Backgammon.game != false && Backgammon.rival != false && Backgammon.type != false &&  Backgammon.side != false){

            switch(this.game){
                case 1:

                    // Играем с компиком
                    Backgammon.mask(false);
                    Backgammon.main();
                    Backgammon.setRozigrishMessage();

                    socket.emit('create', Backgammon.getObjectProperties(Backgammon), Backgammon.clearGridBeforeSend(Backgammon.grid));
                    break;
                case 2:

                    // Играем с человеком
                    socket.emit('create', Backgammon.getObjectProperties(Backgammon), Backgammon.clearGridBeforeSend(Backgammon.grid) ,function(){
                        Backgammon.gameMenuOptions[2] = false;
                    });

                    break;
            }
        }*/

    },
    menuStep : function(state){
        console.log(state);
        var res = (function(state){
            var blocks = [];
            blocks['0'] = $('<div class="inSaves" id="inSaves" style="margin-top:0px;">' +
                '<a class="close_message_handler" href="#" onclick="Mode.clear();return false;"></a>' +
                '<div class="inSavesTitle"><span class="new_font_margin">' + state.name + '</span></div></div>');

            for (var i in state.els){
                blocks[i] = $('<div class="outer_link"><div class="inner_link" id="holder1"><a href="#" onclick="'+state.els[i].handler+'" class="' + state.els[i].class + '" ><span style="' + state.els[i].style + '">' + state.els[i].name + '</span></a></div></div>');
            }
            return {blocks:blocks};
        })(state)

        var blocks = res.blocks,
            length = blocks.length-1;


        var par = $(".game-popup"),
            wrap = $(par).children(".game-wrap");

        wrap.html('');
        for (var j = 0; j <= length; j++){
            (function(j,blocks,par,wrap){
                //console.log (j+" == "+length);
                wrap = (j > 0)?$(wrap).children(".inSaves"):wrap;
                if (j == length){
                    $(wrap).append(blocks[j]);
                    $(par).css("visibility","visible").animate({"opacity":"1"}, 100);

                }else{
                    $(wrap).append(blocks[j]);
                }
            })(j,blocks,par,wrap)
        }
    },
    // Выставляем фишки
    main :function(){

        for (var i = 1;i <= 24; i++){

            (function(i){
                var col = parseInt(Backgammon.grid[i].col);
                var type = parseInt(Backgammon.grid[i].type);

                for (var j=1; j<=col; j++){

                    (function(i,j,type){
                        Backgammon.grid[i].coords[j].shape = Backgammon.paper.circle(Backgammon.grid[i].coords[j].x, Backgammon.grid[i].coords[j].y, 25).attr({fill: Backgammon.properties[type].fill,stroke:Backgammon.properties[type].stroke,"stroke-width":"1.5"}).toFront();
                    })(i,j,type);
                }
            })(i);

        }

    },
    // Генерация игрового поля
    drawCanvas : function(){
        var di = this.paper.set();
        di.push(
            this.paper.rect(0,0,340,680).attr({"stroke-width":"2","stroke":"#000"})
            ,this.paper.rect(340,0,340,680).attr({"stroke-width":"2","stroke":"#000"})
            ,this.paper.rect(11,11,319,660).attr({"stroke-width":"20","stroke":"#333"}).blur(1)
            ,this.paper.rect(351,11,318,660).attr({"stroke-width":"20","stroke":"#333"}).blur(1)
        );

        var solid = {fill: "none", stroke: "#666"};
        for (var i=0;i<12;i++){
            var color = (i%2 == 0)?"#744227":"#D3A778";
            var step = 50*i;
            var x = 42+step;
            if (i > 5){ x=x+41;}
            if (i == 0 || i == 5 || i == 6 || i == 11){
                var z = 300;
                var y = '360.8l28';
            }else if (i == 1 || i == 4 || i == 7 || i == 10) {
                var z = 280;
                var y = '380.8l28';
            }else {
                var y = '400.8l28';
                var z = 260;
            }
            var path = "M"+x+","+y+","+z+" -49,0z";
            this.paper.path(path).attr(solid);
            var ii=i+1;

            this.fields[ii].obj = this.paper.path(path).attr({fill: color, stroke: "#fff", "stroke-width": 2});
            this.fields[ii].path = path;
        }

        for (var i=0;i<12;i++){
            var color = (i%2 == 0)?"#744227":"#D3A778";
            var step = 50*i
            var x = 612-step;
            var ii=i+1;
            if (i>5){x=x-41;}
            if (i == 0 || i == 5 || i == 6 || i == 11){
                var z = 290;
                var y = '20.8.0l24';
                var c = '-290';
            }else if (i == 1 || i == 4 || i == 7 || i == 10) {
                var z = 270;
                var y = '20.8.0l24';
                var c = '-270';
            }else {
                var y = '20.8.0l24';
                var z = 250;
                var c = '-250';
            }
            var path = "M"+x+","+y+","+z+" 25,"+c+"z";
            this.paper.path(path).attr(solid);
            var el = ii+12;
            this.fields[el].obj = this.paper.path(path).attr({fill: color, stroke: "#fff", "stroke-width": 2});
            this.fields[el].path = path;
        }


    },
    // Кнопка включения/выключения звуков на сайте
    setMusic : function(sound){
        this.sound.paper = Raphael("music", 54, 54);
        this.sound.paper.setViewBox( 0, 0, 54, 54,true);
        this.sound.sounds['on'] = this.sound.paper.path("M4.998,12.127v7.896h4.495l6.729,5.526l0.004-18.948l-6.73,5.526H4.998z M18.806,11.219c-0.393-0.389-1.024-0.389-1.415,0.002c-0.39,0.391-0.39,1.024,0.002,1.416v-0.002c0.863,0.864,1.395,2.049,1.395,3.366c0,1.316-0.531,2.497-1.393,3.361c-0.394,0.389-0.394,1.022-0.002,1.415c0.195,0.195,0.451,0.293,0.707,0.293c0.257,0,0.513-0.098,0.708-0.293c1.222-1.22,1.98-2.915,1.979-4.776C20.788,14.136,20.027,12.439,18.806,11.219z M21.101,8.925c-0.393-0.391-1.024-0.391-1.413,0c-0.392,0.391-0.392,1.025,0,1.414c1.45,1.451,2.344,3.447,2.344,5.661c0,2.212-0.894,4.207-2.342,5.659c-0.392,0.39-0.392,1.023,0,1.414c0.195,0.195,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.293c1.808-1.809,2.929-4.315,2.927-7.073C24.033,13.24,22.912,10.732,21.101,8.925z M23.28,6.746c-0.393-0.391-1.025-0.389-1.414,0.002c-0.391,0.389-0.391,1.023,0.002,1.413h-0.002c2.009,2.009,3.248,4.773,3.248,7.839c0,3.063-1.239,5.828-3.246,7.838c-0.391,0.39-0.391,1.023,0.002,1.415c0.194,0.194,0.45,0.291,0.706,0.291s0.513-0.098,0.708-0.293c2.363-2.366,3.831-5.643,3.829-9.251C27.115,12.389,25.647,9.111,23.28,6.746z").attr({"fill":"#fff"}).hide();
        this.sound.sounds['off'] = this.sound.paper.path("M4.998,12.127v7.896h4.495l6.729,5.526l0.004-18.948l-6.73,5.526H4.998z").attr({"fill":"#fff"});

        $("#music").click(function(){
            if (Backgammon.sound.state === true){
                Backgammon.sound.state = false;
                Backgammon.sound.sounds['on'].hide();
                Backgammon.sound.sounds['off'].show();
            }else {
                Backgammon.sound.state = true;
                Backgammon.sound.sounds['off'].hide();
                Backgammon.sound.sounds['on'].show();
            }
            //sound.siteSounds(this);
        });

        if (this.sound.state === true){
            this.sound.sounds['on'].show();
        }else {
            this.sound.sounds['off'].show();
        }
    },
    // Убыраем всплывающие окна
    hideMessageHandlerBlock : function(){
        jQuery(".game-popup").fadeOut();
    }
}
