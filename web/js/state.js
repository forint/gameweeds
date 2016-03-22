Mode = function() {

    var stats = document.getElementById('stats'),
        match = document.getElementById('match'),
        create = document.getElementById('create'),
        play   = document.getElementById('play'),
        save  = document.getElementById('save'),
        download   = document.getElementById('download'),
        side   = document.getElementById('side'),
        type   = document.getElementById('type'),
        start   = document.getElementById('start'),
        count  = 0;

    var log = function(msg, separate) {
        count = count + (separate ? 1 : 0);
        stats.value = count + ": " + msg + "\n" + (separate ? "\n" : "") + stats.value;
        match.className = fsm.current;
        create.disabled = fsm.cannot('create');
        play.disabled  = fsm.cannot('play');
        save.disabled  = fsm.cannot('save');
        download.disabled = fsm.cannot('download');
        side.disabled = fsm.cannot('side');
        type.disabled = fsm.cannot('type');
        start.disabled = fsm.cannot('start');
    };

    var fsm = StateMachine.create({
        initial: 'clear',
        events: [
            { name: 'create', from: 'clear', to: 'create' },
            { name: 'play', from: ['type','clear'], to: 'play' },
            { name: 'save', from: 'clear', to: 'save' },
            { name: 'download', from: 'clear', to: 'download' },
            { name: 'side', from: 'play', to: 'side' },
            { name: 'type', from: ['create','side'], to: 'type' },
            { name: 'start', from: 'type', to: 'start' },
            { name: 'clear', from: ['play','save','download','opponent','side','type'], to: 'none' }
        ],
        callbacks: {
            onentercreate: function(event, from, to) {
                log("Режим: Игры!");
                Backgammon.game = 2;
                log("Режим: Выбор стороны!");
                var state = {};
                state.name = 'Выберите сторону';
                state.els = {
                    '1':{'alias' : 'white',
                        'name' : 'Белыми',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.side = 1; Mode.type();return false;'
                    },
                    '2':{'alias' : 'black',
                        'name' : 'Черными',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.side = 2; Mode.type();return false;'
                    }
                };
                Backgammon.menuStep(state);
            },
            onenterplay: function(event, from, to) {
                log("Режим: Выбор соперника!");
                Backgammon.game = 1;
                var state = {};
                state.name = 'Выберите соперника';
                state.els = {
                    '1':{'alias' : 'humen',
                        'name' : 'Человек',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.rival = 1; Mode.side();return false;'
                    },
                    '2':{'alias' : 'computer',
                        'name' : 'Компьютер',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.rival = 2; Mode.side();return false;'
                    }
                };
                Backgammon.menuStep(state);
            },
            onentersave: function(event, from, to) {
                log("Режим: Сохранения игры!");
            },
            onenterdownload: function(event, from, to){

                log("Режим: Загрузки игры!");

                socket.emit('getDownloads',function(data){
                    function createFriendNode( name ){
                        return(
                            $( name )
                        );
                    }
                    console.log(data);
                    var par = $(".game-popup"),
                        wrap = $(par).children(".game-wrap"),
                        arr = [],
                        content = '';


                    if (data){

                        var ul =  $("<ul class='list_saves'></ul>");
                        var j = 0;
                        for (var i in data){/*
                         var imagination = '/public/images/';
                         imagination += (parseInt(data[i].rival) == 2 && parseInt(data[i].player) == 2)?'human-mini-white.png':'robot-white.png';*/
                            var image_class= (parseInt(data[i].player) == 2)?'human-mini':'robot-mini';
                            //$("#inSaves").append("<div class='save_row' onmouseover='viewButtonHover(\""+image_class+"\",this);' onmouseout='hideButtonHover(\""+image_class+"\",this);'><div class='save_id'>"+data[i].id+".</div><div class='save_date'>"+data[i].date+"</div><div class='save_button' onclick='Backgammon.download("+data[i].id+",this);'><h2>Загрузить</h2><input type='button' value='' /></div><span class='mini-turn "+image_class+"'></span></div>");
                            var val = "<li class='save_row' onmouseover='viewButtonHover(\""+image_class+"\",this);' onmouseout='hideButtonHover(\""+image_class+"\",this);'><div class='save_id'>"+data[i].id+".</div><div class='save_date'>"+data[i].date+"</div><div class='save_button' onclick='Backgammon.download("+data[i].id+",this);'><h2>Загрузить</h2><input type='button' value='' /></div><span class='mini-turn "+image_class+"'></span></li>";
                            arr.push(val);
                            j++;
                        }

                    }else{
                        arr.push("<p class='no_saves_results'>Нет сохраненных игр</p><div class='game-help'></div>");
                    }
                    $(wrap).append($(arr.join('')),function(){
                        Backgammon.hideMessageHandlerBlock();
                        $(par).css("visibility","visible").animate({"opacity":"1"}, 500);
                    });
                });

                /*$("#saves").css("z-index","10").fadeIn(500,function(){
                 socket.emit('getDownloads',function(data){

                 if (data.length > 0){

                 $("#inSaves").html("<ul class='list_saves'></ul>");
                 //$("#preaload").css("visibility","hidden");

                 for (var i in data){*//*
                 var imagination = '/public/images/';
                 imagination += (parseInt(data[i].rival) == 2 && parseInt(data[i].player) == 2)?'human-mini-white.png':'robot-white.png';*//*
                 var image_class= (parseInt(data[i].player) == 2)?'human-mini':'robot-mini';
                 //$("#inSaves").append("<div class='save_row' onmouseover='viewButtonHover(\""+image_class+"\",this);' onmouseout='hideButtonHover(\""+image_class+"\",this);'><div class='save_id'>"+data[i].id+".</div><div class='save_date'>"+data[i].date+"</div><div class='save_button' onclick='Backgammon.download("+data[i].id+",this);'><h2>Загрузить</h2><input type='button' value='' /></div><span class='mini-turn "+image_class+"'></span></div>");
                 $("ul.list_saves").append("<li class='save_row' onmouseover='viewButtonHover(\""+image_class+"\",this);' onmouseout='hideButtonHover(\""+image_class+"\",this);'><div class='save_id'>"+data[i].id+".</div><div class='save_date'>"+data[i].date+"</div><div class='save_button' onclick='Backgammon.download("+data[i].id+",this);'><h2>Загрузить</h2><input type='button' value='' /></div><span class='mini-turn "+image_class+"'></span></li>");
                 }
                 addScroll();
                 //$("#inSaves").mCustomScrollbar("update");

                 }else{
                 $("#inSaves").append("<div class='no_saves_results'>Нет сохраненных игр</div>");
                 }

                 });
                 });*/
            },
            onentertype: function(event, from, to) {
                log("Режим: Выбор типа игры!");

                var state = {};
                state.name = 'Выберите тип';
                state.els = {
                    '1':{'alias' : 'interest',
                        'name' : 'Интерес',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.type = 1; Mode.start();return false;'
                    },
                    '2':{'alias' : 'money',
                        'name' : 'Деньги',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.type = 2; Mode.start();return false;'
                    }
                };
                Backgammon.menuStep(state);
            },
            onenterside: function(event, from, to){

                log("Режим: Выбор стороны!");
                var state = {};
                state.name = 'Выберите сторону';
                state.els = {
                    '1':{'alias' : 'white',
                        'name' : 'Белыми',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.side = 1; Mode.type();return false;'
                    },
                    '2':{'alias' : 'black',
                        'name' : 'Черными',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.side = 2; Mode.type();return false;'
                    }
                };
                Backgammon.menuStep(state);
            },
            onenterstart: function(event, from, to){
                Backgammon.startGame();
            },
            onchangestate: function(event, from, to) {
                //log("CHANGED STATE: " + from + " to " + to);
            }
        }
    });

    var async = function(to) {
        pending(to, 3);
        setTimeout(function() {
            pending(to, 2);
            setTimeout(function() {
                pending(to, 1);
                setTimeout(function() {
                    fsm.transition(); // trigger deferred state transition
                }, 1000);
            }, 1000);
        }, 1000);
    };

    var pending = function(to, n) { log("PENDING STATE: " + to + " in ..." + n); };

    return fsm;

}();


