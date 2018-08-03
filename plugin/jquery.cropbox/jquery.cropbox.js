// "use strict";
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    var cropbox = function(options, el){
        var el = el || $(options.imageBox),
            obj =
            {
                state : {},
                ratio : 1,
				scale : 1,
                options : options,
                imageBox : el,
                thumbBox : el.find(options.thumbBox),
                spinner : el.find(options.spinner),
				zoom : $(options.zoom),
                image : new Image(),
				resize : false,
                getDataURL: function ()
                {
                    var width = this.thumbBox.width(),
                        height = this.thumbBox.height(),
                        canvas = document.createElement("canvas"),
                        dim = el.css('background-position').split(' '),
                        size = el.css('background-size').split(' '),
                        dx = (parseInt(dim[0]) - el.width()/2 + width/2)*obj.scale,
                        dy = (parseInt(dim[1]) - el.height()/2 + height/2)*obj.scale,
                        dw = parseInt(size[0])*obj.scale,
                        dh = parseInt(size[1])*obj.scale,
                        sh = parseInt(this.image.height),
                        sw = parseInt(this.image.width);

                    canvas.width = width*obj.scale;
                    canvas.height = height*obj.scale;
                    var context = canvas.getContext("2d");
                    context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                    var imageData = canvas.toDataURL('image/png');
                    return imageData;
                },
                getBlob: function()
                {
                    var imageData = this.getDataURL();
                    var b64 = imageData.replace('data:image/png;base64,','');
                    var binary = atob(b64);
                    var array = [];
                    for (var i = 0; i < binary.length; i++) {
                        array.push(binary.charCodeAt(i));
                    }
                    return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                },
                zoomIn: function ()
                {
					if(this.ratio != 3){
						this.ratio+=0.1;
						setBackground();
						return true;
					}
                },
                zoomOut: function ()
                {
					if(this.ratio != 1){
						this.ratio-=0.1;
						setBackground();
						return true;
					}
                },
                zoomRange: function (s)
                {
                    this.ratio=1+0.02*s;
                    setBackground();
                },
                removeCropbox: function ()
                {
                    obj.state.dragable = false;
                    el.unbind('mousedown', imgMouseDown);
                    el.unbind('mousemove', imgMouseMove);
                    $(window).unbind('mouseup', imgMouseUp); 
        			el.unbind('mousewheel DOMMouseScroll');
                }
            },
            setPosition = function()
            {
				if(obj.image.height > obj.image.width)
					var h =  200 * obj.ratio,
					    r =  obj.image.width / obj.image.height,
					    w =  r * 200 * obj.ratio;
				else
					var w =  200 * obj.ratio,
					    r =  obj.image.height / obj.image.width,
					    h =  r * 200 * obj.ratio;
				
				var pw = (el.width() - w) / 2,
					ph = (el.height() - h) / 2;
				
				el.css({'background-position': pw + 'px ' + ph + 'px'});
			},
            setBackground = function(){
				if(obj.image.height > obj.image.width)
					var h =  200 * obj.ratio,
					    r =  obj.image.width / obj.image.height,
					    w =  r * 200 * obj.ratio;
				else
					var w =  200 * obj.ratio,
					    r =  obj.image.height / obj.image.width,
					    h =  r * 200 * obj.ratio;
				
				var size = el.css('background-size').split(' '),
					dim = el.css('background-position').split(' '),
					dx = parseFloat(dim[0]),
					dy = parseFloat(dim[1]),
					dw = parseFloat(size[0]),
					dh = parseFloat(size[1]),
					bgX = dx + (dw - w) / 2,
					bgY = dy + (dh - h) / 2;
				/*if(bgX >= 100) bgX = 99;
				else if(bgX + w < 300) bgX = 299 - w;
				if(bgY >= 100) bgY = 99;
				else if(bgY + h < 300) bgY = 299 - h;*/
                el.css({
                    'background-image': 'url(' + obj.image.src + ')',
                    'background-size': w +'px ' + h + 'px',
					'background-position': bgX + 'px ' + bgY + 'px',
                    'background-repeat': 'no-repeat'});
            },
            imgMouseDown = function(e)
            {
                e.stopImmediatePropagation();
                obj.state.dragable = true;
                obj.state.mouseX = e.clientX;
                obj.state.mouseY = e.clientY;
            },
            imgMouseMove = function(e){
                e.stopImmediatePropagation();

                if (obj.state.dragable)
                {
					var size = el.css('background-size').split(' '),
						dim = el.css('background-position').split(' ');
					var x = e.clientX - obj.state.mouseX;
					var y = e.clientY - obj.state.mouseY;
					var bgX = x + parseInt(dim[0]);
					var bgY = y + parseInt(dim[1]);
					obj.state.mouseX = e.clientX;
					obj.state.mouseY = e.clientY;
					/*if(bgX >= 100) bgX = 99;
					else if(bgX + parseInt(size[0]) < 300) bgX = 299 - parseInt(size[0]);
					if(bgY >= 100) bgY = 99;
					else if(bgY + parseInt(size[1]) < 300) bgY = 299 - parseInt(size[1]);*/
					
					el.css('background-position', bgX +'px ' + bgY + 'px');
                }
            },
            imgMouseUp = function(e){
                e.stopImmediatePropagation();
                obj.state.dragable = false;
            },
            zoomImage = function(e){
                e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio+=0.1 : obj.ratio-=0.1;
				if(obj.ratio < 1) obj.ratio=1;
				else if(obj.ratio > 3) obj.ratio=3;
                else setBackground();
				obj.zoom.val((obj.ratio-1)/0.02);
            },
			reSize = function(ms){
				if(obj.image.width > obj.image.height)
					var dh =  ms,
						r =  obj.image.width / obj.image.height,
						dw =  r * ms;
				else
					var dw =  ms,
						r =  obj.image.height / obj.image.width,
						dh =  r * ms;
						
				var canvas = document.createElement("canvas"),
					sw = parseInt(obj.image.width),
					sh = parseInt(obj.image.height);

				canvas.width = dw;
				canvas.height = dh;
				var context = canvas.getContext("2d");
				context.scale(dw/sw, dh/sh);
				context.drawImage(obj.image, 0, 0);
				var imageData = canvas.toDataURL('image/png');
				obj.resize = true;
				return imageData;
			}
		
		el.css('background-image', 'none');
		obj.zoom.val(0);
        obj.spinner.show();
        obj.image.onload = function() {
            if(obj.resize){ obj.spinner.hide(); return; }
			obj.image.src = reSize(600*obj.scale);
            setBackground();
			setPosition();
			
            el.bind('mousedown', imgMouseDown);
            el.bind('mousemove', imgMouseMove);
            $(window).bind('mouseup', imgMouseUp);
			el.unbind('mousewheel DOMMouseScroll');
            el.bind('mousewheel DOMMouseScroll', zoomImage);
        };
        obj.image.src = options.imgSrc;
        
        el.on('remove', function(){
            $(window).unbind('mouseup', imgMouseUp);
        });
		
        return obj;
    };

    jQuery.fn.cropbox = function(options){
        return new cropbox(options, this);
    };
}));


