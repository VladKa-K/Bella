import $ from 'jquery'; window.jQuery = $; window.$ = $
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

document.addEventListener('DOMContentLoaded', () => {

//Custom JS

//Menu
    $('.menu-icon').on('click', function() {
        $('.nav').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });
    });

    $(window).bind('scroll',function(e){
		parallaxScroll();
	});
	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
		$('.slide').css('top','+'+(($(window).scrollTop()*0.1))+'px');
    }
})
