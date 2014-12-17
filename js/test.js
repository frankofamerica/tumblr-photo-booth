<html>
    <head>
        <title>{Title}</title>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="shortcut icon" href="{Favicon}">
        <link rel="alternate" type="application/rss+xml" href="{RSS}">
        {block:Description}
            <meta name="description" content="{MetaDescription}" />
        {/block:Description}
        
        <meta name="image:Logo" content=""/>
        <meta name="if:Infinite Scroll" content="0">
        
        
        <meta property="fb:app_id" content="840297886034271" /><meta property="og:title" content="Bensons Rockin New Years Eve" /><meta property="og:url" content="http://brnye.tumblr.com/" /><meta property="og:description" content="Bensons Rockin New Years Eve" /><meta property="og:type" content="tumblr-feed:tumblelog" /><meta property="og:image" content="http://www.frankiepugliese.com/brnye/img/brnye.jpg" /><!-- END TUMBLR FACEBOOK OPENGRAPH TAGS -->
        
        <meta name="viewport" content="width=100%; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;" />
        <meta name="font:Main" content="Trebuchet MS, Helvetica, sans-serif"/>
        
        <style>
            #tumblr_controls {
                position: fixed !important;
                bottom: .5em;
                right: 0 !important;
                top: auto !important;
            }
    
            body {
                margin:0;
                background:black;
                font-size:10px;
                font-family: {font:Main};;
            }
            .header {
                position:fixed;
                top:0;
                width:100%;
                text-align:center;
                background:rgba(0,0,0,.8);
                z-index:10;
                height:10em;
            }
            
            .header a{
               max-width:15em;
               display:block;
               margin:0 auto;
            }
            
            .header img {
                width:100%;
            }
            
            #posts {
                position:relative;
                padding:0;
                top:9.5em;
            }
            
            .posts-grid {
                position:relative;
                padding:0 .3em;
            }
            .posts-grid article.post.photo {
                position: relative;
                float: left;
                width: 33.33%;
            }
            
            article.post.photo img {
                width:100%;
                display:block;
            }
            
            .article-content {
                padding:.3em;
            }
            
            .time-hide {
                display:none;
            }
            
            article:hover ul.social-menu {
                display:block;
            }
            
            ul.social-menu {
                position:absolute;
                bottom:0;
                padding:.5em 0;
                margin:0;
                width:100%;
                background: rgba(0,0,0,.7);
                /*display:none;*/
            }
            
            ul.social-menu li {
                float:left;
                padding:.5em;
                list-style:none;
            }
            
            {block:PermalinkPage}
            ul.social-menu li:last-child {
                float:right;
                color:white;
            }
            {/block:PermalinkPage}

            ul.social-menu li a {
                color:white;
                font-size:1.8em;
                text-decoration:none;
            }
            
            .single-post {
                width:70%;
                margin:0 auto;
            }
            
            .permalink-pagination {
                position:fixed;
                top:45%;
                width:100%;
                z-index:20;
            }
            
            .pag-btn {
                width: 5em;
                height: 10em;
                background: white;
                position:absolute;
            }
            
            .pag-btn.previous {
                border-radius: 0 9em 9em 0;
                left:0;
            }
            
            .pag-btn.next {
                border-radius: 9em 0 0 9em;
                right:0;
            }
            
            .pag-btn a {
                font-size:5em;
                color:black;
                display:block;
                padding:.5em 0;
            }
            
            .pag-btn.next a {
                padding-left: .3em;
            }
            
            .permalink ul.social-menu {
                position:relative;
                width:70%;
                margin:0 auto;
            }
            
            .permalink .article-content {
                padding:0;
            }
            
            article.post.photo.permalink {
                margin:top:1em;
            }
            
            /* clock */
            
            .clock {
			  position: relative;
			  list-style: none;
			  float:right;
			  padding-right:1em;
			}
            
            .sec, .min, .hour {
                position: absolute;			 
			    top: 0px;
            }
			.sec, .min, .hour, .face {
			  width: 3em;
			  height: 3em;
			}
