        ///////////////////////////////////////////
        /////* Section Left/Right Controller */////
        ///////////////////////////////////////////
        
    class SectionShareController extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
        }
        render() {
            return (
        		<div className={this.props.sc} ref="the_controller">
        			<div className="section-border" data-animation-type="height"></div>
        			<div className="section-buttons sr-button">
            			<a href='https://www.facebook.com/fotosniper.tw' target='_blank' title='Facebook'><i className="fa fa-facebook" aria-hidden="true"></i></a>
            			<a href='https://www.instagram.com/fotosniper.tw' target='_blank' title='Instagram'><i className="fa fa-instagram" aria-hidden="true"></i></a>
            			<a href='https://www.flickr.com/photos/mrwillystudio' target='_blank' title='Flickr'><i className="fa fa-flickr" aria-hidden="true"></i></a>
            			<a href='https://line.me/ti/p/vRVXRRah0X' target='_blank' title='LINE'><i className="fa fa-commenting-o" aria-hidden="true"></i></a>
            			<a href={'https://www.facebook.com/sharer/sharer.php?u='+location.href} target='_blank' title='Share'><i className="fa fa-share-alt" aria-hidden="true"></i></a>
            		</div>
        		</div>
            );
        }
    }
    
    class SectionPortfolioController extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
        }
        render() {
            return (
        		<div className={this.props.sc} ref="the_controller" data-ref="the_controller">
        			<div className="section-controller">
                        <div className="section-border" data-animation-type="height"></div>
                		<div className="section-buttons sr-button">
                			<a data-func="previous-page"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a>
                			<a data-func="previous-item"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
                			<a data-func="next-item"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                			<a data-func="next-page"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
                		</div>
                	</div> 
        		</div>
            );
        }
    }
    
    class SectionPhotosetController extends React.Component {
        constructor(props){
            super(props);
		    this.handleLayoutJustified  = this.handleLayoutJustified.bind(this);
		    this.handleLayoutStory = this.handleLayoutStory.bind(this);
        }
        handleLayoutJustified(e){
            var $btn = $(React.findDOMNode(this.refs.the_layout_justified)).addClass('active').siblings().removeClass('active'),
                $ctl = $(React.findDOMNode(this.refs.the_controller)),
                $this = $ctl.parent(),
                $photos = $this.find('[data-ref="the_photos"]');
            $photos.find('img').css('width', $photos.width()/3-10 + 'px');
            $photos.attr('data-masonry', true).masonry({
                itemSelector: '.photoset-item',
                columnWidth: $photos.width()/3-10,
                gutter: 10
            });
            setTimeout(function(){
                $photos.masonry('layout');
                setTimeout(function(){$($this).trigger('swipe').trigger('resize'); }, 400);
            }, 1100);
        }
        handleLayoutStory(e){
            var $btn = $(React.findDOMNode(this.refs.the_layout_story)),
                $ctl = $(React.findDOMNode(this.refs.the_controller)),
                $this = $ctl.parent(),
                $photos = $this.find('[data-ref="the_photos"]');
            if($photos.attr('data-masonry')){
                $btn.addClass('active').siblings().removeClass('active');
                $photos.find('img').removeAttr('style');
                $photos.removeAttr('data-masonry').masonry('destroy');
                setTimeout(function(){ $($this).trigger('swipe').trigger('resize'); }, 1000);
            }
        }
        componentWillMount(){
        }
        componentDidMount(){
            var $ctl = $(React.findDOMNode(this.refs.the_controller)),
                $btn = $(React.findDOMNode(this.refs.the_layout_story)),
                $panel = $ctl.parentsUntil(".container").length > 0 ? $ctl.parentsUntil(".container").parent() : $ctl.parent();
            
            // UNINITIALIZE //
            $ctl.on("tap", "a[data-target]", function(e){
                $btn.addClass('active').siblings().removeClass('active');
                $panel.trigger('stopPlayer').trigger('uninitPhotoset');
            })
        }
        render() {
            return (
               <div className={this.props.sc} ref="the_controller">
        		    <a className="section-logo" data-target="#layout-home" data-href="index" title="回首頁 HOME">FOTOSNIPER</a>
        		    <a className="section-button sr-button" data-target="#layout-portfolio" href="portfolio" title="回作品相冊 PORTFOLIO"><i className="fa fa-backward" aria-hidden="true"></i></a>
        			<div className="section-border" data-animation-type="half-height"></div>
        			<div className="section-buttons sr-button">
        			    <a className="pointer" onClick={this.handleLayoutJustified} title="平均對齊檢視" ref="the_layout_justified"><i className="fa fa-th" aria-hidden="true"></i></a>
        			    <a className="pointer active" onClick={this.handleLayoutStory} title="大圖檢視" ref="the_layout_story"><i className="fa fa-bars" aria-hidden="true"></i></a>
        			</div>
        			<div className="section-border" data-animation-type="half-height"></div>
        			<div className="section-buttons sr-button">
            			<a href='https://www.facebook.com/fotosniper.tw' target='_blank' title='Facebook'><i className="fa fa-facebook" aria-hidden="true"></i></a>
            			<a href='https://www.instagram.com/fotosniper.tw' target='_blank' title='Instagram'><i className="fa fa-instagram" aria-hidden="true"></i></a>
            			<a href='https://www.flickr.com/photos/mrwillystudio' target='_blank' title='Flickr'><i className="fa fa-flickr" aria-hidden="true"></i></a>
            			<a href='https://line.me/ti/p/vRVXRRah0X' target='_blank' title='LINE'><i className="fa fa-commenting-o" aria-hidden="true"></i></a>
            			<a href={'https://www.facebook.com/sharer/sharer.php?u='+location.href} target='_blank' title='Share'><i className="fa fa-share-alt" aria-hidden="true"></i></a>
            		</div>
        		</div>
            );
        }
    }
    
    class SectionServiceController extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
        }
        render() {
            return (
        		<div className={this.props.sc} ref="the_controller" data-ref="the_controller">
        			<div className="section-controller">
                        <div className="section-border" data-animation-type="height"></div>
                		<div className="section-buttons sr-button">
                			<a data-func="previous-page">
                			    <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                			    <div className="section-namespace" id="previous">PREVIOUS</div>
                			</a>
                			<a><hr/></a>
                			<a data-func="next-page">
                			    <div className="section-namespace" id="next">NEXT</div>
                			    <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                			</a>
                		</div>
                	</div> 
        		</div>
            );
        }
    }
        ///////////////////////////////////////////
        ///////////* Section Component *///////////
        ///////////////////////////////////////////
    class SectionIndexComponent extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
        }
        render() {
            return (
                <ul className="section-nav" id="section-index">
                    <li>
                        <a className="page-scroll" data-target="#layout-about" href="about">ABOUT</a>
                    </li>
        			{/*<li>
        				<a className="page-scroll" data-target="#layout-evaluate" href="evaluate">EVALUATE</a>
        			</li>*/}
                    <li>
                        <a className="page-scroll" data-target="#layout-blog" href="blog">BLOG</a>
                    </li>
                    <li>
                        <a className="page-scroll" data-target="#layout-portfolio" href="portfolio">PORTFOLIO</a>
                    </li>
                    <li>
                        <a className="page-scroll" data-target="#layout-service" href="service">SERVICE</a>
                    </li>
                    <li>
                        <a className="page-scroll" data-target="#layout-vendor" href="vendor">vendor</a>
                    </li>
                    {/*<li>
                        <a className="page-scroll" data-target="#layout-contactus" href="contactus">CONTACT US</a>
                    </li>*/}
                </ul>    
            );
        }
    }
    
    class SectionAboutComponent extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
        }
        render() {
            return (
                <div className="xs-content">
                    <div className="section-about">
                        <div className="section-block">
                            <h1 data-animation-css="fadeInLeftDown" data-animation-delay="500">關於</h1>
                            <h2 data-animation-css="fadeInRightUp" data-animation-delay="500">我們</h2>
                            <p>
                                fotosniper 來自一群享受生活的觀察者，在風起雲湧時，光影編織，記載關於你們。
                                <br/><br/>
                                影像／狙擊手<br/>
                                <b>▪ 蔡政霖</b><br/>
                                <a href="https://www.facebook.com/mr.willy.studio" target="_blank"><i className="fa fa-facebook fa-fw"></i> mr.willy.studio</a>／
                                <a href="https://www.instagram.com/mr.willy.studio" target="_blank"><i className="fa fa-instagram fa-fw"></i> mr.willy.studio</a><br/>
                                <b>攝影 ▪ 張庭瑋</b><br/>
                                <a href="https://www.facebook.com/chang40817" target="_blank"><i className="fa fa-facebook fa-fw"></i> chang40817</a>／
                                <a href="https://www.instagram.com/chang40817" target="_blank"><i className="fa fa-instagram fa-fw"></i> chang40817</a><br/>
                                <b>攝影 ▪ 林淑賢</b><br/>
                                <a href="https://www.facebook.com/shusian.lin" target="_blank"><i className="fa fa-facebook fa-fw"></i> shusian.lin</a>／
                                <a href="https://www.instagram.com/sian_0828" target="_blank"><i className="fa fa-instagram fa-fw"></i> sian_0828</a><br/>
                            </p>
                        </div>
                        <div className="section-block">
                            
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    class SectionBlogComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {data: null};
        }
        componentWillMount(){
        }
        componentDidMount(){
            var self = this,
                $this = $(React.findDOMNode(this.refs.the_container));
                
           fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mr.willy.studio').then(function(response){
                return response.json();
            }).then(function(data) {
                var res = data.items,
                    posts = res.filter(function(item){return item.guid.length > 0});
                $.each(posts, function(k, p){
                    posts[k]['description'] = shortenText(toText(p.description), 0, 117)+" …";
                })
			    self.setState({data: posts});
            });
            function toText(node) {
                var tag = document.createElement('div')
                tag.innerHTML = node
                node = tag.innerText
                return node
             }
            function shortenText(text, point, maxLength) {
                return text.length > maxLength ? text.slice(point, maxLength) : text
            }
        }
        render() {
            return (
                <div className="xs-content">
                    <div className="section-blog" ref="the_blog">
                        {this.state.data ? this.state.data.map(function(d, i){
                            return (
                                <div className="row" data-animation-type="opacity">
                                    <div className="section-story col-xs-12 col-sm-4">
                                        <a data-blog={d.guid} href={d.link} target="_blank">
                                            <img src={d.thumbnail}/>
                                        </a>
                                    </div>
                                    <div className="section-story col-xs-12 col-sm-8">
                                        <div className="section-block">
                                            <a data-blog={d.guid} href={d.link} target="_blank">
                                                <h2>{d.title}</h2>
                                            </a>
                                            <span>{d.description}</span>
                                            <p>▸ {d.pubDate.substring(0,10)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : (
                            <div className="section-loader">
                                <i className="fa fa-circle-o-notch fa-spin fa-fx fa-fw"></i>
                                <span>LOADING...</span>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    }
    
    class SectionEvaluateComponent extends React.Component {
        constructor(props) {
		    super(props);
		    this.handleCountPrice = this.handleCountPrice.bind(this);
		    this.handleCountUp = this.handleCountUp.bind(this);
		    this.state = {
    			data: [0, 0]
    		}
        }
        handleCountPrice(e){
    		var a = $("input[name=ceremony]:checked", '#layout-evaluate').map(function(){
    	    		return $(this).val();
    	    	}).get(),
    			b = $('input[name=banquet]:checked', '#layout-evaluate').val(),
    			c = $('input[name=photo]:checked', '#layout-evaluate').val(),
    			d = $('input[name=video]:checked', '#layout-evaluate').val();
    		var pt = [9600, 12800, 12000, 24000],
    			p = [c>0?(c==1?pt[0]:pt[1]):0, d>0?(d==1?pt[2]:pt[3]):0];
    		if(p[0]>0 && a.length>0){
    			p[0] += 2000+a.length*2000;
    			p[0] -= !b?4000:0;
    			p[0] += b==2?2000:0;
    		}
    		if(p[1]>0 && a.length>0){
    			p[1] += ($.inArray('2',a)>=0?3000:0)+a.length*3000;
    			p[1] -= !b?3000:0;
    			p[1] += b==2?2000:0;
    			p[1] -= a.length>1&&b>0?2000:0;
    		}
    		this.setState({data: p});
    		this.handleCountUp($(React.findDOMNode(this.refs.the_photoprice)), p[0], 0, 300, 0);
    		this.handleCountUp($(React.findDOMNode(this.refs.the_videoprice)), p[1], 0, 300, 0);
    		this.handleCountUp($(React.findDOMNode(this.refs.the_sumprice)), p[0]+p[1], 0, 300, 0);
    	}
        handleCountUp(elem, endVal, startVal, duration, decimal) {
            var startTime = 0;
            var dec = Math.pow(10, decimal);
            var progress,value;
            function startCount(timestamp) {
                startTime = !startTime ? timestamp : startTime;
                progress = timestamp - startTime;
                value = startVal + (endVal - startVal) * (progress / duration);
                value = (value > endVal) ? endVal : value;
                value = Math.floor(value*dec) / dec;
                elem.html(value.toFixed(decimal));
                progress < duration && requestAnimationFrame(startCount)
            }
            requestAnimationFrame(startCount)
        }
        componentDidMount(){
            var self = this;
            $("body").on("tap", "input[type=radio]+label", function(e){
        		var a = $(this).prev().val(),
        			b = $("input[name='"+$(this).prev().attr('name')+"']:checked").val();
        		if(a == b){
        			$(this).prev().prop('checked', false);
        			self.handleCountPrice();
        		}else{
        			$(this).prev().prop('checked', true);
        			self.handleCountPrice();
        		}
        	}).on("change", "input[type=radio]", function(e){
        		if($(this).attr('checked')==null){
        			$(this).prop('checked', false);
        			self.handleCountPrice();
        		}
        	}).on("tap", "input[type=checkbox]+label", function(e){
        		/*if(!$define.u.Mobile){
        			if(!$(this).prev().prop('checked'))
        				$(this).prev().prop('checked', true);
        			else
        				$(this).prev().prop('checked', false);
        		}*/
        	});
        	
        	var content = $(React.findDOMNode(this.refs.the_content)),
        	    controller = $(React.findDOMNode(this.refs.the_controller));
        	controller.on('tap', 'a',function(e){
        	    var lv = parseInt(content.attr('data-panel')),
        	        nv = lv + parseInt($(this).attr('data-delta'));
        	    if(nv <= 0 && nv >= -3){
        	        content.attr('data-panel', nv);
        	        content.css('left', nv*100+'vw');
        	        $('a', controller).removeClass('disabled');
        	    }
        	    if(nv == 0){
        	        $(this).addClass('disabled');
        	    }else if(nv == -3){
        	        $(this).addClass('disabled');
        	    }
        	});
        }
        render() {
            return (
                <div className="xs-content">
                    <ul className="section-evaluate" data-panel="0" ref="the_content">
                        <li>
                            <input type="checkbox" id="a1" name="ceremony" value='1' onInput={this.handleCountPrice} onClick={this.handleCountPrice} hidden/>
                            <label htmlFor="a1">文定儀式</label>
                            <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                            <input type="checkbox" id="a2" name="ceremony" value='2' onInput={this.handleCountPrice} onClick={this.handleCountPrice} hidden/>
                            <label htmlFor="a2">迎娶儀式</label>
                            <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                            <input type="checkbox" id="a3" name="ceremony" value='3' onInput={this.handleCountPrice} onClick={this.handleCountPrice} hidden/>
                            <label htmlFor="a3">證婚儀式</label>
                        </li>
                        <li>
                            <img src="./images/icon/solar.png" alt=""/>
                            <input type="radio" id="b1" name="banquet" value='1' hidden/>
                            <label htmlFor="b1">中午宴客</label>
                            <input type="radio" id="b2" name="banquet" value='2' hidden/>
                            <label htmlFor="b2">傍晚宴客</label>
                        </li>
                        <li>
                            <img src="./images/icon/photo-camera.png" alt=""/>
                            <input type="radio" id="c1" name="photo" value='1' hidden/>
                            <label htmlFor="c1">平面攝影</label>
                            <input type="radio" id="c2" name="photo" value='2' hidden/>
                            <label htmlFor="c2">雙人平面</label>
                        </li>
                        <li>
                            <img src="./images/icon/video-camera.png" alt=""/>
                            <input type="radio" id="d1" name="video" value='1' hidden/>
                            <label htmlFor="d1">動態錄影</label>
                        </li>
                    </ul>
                    <div className="section-price">
                        <div><b>平面攝影</b><h1><span ref="the_photoprice">0</span></h1></div>
                        <div><b>動態錄影</b><h1><span ref="the_videoprice">0</span></h1></div>
                        <div><b>總計費用</b><h1><span ref="the_sumprice">0</span></h1></div>
                    </div>
                    <div className="section-evaluate-controller" ref="the_controller">
                        <div><a data-delta="1" className="disabled"><i className="fa fa-angle-left" aria-hidden="true"></i></a></div>
                        <div><a data-delta="-1"><i className="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </div>
                </div>    
            );
        }
    }
    
    class SectionPortfolioComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {data: null, content: null};
		    this.handlePhotoInfo = this.handlePhotoInfo.bind(this);
        }
        componentWillMount(){
            
        }
        componentDidMount(){
            var self = this,
                $this = $(React.findDOMNode(this.refs.the_protfolio)),
                w = false;
            do{
                $.get('./plugin/phpflickr-master/getPhotosets.php').done(function(data) {
                    try{
                        this.setState({data: data ? JSON.parse(data) : null});
        		        self.handlePhotoInfo();
                    }catch(e){
                        w = true;
                        console.log(e);
                    }
                    setTimeout(function(){$('[data-animation-one]:nth-child(odd)', $this).removeAttr('style').css('opacity', '1');}, 100);
                    setTimeout(function(){$('[data-animation-one]:nth-child(even)', $this).removeAttr('style').css('opacity', '1');}, 600);
                }.bind(this));
            }while(w);
        }
        handlePhotoInfo(){
            if(this.state.data){
                var arr = [];
                $.each(this.state.data, function(k, d){
                    var c = d['description']['_content'].replace(/(\r\n|\n)/gm, '/r/n').split('/r/n'),
                        res = {
                            'ID': d['id'],
                            'URL': d['url'],
                            'TITLE': d['title']['_content'],
                            'CONTENT': []
                        };
                    $.each(c, function(i, v){
                        if(v.split(":").length>1)
                            res[v.split(":")[0]] = v.split(":")[1];
                        else{
                            res['CONTENT'].push(v.length>0 ? <p>{v}</p> : <br/>);
                        }
                    });
                    arr[k] = res;
                });
                this.setState({content: arr});
            }
        }
        render() {
            return (
                <div className="section-portfolio row" ref="the_protfolio">
                    {this.state.content ? this.state.content.map(function(d, i){
                        return (
                            <div className="section-photosets col-xs-12 col-sm-4" data-animation-one="true" data-category={d.CATEGORY} data-date={d.DATE}>
                                <a className="section-wrapper" data-photoset={d.ID}>
                                    <img src={d.URL}/>
                                </a>
                                <div className="section-block">
                                    <a data-photoset={d.ID}><h2>{d.TITLE}</h2></a>
                                    <span>{d.LOCATION}</span>
                                    <span><time>{d.DATE}</time></span>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="section-loader">
                            <i className="fa fa-circle-o-notch fa-spin fa-fx fa-fw"></i>
                            <span>LOADING...</span>
                        </div>
                    )}
                </div>
            );
        }
    }
    
    class SectionPhotosetComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {data: null, content: null};
		    this.handlePhotoInfo = this.handlePhotoInfo.bind(this);
		    this.handlePhotoLoad = this.handlePhotoLoad.bind(this);
        }
        componentDidMount(){
            var self = this,
		        $this = $(React.findDOMNode(this.refs.the_photoset)),
                $panel = $(React.findDOMNode(this.refs.the_container)).parentsUntil(".container").parent();
            
            // TAP A PHOTOSET //
            $("body").on("tap", "a[data-photoset]", function(e){
        		var id = $(this).attr('data-photoset'),
        		    a = $('.page-layout.active'),
			        t = $("#layout-photoset");
			    if(a.css('right')!='0px') return false;
			    a.removeClass('active');
			    
			    // INITIALIZE //
        	 	// $panel.trigger('uninitPhotoset');
        	    
			    // PLAY ANIMATION //
        		t.css('transition', 'all 0s ease').css('right', '-100%').addClass('active');
			    setTimeout(function(){t.css('transition', 'all 1s ease').css('right', '0');}, 0);
			    setTimeout(function(){a.removeAttr('style').css('transition', 'all 0s ease');}, 950);
			    PageAnimation(t);
                
                // HANDLE PHOTOSET DATA //
        		$.get('./plugin/phpflickr-master/getPhoto.php', {pid: id}).done(function(data) {
        		    $('[data-animation-type="opacity"]', $this).css('transition', 'all 0s ease').css('opacity', '0');
                    self.setState({data: data ? JSON.parse(data) : null});
        		    self.handlePhotoInfo();
                    setTimeout(function(){$('[data-animation-type="opacity"]', $this).css('transition', 'all 1s ease').css('opacity', '1');}, 600);
                    self.handlePhotoLoad();
                }.bind(this));
        	});
        	
        	$panel.on('uninitPhotoset', function(){
                setTimeout(function(){
            	    self.setState({data: null, content: null});
    			    if(self.props.xscroll) self.props.xscroll.scrollTop(0);
                    if(self.props.mcscroll) self.props.mcscroll.trigger('setinit');
                }, 1000);
        	});
        }
        handlePhotoInfo(){
            var self = this;
            if(self.state.data){
                var c = self.state.data['info']['description']['_content'].replace(/(\r\n|\n)/gm, '/r/n').split('/r/n'),
                    res = {'CONTENT': []};
                $.each(c, function(i, v){
                    if(v.split(":").length>1)
                        res[v.split(":")[0]] = v.split(":")[1];
                    else{
                        res['CONTENT'].push(v.length>0 ? <p>{v}</p> : <br/>);
                    }
                });
                self.setState({content: res});
            }
        }
        handlePhotoLoad(){
            var self = this,
                $photos = $(React.findDOMNode(this.refs.the_photos)),
                $this = $(React.findDOMNode(this.refs.the_photoset)),
                total = $('img', $this).length;
            $('img', $this).one("load", function(){
                var $img = $(this);
                // RESIZE LAYOUT //
                if($photos.attr('data-masonry')) $photos.masonry('layout');
                if(self.props.xscroll) self.props.xscroll.resetSize();
                if($img.attr('src') == $img.attr('data-src'))
                    $img.removeAttr('data-src').parent().removeClass('loading-lazy');
            });
            $('img.lazy[data-src]', $this).each(function(){
                if($(this)[0].y < $(window).height()*3){
                    $(this).attr('src', $(this).attr('data-src'));
                }
            });
        }
        render() {
            return (
                <div className="xs-content col-xs-12 col-sm-9" ref="the_container">
                    {this.state.data!=null ? (
                        <div className="section-photoset" ref="the_photoset" data-animation-type="opacity">
                            {/* 相冊音樂 MUSIC */}
                            {this.state.content && this.state.content['MUSIC'] && (
                                <MusicComponent videoId={this.state.content['MUSIC'].replace(' ', '')}/>
                            )}
                            <div className="section-block">
                                {/* 相冊標題 TITLE */}
                                {this.state.data && (<h1>{this.state.data['info']['title']['_content']}</h1>)}
                                {/* 相冊類別 CATEGORY */}
                                {this.state.content && this.state.content['CATEGORY'] && (
                                    <h2>
                                       ▸ CATEGORY:<small>{this.state.content['CATEGORY']}</small>
                                    </h2>
                                )}
                                {/* 相冊地區 LOCATION */}
                                {this.state.content && this.state.content['LOCATION'] && (
                                    <h2>
                                        ▸ LOCATION:<small>{this.state.content['LOCATION']}</small>
                                    </h2>
                                )}
                                {/* 相冊攝影 PHOTOGRAPHER */}
                                {this.state.content && this.state.content['PHOTOGRAPHER'] && (
                                    <h2>
                                        ▸ PHOTOGRAPHER:<small>{this.state.content['PHOTOGRAPHER']}</small>
                                    </h2>
                                )}
                                {/* 相冊內文 CONTENT */}
                                {this.state.content && this.state.content['CONTENT'] && (
                                    <div className="section-content">
                                        {this.state.content['CONTENT']}
                                    </div>
                                )}
                            </div>
                            <div data-ref="the_photos" ref="the_photos">
                                {this.state.data && this.state.data['photos'].map(function(d, i){
                                    return (
                                        <a className="photoset-item loading-lazy">
                                            <img className="lazy" src={d.thumb} data-src={d.url}/>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="section-loader white">
                            <i className="fa fa-circle-o-notch fa-spin fa-fx fa-fw"></i>
                            <span>LOADING...</span>
                        </div>
                    )}
                </div>
            );
        }
    }
    
    class SectionServiceComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {data: 0, index: 0};
        }
        componentWillMount(){
        }
        componentDidMount(){
            var self = this,
                $this = $(React.findDOMNode(this.refs.the_container)),
                $panel = $this.parentsUntil(".container").parent(),
                $lobg = $this.parentsUntil(".page-layout").parent().find('.background ul.background-block');
            $panel.on('tap', '[data-func="previous-page"]', function(e){
                var l = SectionServiceContent.length,
                    i = self.state.data-1<=-1 ? l-1 : self.state.data-1;
                self.setState({data: i, index: 0});
                handleContentPhoto(i, 0);
            }).on('tap', '[data-func="previous-item"]', function(e){
                var l = SectionServiceContent[self.state.data].length,
                    i = self.state.index-1<=-1 ? l-1 : self.state.index-1;
                self.setState({index: i});
                handleContentPhoto(self.state.data, i);
            }).on('tap', '[data-func="next-item"]', function(e){
                var l = SectionServiceContent[self.state.data].length,
                    i = self.state.index+1>=l ? 0 : self.state.index+1;
                self.setState({index: i});
                handleContentPhoto(self.state.data, i);
            }).on('tap', '[data-func="next-page"]', function(e){
                var l = SectionServiceContent.length,
                    i = self.state.data+1>=l ? 0 : self.state.data+1;
                self.setState({data: i, index: 0});
                handleContentPhoto(i, 0);
            });
            $(document).keydown(function(e){
                var k = e.which;
                if(k==37){ // left
                    var l = SectionServiceContent[self.state.data].length,
                        i = self.state.index-1<=-1 ? l-1 : self.state.index-1;
                    self.setState({index: i});
                    handleContentPhoto(self.state.data, i);
                }
                if(k==39) {// right
                    var l = SectionServiceContent[self.state.data].length,
                        i = self.state.index+1>=l ? 0 : self.state.index+1;
                    self.setState({index: i});
                    handleContentPhoto(self.state.data, i);
                }
            });
            $this.on('tap', '[data-ref="the_refs"] li', function(e){
                var i = $.inArray($(this)[0], $(this).parent().find('li')); 
                self.setState({index: i});
                handleContentPhoto(self.state.data, i); 
            });
            function handleContentPhoto(i, j){
                var li = $lobg.find('li.active').removeClass('active'),
                    lis = $lobg.find('li');
                $(lis[i*3+j]).addClass('active');
            }
        }
        render() {
            return (
                <div className="xs-content" ref="the_container">
                    <div className="section-service">
                        {SectionServiceContent[this.state.data][this.state.index]}
                    </div>
                </div>
            );
        }
    }
    
    class SectionVendorComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                title: [
                    '錄影,Videographer', '造型,Makeup Artist', '禮服,Dresses', '西服,Suit', '主持,Host', '顧問,', '花藝,', '佈置,', '禮物,'
                ], 
                data: [
                    [ /* 錄影 */
                        {'name': 'BAMBOO 扁布婚禮錄影', 'url': 'https://vimeo.com/bambooview'},
                        {'name': 'DOYZ 豆爸影像工作室', 'url': 'https://www.facebook.com/DoyzOleon/'},
                        {'name': '貳扒影像', 'url': 'https://www.facebook.com/28hsu/'},
                        {'name': '嘉恩 "+N" Studio', 'url': 'https://www.facebook.com/plusN.studio/'}
                    ],[ /* 造型 */
                        {'name': '淳淳 / 周品汝造型經理團隊', 'url': 'https://www.facebook.com/周品汝造型經理團隊-148793722320875/'},
                        /*{'name': '梁瑋真 / Nistyle Makeup Studio', 'url': 'https://www.facebook.com/liangweichen0524/'},*/
                        {'name': '創藝造型 - Sayoko 陳螢貞', 'url': 'https://www.facebook.com/sayokomakeup/'}
                    ],[ /* 禮服 */
                        {'name': 'Louise Wedding', 'url': 'https://www.facebook.com/Louise.Wedding/'},
                        {'name': '蕾絲娃娃法式手工婚紗', 'url': 'https://www.facebook.com/laceanddollykh/'},
                        {'name': '品攝婚紗工坊', 'url': 'https://www.facebook.com/pinphotowedding/'},
                        {'name': '富松梅 手作藝廊', 'url': 'https://www.facebook.com/FSMhand/'}
                    ],[ /* 西服 */
                        {'name': '舒褆西服', 'url': 'https://www.facebook.com/orderSuitMulti/'},
                        {'name': '老爺紳士禮服', 'url': 'https://zh-tw.facebook.com/theoldfashionhousekaohsiung/'}
                    ],[ /* 主持 */
                        {'name': '賽門 SIMON / 樂玩創意', 'url': 'https://www.facebook.com/yoursimon.com.tw/'}
                    ],[ /* 顧問 */
                        {'name': '', 'url': ''}
                    ],[ /* 花藝 */
                        {'name': '', 'url': ''}
                    ],[ /* 佈置 */
                        {'name': '', 'url': ''}
                    ],[ /* 禮物 */
                        {'name': '', 'url': ''}
                    ]
                ]
            };
        }
        componentWillMount(){
        }
        componentDidMount(){
            var self = this,
                $this = $(React.findDOMNode(this.refs.the_container));
        }
        render() {
            var self = this;
            return (
                <div className="xs-content" ref="the_container">
                    <div className="section-vendor">
                        <div className="section-block row">
                            {this.state.data && this.state.data.map(function(d, i){
                                if(d[0].name != '')
                                    return (
                                        <ul className='section-area col-xs-12'>
                                            <h3>{self.state.title[i].substring(0,2)}<p>{self.state.title[i].substr(3)}</p></h3>
                                            {d && d.map(function(v ,k){
                                                return (v.name != '' && v.url != '') ? (<li><a href={v.url} target="_blank">▪ {v.name}</a></li>) : false;
                                            })}
                                        </ul>
                                    );
            			    })}
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    class SectionContactusComponent extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
            var self = this,
                $this = $(React.findDOMNode(this.refs.the_container)),
                $table = $this.find('#email-table');
            $table.contactable({
                subject: 'Fotosniper.tw Offical Messenger',
                header: '<b>Fotosniper.tw Offical Messenger</b><p>請事先於網站上瀏覽過我們的作品。</p>',
                url: './plugin/contactable-master/sendMail.php',
                name: '新人姓名 Name',
                email: '聯絡信箱 Email',
                phone: '聯絡電話 Phone',
                line: 'LINE ID',
                dropdownTitle: '想諮詢的服務內容 Quotation',
                dropdownOptions: ['婚禮紀實 Wedding', '婚紗寫真 Pre-Wedding', '親子寫真 Family', '情侶寫真 Lover', '個人寫真 Portrait', '孕婦寫真 Pregnancy', '其他 Other'],
			    section: '- 婚禮紀實：請告知我們時間、地點、流程、聯絡方式等資訊，讓我們能儘快聯絡到您。',
                message : '訊息 Message',
                submit : '確認寄出',
                recievedMsg : '感謝您的來信，我們會有專人儘快回覆您。',
                notRecievedMsg : '抱歉！目前無法寄送信件，請稍後在嘗試或請洽臉書粉專窗口聯繫我們。',
                footer: ' ',
                hideOnSubmit: true
            });
        }
        render() {
            return (
                <div className="xs-content" ref="the_container">
                    <div className="section-table" id="email-table">
                    </div>
                    <hr/>
                    <div className="section-block">
                        <p><i className="fa fa-facebook-official" aria-hidden="true"></i> <a href="http://www.facebook.com/fotosniper.tw" target="_blank">www.facebook.com/fotosniper.tw</a></p>
                    </div>
                </div>
            );
        }
    }
    
    class LayoutModel extends React.Component {
        constructor(props){
            super(props);
        }
        componentDidMount(){
            if(this.props.background && $.isArray(this.props.background) && this.props.background.length > 1 && this.props.slideshow){
                var self = this,
                    $this = $(React.findDOMNode(this.refs.the_background));
                setTimeout(dynamicTimer, 5000, $this);
                function dynamicTimer(b) {
                    var li = $(b).find('li.active'),
                        lis = $(b).find('li'),
                        len = lis.length,
                        idx = li.index()+1 == len ? 0 : li.index()+1;
                    if(len > 1){
            	        li.removeClass('active');
            	        $(lis[idx]).addClass('active');
            	        setTimeout(dynamicTimer, 5000, b);
                    }
                }
            }
        }
        render() {
            return (
                <div>
                    {this.props.navbar && (<nav id={"navbar-"+this.props.name} className="navbar navbar-default">{this.props.navbar}</nav>)}
                	{this.props.mobile && (<nav id={"mobile-"+this.props.name} className="mobile">{this.props.mobile}</nav>)}
                	{this.props.section && (<section id={"section-"+this.props.name} className="section" data-mobile={this.props.mobile ? true : false} data-navbar={this.props.navbar ? true : false} data-footer={this.props.footer ? true : false}>{this.props.section}</section>)}
                    {this.props.footer && (<footer id={"footer-"+this.props.name} className="footer">{this.props.footer}</footer>)}
                    {this.props.background && $.isArray(this.props.background) ? 
                        (<div id={"background-"+this.props.name} className="background" ref="the_background" data-slideshow={this.props.slideshow ? true : false}>
                    		<ul className="background-block" >
                    			{this.props.background.map(function(d, i){
                                    return (<li style={{'background-image': "url('"+d+"')"}} className={i==0?'active':''}></li>);
                			    })}
                    		</ul>
                        </div>) : (
                        <div id={"background-"+this.props.name} style={{'background': this.props.background}} className="background">
                        </div>
                        )
                    }
                </div>
            );
        }
    } 
    
    class NavbarModel extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
            var $this = $(React.findDOMNode(this.refs.the_container));
            $this.on('tap', '[data-collapse]', function(e){
        		var obj = $this.find($(this).attr("data-target"));
        		if(obj.hasClass("in")){
        			obj.removeClass("in");
        			$(this).addClass("collapsed");
        		}else{
        			obj.addClass("in");
        			$(this).removeClass("collapsed");
        		}
        	});
            
            initAnimation($this);
        }
        render() {
            var timestamp = $.now();
            return (
        	    <div data-timestamp={timestamp} className="container" ref="the_container">
                    <div className="navbar-header" data-animation-css="fadeInLeft">
                        <a className="navbar-brand page-scroll" data-target="#layout-home" data-href="index"><div className="navbar-logo"/></a>
                    </div>
                    {Boolean(this.props.collapse) && (
                        <div className={"collapse navbar-collapse " + ($define.u.Mobile ? "in" : "in")} id={"collapse-"+timestamp}>
                            <ul className="nav navbar-nav">
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-about" href="about">關於我們<p>ABOUT</p></a>
                                </li>
            					<li>
            						<a className="page-scroll sr-icon" data-target="#layout-blog" href="blog">雜誌專欄<p>BLOG</p></a>
            					</li>
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-portfolio" href="portfolio">作品相冊<p>PORTFOLIO</p></a>
                                </li>
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-service" href="service">服務方案<p>SERVICE</p></a>
                                </li>
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-vendor" href="vendor">婚禮廠商<p>VENDOR</p></a>
                                </li>
                            </ul>
                        </div>
                    )}
                    {Boolean(this.props.collapse) && (
            			<div className="navbar-right" data-animation-css="fadeInUp">
            				<button type="button" className="navbar-toggle" data-collapse="true" data-target={"#collapse-"+timestamp}>
            					<span className="icon-bar"></span>
            					<span className="icon-bar"></span>
            					<span className="icon-bar"></span>
            				</button>
                        </div>
                    )}
                </div>
            );
        }
    }
    
    class MobileModel extends React.Component {
        constructor(props){
            super(props);
        }
        componentWillMount(){
        }
        componentDidMount(){
            var $this = $(React.findDOMNode(this.refs.the_container)),
                $panel = $this.parent().siblings().find(".container");
            
            // UNINITIALIZE //
            $this.on("tap", "a[data-target]", function(e){
                $panel.trigger('uninitPhotoset');
            })
            
            initAnimation($this);
        }
        render() {
            var timestamp = $.now();
            return (
        	    <div data-timestamp={timestamp} className="container" ref="the_container">
                    <div className="mobile-container" data-animation-css="fadeIn">
                        <a className="sr-button" data-photoset="" title="回上頁 PREVIOUS PAGE"><i className="fa fa-angle-double-left" aria-hidden="true"></i></a>
                        <a className="sr-button" data-target="#layout-portfolio" data-href="portfolio" title="回作品相冊 PORTFOLIO">PORTFOLIO</a>
                        <a className="sr-button" data-photoset="" title="往下頁 NEXT PAGE"><i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            );
        }
    }
    
    class SectionModel extends React.Component {
        constructor(props){
            super(props);
            this.state = {xscroll: null, mcscroll: null};
        }
        componentWillMount(){
            
        }
        componentDidMount(){
            var $this = $(React.findDOMNode(this.refs.the_container)),
                p = $this.parentsUntil(".page-layout").parent();
            initAnimation($this);
            
            // mCustomScrollbar //
            // http://manos.malihu.gr/jquery-custom-content-scroller //
            if(Boolean(this.props.scroll)){
                $this.find('.xs-container').on('setinit',function(){
                    $(this).find('.mCSB_container[id$="container"]').css('transition', 'all 0s ease').css('top', 0).css('transition', '');
                    
                }).on('reload',function(){
                    
                }).mCustomScrollbar({
                    axis:"y",
                    callbacks:{
                         onUpdate:function(){
                             lazyloaderTrigger();
                        }
                    }
                });
                
                $this.on('swipe',function(){
                    setTimeout(function(){lazyloaderTrigger();}, 500);
                });
                
                var x = $this.find('.mCSB_container[id$="container"]');
                
                this.setState({mcscroll: $this.find('.xs-container')});
                
                function lazyloaderTrigger(){
                    $('img.lazy[data-src]', $this).each(function(){
                        if($(this)[0].y < $(window).height()*2-parseInt(x.css('top'))){
                            $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
                            $(this).parent().removeClass('loading-lazy');
                            $(this).on('load', function(){
                                $(this).addClass('loaded');
                            }).on('error', function(){
                                $(this).addClass('error').parent().hide();
                            })
                        }
                    });
                }
            }
            
            // XSCROLL & JQUERY MOUSEWHEEL //
            if(false){
                // XSCROLL 初始化 //
                var x = new XScroll({
                    renderTo: $this[0],
                    scrollbarX:false,
                    lockX:true,
                    lockY:false,
                    boundryCheck: true,
                    bounce: false
                });
                x.render();
                
                this.setState({xscroll: x});
                
                // 滑鼠滾輪 SCROLL EVENT //
                var dt = 0;
                scrollLoop();
                $this.mousewheel(function(e, d){
                    if(d>0 && x.y >= 0) return;
                    if(d<0 && x.y <= x.height-x.containerHeight) return;
                    if(dt<0 && d>0)
                        dt=d;
                    else if(dt>0 && d<0)
                        dt=d;
                    else
                        dt+=d;
                });
                
                // 輔助疊加減速 //
                function scrollLoop(){
                    var r = Math.abs(dt)>1 ? 250 : 50;
                    if(dt!=0){
                        var h = x.height-x.containerHeight;
                        if(dt>0 && x.y >= 0) dt=0;
                        if(dt<0 && x.y <= h) dt=0;
                        var m = x.height*-1*dt/8;
                        if(dt>0 && x.y - m > 0) m = x.y;
                        if(dt<0 && x.y - m < h) m = x.y-h; 
                        x.scrollTopBy(m, r, "linear");
                        // bezier // http://cubic-bezier.com
                        lazyloaderTrigger();
                        dt=0;
                    }
                    return setTimeout(scrollLoop, r);
                }
                
                // 鍵盤按鈕 SCROLL EVENT
                $(document).keydown(function(e){
                    var k = e.which,
                        b = x.containerHeight-x.height;
                    if(p.hasClass('active')){
                        if((k==33 || k==38) && x.y < 0){ // page up
                            x.scrollTopBy(x.height/2*-1, 250, "ease");
                            lazyloaderTrigger();
                        }
                        if((k==34 || k==40) && x.y > x.height-x.containerHeight){ // page down
                            x.scrollTopBy(x.height/2*1, 250, "ease");
                            lazyloaderTrigger();
                        }
                        if(k==35){ // end
                            x.scrollTop(b, 250, "ease");
                            lazyloaderTrigger();
                        }
                        if(k==36) {// home
                            x.scrollTop(0, 250, "ease");
                            lazyloaderTrigger();
                        }
                    }
                });
                
                // 改變視窗大小
                $(window).resize(function(){
                    x.resetSize();
                });
                $this.on('swipe',function(){
                    lazyloaderTrigger();
                    setTimeout(function(){lazyloaderTrigger();}, 500);
                }).on('resize',function(){
                    x.resetSize();
                    x.boundryCheckY();
                });
                
                function lazyloaderTrigger(){
                    $('img.lazy[data-src]', $this).each(function(){
                        if($(this)[0].y < $(window).height()*2-x.y){
                            $(this).attr('src', $(this).attr('data-src')).parent().removeClass('loading-lazy');
                            $(this).on('load', function(){
                                $(this).removeAttr('data-src');
                                //x.resetSize();
                            })
                        }
                    });
                    setTimeout(function(){ x.boundryCheckY(); }, 250);
                }
            }
        }
        render() {
            return (
                <div className="container" ref="the_container">
                    {this.props.sleft && React.createElement(this.props.sleft, {sc: "section-left"})}
        			<div className="section-middle xs-container" data-animation-css="fadeInUp">
        			    {this.props.content && React.createElement(this.props.content, {xscroll: this.state.xscroll, mcscroll: this.state.mcscroll})}
        			</div>
        			{this.props.sright && React.createElement(this.props.sright, {sc: "section-right"})}
        		</div>
            );
        }
    }
    
    class FooterModel extends React.Component {
        constructor(props){
            super(props);
        }
        componentDidMount(){
            var $this = $(React.findDOMNode(this.refs.the_container));
            initAnimation($this);
        }
        render() {
            return (
                <div className="container" ref="the_container">
        		    <div className="footer-border" data-animation-type="width"></div>
        			<ul className="footer-block">
        				<li>Copyright © fotosniper. All rights reserved.</li>
        				<li >高雄婚攝．婚攝推薦．自助婚紗．婚禮紀錄</li>
        				<li hidden="true">
        				    <i className="fa fa-share fa-fw" aria-hidden="true"></i> <u>2017 KUAS HOMECOMING</u><br/>
        				    <i className="fa fa-youtube-play fa-fw" aria-hidden="true"></i> Anna Leone - My Soul I (Official Video)<br/>
        				</li>
        			</ul>
        		</div>
            );
        }
    }
    
    class MusicComponent extends React.Component {
        constructor(props){
            super(props);
		    this.handlePlayVideo = this.handlePlayVideo.bind(this);
		    this.handleStopVideo = this.handleStopVideo.bind(this);
		    this.handlePauseVideo = this.handlePauseVideo.bind(this);
		    this.state = {
		        player: false,
		        title: false,
		        currebtTime: false
		    }
        }
        componentDidMount(){
            var self = this,
                $this = $(React.findDOMNode(this.refs.the_container)),
                $btn = $(React.findDOMNode(this.refs.the_button), $this),
                $vol = $(React.findDOMNode(this.refs.the_volume), $this),
                $bar = $(React.findDOMNode(this.refs.the_currentBar), $this),
                $panel = $this.parentsUntil(".container").parent();
            var i = setInterval(function(){
                if($define.api.Youtube){
                    self.setState({player:
                        new YT.Player('player',{
                            height: '0',
                            width: '0',
                            videoId: self.props.videoId,
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        })
                    });
                    clearInterval(i);
                }
            }, 100);
            $panel.on('stopPlayer', function(){
                self.handleStopVideo();
                $panel.off("stopPlayer");
            })
            function onPlayerReady(event){
                event.target.setVolume(50); // 預設音量50%
                if(!$define.u.Mobile) self.handlePlayVideo(); // 預設電腦版自動播放
                self.state.player && self.setState({title: self.state.player.getVideoData().title});
                $this.on("tap", '[data-type="button"]', function(e){
                    if(self.state.player && self.state.player.getPlayerState){
                        if(self.state.player.getPlayerState() == 1){
                            self.handlePauseVideo();
                        }else{
                            self.handlePlayVideo();
                        }
                    }
                }).on("tap", '[data-type="volume"]', function(e){
                    if(self.state.player && self.state.player.setVolume){
                        if(self.state.player.getVolume() == 75){
                            self.state.player.setVolume(50);
                            $vol.removeAttr('class').addClass('fa fa-volume-down fa-fw');
                        }else if(self.state.player.getVolume() == 50){
                            self.state.player.setVolume(0);
                            $vol.removeAttr('class').addClass('fa fa-volume-off fa-fw');
                        }else{
                            self.state.player.setVolume(75);
                            $vol.removeAttr('class').addClass('fa fa-volume-up fa-fw');
                        }
                    }
                });
            }
            function onPlayerStateChange(event) {
                if(event.data == YT.PlayerState.PLAYING){ //1
                    $btn.removeAttr('class').addClass('fa fa-pause fa-fw');
                }else if(event.data == YT.PlayerState.ENDED){ //0
                    $btn.removeAttr('class').addClass('fa fa-play fa-fw');
                }else if(event.data == YT.PlayerState.PAUSED){ //2
                    $btn.removeAttr('class').addClass('fa fa-play fa-fw');
                }else if(event.data == YT.PlayerState.BUFFERING){ //3
                    $btn.removeAttr('class').addClass('fa fa-circle-o-notch fa-spin fa-fw');
                }else if(event.data == YT.PlayerState.CUED){ //5
                    $btn.removeAttr('class').addClass('fa fa-circle-o-notch fa-spin fa-fw');
                }else{ // UNSTARTED -1
                    $btn.removeAttr('class').addClass('fa fa-question fa-fw');
                }
            }
            function onPlayerTimer(){
                if(self.state.player && self.state.player.getPlayerState && self.state.player.getPlayerState() == 1){
                    var w =  self.state.player.getCurrentTime()/self.state.player.getDuration()*100+'%';
                    $bar.css('width', w);
                	var s = parseInt(self.state.player.getCurrentTime()),
                    	t = [Math.floor(s/60)%60, s%60],
                    	r = $.map(t, function(v, i) { return ((v < 10) ? '0' : '' ) + v; }).join( ':' );
                	self.setState({currebtTime: r});
                    recorder.push(r);
                    if(recorder.length==4){if(recorder[0]==recorder[3]) clearInterval(timer); else recorder = [];}
                }
            }
            var timer = setInterval(onPlayerTimer, 500), recorder = [];
        }
        handlePlayVideo(){
            this.state.player.playVideo();
        }
        handlePauseVideo(){
            this.state.player.pauseVideo();
        }
        handleStopVideo(){
            this.state.player.stopVideo();
        }
        render() {
            return (
                <div className="section-music" ref="the_container">
        		    <div id="player"></div>
        			<div className="section-player">
        				<div className="section-player-left">
        				    <i className="fa fa-play fa-fw" data-type="button" aria-hidden="true" ref="the_button"></i>
        				    <span>{this.state.player && this.state.currebtTime}</span>
        				</div>
        				<div className="section-player-right">
        				    <a target="_blank" href={"//www.youtube.com/watch?v="+this.props.videoId}>
            				    <i className="fa fa-youtube-play fa-fw" aria-hidden="true"></i>
            				    <span>{this.state.player &&  this.state.title}</span>
        				    </a>
        				    <i className="fa fa-volume-down fa-fw" data-type="volume" aria-hidden="true" ref="the_volume"></i>
        				</div>
        			</div>
    				<div ref="the_currentBar"></div>
        		</div>
            );
        }
    }
    
    $(function(){
        React.render(React.createElement(LayoutModel, {
            name: 'home',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionShareController} content={SectionIndexComponent} />,
            footer: <FooterModel />,
            background: ["images/background/FSBG004.jpg", "images/background/FSBG002.jpg", "images/background/FSBG005.jpg"],
            slideshow: true
        }), $("#layout-home").addClass('active').last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'about',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionShareController} content={SectionAboutComponent} scroll="true" />,
            footer: <FooterModel />,
            background: ["images/background/FSBG003.jpg"]
        }), $("#layout-about").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'blog',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionShareController} content={SectionBlogComponent} scroll="true" />,
            footer: <FooterModel />,
            background: 'white'
        }), $("#layout-blog").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'evaluate',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionShareController} content={SectionEvaluateComponent} />,
            footer: <FooterModel />,
            background: ["images/background/FSBG001.jpg"]
        }), $("#layout-evaluate").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'portfolio',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionShareController} content={SectionPortfolioComponent} scroll="true" />,
            background: 'white'
        }), $("#layout-portfolio").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'photoset',
            section: <SectionModel sleft={SectionPhotosetController} content={SectionPhotosetComponent} scroll="true" />,
            background: '#222',
            mobile: <MobileModel />
        }), $("#layout-photoset").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'service',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionServiceController} content={SectionServiceComponent} scroll="true" />,
            footer: false,
            background: ["images/background/FSBG007.jpg", "images/background/FSBG008.jpg", "images/background/FSBG009.jpg", "images/background/FSBG010.jpg", "images/background/FSBG011.jpg", "images/background/FSBG012.jpg"]
        }), $("#layout-service").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'vendor',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={null} content={SectionVendorComponent} sright={null} scroll="true" />,
            footer: <FooterModel />,
            background: ["images/background/FSBG006.jpg"]
        }), $("#layout-vendor").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'contactus',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={null} content={SectionContactusComponent} sright={null} scroll="true" />,
            footer: <FooterModel />,
            background: ["images/background/FSBG006.jpg"]
        }), $("#layout-contactus").last()[0]);
    });