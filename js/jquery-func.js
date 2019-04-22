function mycarousel_initCallback(carousel) {
	    $('.slider-navigation a').bind('click', function() {
	        carousel.scroll($.jcarousel.intval($(this).text()));
	        return false;
	    });	        
};
	
function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
	$('.slider-navigation a').removeClass('active');
	$('.slider-navigation a').eq(idx-1).addClass('active');
};


$(document).ready (function(){
	
	$(".slider-carousel").jcarousel({
		scroll:1,
		auto:4,
		wrap:"both",
		visible:1,
        itemFirstInCallback: mycarousel_itemFirstInCallback,
        initCallback: mycarousel_initCallback,
        start: 1
		
	});
	
});

function slider_initCallback (carousel) {
	$(".prev").click(function () {
		carousel.prev();
		return false;
	});
	
	$(".next").click(function () {
		carousel.next();
		return false;
	});
}

$(function(){
    $('.blink').
        focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        }).
        blur(function(){
            if(this.value=='') {
                this.value = this.title;
            }
        });
	});
