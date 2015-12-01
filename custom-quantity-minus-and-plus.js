jQuery(document).ready(function(){
    $('.woocommerce .quantity').prepend('<input class="minus" type="button" value="-">');
    $('.woocommerce .quantity').append('<input class="plus" type="button" value="+">');
    $( '.quantity .plus, .quantity .minus').on('click', function() {
        // Get values
        var $qty		= $(this).parent('.quantity').find('.qty'),
            currentVal	= parseFloat( $qty.val() ),
            max			= parseFloat( $qty.attr( 'max' ) ),
            min			= parseFloat( $qty.attr( 'min' ) ),
            step		= $qty.attr( 'step' );
        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;
        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( max == currentVal || currentVal > max ) ) {
                $qty.val( max );
            } else {
                $qty.val( currentVal + parseFloat( step ) );
            }
        } else {
            if ( min && ( min == currentVal || currentVal < min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( currentVal - parseFloat( step ) );
            }
        }
        // Trigger change event
        $qty.trigger( 'change' );
    });
});