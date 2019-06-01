    var $define = {};
    $define.u = {};
	$define.u.Mobile = (navigator.userAgent.match(/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod|MQQBrowser/i) && navigator.userAgent.indexOf("Windows NT") == -1) ? true : false;
    $define.api = {};
    console.log(navigator.userAgent);
	var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	function onYouTubeIframeAPIReady(){ $define.api.Youtube = true; }
	
	/* PAGE Change */
	$(window).resize(function() {
    	var wh = $(window).height();
    	$('.page-layout:not(.active):not([data-h])').each(function(){
    		if($(this).css('top')>0)
    			$(this).css('transition', 'all 0s ease').css('top', wh);
    		else
    			$(this).css('transition', 'all 0s ease').css('top', -wh);
    	});
    });
	
	$("body").on("click", "a[data-target]", function(e){
    	e.preventDefault();
		e.stopPropagation();
		return false;
	}).on("tap", "a[data-target]:not(.active)", function(e){
		var a = $('.page-layout.active'),
			t = $($(this).attr("data-target"));
		if(a.css('top')!='0px') return false;
		a.removeClass('active').css('top', 0-parseInt(t.css('top')));
		if(a.attr('data-h')) a.css('top', 0);
		t.css('transition', 'all 1s ease').addClass('active').css('top', '0%');
		$(".page-scroll.active").removeClass('active');
		$(".page-scroll[data-target='"+$(this).attr("data-target")+"']", t).addClass('active');
		PageAnimation(t);
	});
	
	/* PAGE Animation Function */
	
	var $s = {
		st: 'style',
		ts: 'transition'
	}, $v = {
		ae: 'all 1s ease',
		una: 'all 0s ease'
	}
	
    function initAnimation(panel){
	    $('[data-animation-type="width"]', panel).css($s.ts, $v.una).css('width', '0%');
        $('[data-animation-type="height"]', panel).css($s.ts, $v.una).css('height', '0%');
        $('[data-animation-type="half-height"]', panel).css($s.ts, $v.una).css('height', '0%');
        $('[data-animation-type="opacity"]', panel).css($s.ts, $v.una).css('opacity', '0');
        $('[data-animation-css]', panel).css($s.ts, $s.ae).css('opacity', '0');
        setTimeout(function(){
            if(!$define.u.Mobile) $('[id^=collapse]', panel).removeAttr($s.st).animateCss("fadeInDown");
            $('[data-animation-type="width"]', panel).css($s.ts, $v.ae).css('width', '100%');
            $('[data-animation-type="height"]', panel).css($s.ts, $v.ae).css('height', '100%');
        	$('[data-animation-type="half-height"]', panel).css($s.ts, $v.ae).css('height', '50%');
    		$('[data-animation-type="opacity"]', panel).css($s.ts, $v.ae).css('opacity', '1');
            $('[data-animation-css]', panel).each(function(){
         		var self = $(this);
             	if($(this).attr('data-animation-delay'))
		            setTimeout(function(){ self.removeAttr($s.st).animateCss(self.attr('data-animation-css')); }, parseInt(self.attr('data-animation-delay')));
		        else
		        	self.removeAttr($s.st).animateCss(self.attr('data-animation-css'));
            });
        }, 100);
    }
    
	function PageAnimation(panel, delaytime=600){
		$('[id^=collapse]', panel).addClass("in");
        $('[data-animation-type="width"]', panel).css($s.ts, $v.una).css('width', '0%');
        $('[data-animation-type="height"]', panel).css($s.ts, $v.una).css('height', '0%');
        $('[data-animation-type="half-height"]', panel).css($s.ts, $v.una).css('height', '0%');
        $('[data-animation-type="opacity"]', panel).css($s.ts, $v.una).css('opacity', '0');
        $('[data-animation-css]', panel).css($s.ts, $v.una).css('opacity', '0');
        $('[data-animation-one]', panel).css($s.ts, $v.una).css('opacity', '0');
        setTimeout(function(){
            if(!$define.u.Mobile) $('[id^=collapse]', panel).removeAttr($s.st).animateCss("fadeInDown");
            $('[data-animation-type="width"]', panel).css($s.ts, $v.ae).css('width', '100%');
            $('[data-animation-type="height"]', panel).css($s.ts, $v.ae).css('height', '100%');
        	$('[data-animation-type="half-height"]', panel).css($s.ts, $v.ae).css('height', '50%');
    		$('[data-animation-type="opacity"]', panel).css($s.ts, $v.ae).css('opacity', '1');
            $('[data-animation-css]', panel).each(function(){
         		var self = $(this);
             	if($(this).attr('data-animation-delay'))
		            setTimeout(function(){ self.removeAttr($s.st).animateCss(self.attr('data-animation-css')); }, parseInt(self.attr('data-animation-delay')));
		        else
		        	self.removeAttr($s.st).animateCss(self.attr('data-animation-css'));
            });
            setTimeout(function(){ $('[data-animation-one]:nth-child(odd)', panel).removeAttr($s.st).css('opacity', '1'); }, 500);
            setTimeout(function(){ $('[data-animation-one]:nth-child(even)', panel).removeAttr($s.st).css('opacity', '1'); }, 1000);
        }, delaytime);
	}
	
	/* Animate Function */
	$.fn.extend({
		animateCss: function (animationName, callback) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			var animationEvents = 'fadeOutUp fadeInDown'
			this.removeClass('animated ' + animationEvents).addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
				if (callback) {
				  callback();
				}
			});
			return this;
		}
	});
	
	