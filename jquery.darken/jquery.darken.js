	
	/*
	 * jquery.darken.js
	 * 
	 * Description: Darkens certain regions when i.e. ajax loading
	 * Requires jquery.bounds.js
	 *  
	 * Usage:
	 * $("#someID").darken();
	 * $().undarken();
	 */
	
	(function($){
		
		$.fn['darken'] = function(){
			
			if ( 'darkened' == $(this).attr('darkened') ) {
				return;
			}
			
			var rand = Math.round( Math.random() * 1000000 );
			
			var bounds = $(this).bounds();
			
			if ( typeof bounds == "undefined" ) {
				return;
			}
			
			var $shadowDiv = $('<div />');
			
			$shadowDiv.attr('shadow_id', rand);
			
			$shadowDiv.addClass('shadowDiv');
			
			$shadowDiv.css({
				position: 'absolute',
				top: bounds.top,
				left: bounds.left,
				width: bounds.width,
				height: bounds.height,
				'background-color': '#ccc',
				opacity: '0.8',
			});
			
			$(document.body).append($shadowDiv);
			
			$(this).attr('darkened', 'darkened');
			$(this).attr('shadow_id', rand);
			
			return this;
		};
		
		$.fn['undarken'] = function(){
			
			if ( "" == this.selector ) {
				$(".shadowDiv").fadeOut().remove();
				$("[darkened=darkened]").attr('darkened', '');
				return this;
			}
			
			if ( 'darkened' != $(this).attr('darkened') ) {
				return;
			}
			
			rand = $(this).attr('shadow_id');
			
			$(".shadowDiv[shadow_id=" + rand + "]").fadeOut().remove();
			
			$(this).attr('darkened', '');
			
			return this;
		};
		
	})(jQuery);
