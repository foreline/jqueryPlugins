
	
	/**
	 * Multiple items Seek Attention Plugin
	 */
	
	(function($) {
		
		$.fn['mseek'] = function(params){
			
			var params = $.extend({
				opacity: 0.8,
				fadeInDelay: 400,
				container: $(document.body),
			}, params);
			
			var style = {
				position: 'absolute',
				'background-color': '#ebebeb',
				'z-index': 1000,
				opacity: params.opacity,
				display: 'none',
			};
			
			$container = $(params.container);
			
			i = 0;
			
			var $baseTarget = $(this);
			
			$(this).each(function(){
				
				$target = $(this);
				
				$topShadow = $('<div />');
				$leftShadow = $('<div />');
				$rightShadow = $('<div />');
				$bottomShadow = $('<div />');
				
				$topShadow.css(style).addClass('mseekShadow');
				$leftShadow.css(style).addClass('mseekShadow');
				$rightShadow.css(style).addClass('mseekShadow');
				$bottomShadow.css(style).addClass('mseekShadow');
				
				/*
				 * Get bounds of target element
				 */
				
				bounds = $target.bounds();
				
				/*
				 * Top Shadow
				 */
				
				if ( 'undefined' == typeof $baseTarget[i - 1] ) {
					topTop = $container.offset().top;
					topHeight = bounds.top - $container.offset().top;
				} else {
					topTop = $($baseTarget[i - 1]).bounds().top + $($baseTarget[i - 1]).bounds().height;
					//topHeight = bounds.top - topTop;
					topHeight = 0;
				}
				
				$topShadow.css({
					top: topTop,
					left: $container.offset().left,
					width: $container.width(),
					height: topHeight,
					//border: '1px solid #f00',
				});
				
				$(document.body).append($topShadow);
				
				/*
				 * Left Shadow
				 */
				
				$leftShadow.css({
					top: $container.offset().top + (bounds.top - $container.offset().top),
					left: $container.offset().left,
					width: bounds.left - $container.offset().left,
					height: bounds.height,
					//border: '1px solid #0f0',
				});
				
				$(document.body).append($leftShadow);
				
				/*
				 * Right Shadow
				 */
				
				$rightShadow.css({
					top: bounds.top,
					left: bounds.left + bounds.width,
					width: $container.width() - (bounds.left + bounds.width) + $container.offset().left,
					height: bounds.height,
					//border: '1px solid #00f',
				});
				
				$(document.body).append($rightShadow);
				
				/*
				 * Bottom Shadow
				 */
				
				if ( 'undefined' == typeof $baseTarget[i + 1] ) {
					bottomHeight = $container.height() - bounds.height + $container.offset().top - bounds.top;
				} else {
					bottomHeight = $($baseTarget[i + 1]).bounds().top - bounds.height - bounds.top;
				}
				
				$bottomShadow.css({
					top: bounds.top + bounds.height,
					left: $container.offset().left,
					width: $container.width(),
					height: bottomHeight,
					//border: '1px solid #ff0',
				});
				
				$(document.body).append($bottomShadow);
				
				/*
				 * FadeIn Animation
				 */
				
				if ( 0 ) {
					$topShadow.fadeIn(params.fadeInDelay).animate({opacity: 0.5}, 300).animate({opacity: params.opacity});
					$leftShadow.fadeIn(params.fadeInDelay).animate({opacity: 0.5}, 300).animate({opacity: params.opacity});
					$rightShadow.fadeIn(params.fadeInDelay).animate({opacity: 0.5}, 300).animate({opacity: params.opacity});
					$bottomShadow.fadeIn(params.fadeInDelay).animate({opacity: 0.5}, 300).animate({opacity: params.opacity});
				} else {
					$topShadow.fadeIn(params.fadeInDelay);
					$leftShadow.fadeIn(params.fadeInDelay);
					$rightShadow.fadeIn(params.fadeInDelay);
					$bottomShadow.fadeIn(params.fadeInDelay);
				}
				
				i++;
			});
			
			/*
			 * Scroll to target div
			 */
			
			$('html, body').animate({
		        scrollTop: $(this).offset().top - 40
		    }, 500);
			
			/*
			 * Shadow remove handler
			 */
			
			$(document.body).on('click', '.mseekShadow', function(){
				$('.mseekShadow').fadeOut(300, function(){ $(this).remove(); });
			});
			
			/*
			$(this).on('mouseenter', function(){
				$('.mseekShadow').fadeOut(300, function(){ $(this).remove(); });
			});
			*/
			
			/*
			 * Chainability
			 */
			
			return $(this);
		};
		
	})(jQuery);