/*

			.sec {
			  background: url(../img/svg/face.svg);
			  z-index: 3;
			}*/

			
			.min {
			  z-index: 2;
			  -webkit-transform: rotate(45deg);
			     -moz-transform: rotate(45deg);
			     -ms-transform: rotate(45deg);
			     -o-transform: rotate(45deg);
			     transform: rotate(45deg);
			}
   
			.hour {
			  z-index: 1;
			  -webkit-transform: rotate(45deg);
			     -moz-transform: rotate(45deg);
			     -ms-transform: rotate(45deg);
			     -o-transform: rotate(45deg);
			     transform: rotate(45deg);
			}
			
            
            /* Break Points */
            @media screen and (max-width: 900px) {
                .posts-grid  article.post.photo {
                    width: 50%;
                }
                
                 .single-post {
                    width:100%;
                    margin:0;
                }
                
                .permalink-pagination {
                    top:2em;
                }
                
                .permalink ul.social-menu {
                    position:relative;
                    width:100%;
                    margin:0;
                }
                
                .pag-btn {
                    width: 3em;
                    height: 6em;
                }
                
                .pag-btn.previous {
                    border-radius: 0 3em 3em 0;
                }
                
                .pag-btn.next {
                    border-radius: 3em 0 0 3em;
                }
                
                .pag-btn a {
                    font-size:3em;
                }
            }
            
            @media screen and (max-width: 600px) {
                .posts-grid  article.post.photo {
                    width: 100%;
                }
            }
        </style>
    </head>
    <body>  
        <div class="header">
            {block:IfLogoImage}
                <a href="/" class="header-logo"title="{Title}"><img src="{image:Logo}" alt="{Title}"/></a>
            {/block:IfLogoImage}
        </div>    

        {block:Description}
            <p id="description">{Description}</p>
        {/block:Description}

        <section id="posts">
            <div class="{block:IndexPage}posts-grid{/block:IndexPage}">
                <div class="autopagerize_page_element">
                    {block:Posts}
                     <article class="post photo  {block:PermalinkPage}permalink {/block:PermalinkPage}">
                        <div class="article-content">
                        
                        {block:Photo}
                            {block:IndexPage}
                                <a href="{Permalink}" class="post-link">
                                  <img src="{PhotoURL-500}" alt="{PhotoAlt}"/>
                                  </a>
                            {/block:IndexPage}
                            
                            {block:PermalinkPage}
                            <div class="single-post">
                                <img src="{PhotoURL-HighRes}" alt="{PhotoAlt}" />
                            </div>
                            {/block:PermalinkPage}
                        {/block:Photo}
                        
                          <div class="time-hide">
                             {block:Date}
                                <span class="post-total-time">{MonthNumberWithZero}{DayOfMonthWithZero}{Year}{12Hour}{Minutes}</span>
                                <span class="post-hour">{12Hour}</span>
                                <span class="post-minute">{Minutes}</span>
                            {/block:Date}
                            </div>
                        
                        <ul class="social-menu">
                            <li>{LikeButton color="white"}</li>
                            <li>{ReblogButton color="white"}</li>
                            <li><a href="https://www.facebook.com/dialog/feed?app_id=840297886034271&display=popup&description=Benson&#39;s%20Rockin%20New%20Year&#39;s%20Eve&link={Permalink}&picture={PhotoURL-250}&redirect_uri=http://brnye.tumblr.com" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/intent/tweet?text=Rockin out at Benon&#39;s Rockin New Year&#39;s Eve!&hashtags=brnye&url={URLEncodedPermalink}" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            {block:PermalinkPage}
                                <!-- <li><a href="{PhotoURL-HighRes}" download="brnye_{PostID}" title="{PostID}"><i class="fa fa-download"></i></a></li> -->
                                <li>{block:Date}{Year} - {12Hour}:{Minutes} {AmPm} {/block:Date}</li>
                                <li>{block:HasTags} {block:Tags} <a href="{TagURL}">#{Tag}</a> {/block:Tags} {/block:HasTags}</li>
                            {/block:PermalinkPage} 
                                
                                <ul class="clock">	
                        		  <!--<li id="sec"></li>-->
                        		  <li class="face"><img src="http://www.frankiepugliese.com/brnye/img/svg/face.svg"></li>
                        		  <li class="hour"><img src="http://www.frankiepugliese.com/brnye/img/svg/hour.svg"></li>
                        		  <li class="min"><img src="http://www.frankiepugliese.com/brnye/img/svg/minute.svg"></li>
                        		</ul>
                        </ul>
                        <span></span>
                            
                        </div>
                    </article>
                    {/block:Posts}
                </div>
            </div>    
            
            <div class="permalink-pagination">
                {block:PermalinkPagination}
                    {block:PreviousPost}
                        <div class="pag-btn previous">
                            <a title="Older" href="{PreviousPost}"><i class="fa fa-chevron-left"></i></a>
                        </div>
                    {/block:PreviousPost}
                    
                    {block:NextPost}
                        <div class="pag-btn next">
                            <a title="Newer" href="{NextPost}"><i class="fa fa-chevron-right"></i></a>                         
                        </div>
                    {/block:NextPost}
                {/block:PermalinkPagination}
            </div>
        </section>

        <p id="footer">
            {block:IfNotInfiniteScroll}
                {block:PreviousPage}
                    <a href="{PreviousPage}">&#171; Previous</a>
                {/block:PreviousPage}{block:NextPage}
                    <a href="{NextPage}">Next &#187;</a>
                {/block:NextPage}
            {/block:IfNotInfiniteScroll}
        </p>
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
        
        <script type=text/javascript>
            function setTime(){
                $( ".article-content" ).each(function() {
                    var currArticle = $(this);
                    
                    var mins = currArticle.find('.time-hide .post-minute').text();
        			var hours = currArticle.find('.time-hide .post-hour').text();
        			console.log(mins, hours);
        			var mdegree = mins * 6;
        			var hdegree = hours * 30 + (mins / 2);
        			
        			var mrotate = "rotate(" + mdegree + "deg)";
        			var hrotate = "rotate(" + hdegree + "deg)";
        			
        			currArticle.find(".min").css({ "transform": mrotate });
        			currArticle.find(".hour").css({ "transform": hrotate });
                });
            };
            
            function getAPI() {
                var link = "http://api.tumblr.com/v2/blog/brnye.tumblr.com/posts?";
               
                $.ajax({
                    type: "GET",
                    url: link,
                    dataType: "jsonp",
                    data: {
                        api_key: "nwCmTktZ8vvHVumGnJDeVu7InqkJH7wWzgQUMX1peDIyP4nF7p"
                    }
                }).done(function (data) {
                    var firstPostDate = data.response.posts[data.response.posts.length - 1].date;
                  
                    var firstPostTime = firstPostDate.split(" ");
                    var postStartTime = firstPostTime[1];
                    
                    var lastPostDate = data.response.posts[0].date;
                  
                    var lastPostTime = lastPostDate.split(" ");
                    var postEndTime = lastPostTime[1];
                    
                     console.log('data',postStartTime,"-",postEndTime);
                    
                });
            };
            
            $( document ).ready(function() {
                setTime();
                
                getAPI();
            });
            
        
            $(window).bind("load", function() {
                setTime();
                console.log($('.article-content').length);
            });
            
            var tumblrAutoPager = {
    url: "http://proto.jp/",
    ver: "0.1.7",
    rF: true,
    gP: {},
    pp: null,
    ppId: "",
    LN: location.hostname,
    init: function() {
        if ($("autopagerize_icon") || navigator.userAgent.indexOf('iPhone') != -1) return;
        var tAP = tumblrAutoPager;
        var p = 1;
        var lh = location.href;
        var lhp = lh.lastIndexOf("/page/");
        var lht = lh.lastIndexOf("/tagged/");
        if (lhp != -1) {
            p = parseInt(lh.slice(lhp + 6));
            tAP.LN = lh.slice(7, lhp);
        } else if (lht != -1) {
            tAP.LN = lh.slice(7);
            if (tAP.LN.slice(tAP.LN.length - 1) == "/") tAP.LN = tAP.LN.slice(0, tAP.LN.length - 1);
        } else if ("http://" + tAP.LN + "/" != lh) {
            return;
        };
        var gPFncs = [];
        gPFncs[0] = function(aE) {
            var r = [];
            for (var i = 0, l = aE.length; i < l; i++) {
                if (aE[i].className == "autopagerize_page_element") {
                    r = gCE(aE[i]);
                    break;
                }
            }
            return r;
        };
        gPFncs[1] = function(aE) {
            var r = [];
            for (var i = 0, l = aE.length; i < l; i++) {
                var arr = aE[i].className ? aE[i].className.split(" ") : null;
                if (arr) {
                    for (var j = 0; j < arr.length; j++) {
                        arr[j] == "post" ? r.push(aE[i]) : null;
                    }
                }
            }
            return r;
        };
        gPFncs[2] = function(aE) {
            var r = [];
            var tmpId = tAP.ppId ? [tAP.ppId] : ["posts", "main", "container", "content", "apDiv2", "wrapper", "projects"];
            for (var i = 0, l = aE.length; i < l; i++) {
                for (var j = 0; j < tmpId.length; j++) {
                    if (aE[i].id == tmpId[j]) {
                        r = gCE(aE[i]);
                        tAP.ppId = aE[i].id;
                        break;
                    }
                }
            }
            return r;
        };
        for (var i = 0; i < gPFncs.length; i++) {
            var getElems = gPFncs[i](document.body.getElementsByTagName('*'));
            if (getElems.length) {
                tAP.gP = gPFncs[i];
                tAP.pp = getElems[0].parentNode;
                break;
            }
        }

        function gCE(pElem) {
            var r = [];
            for (var i = 0, l = pElem.childNodes.length; i < l; i++) {
                r.push(pElem.childNodes.item(i))
            }
            return r;
        }
        if (!tAP.pp) {
            return;
        }
        sendRequest.README = {
            license: 'Public Domain',
            url: 'http://jsgt.org/lib/ajax/ref.htm',
            version: 0.516,
            author: 'Toshiro Takahashi'
        };

        function chkAjaBrowser() {
            var A, B = navigator.userAgent;
            this.bw = {
                safari: ((A = B.split('AppleWebKit/')[1]) ? A.split('(')[0].split('.')[0] : 0) >= 124,
                konqueror: ((A = B.split('Konqueror/')[1]) ? A.split(';')[0] : 0) >= 3.3,
                mozes: ((A = B.split('Gecko/')[1]) ? A.split(' ')[0] : 0) >= 20011128,
                opera: (!!window.opera) && ((typeof XMLHttpRequest) == 'function'),
                msie: (!!window.ActiveXObject) ? (!!createHttpRequest()) : false
            };
            return (this.bw.safari || this.bw.konqueror || this.bw.mozes || this.bw.opera || this.bw.msie)
        }

        function createHttpRequest() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest()
            } else {
                if (window.ActiveXObject) {
                    try {
                        return new ActiveXObject('Msxml2.XMLHTTP')
                    } catch (B) {
                        try {
                            return new ActiveXObject('Microsoft.XMLHTTP')
                        } catch (A) {
                            return null
                        }
                    }
                } else {
                    return null
                }
            }
        };

        function sendRequest(E, R, C, D, F, G, S, A) {
            var Q = C.toUpperCase() == 'GET',
                H = createHttpRequest();
            if (H == null) {
                return null
            }
            if ((G) ? G : false) {
                D += ((D.indexOf('?') == -1) ? '?' : '&') + 't=' + (new Date()).getTime()
            }
            var P = new chkAjaBrowser(),
                L = P.bw.opera,
                I = P.bw.safari,
                N = P.bw.konqueror,
                M = P.bw.mozes;
            if (typeof E == 'object') {
                var J = E.onload;
                var O = E.onbeforsetheader
            } else {
                var J = E;
                var O = null
            }
            if (L || I || M) {
                H.onload = function() {
                    J(H);
                    H.abort()
                }
            } else {
                H.onreadystatechange = function() {
                    if (H.readyState == 4) {
                        J(H);
                        H.abort()
                    }
                }
            }
            R = K(R, D);
            if (Q) {
                D += ((D.indexOf('?') == -1) ? '?' : (R == '') ? '' : '&') + R
            }
            H.open(C, D, F, S, A);
            if (!!O) {
                O(H)
            }
            B(H);
            H.send(R);

            function B(T) {
                if (!L || typeof T.setRequestHeader == 'function') {
                    T.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                }
                return T
            }

            function K(X, V) {
                var Z = [];
                if (typeof X == 'object') {
                    for (var W in X) {
                        Y(W, X[W])
                    }
                } else {
                    if (typeof X == 'string') {
                        if (X == '') {
                            return ''
                        }
                        if (X.charAt(0) == '&') {
                            X = X.substring(1, X.length)
                        }
                        var T = X.split('&');
                        for (var W = 0; W < T.length; W++) {
                            var U = T[W].split('=');
                            Y(U[0], U[1])
                        }
                    }
                }

                function Y(b, a) {
                    Z.push(encodeURIComponent(b) + '=' + encodeURIComponent(a))
                }
                return Z.join('&')
            }
            return H
        }

        function addNextPage(oj) {
            if (oj.status == 404) {
                tAP.remainFlg = false;
                return;
            }
            var d = document.createElement("div");
            d.innerHTML = oj.responseText;
            var posts = tAP.gP(d.getElementsByTagName("*"));
            if (posts.length < 2) {
                tAP.rF = false;
                return;
            }
            d = document.createElement("div");
            d.className = "tumblrAutoPager_page_info";
            tAP.pp.appendChild(d);
            for (var i = 0; i < posts.length; i++) {
                tAP.pp.appendChild(posts[i]);
            }
            var footer = $("footer");
            footer ? footer.parentNode.appendChild(footer) : null;
            tAP.rF = true;
            
            console.log('post added', posts);
            setTime();
        }
        watch_scroll();

        function watch_scroll() {
            var d = document.compatMode == "BackCompat" ? document.body : document.documentElement;
            var r = d.scrollHeight - d.clientHeight - (d.scrollTop || document.body.scrollTop);
            if (r < d.clientHeight * 2 && tAP.rF) {
                tAP.rF = false;
                p++;

                addNextPageWithLikes = function(oj) {
                    addNextPage(oj);
                    Tumblr.LikeButton.get_status_by_page(p);
                }

                sendRequest(addNextPageWithLikes, "", "GET", "http://" + tAP.LN + "/page/" + p, true);

            }
            setTimeout(arguments.callee, 200);
        };

        function $(id) {
            return document.getElementById(id)
        };
    },
    switchAutoPage: function() {
        this.rF = !this.rF;
        var aE = document.getElementsByTagName('*');
        for (var i = 0, l = aE.length; i < l; i++) {
            if (aE[i].className == "tAP_switch") {
                aE[i].firstChild.nodeValue = this.rF ? "AutoPage[OFF]" : "AutoPage[ON]";
            }
        }
    }
};
window.addEventListener ? window.addEventListener('load', tumblrAutoPager.init, false) : window.attachEvent ? window.attachEvent("onload", tumblrAutoPager.init) : window.onload = tumblrAutoPager.init;

        </script>

    </body>
</html>