/* ==============================================
Liquid Slider - Home Text Slider
=============================================== */

	jQuery('#slider-home').liquidSlider({
		 autoSlide:          true,
	   autoSlideDirection: 'right',
	   autoSlideInterval:  6000,
	   autoSlideControls:  true,
	   forceAutoSlide: true,
	   autoHeight: false,
      dynamicArrows: false,
	   keyboardNavigation: true,
	   pauseOnHover: true, 
   callback: function() {
    var self = this;
    $('.slider-6-panel').each(function() {
      $(this).removeClass('animated ' + self.options.animateIn);
    });
	  }
	});

/*Drop Down */
 $('a','#header .dropdown').each(function(){
  $(this).click(function(){
    $(this).closest('div').find('ul').css('display','block');
    $($(this).closest('div')).mouseleave(function(){$($(this).find('ul')).css('display','none');});
   });           
 });

