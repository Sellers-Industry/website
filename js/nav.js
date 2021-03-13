$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if ( scroll >= 100 ) {
        $( ".floating-nav" ).addClass( "scrolled" );
    } else {
        $( ".floating-nav" ).removeClass( "scrolled" );
    }
});


// add sticky header only on mobile