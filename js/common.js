$(window).on("resize", function () {
    resizeScreen();  
}).resize();
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsive:{
            0:{
                nav: false,
                items:2
            },
            768:{
                nav: true,
                items:3
            },
            1000:{
                nav: true,
                stagePadding: 150,
                items:4
            }
        }
    });
    $('#search_block_top > button').click(function() {
        $(".drop_search").slideToggle();
    });
    $('#buttonToggle').click(function() {
        $(".menu-ft").slideToggle();
    });
    $(".filter_categories i ").click(function() {
        $(".filter_categories li:not(.selected)").slideToggle();
    });

});


function resizeScreen() {
    var win = $(this);
    if (win.width() < 767) {

        
        $(".filter_categories li ").click(function() {
            $(".filter_categories li:not(.selected)").hide();
            $(this).addClass('selected').siblings().removeClass('selected');
        });

        $(".item-content").siblings().slice(0, 2).show();
        if ($(".item-content:hidden").length != 0) {
            $(".loadMore").show();
        }
        $(".box-product-sale .loadMore").on('click', function(e) {
            e.preventDefault();
            $(this).hide();
            $(".item-content:hidden").slice(0, 6).slideDown();
            
        });
        
    } else {
    }
}

