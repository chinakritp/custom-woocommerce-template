jQuery(document).ready(function(){
    
    $('.woocommerce ul.products li.product').each(function(){
        if($(this).find('a.button').length > 0){
            $(this).find('a.button').appendTo($(this).find('.img-wrapper')).addClass('btn');
        }else if($(this).find('a.btn').length > 0){
            $(this).find('a.btn').appendTo($(this).find('.img-wrapper'));
        }
    });
    
    //$('.woocommerce ul.products li.product a > .img-wrapper > a, .woocommerce-page ul.products li.product a .img-wrapper > a').addClass('btn');
});
