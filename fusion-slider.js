function Slider() {
    this.init = function(container, slide, thumbnail, delay, autoplay, arrows) {
        sliderContainer = container;
        slide = slide;
        thumbnail = thumbnail;
        slideDelay = delay;
        autoplay = autoplay;
        arrows = arrows;
        jQuery(thumbnail + '.1').addClass('active');
        var fullWidth = (jQuery(container).width());
        var fullHeight = (jQuery(container).height());
        jQuery(container).css('width', fullWidth);
        jQuery(slide).css('width', fullWidth);
        var imageWidth = jQuery(slide).width();
        var imageCount = jQuery(slide).length;
        var containerWidth = imageWidth * imageCount;
        var slidePosition = 1;
        var timer;

        jQuery(window).resize(function() {
            var fullWidth = (jQuery(sliderContainer).parent().width());
            jQuery(sliderContainer).css('width', fullWidth);
            jQuery(slide).css('width', fullWidth);
            var imageWidth = jQuery(slide).width();
            var containerWidth = imageWidth * imageCount;
            jQuery(slide).css({
                'width': imageWidth,
                'float': 'left'
            });
            jQuery(container).css('width', containerWidth);
        });

        if (imageCount == 1) {
            jQuery(arrows + ' #left.slide-control').css('display', 'none');
            jQuery(arrows + ' #right.slide-control').css('display', 'none');
        }

        jQuery(slide).css({
            'width': imageWidth,
            'float': 'left'
        });

        jQuery(container).css('width', containerWidth);
        jQuery(arrows + ' #left.slide-control').css('display', 'none');

        jQuery(arrows + ' #left.slide-control').click(function() {
            slidePosition--;
            slideChange(slidePosition, imageCount);
            resetTimer();
        });

        jQuery(arrows + ' #right.slide-control').click(function() {
            slidePosition++;
            slideChange(slidePosition, imageCount);
            resetTimer();
        });

        jQuery(thumbnail).click(function() {
            slidePosition = jQuery(this).attr('class').replace(/\D/g, '');
            slideChange(slidePosition, imageCount);
            resetTimer();
        });

        if (autoplay == true) {
            var timer = setInterval(function() {
                if(!jQuery(container).hasClass("stop-autoplay")){
					autoPlay();
				}
            }, delay);
        }
    
        function autoPlay() {
            if (slidePosition == imageCount) {
                slidePosition = 1;
                slideChange(slidePosition, imageCount);
            } else {
                slidePosition++;
                slideChange(slidePosition, imageCount);
            }
        }
        
        function resetTimer(){
            clearInterval(timer);
            if (autoplay == true) {
                timer = setInterval(function() {
                    if(!jQuery(container).hasClass("stop-autoplay")){
			    		autoPlay();
		    		}
                }, delay);
            }
        }

        function slideChange(slidePosition, imageCount) {
            jQuery(thumbnail + ', ' + slide).removeClass('active');
            jQuery(thumbnail + '.' + slidePosition).addClass('active');
            jQuery(slide + '.' + slidePosition).addClass('active');
            jQuery(container).css('margin-left', "-" + (slidePosition - 1) * 100 + "%");
            if (slidePosition == 1) {
                jQuery(arrows + ' #left.slide-control').css('display', 'none');
                jQuery(arrows + ' #right.slide-control').css('display', 'block');
            } else if (slidePosition == imageCount) {
                jQuery(arrows + ' #right.slide-control').css('display', 'none');
                jQuery(arrows + ' #left.slide-control').css('display', 'block');
            } else {
                jQuery(arrows + ' #right.slide-control').css('display', 'block');
                jQuery(arrows + ' #left.slide-control').css('display', 'block');
            }
        }
    }
}


