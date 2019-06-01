    var SectionServiceControllerName = [
        "WEDDING", "PRE-WEDDING"   
    ];
    
    var SectionServiceContentPart = {
        'WeddingSection': [(
            <div className="section-block col-xs-12 col-sm-6">
                <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                    <h5>include</h5>
                    <i>一本好的婚禮紀錄，能透過畫面回到過去。</i><br/>
                    ▪ 拍攝 <u><b>#全家福</b></u> 致敬傳統攝影術精神，延續感動。<br/>
                    ▪ 秉持責任制，為完整記錄，適當範圍不加收額外費用。<br/>
                    ▪ <u><b>#高雄市區</b></u> 以外車馬費及住宿費另實報實銷。
                </div>
            </div>
        ),(
            <div className="section-block col-xs-12 col-sm-6">
                <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                    <h5>offered</h5>
                    <b>當日全程照片</b><br/>
                    <b>風格化精選輯</b><br/>
                    <b>USB 隨身碟</b><br/>
                    <b>雲端相簿</b>
                </div>
            </div>
        )],
        'PRE-WEDDINGSection': [(
            <div className="section-block col-xs-12 col-sm-6">
                <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                    <h5>《加購》</h5>
                    <b>精裝攝影集</b><small>$.</small> 1,500<br/>
                    <b>30cm 蝴蝶相片書</b><small>$.</small> 1000<br/>
                    <b>24吋 無框畫</b><small>$.</small> 700<br/>
                    <b>24吋 相框</b><small>$.</small> 500
                </div>
            </div>
        )],
        'AlbumLinkComponent': (
            <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
        )
    };
    
    
    
    var SectionServiceContent = [
        /* wedding */
        [(
            <div className="row">
                <div className="section-refs" data-animation-css="fadeIn" data-animation-delay="500" data-ref="the_refs">
                    <a data-func="previous-item"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    <ul>
                        <li className="active">單儀式</li>
                        <li>儀式宴客</li>
                        <li>全日方案</li>
                    </ul>
        			<a data-func="next-item"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚禮紀實 WEDDING</h1>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>單儀式</h3>
                    <h4><small> NT$. </small>9,600<small>（單人平面）</small></h4>
                    <h4><small> NT$. </small>12,800<small>（雙人平面）</small></h4>
                </div>
                <div className="section-bottom">
                    {SectionServiceContentPart.WeddingSection}
                </div>
            </div>
        ),(
            <div className="row">
                <div className="section-refs" data-animation-css="fadeIn" data-animation-delay="500" data-ref="the_refs">
                    <a data-func="previous-item"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    <ul>
                        <li>單儀式</li>
                        <li className="active">儀式宴客</li>
                        <li>全日方案</li>
                    </ul>
        			<a data-func="next-item"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚禮紀實 WEDDING</h1>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>儀式宴客</h3>
                    <h4><small> NT$. </small>13,600+<small>（單人平面）</small></h4>
                    <h4><small> NT$. </small>18,000+<small>（雙人平面）</small></h4>
                </div>
                <div className="section-bottom">
                    {SectionServiceContentPart.WeddingSection}
                </div>
            </div>
        ),(
            <div className="row">
                <div className="section-refs" data-animation-css="fadeIn" data-animation-delay="500" data-ref="the_refs">
                    <a data-func="previous-item"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    <ul>
                        <li>單儀式</li>
                        <li>儀式宴客</li>
                        <li className="active">全日方案</li>
                    </ul>
        			<a data-func="next-item"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚禮紀實 WEDDING</h1>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>全日</h3>
                    <h4><small> NT$. </small>16,800+<small>（單人平面）</small></h4>
                    <h4><small> NT$. </small>20,800+<small>（雙人平面）</small></h4>
                </div>
                <div className="section-bottom">
                    {SectionServiceContentPart.WeddingSection}
                </div>
            </div>
        )],
        /* pre-wedding */
        [(
            <div className="row">
                <div className="section-refs" data-animation-css="fadeIn" data-animation-delay="500" data-ref="the_refs">
                    <a data-func="previous-item"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    <ul>
                        <li className="active">自助方案</li>
                        <li>特色方案</li>
                        <li>經典方案</li>
                    </ul>
        			<a data-func="next-item"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚紗寫真 PRE-WEDDING</h1>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>自助</h3>
                    <h4><small> NT$. </small>13,600<small>　（不含造型師、不含婚紗禮服）</small></h4>
                    <h4><small> NT$. </small>19,600<small>　# 專屬造型師（不含婚紗禮服）</small></h4>
                </div>
                <div className="section-bottom">
                    <div className="section-block col-xs-12 col-sm-6">
                        <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                            <h5>include</h5>
                            <b>▪ 服裝：共兩套／拍攝共 8 小時</b><br/>
                            <p><s>兩套自備服裝</s></p>
                            <b>▪ 妝髮：共兩組<s>（由合作造型師服務）</s></b><br/>
                            - 交通、場地、入場門票、<u>婚紗禮服</u>、造型師指定費，為額外費用<br/>
                        </div>
                    </div>
                    <div className="section-block col-xs-12 col-sm-6">
                        <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                            <h5>offered</h5>
                            <b>當日全程照片</b><br/>
                            <b>一本 精裝攝影集</b><br/>
                            <b>一組 謝卡禮盒</b><br/>
                            <b>36張 精修精選輯</b><br/>
                            <b>雲端相冊</b><br/>
                            <b>隨身碟</b><br/>
                        </div>
                    </div>
                    {/*SectionServiceContentPart.PRE-WEDDINGSection*/}
                </div>
            </div>
        ),(
            <div className="row">
                <div className="section-refs" data-animation-css="fadeIn" data-animation-delay="500" data-ref="the_refs">
                    <a data-func="previous-item"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    <ul>
                        <li>自助方案</li>
                        <li className="active">特色方案</li>
                        <li>經典方案</li>
                    </ul>
        			<a data-func="next-item"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚紗寫真 PRE-WEDDING</h1>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>復刻時光攝影集</h3>
                    <h4><small> NT$. </small>25,000<small>　# 單套禮服（不含造型師）</small></h4>
                    <h4><small> NT$. </small>32,800<small>　# 單套禮服、# 專屬造型師</small></h4>
                </div>
                <div className="section-bottom">
                    <div className="section-block col-xs-12 col-sm-6">
                        <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                            <h5>include</h5>
                            <b>▪ 服裝：共三套／拍攝共 8 小時</b><br/>
                            <p><s>
                                一套<u>白紗</u>搭<u>西服</u><br/>
                                一套<u>特色服裝</u>（古著或時裝）<br/>
                                一套<u>自備服裝</u>
                            </s></p>
                            <b>▪ 妝髮：共三組<s>（由合作造型師服務）</s></b><br/>
                            - 交通、場地、入場門票、婚紗禮服加價款、造型師指定費，為額外費用<br/>
                        </div>
                    </div>
                    <div className="section-block col-xs-12 col-sm-6">
                        <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                            <h5>offered</h5>
                            <b>當日全程照片</b><br/>
                            <b>一本 精裝攝影集</b><br/>
                            <b>一組 謝卡禮盒</b><br/>
                            <b>36張 精修精選輯</b><br/>
                            <b>雲端相冊</b><br/>
                            <b>隨身碟</b>
                        </div>
                    </div>
                    {/*SectionServiceContentPart.PRE-WEDDINGSection*/}
                </div>
            </div>
        ),(
            <div className="row">
                <div className="section-refs" data-animation-css="fadeIn" data-animation-delay="500" data-ref="the_refs">
                    <a data-func="previous-item"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                    <ul>
                        <li>自助方案</li>
                        <li>特色方案</li>
                        <li className="active">經典方案</li>
                    </ul>
        			<a data-func="next-item"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚紗寫真 PRE-WEDDING</h1>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>經典</h3>
                    <h4><small> NT$. </small>28,000<small>　# 2+1 經典禮服（不含造型師）</small></h4>
                    <h4><small> NT$. </small>35,800<small>　# 2+1 經典禮服、# 專屬造型師</small></h4>
                </div>
                <div className="section-bottom">
                    <div className="section-block col-xs-12 col-sm-6">
                        <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                            <h5>include</h5>
                            <b>▪ 服裝：共三套／拍攝共 8 小時</b><br/>
                            <p><s>
                                一套<u>白紗</u>與<u>晚禮服</u>（蕾絲娃娃）<br/>
                                一套<u>西服</u>（老爺紳士禮服）<br/>
                                一套<u>自備服裝</u>
                            </s></p>
                            <b>▪ 妝髮：共三組<s>（由合作造型師服務）</s></b><br/>
                            - 交通、場地、入場門票、婚紗禮服加價款、造型師指定費，為額外費用<br/>
                        </div>
                    </div>
                    <div className="section-block col-xs-12 col-sm-6">
                        <div data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                            <h5>offered</h5>
                            <b>當日全程照片</b><br/>
                            <b>一本 精裝攝影集</b><br/>
                            <b>一幅 24吋 無框畫</b><br/>
                            <b>一組 謝卡禮盒</b><br/>
                            <b>36張 精修精選輯</b><br/>
                            <b>雲端相冊</b><br/>
                            <b>隨身碟</b>
                        </div>
                    </div>
                    {/*SectionServiceContentPart.PRE-WEDDINGSection*/}
                </div>
            </div>
        )]
    ]