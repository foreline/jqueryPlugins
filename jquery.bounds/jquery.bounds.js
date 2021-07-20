
/*
 * jquery.bounds.js
 * 
 * Description: Finds bounds (top, bottom, left, right, width, height) of an element.
 * 
 * Usage:
 * let bounds = $("#elementID").bounds();
 * let top = bounds.top;
 * let left = bounds.top;
 * let width = bounds.width;
 * let height = bounds.height;
 */
	
(function($){
	$.fn['bounds'] = function() {
	
        	let t = this, e = t[0];
        	
        	if (!e) {
			return;
		}
		
		let offset = t.offset(), pos = { width:e.offsetWidth, height:e.offsetHeight, left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0 };
		pos.left = offset.left;
		pos.top = offset.top;
		//right and bottom
		pos.right = (pos.left + pos.width);
		pos.bottom = (pos.top + pos.height);
		pos.x = pos.left;
		pos.y = pos.top;
		pos.inner = {width: t.width(), height: t.height()};
		
		$.extend(pos, {toString: function(){ let t = this; return 'x: ' + t.x + ' y: ' + t.y + ' width: ' + t.width + ' height: ' + t.height + ' right: ' + t.right + ' bottom: ' + t.bottom; }});
		
            	return pos;
        };
	
})(jQuery);
	
