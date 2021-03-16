/*
 *   Copyright (C) 2021 Sellers Industry - All Rights Reserved
 *   Unauthorized copying of this file, via any medium is strictly
 *   prohibited. Proprietary and confidential.
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Tue Mar 16 2021
 *   file: nav.js
 *   project: Sellers Industry Website
 *   purpose: Navigation Scroll
 *
 */


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if ( scroll >= 100 ) {
        $( ".floating-nav" ).addClass( "scrolled" );
    } else {
        $( ".floating-nav" ).removeClass( "scrolled" );
    }
});


// add sticky header only on mobile