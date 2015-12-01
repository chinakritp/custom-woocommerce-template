jQuery(document).ready(function(){
    
    $('.woocommerce ul.products li.product').each(function(){
        $(this).find('img').wrap('<div class="img-wrapper"></div>');
        $(this).find('a.button').appendTo($(this).find('.img-wrapper'));
    });
    
    $('.woocommerce ul.products li.product a > .img-wrapper > a').addClass('btn');
});