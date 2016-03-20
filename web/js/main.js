/**
 * Created by forint on 3/17/16.
 */

reverse("hello world");
reverse("hello world");
reverse("hello world");

reverse("hello world");
reverse("hello world");
reverse("hello world");

reverse("hello world");
reverse("hello world");
reverse("hello world");

reverse("hello world");
reverse("hello world");
reverse("hello world");

function reverse(str) {
    // Your code here
    console.log(arguments.callee.called++);
    this.count++;

    /*if (str.length > 0){
        var last = str.substr(-1);
        var str = str.slice(0, -1);
        var newStr = last+str;
        reverse.prototype.count++;
        console.log(newStr);
        console.log(str.length+' : '+reverse.prototype.count);
        //reverse(newStr);
    }else{
        return str;
    }*/
}
reverse.called = 0;
$(".query").click(function (event) {
    event.preventDefault();

    $(this).parent().parent().find('a').removeClass('active');
    $(this).addClass('active');

    var id = $(this).data('id');
    var url = $(this).data('href');
    var get_vars = parseUri(location.href);

    $.ajax({
        url: '/site/items',
        type: 'post',
        data: { id: id , 'result-page' : 1, 'result-per-page' : get_vars.queryKey['result-per-page'] },
        success: function (data) {

            var obj = jQuery.parseJSON(data);

            var html = '<ul>';
            $.each( obj.rating, function( key, value ) {
                html += '<li>'+key.ucFirst()+': '+value+'</li>';
            });
            html += '</ul>';

            $("#w2").html(html);

            var $table = $("#w4").children('table');
            var $tbody = $table.children('tbody');
            html = '';
            $.each( obj.items, function( key, value ) {
                html += '<tr>';
                html += '<td><div class="center"><img src="'+value.img+'" alt="'+value.title+'" /></div></td>';
                html += '<td><a href="https://www.youtube.com/v/'+value.youtube_id+'" title="'+value.title+'">'+value.title+'</a></td>';
                html += '<td>'+value.rating+'</td>';
                html += '</tr>';
            });
            $tbody.html('').append(html);
        }

    });

});

$(document).on('pjax:beforeSend', function(event, xhr, settings) {
    // Do something with the data before its sent

    var paramName = 'itemId';
    var paramValue = $('#w1 a.active').data('id');

    var url = settings.url;

    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
        if (url.indexOf("?") < 0)
            url += "?" + paramName + "=" + paramValue;
        else
            url += "&" + paramName + "=" + paramValue;
    }
    settings.url = url;

});

function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            var hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?',
                hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri (str) {
    var	o   = parseUri.options,
        m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
        uri = {},
        i   = 14;

    while (i--) uri[o.key[i]] = m[i] || "";

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
    });

    return uri;
};

parseUri.options = {
    strictMode: false,
    key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
    q:   {
        name:   "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};
String.prototype.ucFirst = function(){
    var str = this;
    if(str.length) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
};