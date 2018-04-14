$(document).ready(function() {
    resizeScreen();  
    $('.owl-carousel').owlCarousel({
	    nav: true,
        loop: true,
        margin: 20,
	    responsive:{
	        768:{
	            items:3
	        },
	        1000:{
	        	stagePadding: 150,
	            items:4
	        }
	    }
	});
    $('#search_block_top > button').click(function() {
        $(".drop_search").slideToggle();
    });

});

function resizeScreen() {
    var win = $(this);
    var loadmoreText = '<p class="load">' + '<a href="#" class="loadMore">' + 'load more</a></p>';
    var buttonToggle = '<button id="buttonToggle">' + '<span class="icon-bar">' + '</span>' + '<span class="icon-bar">' + '</span>' + '<span class="icon-bar">' + '</span>' + 'Toggle navigation footer</button>';
    if (win.width() < 767) {

        $(".filter_categories i ").click(function() {
            $(".filter_categories li:not(.selected)").slideToggle();
        });
        $(".filter_categories li ").click(function() {
            $(".filter_categories li:not(.selected)").hide();
            $(this).addClass('selected').siblings().removeClass('selected');
        });




        $("#tab1 .box-product").append(loadmoreText);
        $("#tab1 .moreBox").siblings().slice(0, 2).show();
        if ($("#tab1 .item:hidden").length != 0) {
            $(".loadMore").show();
        }
        $("#tab1 .loadMore").on('click', function(e) {
            e.preventDefault();
            $(this).hide();
            $(".moreBox:hidden").slice(0, 6).slideDown();
            
        });
        

        $("#tab2 .box-product").append(loadmoreText);
        $("#tab2 .moreBox").siblings().slice(0, 2).show();
        if ($("#tab2 .item:hidden").length != 0) {
            $(".loadMore").show();
        }
        $("#tab2 .loadMore").on('click', function(e) {
            e.preventDefault();
            $(this).hide();
            $(".moreBox:hidden").slice(0, 6).slideDown();
            
        });

        

        $(".box-product-sale").append(loadmoreText);
        $(".item-content").siblings().slice(0, 2).show();
        if ($(".item-content:hidden").length != 0) {
            $(".loadMore").show();
        }
        $(".box-product-sale .loadMore").on('click', function(e) {
            e.preventDefault();
            $(this).hide();
            $(".item-content:hidden").slice(0, 6).slideDown();
            
        });

        $( ".box-product" ).removeClass( "owl-carousel");
        $( ".box-product" ).removeClass( "owl-theme");

        $(".footer-bottom").append(buttonToggle);
        $('#buttonToggle').click(function() {
            $(".menu-ft").slideToggle();
        });
    } else {
        $(".load").remove();
    }
}