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
            			<a href='https://www.flickr.com/' target='_blank' title='Flickr'><i className="fa fa-flickr" aria-hidden="true"></i></a>
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
            }, 1001);
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
        }
        render() {
            return (
               <div className={this.props.sc} ref="the_controller">
        		    <a className="section-logo" data-target="#layout-home" data-href="index" title="回首頁">FOTOSNIPER</a>
        		    <a className="section-button sr-button" data-target="#layout-portfolio" href="portfolio" title="回作品相冊"><i className="fa fa-backward" aria-hidden="true"></i></a>
        			<div className="section-border" data-animation-type="half-height"></div>
        			<div className="section-buttons sr-button">
        			    <a className="pointer" onClick={this.handleLayoutJustified} title="平均對齊檢視" ref="the_layout_justified"><i className="fa fa-th" aria-hidden="true"></i></a>
        			    <a className="pointer active" onClick={this.handleLayoutStory} title="大圖檢視" ref="the_layout_story"><i className="fa fa-bars" aria-hidden="true"></i></a>
        			</div>
        			<div className="section-border" data-animation-type="half-height"></div>
        			<div className="section-buttons sr-button">
            			<a href='https://www.facebook.com/fotosniper.tw' target='_blank' title='Facebook'><i className="fa fa-facebook" aria-hidden="true"></i></a>
            			<a href='https://www.instagram.com/fotosniper.tw' target='_blank' title='Instagram'><i className="fa fa-instagram" aria-hidden="true"></i></a>
            			<a href='https://www.flickr.com/' target='_blank' title='Flickr'><i className="fa fa-flickr" aria-hidden="true"></i></a>
            			<a href={'https://www.facebook.com/sharer/sharer.php?u='+location.href} target='_blank' title='Share'><i className="fa fa-share-alt" aria-hidden="true"></i></a>
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
        			<li>
        				<a className="page-scroll" data-target="#layout-evaluate" href="evaluate">EVALUATE</a>
        			</li>
                    <li>
                        <a className="page-scroll" data-target="#layout-portfolio" href="portfolio">PORTFOLIO</a>
                    </li>
                    <li>
                        <a className="page-scroll" data-target="#layout-service" href="service">SERVICE</a>
                    </li>
                    <li>
                        <a className="page-scroll" data-target="#layout-contactus" href="contactus">CONTACT US</a>
                    </li>
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
                            <h2 data-animation-css="fadeInRightUp" data-animation-delay="500">起程</h2>
                            <p>
                                我們年僅二十好幾，手捧相機多年，心繫所拍如畫，能藉由光影勾勒攝影趣味。<br/>
                                直至今日，不斷問自己如何提升美感與品質，反覆檢視、找尋真理，不斷地轉動腦子和相機，洋洋灑灑扣下快門，期望哪天能滿足這世代對影像美學的需求。
                                <br/><br/>
                                影像／狙擊手<br/>
                                一詞源於狙擊手必須保持「眾人皆醉我獨醒」般的心境，期許我們能臨危不亂保有自我的審美之眼，無聲無息地等待每幅動人的畫面出現，精準拍下最美最感動的一刻。
                            </p>
                        </div>
                        <div className="section-block">
                            
                        </div>
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
            this.state = {data: null};
        }
        componentWillMount(){
            
        }
        componentDidMount(){
            var $this = $(React.findDOMNode(this.refs.the_protfolio));
            $.get('./plugin/phpflickr-master/getPhotosets.php').done(function(data) {
                this.setState({data: data ? JSON.parse(data) : null});
                setTimeout(function(){$('[data-animation-one]:nth-child(odd)', $this).removeAttr('style').css('opacity', '1');}, 100);
                setTimeout(function(){$('[data-animation-one]:nth-child(even)', $this).removeAttr('style').css('opacity', '1');}, 600);
            }.bind(this));
        }
        render() {
            return (
                <div className="section-portfolio row" ref="the_protfolio">
                    {this.state.data ? this.state.data.map(function(d, i){
                        return (
                            <div className="section-photosets col-xs-12 col-sm-4" data-animation-one="true">
                                <img src={d.url}/>
                                <a className="section-wrapper" data-photoset={d.id}></a>
                                <div className="section-block">
                                    <h2>{d['title']['_content'].split(":")[0]}</h2>
                                    { /* Location */ }
                                    <span>{d['description']['_content'].split(/(\r\n|\n)/gm).length>2 && d['description']['_content'].split(/(\r\n|\n)/gm)[2].split(":")[1]}</span>
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
                $this = $(React.findDOMNode(this.refs.the_photoset));
            $("body").on("tap", "a[data-photoset]", function(e){
        		var id = $(this).attr('data-photoset'),
        		    a = $('.page-layout.active'),
			        t = $("#layout-photoset");
			    if(a.css('right')!='0px') return false;
			    self.setState({data: null, content: null});
			    a.removeClass('active');
        		t.css('transition', 'all 0s ease').css('right', '-100%').addClass('active');
			    setTimeout(function(){t.css('transition', 'all 1s ease').css('right', '0');}, 0);
			    setTimeout(function(){a.removeAttr('style').css('transition', 'all 0s ease');}, 950);
			    PageAnimation(t);
			    self.props.xscroll.scrollTop(0);
        		$.get('./plugin/phpflickr-master/getPhoto.php', {pid: id}).done(function(data) {
        		    $('[data-animation-type="opacity"]', $this).css('transition', 'all 0s ease').css('opacity', '0');
                    self.setState({data: data ? JSON.parse(data) : null});
        		    self.handlePhotoInfo();
                    setTimeout(function(){$('[data-animation-type="opacity"]', $this).css('transition', 'all 1s ease').css('opacity', '1');}, 600);
                    self.handlePhotoLoad();
                }.bind(this));
        	});
        }
        handlePhotoInfo(){
            if(this.state.data){
                var c = this.state.data['info']['description']['_content'].replace(/(\r\n|\n)/gm, '/r/n').split('/r/n'),
                    res = {'CONTENT': []};
                $.each(c, function(i, v){
                    if(v.split(":").length>1)
                        res[v.split(":")[0]] = v.split(":")[1];
                    else{
                        res['CONTENT'].push(v.length>0 ? <p>{v}</p> : <br/>);
                    }
                });
                this.setState({content: res});
            }
        }
        handlePhotoLoad(){
            var self = this,
                $photos = $(React.findDOMNode(this.refs.the_photos)),
                $this = $(React.findDOMNode(this.refs.the_photoset));
            $('img', $this).one("load", function(){
                var $img = $(this);
                if($photos.attr('data-masonry')) $photos.masonry('layout');
                self.props.xscroll.resetSize();
                $img.parent().removeClass('loading-lazy');
            }).each(function(){
                if(this.complete) loaded.call(this);
            });
            $('img.lazy[data-src]', $this).each(function(){
                if($(this)[0].y < $(window).height()){
                    $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
                }
            });
        }
        render() {
            return (
                <div className="xs-content col-xs-12 col-sm-9">
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
                                       CATEGORY:<small>{this.state.content['CATEGORY']}</small>
                                    </h2>
                                )}
                                {/* 相冊地區 LOCATION */}
                                {this.state.content && this.state.content['LOCATION'] && (
                                    <h2>
                                        LOCATION:<small>{this.state.content['LOCATION']}</small>
                                    </h2>
                                )}
                                {/* 相冊攝影 PHOTOGRAPHER */}
                                {this.state.content && this.state.content['PHOTOGRAPHER'] && (
                                    <h2>
                                        PHOTOGRAPHER:<small>{this.state.content['PHOTOGRAPHER']}</small>
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
                                            <img className="lazy" data-src={d.url}/>
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
                $ctl = $this.parentsUntil(".container").parent().find('[data-ref="the_controller"]'),
                $lobg = $this.parentsUntil(".page-layout").parent().find('.background ul.background-block');
            $ctl.on('tap', '[data-func="previous-page"]', function(e){
                var l = SectionServiceContent.length,
                    i = self.state.data-1<=-1 ? l-1 : self.state.data-1;
                self.setState({data: i, index: 0});
                $lobg.find('li').css({'background-image': "url('"+SectionServiceContentPhoto[i]+"')"});
            }).on('tap', '[data-func="previous-item"]', function(e){
                var l = SectionServiceContent[self.state.data].length,
                    i = self.state.index-1<=-1 ? l-1 : self.state.index-1;
                self.setState({index: i});
            }).on('tap', '[data-func="next-item"]', function(e){
                var l = SectionServiceContent[self.state.data].length,
                    i = self.state.index+1>=l ? 0 : self.state.index+1;
                self.setState({index: i});
            }).on('tap', '[data-func="next-page"]', function(e){
                var l = SectionServiceContent.length,
                    i = self.state.data+1>=l ? 0 : self.state.data+1;
                self.setState({data: i, index: 0});
                $lobg.find('li').css({'background-image': "url('"+SectionServiceContentPhoto[i]+"')"});
            });
            $this.on('tap', '[data-ref="the_refs"] li', function(e){
               var i = $.inArray($(this)[0], $(this).parent().find('li')); 
               self.setState({index: i});
            });
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
            if(this.props.background && $.isArray(this.props.background) && this.props.background.length > 1){
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
                	{this.props.section && (<section id={"section-"+this.props.name} className="section">{this.props.section}</section>)}
                    {this.props.footer && (<footer id={"footer-"+this.props.name} className="footer">{this.props.footer}</footer>)}
                    {this.props.background && $.isArray(this.props.background) ? 
                        (<div id={"background-"+this.props.name} className="background" ref="the_background">
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
                        <div className="collapse navbar-collapse in" id={"collapse-"+timestamp}>
                            <ul className="nav navbar-nav">
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-about" href="about">關於我們<p>ABOUT</p></a>
                                </li>
            					<li>
            						<a className="page-scroll sr-icon" data-target="#layout-evaluate" href="evaluate">線上估價<p>EVALUATE</p></a>
            					</li>
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-portfolio" href="portfolio">作品相冊<p>PORTFOLIO</p></a>
                                </li>
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-service" href="service">服務方案<p>SERVICE</p></a>
                                </li>
                                <li>
                                    <a className="page-scroll sr-icon" data-target="#layout-contactus" href="contactus">與我聯繫<p>CONTACT US</p></a>
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
    
    class SectionModel extends React.Component {
        constructor(props){
            super(props);
            this.state = {xscroll: null};
        }
        componentWillMount(){
            
        }
        componentDidMount(){
            var $this = $(React.findDOMNode(this.refs.the_container)),
                p = $this.parentsUntil(".page-layout").parent();
            initAnimation($this);
            if(Boolean(this.props.xscroll)){
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
                $this.mousewheel(function(e, d){
                    if(d>0 && x.y >=0) return;
                    x.scrollTopBy(x.height*-1*d, 250, "ease-out");
                    lazyloaderTrigger();
                });
                $(document).keydown(function(e){
                    var k = e.which,
                        b = x.containerHeight-x.height;
                    if(p.hasClass('active')){
                        if(k==33 && x.y <0){ // page up
                            x.scrollTopBy(x.height*-1, 250, "ease-out");
                            lazyloaderTrigger();
                        }
                        if(k==34){ // page down
                            x.scrollTopBy(x.height*1, 250, "ease-out");
                            lazyloaderTrigger();
                        }
                        if(k==35){ // end
                            x.scrollTop(b, 250, "ease-out");
                            lazyloaderTrigger();
                        }
                        if(k==36) {// home
                            x.scrollTop(0, 250, "ease-out");
                            lazyloaderTrigger();
                        }
                    }
                });
                $(window).resize(function(){
                    x.resetSize();
                });
                $($this).on('swipe',function(){
                    lazyloaderTrigger();
                    setTimeout(function(){lazyloaderTrigger();}, 500);
                });
                $($this).on('resize',function(){
                    x.resetSize();
                    x.boundryCheckY();
                });
                
                function lazyloaderTrigger(){
                    $('img.lazy[data-src]', $this).each(function(){
                        if($(this)[0].y < $(window).height()-x.y){
                            $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
                        }
                    });
                    setTimeout(function(){x.boundryCheckY();}, 25);
                    setTimeout(function(){x.boundryCheckY();}, 100);
                    setTimeout(function(){x.boundryCheckY();}, 175);
                    setTimeout(function(){x.boundryCheckY();}, 250);
                }
            }
        }
        render() {
            return (
                <div className="container" ref="the_container">
                    {this.props.sleft && React.createElement(this.props.sleft, {sc: "section-left"})}
        			<div className="section-middle xs-container" data-animation-css="fadeInUp">
        			    {this.props.content && React.createElement(this.props.content, {xscroll: this.state.xscroll})}
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
        				<li>fotosniper photography<br/>Copyright © All rights reserved.</li>
        				<li >影像狙擊手<br/>高雄婚攝．婚攝推薦．自助婚紗．婚禮紀錄</li>
        				<li>
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
                $bar = $(React.findDOMNode(this.refs.the_currentBar), $this);
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
            function onPlayerReady(event){
                event.target.setVolume(100);
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
                        if(self.state.player.getVolume() == 100){
                            self.state.player.setVolume(50);
                            $vol.removeAttr('class').addClass('fa fa-volume-down fa-fw');
                        }else if(self.state.player.getVolume() == 50){
                            self.state.player.setVolume(0);
                            $vol.removeAttr('class').addClass('fa fa-volume-off fa-fw');
                        }else{
                            self.state.player.setVolume(100);
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
        				    <i className="fa fa-volume-up fa-fw" data-type="volume" aria-hidden="true" ref="the_volume"></i>
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
            background: ["images/background/FSBG004.jpg", "images/background/FSBG002.jpg", "images/background/FSBG005.jpg"]
        }), $("#layout-home").addClass('active').last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'about',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionShareController} content={SectionAboutComponent} xscroll="true" />,
            footer: <FooterModel />,
            background: ["images/background/FSBG003.jpg"]
        }), $("#layout-about").last()[0]);
        
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
            section: <SectionModel sleft={SectionShareController} content={SectionPortfolioComponent} sright={SectionPortfolioController} />,
            footer: <FooterModel />,
            background: 'white'
        }), $("#layout-portfolio").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'photoset',
            section: <SectionModel sleft={SectionPhotosetController} content={SectionPhotosetComponent} xscroll="true" />,
            background: '#222'
        }), $("#layout-photoset").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'service',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={SectionPortfolioController} content={SectionServiceComponent} sright={SectionShareController} />,
            footer: <FooterModel />,
            background: ["images/background/FSBG007.jpg"]
        }), $("#layout-service").last()[0]);
        
        React.render(React.createElement(LayoutModel, {
            name: 'contactus',
            navbar: <NavbarModel collapse="true" />,
            section: <SectionModel sleft={null} content={SectionContactusComponent} sright={null} xscroll="true" />,
            footer: <FooterModel />,
            background: ["images/background/FSBG006.jpg"]
        }), $("#layout-contactus").last()[0]);
    });