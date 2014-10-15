
	/*
	 * jQuery guides plugin
	 */
	
	(function($){
		
		$.fn['guides'] = function(params){
			
			var params = $.extend({
				color: '#CEEFE6'
			}, params);
			
			var $guide = $('<div />');
			
			$guide.addClass('guide');
			
			$guide.css({
				width: '1px',
				'background-color': params.color,
				border: '0px',
				position: 'fixed',
				left: '10px',
				top: '0px',
				height: $(window).height(),
				display: 'block',
				cursor: 'col-resize',
			});
			
			$(document.body).append($guide);
			
			var startDragging = false;
			
			$(document).on('mousedown', '.guide', function(){
				console.log('%cguide mouseDown Event', 'color: #E73; font-weight: bold;');
				
				startDragging = true;
				
				/** @TODO prevent text selection while dragging */
				//$(document).on('dragstart', function(e){e.preventDefault();});
				
			}).on('mouseup', /*'.guide', */function(){
				console.log('%cdocument mouseUp Event', 'color: #E73; font-weight: bold;');
				
				startDragging = false;
			}).on('mousemove', function(e){
				
				if ( !startDragging ) {
					return;
				}
				
				console.log('%cdocument mouseMove Event', 'color: #E73; font-weight: bold;');
				
				console.log('e.pageX: ' + e.pageX);
				
				$guide.css({
					'left': e.pageX
				});
				
			});
			
		};
		
	})(jQuery);