/*
Mode = function() {

    var output = document.getElementById('output'),
        demo = document.getElementById('match_stat'),
        play = $(Menu.items['1']),
        create = $(Menu.items['2']),
        save = $(Menu.items['3']),
        download = $(Menu.items['4']),
        side = $("#side"),
        type = $("#type"),
        count = 0, machine = this;

    var log = function(msg, separate) {
        count = count + (separate ? 1 : 0);

        var li = document.createElement("LI");
        var text = document.createTextNode(msg + "\n" + (separate ? "\n" : "") +"\n");
        li.className = 'stat_item';
        li.appendChild(text);
        output.appendChild(li);

        demo.className = fsm.current;
        play.disabled = fsm.cannot('play');
        create.disabled = fsm.cannot('create');
        save.disabled = fsm.cannot('save');
        download.disabled = fsm.cannot('download');
        side.disabled = fsm.cannot('side');
        type.disabled = fsm.cannot('type');
    };

    var menuClickHandler = function(state){

        var res = (function(state){
            var blocks = [];
            blocks['0'] = $('<div class="inSaves" id="inSaves" style="margin-top:0px;">' +
            '<a class="close_message_handler" href="#" onclick="Demo.clear();return false;"></a>' +
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
                    $(wrap).append(blocks[j],function(){
                        Backgammon.hideMessageHandlerBlock();
                        $(par).css("visibility","visible").animate({"opacity":"1"}, 500);
                    });
                }else{
                    $(wrap).append(blocks[j]);
                }
            })(j,blocks,par,wrap)
        }
    }
    var fsm = StateMachine.create({
        events: [
            { name: 'create', from: 'none', to: 'create' },
            { name: 'save', from: 'none', to: 'save' },
            { name: 'download', from: 'none', to: 'download' },
            { name: 'opponent', from: 'none', to: 'opponent' },
            { name: 'side', from: 'opponent', to: 'side' },
            { name: 'type', from: 'side', to: 'type' },
            { name: 'play', from: 'type', to: 'play' },
            { name: 'clear', from: ['play','save','download','opponent','side','type'], to: 'none' }
        ],
        error: function(eventName, from, to, args, errorCode, errorMessage) {
            //console.log('event ' + eventName + ' was naughty :- ' + errorMessage+'');
        },
        callbacks: {
            onenterplay: function(event, from, to) {
                var par = $(".game-popup");
                $(par).animate({"opacity":"0"}, 500,function(){
                    $(this).css("visibility","hidden");
                    log("Режим: Игры!");
                    Backgammon.startGame();
                });
                return false;
            },
            onenteropponent: function(event, from, to) {

                log("Режим: Выбор соперника!");
                var state = {};
                state.name = 'Выберите соперника';
                state.els = {
                    '1':{'alias' : 'humen',
                        'name' : 'Человек',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.rival = 1; Demo.side();return false;'
                    },
                    '2':{'alias' : 'computer',
                        'name' : 'Компьютер',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.rival = 2; Demo.side();return false;'
                    }
                };

                menuClickHandler(state);
            },
            onentertype: function(event, from, to) {
                log("Режим: Выбор типа игры!");

                var state = {};
                state.name = 'Выберите тип';
                state.els = {
                    '1':{'alias' : 'interest',
                        'name' : 'Интерес',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.type = 1; Demo.play();return false;'
                    },
                    '2':{'alias' : 'money',
                        'name' : 'Деньги',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.type = 2; Demo.play();return false;'
                    }
                };

                menuClickHandler(state);
            },
            onenterside: function(event, from, to){

                log("Режим: Выбор стороны!");
                var state = {};
                state.name = 'Выберите сторону';
                state.els = {
                    '1':{'alias' : 'white',
                        'name' : 'Белыми',
                        'style' : 'color:#fff;',
                        'class' : 'play_left',
                        'handler' : 'Backgammon.side = 1; Demo.type();return false;'
                    },
                    '2':{'alias' : 'black',
                        'name' : 'Черными',
                        'style' : 'color:#000;',
                        'class' : 'play_right',
                        'handler' : 'Backgammon.side = 2; Demo.type();return false;'
                    }
                };

                menuClickHandler(state);

            },
            onentercreate: function(event, from, to) {
                log("Режим: Создания игры!");
                Backgammon.startGame();
            },
            onentersave: function(event, from, to) {
                log("Режим: Сохранения игры!");
            },
            onenterdownload: function(event, from, to){

                log("Режим: Загрузки игры!");

                socket.emit('getDownloads',function(data){
                    function createFriendNode( name ){
                        return(
                            $( name )
                        );
                    }
                    console.log(data);
                    var par = $(".game-popup"),
                        wrap = $(par).children(".game-wrap"),
                        arr = [],
                        content = '';


                    if (data){

                        var ul =  $("<ul class='list_saves'></ul>");
                        var j = 0;
                        for (var i in data){/!*
                         var imagination = '/public/images/';
                         imagination += (parseInt(data[i].rival) == 2 && parseInt(data[i].player) == 2)?'human-mini-white.png':'robot-white.png';*!/
                            var image_class= (parseInt(data[i].player) == 2)?'human-mini':'robot-mini';
                            //$("#inSaves").append("<div class='save_row' onmouseover='viewButtonHover(\""+image_class+"\",this);' onmouseout='hideButtonHover(\""+image_class+"\",this);'><div class='save_id'>"+data[i].id+".</div><div class='save_date'>"+data[i].date+"</div><div class='save_button' onclick='Backgammon.download("+data[i].id+",this);'><h2>Загрузить</h2><input type='button' value='' /></div><span class='mini-turn "+image_class+"'></span></div>");
                            var val = "<li class='save_row' onmouseover='viewButtonHover(\""+image_class+"\",this);' onmouseout='hideButtonHover(\""+image_class+"\",this);'><div class='save_id'>"+data[i].id+".</div><div class='save_date'>"+data[i].date+"</div><div class='save_button' onclick='Backgammon.download("+data[i].id+",this);'><h2>Загрузить</h2><input type='button' value='' /></div><span class='mini-turn "+image_class+"'></span></li>";
                            arr.push(val);
                            j++;
                        }

                    }else{
                        arr.push("<p class='no_saves_results'>Нет сохраненных игр</p><div class='game-help'></div>");
                    }
                    $(wrap).append($(arr.join('')),function(){
                        Backgammon.hideMessageHandlerBlock();
                        $(par).css("visibility","visible").animate({"opacity":"1"}, 500);
                    });
                });

            },
            onchangestate: function(event, from, to) {
            //log("CHANGED STATE: " + from + " to " + to);
            }
        }
    });
    var async = function(to) {
        pending(to, 3);
        setTimeout(function() {
            pending(to, 2);
            setTimeout(function() {
                pending(to, 1);
                setTimeout(function() {
                    fsm.transition(); // trigger deferred state transition
                }, 1000);
            }, 1000);
        }, 1000);
    };
    var pending = function(to, n) { log("PENDING STATE: " + to + " in ..." + n); };
    return fsm;
}();*/

