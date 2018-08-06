    var SectionServiceContentPhoto = [
        "images/background/FSBG007.jpg", "images/background/FSBG008.jpg" 
    ];
    
    var SectionServiceContentPart = {
        'WeddingSection': [(
            <div className="section-block col-xs-12 col-sm-4">
                <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《服務方案》</b></h4>
                <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                    <i>期許能為您記錄下有溫度的影像、凍結觸動人心的時刻。</i><br/>
                    - 免費拍攝 <b>#全家福</b> 延續家族世代傳承精神<br/>
                    - 為完整記錄，適當範圍內不加收額外費用
                </p>
            </div>
        ),(
            <div className="section-block col-xs-12 col-sm-4">
                <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《服務成品》</b></h4>
                <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                    <b>好禮三選一（隨身碟、相片書、無框畫）</b><br/>
                    <b>風格化精選輯、全程照片、雲端相冊</b><br/>
                    全照片逐張校正白平衡並風格化調色<br/>
                    - 實體相冊、相框，以上皆屬於加購選項
                </p>
            </div>
        )],
        'PreweddingSection': [(
            <div className="section-block col-xs-12 col-sm-4">
                <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《服務加購》</b></h4>
                <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                    <b>18吋 精裝婚紗相本</b>： <small>$.</small> 2,500<br/>
                    <b>12吋 精裝婚紗相本</b>： <small>$.</small> 1,500<br/>
                    <b>30cm 蝴蝶相片書</b>： <small>$.</small> 1000<br/>
                    <b>24吋 無框畫</b>： <small>$.</small> 700<br/>
                    <b>24吋 相框</b>： <small>$.</small> 500<br/>
                    <b>喜帖 [100張]</b>： <small>$.</small> 500<br/>
                    <b>謝卡 [200張]</b>： <small>$.</small> 300
                </p>
            </div>
        )]
    }
    
    
    
    var SectionServiceContent = [
        /* wedding */
        [(
            <div className="row">
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚禮紀實</h1>
                    <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
                </div>
                <div className="section-refs" data-animation-css="fadeInRight" data-animation-delay="500" data-ref="the_refs">
                    <ul>
                        <li className="active">單儀式</li>
                        <li>儀式宴客</li>
                        <li>全日方案</li>
                    </ul>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>單儀式</h3>
                    <h4><small> NT$. </small>9,600<small>（單人平面）</small></h4>
                    <h4><small> NT$. </small>12,800<small>（雙人平面）</small></h4>
                </div>
                {SectionServiceContentPart.WeddingSection}
            </div>
        ),(
            <div className="row">
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚禮紀實</h1>
                    <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
                </div>
                <div className="section-refs" data-animation-css="fadeInRight" data-animation-delay="500" data-ref="the_refs">
                    <ul>
                        <li>單儀式</li>
                        <li className="active">儀式宴客</li>
                        <li>全日方案</li>
                    </ul>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>儀式宴客</h3>
                    <h4><small> NT$. </small>13,600+<small>（單人平面）</small></h4>
                    <h4><small> NT$. </small>16,800+<small>（雙人平面）</small></h4>
                </div>
                {SectionServiceContentPart.WeddingSection}
            </div>
        ),(
            <div className="row">
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚禮紀實</h1>
                    <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
                </div>
                <div className="section-refs" data-animation-css="fadeInRight" data-animation-delay="500" data-ref="the_refs">
                    <ul>
                        <li>單儀式</li>
                        <li>儀式宴客</li>
                        <li className="active">全日方案</li>
                    </ul>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>全日方案</h3>
                    <h4><small> NT$. </small>15,600+<small>（單人平面）</small></h4>
                    <h4><small> NT$. </small>18,800+<small>（雙人平面）</small></h4>
                </div>
                {SectionServiceContentPart.WeddingSection}
            </div>
        )],
        /* pre-wedding */
        [(
            <div className="row">
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚紗寫真</h1>
                    <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
                </div>
                <div className="section-refs" data-animation-css="fadeInRight" data-animation-delay="500" data-ref="the_refs">
                    <ul>
                        <li className="active">自助方案</li>
                        <li>小資方案</li>
                        <li>經典方案</li>
                    </ul>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>自助方案</h3>
                    <h4><small> NT$. </small>13,600<small>（不含造型師、婚紗禮服）</small></h4>
                    <h4><small> NT$. </small>19,600<small>（#專屬造型師／不含婚紗禮服）</small></h4>
                </div>
                <div className="section-block col-xs-12 col-sm-4">
                    <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《包套內容》</b></h4>
                    <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                        <b>拍攝：共三套（服裝自備、不限禮服或時裝）</b><br/>
                        <b>妝髮：共三組（由團隊合作造型師為您服務）</b><br/>
                        - 汽車租賃、場地租借、入場門票、婚紗禮服、造型師指定費用，以上皆屬於額外費用<br/>
                        - <b>#高雄市區</b> 以外車馬費及住宿費另實報實銷。
                    </p>
                </div>
                <div className="section-block col-xs-12 col-sm-4">
                    <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《服務成品》</b></h4>
                    <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                        <b>12吋 精裝婚紗相本</b><br/>
                        <b>謝卡[200張]、客製化喜帖[200張]</b><br/>
                        <b>精修精選輯[60張]、雲端相冊、隨身碟乙份</b><br/>
                        全照片逐張校正白平衡並風格化調色<br/>
                        精修以柔膚及合理液化修身仿製調整<br/>
                    </p>
                </div>
                {SectionServiceContentPart.PreweddingSection}
            </div>
        ),(
            <div className="row">
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚紗寫真</h1>
                    <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
                </div>
                <div className="section-refs" data-animation-css="fadeInRight" data-animation-delay="500" data-ref="the_refs">
                    <ul>
                        <li>自助方案</li>
                        <li className="active">小資方案</li>
                        <li>經典方案</li>
                    </ul>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>小資方案</h3>
                    <h4><small> NT$. </small>26,800<small>（#經典婚紗禮服／不含造型師）</small></h4>
                    <h4><small> NT$. </small>32,800<small>（#經典婚紗禮服、#專屬造型師）</small></h4>
                </div>
                <div className="section-block col-xs-12 col-sm-4">
                    <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《包套內容》</b></h4>
                    <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                        <b>拍攝：一套<u>白紗</u>與一套<u>晚禮服</u>搭一套<u>西服</u> 及 一套<u>自備服裝</u></b><br/>
                        <b>妝髮：共三組（由團隊合作造型師為您服務）</b><br/>
                        - 汽車租賃、場地租借、入場門票、婚紗禮服加價款、造型師指定費用，以上皆屬於額外費用<br/>
                        - <b>#高雄市區</b> 以外車馬費及住宿費另實報實銷。
                    </p>
                </div>
                <div className="section-block col-xs-12 col-sm-4">
                    <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《服務成品》</b></h4>
                    <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                        <b>12吋 精裝婚紗相本</b><br/>
                        <b>謝卡[200張]、客製化喜帖[200張]</b><br/>
                        <b>精修精選輯[60張]、雲端相冊、隨身碟乙份</b><br/>
                        全照片逐張校正白平衡並風格化調色<br/>
                        精修以柔膚及合理液化修身仿製調整<br/>
                    </p>
                </div>
                {SectionServiceContentPart.PreweddingSection}
            </div>
        ),(
            <div className="row">
                <div className="section-block col-xs-12">
                    <h1 data-animation-css="fadeInDown" data-animation-delay="500">婚紗寫真</h1>
                    <a data-href=""><h6 data-animation-css="fadeInDown" data-animation-delay="500">MR.DING & MRS.QUAN 台北福華 <i className="fa fa-sign-out fa-fw" aria-hidden="true"></i></h6></a>
                </div>
                <div className="section-refs" data-animation-css="fadeInRight" data-animation-delay="500" data-ref="the_refs">
                    <ul>
                        <li>自助方案</li>
                        <li>小資方案</li>
                        <li className="active">經典方案</li>
                    </ul>
                </div>
                <div data-animation-css="fadeIn" data-animation-delay="500" className="section-block col-xs-12">
                    <h3>經典方案</h3>
                    <h4><small> NT$. </small>33,800<small>（#經典婚紗禮服／不含造型師）</small></h4>
                    <h4><small> NT$. </small>39,800<small>（#經典婚紗禮服、#專屬造型師）</small></h4>
                </div>
                <div className="section-block col-xs-12 col-sm-4">
                    <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《包套內容》</b></h4>
                    <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                        <b>拍攝：一套<u>白紗</u>與兩套<u>晚禮服</u>搭一套<u>西服</u> 及 一套<u>自備服裝</u></b><br/>
                        <b>妝髮：共四組（由團隊合作造型師為您服務）</b><br/>
                        - 汽車租賃、場地租借、入場門票、婚紗禮服加價款、造型師指定費用，以上皆屬於額外費用<br/>
                        - <b>#高雄市區</b> 以外車馬費及住宿費另實報實銷。
                    </p>
                </div>
                <div className="section-block col-xs-12 col-sm-4">
                    <h4 data-animation-css="fadeIn" data-animation-delay="500"><b>《服務成品》</b></h4>
                    <p data-animation-css="fadeInUp" data-animation-delay="500" className="section-description">
                        <b>18吋 精裝婚紗相本、24吋無框畫兩個</b><br/>
                        <b>謝卡禮盒[400張]、客製化喜帖[200張]</b><br/>
                        <b>精修精選輯[60張]、雲端相冊、隨身碟乙份</b><br/>
                        全照片逐張校正白平衡並風格化調色<br/>
                        精修以柔膚及合理液化修身仿製調整<br/>
                    </p>
                </div>
                {SectionServiceContentPart.PreweddingSection}
            </div>
        )]
    ]