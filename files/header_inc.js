'use strict';

window.addEventListener('DOMContentLoaded', headerInit);


/*--------------------------------------------------------------------------------------------------------
ヘッダー初期化
--------------------------------------------------------------------------------------------------------*/

function headerInit() {

/*--------------------------------------------------------------------------------------------------------
関数定義
--------------------------------------------------------------------------------------------------------*/
	/**
	 * SPメニュー
	 */
	function spAction() {
		let h_scrollTop_sp;

		elm_tmp = document.querySelector('#jre_header_in .spBtn').addEventListener('click', () => {
			h_scrollTop_sp = document.documentElement.scrollTop || document.body.scrollTop;
			FNC.addClass('#jre_header_in .header_navi02', 'on');
			FNC.addClass('html','modal_ofh-html');
			FNC.addClass('body','modal_ofh-body');
			document.body.style.height = 'calc(100% + ' + h_scrollTop_sp + 'px)';
			document.body.style.margin = 'calc(' + (h_scrollTop_sp * -1) + 'px)';
		});

		elm_tmp = document.querySelectorAll('.header_navi02 .header_navi02_list > li .nav a, .header_navi02 .header_navi02_list02 > li .nav a:not(.accNone)');
		for (let i = 0; i < elm_tmp.length; i++) {
			elm_tmp[i].addEventListener('click', (e) => {
				e.preventDefault();
				FNC.removeClass('.header_navi02 .header_navi02_list > li, .header_navi02 .header_navi02_list02 > li', 'active');
				FNC.addClass(e.currentTarget.parentElement.parentElement, 'active');
			});
		}

		elm_tmp = document.querySelectorAll('#jre_header_in .crossBtn, #jre_header_in .under_crossBtn, #jre_header_in a[href*="#"]');
		for (let i = 0; i < elm_tmp.length; i++) {
			elm_tmp[i].addEventListener('click', () => {
				FNC.removeClass('.header_navi02 .header_navi02_list > li, .header_navi02 .header_navi02_list02 > li', 'active');
				FNC.removeClass('#jre_header_in .header_navi02', 'on');
				FNC.removeClass('html', 'modal_ofh-html');
				FNC.removeClass('body', 'modal_ofh-body');
				window.scrollTo(0, h_scrollTop_sp);
			});
		}

		elm_tmp = document.querySelectorAll('#jre_header_in .returnBtn, #jre_header_in .under_returnBtn');
		for (let i = 0; i < elm_tmp.length; i++) {
			elm_tmp[i].addEventListener('click', () => {
				FNC.removeClass('.header_navi02 .header_navi02_list > li, .header_navi02 .header_navi02_list02 > li', 'active');
			});
		}
	}





/*--------------------------------------------------------------------------------------------------------
headerHTMLを挿入
--------------------------------------------------------------------------------------------------------*/

	//トップページの場合はheaderロゴをh1に変更する
	const headerLogoSource = document.body.id === 'top_page'
	? '<h1 class="logo"><a href="/"><img src="/material/img/logo_jr.svg" alt="JR東日本"></a></h1>'
	: '<p class="logo"><a href="/" data-jre-ga="header_link"><img src="/material/img/logo_jr.svg" alt="JR東日本"></a></p>';

	//ヘッダーのHTMLテンプレート
	const headerHTML = `
<p class="main_skipLink"><a href="#main_body">本文へジャンプ</a></p>
	<div id="jre_header_in">
	<div id="jre_header_appLink"><a href="https://jreastapp.page.link/?link=https://jreastapp.page.link/jreappstart?app_id%3Djreast_web&isi=820004378&ibi=jp.co.jreast.jreastapp&apn=jp.co.jreast?utm_campaign%3Djreastappstarte%26utm_medium%3Dreferral%26utm_source%3Djreast_web&apn=jp.co.jreast&isi=820004378&ibi=jp.co.jreast.jreastapp&utm_campaign=jreappstrart&utm_medium=referral&utm_source=jreast_web&pt=jreast-app-lp&ct=jreappstart&mt=8" target="_blank" rel="noopener" class="appLinkText">運行情報はアプリが便利</a><button type="button" id="appLink_closeBtn">×</button></div>
	<div id="jre_header_in_wrap">
	${headerLogoSource}
	<div class="header_navi">
		<div class="header_navi01">
			<ul class="navi01_btn">
				<li id="lang">
					<button type="button" class="btn"><span>Language</span></button>
					<ul class="lang_link">
						<li><a href="/multi/en/" data-jre-ga="header_link">English</a></li>
						<li><a href="/multi/zh-CHT/" data-jre-ga="header_link">繁體中文</a></li>
						<li><a href="/multi/zh-CHS/" data-jre-ga="header_link">簡体中文</a></li>
						<li><a href="/multi/ko/" data-jre-ga="header_link">한국어</a></li>
						<li><a href="/multi/th/" data-jre-ga="header_link">ภาษาไทย</a></li>
						<li><a href="/multi/id/" data-jre-ga="header_link">Bahasa Indonesia</a></li>
						<li><a href="/multi/fr/" data-jre-ga="header_link">Français</a></li>
						<li><a href="/multi/de/" data-jre-ga="header_link">Deutsch</a></li>
						<li><a href="/multi/es/" data-jre-ga="header_link">Español</a></li>
					</ul>
					<button type="button" class="close_btn"></button>
				</li>
				<li id="search">
					<button type="button" class="btn"><span>検索</span></button>
					<div class="searchBox">
						<form id="srch">
							<p id="srchForm">
							<input type="text" name="p" value="" id="srchInput" class="textArea">
							<button type="button" id="srchBtn" class="searchbtn">検索</button>
							</p>
						</form>
					</div>
					<button type="button" class="close_btn"></button>
				</li>
				<li id="link_jrePoint"><a href="https://www.jrepoint.jp/" target="_blank" rel="noopener" data-jre-ga="header_link">
				<picture>
				<source media="(max-width: 750px)" srcset="/material/img/logo_header_jrepoint-sp.png">
				<img src="/material/img/logo_jrepoint.svg" alt="JRE POINT（別ウインドウで開きます）">
				<picture>
				</a></li>
				<li id="link_jreMall"><a href="https://www.jreastmall.com/" target="_blank" rel="noopener" data-jre-ga="header_link"><img src="/material/img/logo_jremall.svg" alt="JRE MALL（別ウインドウで開きます）"></a></li>
			</ul>
			<ul class="navi01_link">
				<li><a href="/info/" data-jre-ga="header_link">よくいただくお問い合わせ</a></li>
				<li class="sp"><a href="/press/" data-jre-ga="header_link">ニュースリリース一覧</a></li>
			</ul>
			<p class="spBtn"><img src="/material/img/header/ico_header_sp_menu.svg" alt="メニュー"></p>
		</div>
		<div class="header_navi02">
		<p class="crossBtn"></p>
			<ul class="header_navi02_list">
				<li id="navi_train">
				<p class="nav"><a href="">鉄道・きっぷの予約</a></p>
				<div class="nav_list">
					<div class="nav_list_inn">
						<p class="returnBtn"></p>
						<p class="crossBtn"></p>
						<div class="list02">
							<p class="nav_list_headhing"><a href="/railway/" data-jre-ga="header_megaMenu_link">鉄道・きっぷの予約トップ</a></p>
							<div class="mugaM__train_linkBox_inn">
								<ul class="header_train_linkBox">
									<li class="l_col2"><a href="https://traininfo.jreast.co.jp/train_info/service.aspx" id="traininfo_link" data-jre-ga="header_megaMenu_link">運行情報</a></li>
									<li class="l_col2"><a href="https://traininfo.jreast.co.jp/delay_certificate/" id="delay_certificate_link" data-jre-ga="header_megaMenu_link">遅延証明書</a></li>
									<li class="linkBlank"><a href="https://www.eki-net.com/Personal/top/index" rel="noopener" target="_blank" id="ekinet_link" data-jre-ga="header_megaMenu_link"><img src="/material/img/logo_ekinet.svg" alt="えきねっと"><p>きっぷの予約・空席案内</p><span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
								</ul>
								<ul class="header_train_linkBox02">
									<li class="linkBox02_btn"><a href="/railway/#booking" id="btn_booking" data-jre-ga="header_megaMenu_link">きっぷの予約</a></li>
									<li class="linkBox02_btn"><a href="/railway/#station-search" id="btn_station-search" data-jre-ga="header_megaMenu_link">駅を調べる</a></li>
									<li class="linkBox02_btn"><a href="/railway/#find" id="btn_find" data-jre-ga="header_megaMenu_link">乗りたい<br class="pc">列車を探す</a></li>
								</ul>
							</div>
						<!--//.list02--></div>
						<div class="list03">
							<ul class="train_linkBox_linkList">
								<li><a href="/map/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_routemap.svg" alt="">路線図</a></li>
								<li><a href="/railway/extratrain/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_extratrain.svg" alt="">臨時列車</a></li>
								<li><a href="/mv-guide/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_mv.svg" alt="">指定席券売機</a></li>
								<li><a href="/railway/#booking04" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_kippu.svg" alt="">きっぷの<br class="pc">ルール</a></li>
								<li><a href="/railway/#booking03" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_teiki.svg" alt="">定期券</a></li>
								<li><a href="/travel/otokukippu/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_tickets.svg" alt="">おトクな<br class="pc">きっぷ</a></li>
								<li class="linkList_sp2col"><a href="https://www.eki-net.com/top/e-ticket/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_etickets.svg" alt="">新幹線<br class="pc">eチケット</a></li>
								<li class="linkList_sp2col"><a href="/ltd_exp/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/ico_train_express.svg" alt="">在来線特急の<br class="pc">ご案内</a></li>
							</ul>
						<!--//.list03--></div>
					<!--//.nav_list_inn--></div>
					<button class="btn_headerMenuClose" type="button"><img src="/material/img/header/ico_header_close.svg" alt=""></button>
					<div class="sp_crossbtnArea">
					<p class="under_returnBtn"></p>
					<p class="under_crossBtn"></p>
					</div>
				<!--//.nav_list--></div>
				</li>
				<li id="navi_travel">
				<p class="nav"><a href="">エリア・観光</a></p>
				<div class="nav_list">
					<div class="nav_list_inn">
						<p class="returnBtn"></p>
						<p class="crossBtn"></p>
						<div class="list01">
							<p class="nav_list_headhing"><a href="/travel/" data-jre-ga="header_megaMenu_link">エリア・観光トップ</a></p>
							<p class="mugaM_travel_h">エリア情報</p>
							<ul class="mugaM_travel_linkBox_linkList">
								<li id="mugaM_link_tohoku"><a href="/travel/tohoku/" data-jre-ga="header_megaMenu_link">東北・道南<br><span class="fontSmall">エリア</span></a></li>
								<li id="mugaM_link_kanto"><a href="/travel/kanto_izu/" data-jre-ga="header_megaMenu_link">関東・伊豆<br><span class="fontSmall">エリア</span></a></li>
								<li id="mugaM_link_shinetsu"><a href="/travel/shinetsu_hokuriku/" data-jre-ga="header_megaMenu_link">信越・北陸<br><span class="fontSmall">エリア</span></a></li>
							</ul>
							<div class="mugaM_travel_linkList_box">
								<dl class="mugaM_travel_linkList_dl">
									<dt>東北・道南</dt>
									<dd>
										<ul class="mugaM_travel_linkList_ul link">
											<li><a href="/travel/tohoku/hokkaido/" data-jre-ga="header_megaMenu_link">北海道</a></li>
											<li><a href="/travel/tohoku/aomori/" data-jre-ga="header_megaMenu_link">青森</a></li>
											<li><a href="/travel/tohoku/iwate/" data-jre-ga="header_megaMenu_link">岩手</a></li>
											<li><a href="/travel/tohoku/akita/" data-jre-ga="header_megaMenu_link">秋田</a></li>
											<li><a href="/travel/tohoku/miyagi/" data-jre-ga="header_megaMenu_link">宮城</a></li>
											<li><a href="/travel/tohoku/yamagata/" data-jre-ga="header_megaMenu_link">山形</a></li>
											<li><a href="/travel/tohoku/fukushima/" data-jre-ga="header_megaMenu_link">福島</a></li>
										</ul>
									</dd>
								</dl>
								<dl class="mugaM_travel_linkList_dl">
									<dt>関東・伊豆</dt>
									<dd>
										<ul class="mugaM_travel_linkList_ul link">
											<li><a href="/travel/kanto_izu/gunma/" data-jre-ga="header_megaMenu_link">群馬</a></li>
											<li><a href="/travel/kanto_izu/tochigi/" data-jre-ga="header_megaMenu_link">栃木</a></li>
											<li><a href="/travel/kanto_izu/ibaraki/" data-jre-ga="header_megaMenu_link">茨城</a></li>
											<li><a href="/travel/kanto_izu/saitama/" data-jre-ga="header_megaMenu_link">埼玉</a></li>
											<li><a href="/travel/kanto_izu/tokyo/" data-jre-ga="header_megaMenu_link">東京</a></li>
											<li><a href="/travel/kanto_izu/chiba/" data-jre-ga="header_megaMenu_link">千葉</a></li>
											<li><a href="/travel/kanto_izu/kanagawa/" data-jre-ga="header_megaMenu_link">神奈川</a></li>
											<li><a href="/travel/kanto_izu/yamanashi/" data-jre-ga="header_megaMenu_link">山梨</a></li>
											<li><a href="/travel/kanto_izu/shizuoka/" data-jre-ga="header_megaMenu_link">静岡</a></li>
										</ul>
									</dd>
								</dl>
								<dl class="mugaM_travel_linkList_dl">
									<dt>信越・北陸</dt>
									<dd>
										<ul class="mugaM_travel_linkList_ul link">
											<li><a href="/travel/shinetsu_hokuriku/niigata/" data-jre-ga="header_megaMenu_link">新潟</a></li>
											<li><a href="/travel/shinetsu_hokuriku/nagano/" data-jre-ga="header_megaMenu_link">長野</a></li>
											<li><a href="/travel/shinetsu_hokuriku/fukui/" data-jre-ga="header_megaMenu_link">福井</a></li>
											<li><a href="/travel/shinetsu_hokuriku/ishikawa/" data-jre-ga="header_megaMenu_link">石川</a></li>
											<li><a href="/travel/shinetsu_hokuriku/toyama/" data-jre-ga="header_megaMenu_link">富山</a></li>
										</ul>
									</dd>
								</dl>
							</div>
						<!--//.list01--></div>
						<div class="list03">
						<div id="megaM_travel_bnr_linkList">
						</div>
						<!--//.list03--></div>
					<!--//.nav_list_inn--></div>
					<button class="btn_headerMenuClose" type="button"><img src="/material/img/header/ico_header_close.svg" alt=""></button>
					<div class="sp_crossbtnArea">
					<p class="under_returnBtn"></p>
					<p class="under_crossBtn"></p>
					</div>
				<!--//.nav_list--></div>
				</li>
				<li id="navi_service">
				<p class="nav"><a href="">生活サービス</a></p>
				<div class="nav_list">
					<div class="nav_list_inn">
						<p class="returnBtn"></p>
						<p class="crossBtn"></p>

						<div class="list01">
						<p class="nav_list_headhing"><a href="/life/" data-jre-ga="header_megaMenu_link">生活サービストップ</a></p>
						<ul class="mugaM_life_linkBox_linkList">
							<li><a href="/life/#ekinaka" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic01.jpg" alt=""><p class="linkList_text">エキナカ</p></a>
							</li>
							<li><a href="/life/#shopping_eki" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic02.jpg" alt=""><p class="linkList_text">ショッピング<br class="sp">センター</p></a></li>
							<li><a href="/life/#hotel" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic03.jpg" alt=""><p class="linkList_text">ホテル</p></a></li>
							<li><a href="/life/#leisure" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic04.jpg" alt=""><p class="linkList_text">スポーツ・<br class="sp">レジャー</p></a></li>
							<li><a href="/life/#housing" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic05.jpg" alt=""><p class="linkList_text">住宅</p></a></li>
							<li><a href="/life/#share" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic06.jpg" alt=""><p class="linkList_text">新規事業</p></a></li>
							<li><a href="/life/#hakobyun" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic07.jpg" alt=""><p class="linkList_text">列車荷物輸送</p></a></li>
							<li><a href="/life/#kosodate" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic08.jpg" alt=""><p class="linkList_text">子育てサポート</p></a></li>
							<li><a href="/life/#ensen" class="linkList_a" data-jre-ga="header_megaMenu_link"><img src="/material/img/header/img_header_life_pic09.jpg" alt=""><p class="linkList_text">沿線ブランド</p></a></li>
						</ul>

						</div>
						<div class="list02">
						<div id="megaM_life_bnrBox_linkList">
						</div>
						</div>
					</div>
					<button class="btn_headerMenuClose" type="button"><img src="/material/img/header/ico_header_close.svg" alt=""></button>
					<div class="sp_crossbtnArea">
					<p class="under_returnBtn"></p>
					<p class="under_crossBtn"></p>
					</div>
				<!--//.nav_list--></div>
				</li>
				<li id="navi_suica">
				<p class="nav"><a href="">Suica</a></p>
				<div class="nav_list">
					<div class="nav_list_inn">
						<p class="returnBtn"></p>
						<p class="crossBtn"></p>
						<div class="list01">
						<p class="nav_list_headhing"><span class="notLink">Suica</span></p>
						<ul class="mugaM_suica_linkBox">
							<li><a href="/suica/" data-jre-ga="header_megaMenu_link">
								<h3 class="mugaM_suica_linkBox_tit"><img src="/material/img/top/logo_suica.svg" alt="Suica"></h3>
								<p class="mugaM_suica_icon"><img src="/material/img/top/ico_suica.svg" alt=""></p>
							</a></li>
							<li><a href="/mobilesuica/" data-jre-ga="header_megaMenu_link">
								<h3 class="mugaM_suica_linkBox_tit"><img src="/material/img/top/logo_suica_mobile.svg" alt="モバイルSuica" id="suica_mobile"></h3>
								<p class="mugaM_suica_icon"><img src="/material/img/top/ico_suica_mobile.svg" alt=""></p>
							</a></li>
							<li><a href="/appsuica/" data-jre-ga="header_megaMenu_link">
								<h3 class="mugaM_suica_linkBox_tit"><img src="/material/img/top/logo_suica_app.svg" alt="Apple PayのSuica"></h3>
								<p class="mugaM_suica_icon"><img src="/material/img/top/ico_suica_app.svg" alt=""></p>
							</a></li>
							<li><a href="/suicamoney/" data-jre-ga="header_megaMenu_link">
								<h3 class="mugaM_suica_linkBox_tit">
								<picture>
									<source media="(max-width: 750px)" srcset="/material/img/top/logo_suica_money_sp.svg">
									<img src="/material/img/top/logo_suica_money_pc.svg" alt="Suica電子マネー" id="suica_money">
								</picture>
								</h3>
								<p class="mugaM_suica_icon"><img src="/material/img/top/ico_suica_money.svg" alt=""></p>
							</a></li>
							<li><a href="/touchdego/" data-jre-ga="header_megaMenu_link">
								<h3 class="mugaM_suica_linkBox_tit">
								<picture>
									<source media="(max-width: 750px)" srcset="/material/img/top/logo_suica_shinkansen_sp.svg">
									<img src="/material/img/top/logo_suica_shinkansen_pc.svg" alt="タッチでGo！新幹線" id="suica_shinkansen">
								</picture>
								</h3>
								<p class="mugaM_suica_icon"><img src="/material/img/top/ico_suica_shinkansen.svg" alt=""></p>
							</a></li>
							<li><a href="/suica/suica_penguin_goods/" data-jre-ga="header_megaMenu_link">
								<h3 class="mugaM_suica_linkBox_tit">
								<picture>
									<source media="(max-width: 750px)" srcset="/material/img/top/logo_suica_goods_sp.svg">
									<img src="/material/img/top/logo_suica_goods_pc.svg" alt="Suicaのペンギングッズ" id="suica_goods">
								</picture>
								</h3>
								<p class="mugaM_suica_icon"><img src="/material/img/top/ico_suica_goods.svg" alt=""></p>
							</a></li>
						</ul>
						<div id="mugaM_suica_linkBox">
							<ul class="mugaM_suica_linkBox_list">
								<li class="btn02"><a href="/suica/pressrelease/" data-jre-ga="header_megaMenu_link">インフォメーション</a></li>
								<li class="btn02"><a href="/suica/corporate/" data-jre-ga="header_megaMenu_link">法人のお客さまへ</a></li>
								<li class="btn02"><a href="/suicaall/rule/" data-jre-ga="header_megaMenu_link">Suicaに関する規約・特約</a></li>
							</ul>
							<ul class="mugaM_suica_linkBox_bnrlist">
								<li><a href="https://www.jrepoint.jp/point/first/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/bnr_suica_jrepoint.jpg" alt="JRE POINTに登録しよう！ 鉄道で、駅ビル・エキナカで、JRE MALLで、貯まる！使える！ JRE POINT　新しくはじめる方はこちら（別ウインドウで開きます）"></a></li>
								<li><a href="/mobilesuica/start/" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/bnr_suica_start_mobilesuica.jpg" alt="モバイルSuicaをはじめよう！ 安全 カンタン 便利なモバイルSuica 新しくはじめる方はこちら"></a></li>
								<li><a href="/suica/corporate/suicadata/eki-karte.html" data-jre-ga="header_megaMenu_link"><img src="/material/img/top/bnr_suica_eki-karte.jpg" alt="Suicaから、ビジネスのヒントをつかむ。駅カルテ"></a></li>
							</ul>
						</div>
						</div>
						<div class="list02">
						<div id="megaM_suica_bnrBox_linkList">
						</div>
						</div>
					<!--//.nav_list_inn--></div>
					<button class="btn_headerMenuClose" type="button"><img src="/material/img/header/ico_header_close.svg" alt=""></button>
					<div class="sp_crossbtnArea">
					<p class="under_returnBtn"></p>
					<p class="under_crossBtn"></p>
					</div>
				<!--//.nav_list--></div>
				</li>
			</ul>
				<ul class="header_navi02_list02">
					<li id="navi_company">
					<p class="nav"><a href="">企業・IR・サステナビリティ</a></p>
					<div class="nav_list">
						<div class="nav_list_inn">
							<p class="returnBtn"></p>
							<p class="crossBtn"></p>
							<div class="naviList_innner_cont">
								<div class="naviList_innner_cont_wrap">
								<p class="naviList_innner_h"><a href="/company/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">企業・IR・サステナビリティ<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
								<div class="naviList_innner_linkList_IR">
								<div class="naviList_innner_linkList_IR_inn">
									<p class="linkListIr_titLink"><a href="/company/corporate/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">企業情報<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul>
										<li class="linkListIr_titLink02"><a href="/investor/interview/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">トップメッセージ<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/investor/moveup/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">JR東日本グループ経営ビジョン「変革2027」<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/eco/pdf/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">JR東日本グループレポート（統合報告書）<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/company/outline/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">会社概要<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/organization/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">組織図<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/company/officer/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">役員一覧<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/group/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">本社・支社・グループ会社一覧<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/company/outline/history.html" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">JR東日本発足からのあゆみ<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/company/corporate/#development" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">研究開発・建設プロジェクト<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li class="linkListIr_titLink02"><a href="/company/corporate/#data" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">データ<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/passenger/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">各駅の乗車人員<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/rosen_avr/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">路線別ご利用状況<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/company/corporate/balanceofpayments/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">線区別収支<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<p class="linkListIr_titLink02"><a href="/company/corporate/#corporation" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">法人お取引に関して<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
								</div>

								<div class="naviList_innner_linkList_IR_inn">
									<p class="linkListIr_titLink"><a href="/company/ir/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">IR情報（株主・投資家の皆さまへ）<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<p class="linkListIr_titLink02"><a href="/company/ir/#financial_info" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">財務情報<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/investor/guide/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">決算情報<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/investor/monthly/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">月次情報<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/investor/calendar/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">IRカレンダー<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/investor/factsheet/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">ファクトシート<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/investor/sustainability-bond/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">サステナビリティファイナンス<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/investor/taiwa/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">資本コストや株価を意識した経営・株主との対話<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<p class="linkListIr_titLink02"><a href="/company/ir/#shareholders" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">株主・個人投資家の皆さまへ<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/investor/soukai/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">株主総会関係<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/investor/shareholder/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">JR東日本の株主になると<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<p class="linkListIr_titLink"><a href="/press/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">ニュースリリース<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
								</div>


								<div class="naviList_innner_linkList_IR_inn">
									<p class="linkListIr_titLink"><a href="/company/csr/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">サステナビリティ<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<p class="linkListIr_titLink02"><a href="/company/csr/#sdgs" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">SDGsの達成に向けて<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<p class="linkListIr_titLink02"><a href="/company/csr/#safety" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">安全<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/safe/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">究極の安全<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<p class="linkListIr_titLink02"><a href="/company/csr/#society" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">社会<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/human_capital_management/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">人的資本経営の推進<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/company/human-rights/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">JR東日本グループ人権基本方針<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/order/procurement/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">サステナブル調達<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/shinanogawa/discharge.html" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">信濃川発電所の取組み<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<p class="linkListIr_titLink02"><a href="/company/csr/#environment" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">環境<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/eco/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">サステナブルな社会の実現<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/eco/warming/#zeroCarbon" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">ゼロカーボン・チャレンジ2050<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/eco/pdf/energy_vision2027.pdf" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link"><span class="pdfLink">エネルギービジョン2027</span><span class="screen-reader-text">PDFが別ウィンドウで開きます</span></a></li>
										<li><a href="/eco/advocacy/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">政策エンゲージメント（アドボカシー）<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
									<p class="linkListIr_titLink02"><a href="/company/csr/#governance" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">企業統治<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
									<ul class="naviList_innner_Ir_linkList">
										<li><a href="/company/governance/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">コーポレート・ガバナンス<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/company/governance/internal_control.html" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">内部統制<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
										<li><a href="/company/compliance/" target="_blank" rel="noopener" data-jre-ga="header_megaMenu_link">コンプライアンス<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
									</ul>
								</div>
								</div>
								</div>
							</div>
						<!--//.nav_list_inn--></div>
					<!--//.nav_list--></div>
					</li>
					<li id="navi_recruit">
					<p class="nav"><a href="/recruit/" target="_blank" rel="noopener" class="accNone" data-jre-ga="header_megaMenu_link">採用<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
					</li>
				</ul>
		<!--//.header_navi02--></div>
	<!--//.header_navi--></div>
	<!--//#jre_header_in_wrap--></div>
<!--//#jre_header_in--></div>
<p id="main_body" class="main_skipLink">ここから本文です</p>
`;

	//ヘッダーを生成する
	document.getElementById('jre_mtd_header').insertAdjacentHTML('beforeend' , headerHTML);






/*--------------------------------------------------------------------------------------------------------
JavaScriptを挿入
--------------------------------------------------------------------------------------------------------*/
	const insertScriptSource = [
		'/inc/bnr_train_area.js',//鉄道バナーエリアJS
		'/inc/bnr_travel_area.js',//観光バナーエリアJS
		'/inc/bnr_life_area.js',//生活サービスバナーエリアJS
		'/inc/bnr_suica_area.js'//SuicaバナーエリアJS
	];

	for (const data of insertScriptSource) {
		let elm_script = document.createElement('script');
		elm_script.src = CONST.NOT_JREASTURL ? '//www.jreast.co.jp' + data : data;
		document.body.appendChild(elm_script);
	}

	//要素ノードの属性値設定JS
	let elm_script = document.createElement('script');
	elm_script.src = CONST.JREASTURL ? '/sitesearch/js/ecl.js' : 'https://www.jreast.co.jp/sitesearch/js/ecl.js';
	document.getElementsByTagName('head')[0].appendChild(elm_script);



/*--------------------------------------------------------------------------------------------------------
言語ボタン・検索ボタンの展開
--------------------------------------------------------------------------------------------------------*/
	//開く
	const elm_LangSearchBtn = document.querySelectorAll('#jre_header_in .navi01_btn li .btn');
	for (let i = 0; i < elm_LangSearchBtn.length; i++) {
		elm_LangSearchBtn[i].addEventListener('click', () => {
			if(elm_LangSearchBtn[i].parentElement.classList.contains('open')) {
				FNC.removeClass(elm_LangSearchBtn[i].parentElement, 'open');
			} else {
				for (let j = 0; j < elm_LangSearchBtn.length; j++) {
					FNC.removeClass(elm_LangSearchBtn[j].parentElement, 'open');
				}
				FNC.addClass(elm_LangSearchBtn[i].parentElement, 'open');
			}
		});
	}

	//×ボタンで閉じる
	const elm_LangSearchCloseBtn = document.querySelectorAll('#jre_header_in .header_navi01 .navi01_btn .close_btn');
	for (let i = 0; i < elm_LangSearchCloseBtn.length; i++) {
		elm_LangSearchCloseBtn[i].addEventListener('click', () => {
			FNC.removeClass(elm_LangSearchCloseBtn[i].parentElement, 'open');
		});
	}


/*--------------------------------------------------------------------------------------------------------
JR東日本サイト以外のドメインだった場合、各タグのパスを絶対パスに置換する
--------------------------------------------------------------------------------------------------------*/
	FNC.absolutePath('jre_header_in');


/*--------------------------------------------------------------------------------------------------------
「検索」ボタンクリックでキーワード検索する
--------------------------------------------------------------------------------------------------------*/
	document.getElementById('srchBtn').addEventListener('click', (e) => {
		e.preventDefault();
		FNC.keywordSearch();//キーワード検索を実行
	});

/*--------------------------------------------------------------------------------------------------------
Enterキーでキーワード検索する
--------------------------------------------------------------------------------------------------------*/
	document.getElementById('srchInput').addEventListener('keydown', (e) => {
		if(e.code === 'Enter') {//Enterキーが押されたら
			e.preventDefault();
			if (e.isComposing || e.key === 'Process' || e.code === 229) return;//入力中でなかったら
			FNC.keywordSearch();//キーワード検索を実行
		}
	});

/*--------------------------------------------------------------------------------------------------------
PC／SPで個別処理
--------------------------------------------------------------------------------------------------------*/
	if(!CONST.MATCH.SP) {//PC時
		const elm_pcNaviMenu = document.querySelectorAll('.header_navi02 .header_navi02_list > li .nav a, .header_navi02 .header_navi02_list02 > li .nav a:not(.accNone)');
		for (let i = 0; i < elm_pcNaviMenu.length; i++) {
			elm_pcNaviMenu[i].addEventListener('click', (e) => {
				e.preventDefault();
				let body_oh = document.body.offsetHeight;

				FNC.removeElement('#jre_header_mega_menu-bg');

				let thisList = elm_pcNaviMenu[i].parentElement.parentElement;
				if(thisList.classList.contains('active')) {
					FNC.removeClass(thisList, 'active');
				} else {

					FNC.removeClass('.header_navi02 .header_navi02_list > li, .header_navi02 .header_navi02_list02 > li', 'active');
					document.body.insertAdjacentHTML('beforeend', '<div id="jre_header_mega_menu-bg"></div>');

					elm_tmp = document.getElementById('jre_header_mega_menu-bg');
					elm_tmp.style.height = body_oh + 'px';
					elm_tmp.style.top = '0px';
					elm_tmp.style.display = 'block';

					FNC.addClass(thisList, 'active');

					elm_tmp = document.querySelectorAll('#jre_header_mega_menu-bg, .btn_headerMenuClose');
					for (let j = 0; j < elm_tmp.length; j++) {
						elm_tmp[j].addEventListener('click', () => {
							FNC.removeClass('.header_navi02 .header_navi02_list > li, .header_navi02 .header_navi02_list02 > li', 'active');
							FNC.removeElement('#jre_header_mega_menu-bg');
						});
					}
				}
			});
		}

	} else {//SP時
		//SP表示
		const navi01_linkHtml = document.getElementsByClassName('navi01_link')[0].outerHTML;
		document.getElementsByClassName('header_navi02')[0].insertAdjacentHTML('beforeend', navi01_linkHtml);
		document.querySelector('.header_navi01 > .navi01_link').style.display = 'none';
		spAction();


		//ブラウザが読み込まれるときの処理（アプリの場合は非表示）
		if(localStorage.getItem('noApp_keyname') || window.navigator.userAgent.indexOf('jreapp') > -1 ){
			FNC.addClass('body', 'no-haveappLink');
			FNC.addClass('#jre_header_appLink', 'is-hidden');
		}


		//「運行情報はアプリが便利」ボタンを閉じる
		document.getElementById('appLink_closeBtn').addEventListener('click', () => {
			FNC.addClass('body', 'no-haveappLink');
			FNC.addClass('#jre_header_appLink', 'is-hidden');
			if(!localStorage.getItem('noApp_keyname')) {//localstoregeがない時
				localStorage.setItem('noApp_keyname','noApp');
			}
		});


		//SP幅でトップページの時のみヘッダーをスクロール固定
		if(document.body.id === 'top_page') {
			//今回の交差を監視する要素
			const el_header_in = document.getElementById('jre_header_in_wrap');
			const el_header_appLink = document.getElementById('jre_header_appLink');
			const el_mainContents = document.getElementById('mainContents');

			const header_options = {
				root: null,//今回はビューポートをルート要素とする
				rootMargin: '0px 0px 0px 0px',
				threshold: 0//閾値は0
			};

			const observer = new IntersectionObserver(doWhenIntersect, header_options);
			//要素を監視する
			observer.observe(el_header_appLink);

			function doWhenIntersect(entries) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						FNC.removeClass(el_mainContents, 'is-fixed_padding');
						FNC.removeClass(el_header_in, 'is-fixed');
					} else {
						FNC.addClass(el_mainContents, 'is-fixed_padding');
						FNC.addClass(el_header_in, 'is-fixed');
					}
				});
			}
		}
	}




/*--------------------------------------------------------------------------------------------------------
リサイズイベント
--------------------------------------------------------------------------------------------------------*/
	const headerResizeMediaQuery = CONST.MEDIAQUERY.SP;
	const headerResizeMediaQueryListener = (e) => {
		//リサイズ時に行う処理
		if(e.matches) {//SP幅の時
			const navi01_linkHtml = document.getElementsByClassName('navi01_link')[0].outerHTML;
			document.getElementsByClassName('header_navi02')[0].insertAdjacentHTML('beforeend',navi01_linkHtml);
			FNC.hideElement('.header_navi01 > .navi01_link');
			spAction();
		} else {//PC幅の時
			FNC.removeClass('#jre_header_in .header_navi02','on');
			FNC.removeElement('.header_navi02 > .navi01_link');
			FNC.showElement('.header_navi01 > .navi01_link');
		}
	};

	//リスナー登録
	headerResizeMediaQuery.addEventListener('change', headerResizeMediaQueryListener);

	//初期化処理
	headerResizeMediaQueryListener(headerResizeMediaQuery);

}
