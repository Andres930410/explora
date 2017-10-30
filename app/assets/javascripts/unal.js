/*Buscador*/
//= require jquery

(function() {
    var cx = '008572255874373046644:chip1p1uf-4';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
    '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

function checkBck(){
    if($('.gsc-search-button input').attr('src')){
        $('.gsc-search-button input').attr('src','http://unal.edu.co/fileadmin/templates/plugins/ke_search/search.png')
        $('.gsc-input input').attr('placeholder','Buscar en la Universidad')
    }else{
        window.setTimeout(function(){checkBck()},100);
    }
}

checkBck();

$(document).ready(function () {
    $('body').addClass('row-offcanvas');
    $('#service-menu').css({ 'height' : $(window).height() , 'right' : parseInt($('#service-manu').width())* - 1 });
    $('.indicator','#service-menu').click(function() {
        $('#service-menu').toggleClass('active');
    });

    $('header .headerUN #menu-FCH .items-menu .has_submenu').click(function(){
        $(this).siblings('.has_submenu').removeClass('selected');
        $(this).siblings('.has_submenu').children('.item_submenu, #services').removeClass('active');
        $(this).siblings('.has_submenu').children('.item-name').children('i').removeClass('fa-caret-up').addClass('fa-caret-down');

        $(this).toggleClass('selected');
        $(this).children('.item-name').children('i').toggleClass('fa-caret-down fa-caret-up');
        $(this).children('.item_submenu, #services').toggleClass('active');

    });

    $('header .headerUN .navbar-header button').click(function(){
        //$('html, body').toggleClass('menu-mobile-active');
        $(this).toggleClass('is-active');
        $('header .headerUN #menu-FCH .items-menu .has_submenu').removeClass('selected');
        $('header .headerUN #menu-FCH .items-menu .has_submenu .item_submenu').removeClass('active');
        $('header .headerUN #menu-FCH .items-menu .has_submenu #services').removeClass('active');
        $('header .headerUN #menu-FCH .items-menu .has_submenu .item-name i').removeClass('fa-caret-up').addClass('fa-caret-down');
    });

});
