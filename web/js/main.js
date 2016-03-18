/**
 * Created by forint on 3/17/16.
 */
$(".query").on('click',function(e){

    e.preventDefault();

    $(this).parent().parent().find('a').removeClass('active');
    $(this).addClass('active');
    var id = $(this).data('id');
    var url = $(this).data('href');

    $.ajax({
        url: '/site/items',
        type: 'post',
        data: { id: id },
        success: function (data) {

            var obj = jQuery.parseJSON(data);

            var html = '<ul>';
            $.each( obj.rating, function( key, value ) {
                html += '<li>'+key.ucFirst()+': '+value+'</li>';
            });
            html += '</ul>';

            $("#w2").html(html);

            var $table = $("#w3").children('table');
            var $tbody = $table.children('tbody');
            html = '';
            $.each( obj.items, function( key, value ) {
                html += '<tr>';
                html += '<td><div class="center"><img src="'+value.img+'" alt="'+value.title+'" /></div></td>';
                html += '<td>'+value.title+'</td>';
                html += '<td>'+value.rating+'</td>';
                html += '</tr>';
            });
            $tbody.html('').append(html);
        }

    });

});
String.prototype.ucFirst = function(){
    var str = this;
    if(str.length) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
};