'use strict';


/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
フラグ設定（その都度、書き換えてください）
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------
キャンペーン実施中フラグ
true:実施中
false:未実施
--------------------------------------------------------------------------------------------------------*/
const CPIMPLE_FLG = false;

//キャンペーンバナーのHTMLを設定
const cp_Banner = `
<div class="cp_BannerArea">
	<div class="cp_BannerArea_inn">
		<a href="https://www.eki-net.com/top/rd/rdtop.html?src=honsha150pass_001" target="_blank" rel="noopener" data-jre-ga="sidePanel_jrticket_cplink">
			<img src="/material/img/side_recommend/img_cpbanner_jre_pass.png" alt="乗れば乗るほどおトク　JR東日本パス ただいま発売中！　利用期間 2022年10月14日から10月27日　お申込はこちらから">
		</a>
	</div>
</div>
`;



/*--------------------------------------------------------------------------------------------------------
お知らせ表示フラグ
true:表示
false:非表示
--------------------------------------------------------------------------------------------------------*/
const TRAININFOHTML05_FLG = false;

//お知らせテキストのHTMLを設定
//const trinInfoHTML05 = `<p class="ml35 sp_ml0 link reservation_link"><a href="/vacant/index.html">年末年始期間の指定席予約状況</a></p>`;
//const trinInfoHTML05 = `<p class="ml35 sp_ml0 link reservation_link"><a href="/vacant/index.html">ゴールデンウィーク期間の指定席予約状況</a></p>`;
//const trinInfoHTML05 = `<p class="ml35 sp_ml0 link reservation_link"><a href="/vacant/index.html">お盆期間の指定席予約状況</a></p>`;
//const trinInfoHTML05 = ``;








////////////////////////////////////////////////////////
//キャンペーン実施中のclass名（変更禁止）
const CPIMPLE_FLG_CLASS = CPIMPLE_FLG ? 'cpImple' : '';


/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
DOMが構築されたら
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', () => {




/*--------------------------------------------------------------------------------------------------------
search_window.jsを挿入
--------------------------------------------------------------------------------------------------------*/
	let elm_script = document.createElement('script');
	elm_script.src = '/material/js/assets/search_window.js';
	document.head.appendChild(elm_script);

	//読み込み完了時
	elm_script.onload = () => {
		sidePanelShow();
	}


/*--------------------------------------------------------------------------------------------------------
検索パネル生成
--------------------------------------------------------------------------------------------------------*/

	//検索パネル本体
	const side_searchPanelHTML = `
	<div id="ekinet-area-tab"><!-- タブ部 -->
	<ul class="list-tab">
	<li id="tab1" class="active">JRきっぷ</li>
	<li id="tab2">JR＋宿泊</li>
	</ul>
	</div>
	<div id="ekinet-area-inner">

	<!--▼ JRきっぷタブ-->
	<div id="cont_tab1" class="box-tab sp_box on">
	</div><!-- #cont_tab1 -->
	<!--▲ JRきっぷタブ-->

	<!--▼ JR＋宿泊タブ-->
	<div id="cont_tab2" class="box-tab sp_box">
	<p class="sp_title">JR＋宿泊<span class="closeBtn"></span></p>
	<div class="cont_tab_innner">

	<div class="box-out" id="tbServiceDpIn">
	<div id="logo_drp"><img src="/material/img/logo_drp_suba.png" alt="JR東日本びゅうダイナミックレールパック"></div>
	<div class="cont-box">
	<p class="drp_text">1名利用OK！<br>最短、出発当日まで予約可能！</p>
	<p class="drp_btn btn blank"><a href="https://jre-travel.eki-net.com/DP/2001/SearchCondition" target="_blank" data-jre-ga="sidePanel_jrtour_link">JR + 宿泊を検索する</a></p>
	<p class="caution_timeText">お申込み可能時間は4:00～23:40までとなります。</p>

	<!-- ▼えきねっとリンク -->
	<div class="ekinet-area-link">
	<a href="https://www.eki-net.com/" target="_blank" data-jre-ga="sidePanel_jrtour_link"><img src="/material/img/logo_ekinet.svg" alt="えきねっとリンク"></a>
	</div>
	<!-- ▲えきねっとリンク -->
	</div>
	<p class="travelLink link"><a href="https://www.jre-travel.com/" target="_blank" data-jre-ga="sidePanel_jrtour_link">びゅうトラベルはこちら</a></p>
	<p class="sp_side_for_traininfoLink"></p>
	</div>
	</div><!-- //#tbServiceIn -->

	</div><!-- //#cont_tab2 -->
	<!--▲ JR＋宿泊タブ-->
	</div>
	`;


	//SPサイドボタン（クラスcpImpleでキャンペーン実施中）
	const side_search_spBtnlHTML = `
	<ul class="sp_btn">
	<li id="sp_reservation" class="${CPIMPLE_FLG_CLASS}"><button type="button"><img src="/material/img/ico_side_jrticket_off.svg" alt="JRきっぷ"></button></li>
	<li id="sp_drp"><button type="button"><img src="/material/img/ico_side_jrdrp_off.svg" alt="JR+宿泊"></button></li>
	<li id="sp_jremall" class="sp_btn_Blank"><a href="https://www.jreastmall.com/" target="_blank" rel="noopener"><img src="/material/img/ico_side_jremall_off.svg" alt="JRE MALL（別ウインドウで開きます）"></a></li>
	</ul>
	`;

	const trainInfoHTML_title = `
	<p id="trainInfoSpTitle" class="sp_title">運行情報<span class="closeBtn"></span></p>
	`;

	const trainInfoHTML01 = `
	<h2 class="trainInfo_h">
	<a href="http://traininfo.jreast.co.jp/train_info/service.aspx" class="trainInfoLink">運行情報</a>
	<a href="#" onclick="location.reload()" title="運行情報を再読み込み" class="help"><img src="/material/img/ico_reload.svg" alt="再読み込みボタン"></a>
	</h2>
	<div class="noData">午前2時～午前4時は、運行情報の配信を行っておりません。<br>（それ以外の時間で表示されない場合はページの再読み込みを行ってください）</div>
	`;

	const trainInfoHTML02 = `
	<div id="trainInfo_btn">
	<p class="infoDelay"><a href="http://traininfo.jreast.co.jp/delay_certificate/">遅延証明書</a></p>
	<p class="infoDelay blank"><a href="https://jre-konzatsu.azureedge.net/" target="_blank" title="別ウィンドウで開きます" >駅混雑状況</a></p>
	<p class="infoDelay"><a href="/train-konzatsu/">列車混雑状況</a></p>
	<p class="infoDelay"><a href="/green-status/">普通列車グリーン車<br class="pc">列車ご利用状況</a></p>
	</div>
	`;

	const trainInfoHTML03 = `
	<div id="infoStop" class="mt40 pb40">
	<ul class="infoStop_list02">
	<li><a href="/suspend/">工事に伴う運転変更のお知らせ</a></li>
	<li class="blank"><a href="/pdf/saikaijoukyou_shinetsu.pdf" target="_blank" title="PDFが別ウィンドウで開きます"><span class="pdfLink">長期運転見合わせ区間（信越）</span></a></li>
	<li class="blank"><a href="/pdf/saikaijoukyou_tohoku.pdf" target="_blank" title="PDFが別ウィンドウで開きます"><span class="pdfLink">長期運転見合わせ区間（東北）</span></a></li>
	</ul>
	<!--//#infoStop --></div>
	`;





	// サイドバーを生成
	document.querySelector('#side #side_searchPanel').innerHTML = '';
	document.querySelector('#side #side_searchPanel').insertAdjacentHTML('beforeend', side_searchPanelHTML);
	document.querySelector('#side .sideContents').insertAdjacentHTML('afterend', side_search_spBtnlHTML);

	elm_tmp = document.querySelector('#side #trainInfoBox');
	if(elm_tmp !== null) {
		elm_tmp.insertAdjacentHTML('afterbegin', trainInfoHTML_title);
	}


	elm_tmp = document.querySelector('#side #trainInfo');
	if(elm_tmp) {
		elm_tmp.insertAdjacentHTML('afterbegin', trainInfoHTML01);
		elm_tmp.insertAdjacentHTML('beforeend', trainInfoHTML02);
		elm_tmp.insertAdjacentHTML('afterend', trainInfoHTML03);
	}


	//wrapAll
	elm_tmp = document.querySelector('#side #trainInfo');
	if(elm_tmp) {
		let wrapElement = document.createElement('div');
		wrapElement.id = 'trainInfoBoxInner';
		wrapElement.innerHTML = elm_tmp.outerHTML;
		elm_tmp.parentNode.insertBefore(wrapElement, elm_tmp);
		elm_tmp.remove();
	}

	elm_tmp = document.querySelector('#side #infoStop');
	if(elm_tmp) {
		let wrapElement = document.createElement('div');
		wrapElement.id = 'trainInfoBoxInner';
		wrapElement.innerHTML = elm_tmp.outerHTML;
		elm_tmp.parentNode.insertBefore(wrapElement, elm_tmp);
		elm_tmp.remove();
	}


	FNC.addClass('#mainContents', 'haveSide');

	elm_tmp = document.querySelectorAll('.trainInfo_list li');
	for (let i = 0; i < elm_tmp.length; i++) {
		let src = elm_tmp[i].getElementsByTagName('img')[0].getAttribute('src');
		if(src.indexOf('ico_side_delay') > -1) {
			FNC.addClass(elm_tmp[i], 'delay');
		} else if(src.indexOf('ico_side_adjust') > -1) {
			FNC.addClass(elm_tmp[i], 'adjust');
		}
	}



/*--------------------------------------------------------------------------------------------------------
サイドバー全体
--------------------------------------------------------------------------------------------------------*/

	//PCサイドボタン（クラスcpImpleでキャンペーン実施中）
	const searchPanel_pcsideBtn = `
	<button type="button" id="sideBtn_jrticket" class="${CPIMPLE_FLG_CLASS}"><img src="/material/img/ico_side_jrticket_off.svg" alt="JRきっぷ"></button>
	<button type="button" id="sideBtn_drp"><img src="/material/img/ico_side_jrdrp_off.svg" alt="JR+宿泊"></button>
	`;

	const searchPanel_closeBtn = '<button type="button" id="sideContents_closeBtn"><img src="/material/img/btn_panel_close.svg" alt="閉じる"></button>'

	if(CONST.MATCH.PC) {//PC時
		let scrollTop_pc = '';
		let pc_deviceHight = '';
		const $sideContents = document.getElementById('side');

		$sideContents.querySelectorAll('.sideBtn')[0].insertAdjacentHTML('afterbegin' , searchPanel_pcsideBtn);//サイドバーにボタン挿入
		$sideContents.querySelectorAll('.sidebar')[0].insertAdjacentHTML('afterbegin' , searchPanel_closeBtn);//パネルに☓ボタン挿入
		document.getElementById('mainContents').insertAdjacentHTML('beforeend' , '<div id="sidePanel_menu-bg"></div>');//モーダル背景を挿入

		const $side_bg = document.getElementById('sidePanel_menu-bg');
		const $sideBtn = document.querySelectorAll('.sideBtn button');


		for (let i = 0; i < $sideBtn.length; i++) {
			$sideBtn[i].addEventListener('click', (side_e) => {//ボタンをクリックした時
				let currentBtn_idName = side_e.currentTarget.id;//クリックした対象を取得
				scrollTop_pc = document.documentElement.scrollTop;//スクロール位置を取得
				pc_deviceHight = window.innerHeight;//ウィンドウの高さを取得

				//モーダルの背景を固定させる処理
				FNC.addClass('html', 'side_modal_ofh-html');
				FNC.addClass('body', 'side_modal_ofh-body');
				document.body.style.cssText = 'height:calc(100% + ' + scrollTop_pc + 'px);margin-top:calc(' + scrollTop_pc + 'px * -1)';

				//モーダルを表示させる処理
				FNC.addClass($sideContents, 'open');
				FNC.addClass($side_bg, 'is-active');
				switch(currentBtn_idName) {
					case 'sideBtn_jrticket':
						FNC.removeClass('#ekinet-area-tab .list-tab > li', 'active');
						FNC.addClass('#tab1', 'active');
						FNC.removeClass('#side_searchPanel .box-tab', 'on');
						FNC.addClass('#side_searchPanel .box-tab#cont_tab1', 'on');
						break;

					case 'sideBtn_drp':
						FNC.removeClass('#ekinet-area-tab .list-tab > li', 'active');
						FNC.addClass('#tab2', 'active');
						FNC.removeClass('#side_searchPanel .box-tab', 'on');
						FNC.addClass('#side_searchPanel .box-tab#cont_tab2', 'on');
						break;
				}

				$side_bg.addEventListener('click', () => {//モーダル背景をクリックした時
					sideModalremove();//モーダルを閉じた時の処理
				});

				document.getElementById('sideContents_closeBtn').addEventListener('click', () => {//☓ボタンをクリックした時
					sideModalremove();//モーダルを閉じた時の処理
				});
			});
		}

		function sideModalremove() {//モーダルを閉じた時の処理
			FNC.removeClass($sideContents, 'open');
			document.body.style.cssText = '';
			window.scrollTo(0, scrollTop_pc);
			FNC.removeClass($side_bg, 'is-active');
			FNC.removeClass('html', 'side_modal_ofh-html');
			FNC.removeClass('body', 'side_modal_ofh-body');
		}
	}

	if(CONST.MATCH.TABLET) {
		//タブレット幅の時はフッターの達した時にボタンを非表示
		let el_footer;
		const panelBtn = document.getElementsByClassName('sideBtn')[0];
		const normalfooter = document.getElementById('jre_mtd_footer');
		const shimplefooter = document.getElementById('jre_mtd_footer_simple');

		//シンプル版のフッターかどうか判定
		if(normalfooter) {
			el_footer = normalfooter;
		} else if(shimplefooter) {
			el_footer = shimplefooter;
		}

		const panelBtn_options = {
			root: null, // 今回はビューポートをルート要素とする
			rootMargin: "50px 0px 0px 0px",
			threshold: 0 // 閾値は0
		};

		const observer = new IntersectionObserver(doWhenIntersect, panelBtn_options);
		// 要素を監視する
		observer.observe(el_footer);
		function doWhenIntersect(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					FNC.addClass(panelBtn, 'is-hidden');
				} else {
					FNC.removeClass(panelBtn, 'is-hidden');
				}
			});
		}
	}

	if(CONST.MATCH.SP) {//SP時
		let scrollTop_sp = '';
		let sp_title_height = '';
		let deviceHight = '';

		const elm_side = document.getElementById('side');
		if(elm_side) {
			elm_side.style.cssText = '';

			//「JRきっぷ」または「JR＋宿泊」ボタンをクリックしたら
			elm_tmp = document.querySelectorAll('#side .sp_btn > #sp_reservation , #side .sp_btn > #sp_drp');
			for (let i = 0; i < elm_tmp.length; i++) {
				elm_tmp[i].addEventListener('click', (e) => {
					let scrollTop_sp = document.documentElement.scrollTop || document.body.scrollTop;
					let deviceHight = window.innerHeight;
					let btnId = e.currentTarget.id;
					elm_tmp_sub = document.querySelectorAll('.sideContents .sp_box');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						FNC.removeClass(elm_tmp_sub[j], 'open');
						elm_tmp_sub[j].removeAttribute('style');
					}
					FNC.removeClass('#side .sp_btn > li', 'active');
					FNC.addClass('html', 'modal_ofh-html');
					FNC.addClass('body', 'modal_ofh-body');
					document.body.style.height = 'calc(100% + ' + scrollTop_sp + 'px)';
					document.body.style.marginTop = 'calc(' + scrollTop_sp + 'px * -1)';
					document.getElementById('jre_header_in').style.zIndex = '0';


					elm_side.style.position = 'absolute';
					elm_side.style.height = deviceHight + 'px';
					if(document.body.id === 'top_page') {
						if(document.body.classList.contains('no-haveappLink')) {
							elm_side.style.top = '0';
						} else {
							if(document.getElementById('jre_header_in_wrap').classList.contains('is-fixed')) {
								elm_side.style.top = '-40px';
							} else {
								elm_side.style.top = '-102px';
							}
						}
					} else {
						if( document.body.classList.contains('no-haveappLink') == true){
							elm_side.style.top = '-62px';
						} else {
							elm_side.style.top = '-102px';
						}
					}


					switch (btnId) {
						case 'sp_traininfo':
							FNC.addClass('#trainInfoBox', 'open');
							document.getElementById('trainInfoBox').style.height = deviceHight + 'px';
							document.getElementById('trainInfoBox').style.top = scrollTop_sp + 'px';

							elm_tmp = document.getElementById('trainInfoBoxInner');
							elm_tmp.style.height = deviceHight - FNC.getOuterHeight('#trainInfoSpTitle', true) + 'px';
							elm_tmp.style.overflow = 'scroll';

							sp_title_height = FNC.getOuterHeight('#side #trainInfoBox .sp_title', true);

							elm_tmp = document.querySelectorAll('#trainInfoBox .trainInfoBox_innner');
							for (let i = 0; i < elm_tmp.length; i++) {
								elm_tmp[i].style.height = deviceHight - sp_title_height + 'px';
							}
							break;

						case 'sp_reservation':
							elm_tmp = document.querySelector('#side_searchPanel #cont_tab1');
							FNC.addClass(elm_tmp, 'open');
							elm_tmp.style.height = deviceHight + 'px';
							elm_tmp.style.top = scrollTop_sp + 'px';

							sp_title_height = FNC.getOuterHeight('#side #cont_tab1 .sp_title', true);

							elm_tmp = document.querySelectorAll('#side_searchPanel #cont_tab1 .cont_tab_innner');
							for (let i = 0; i < elm_tmp.length; i++) {
								elm_tmp[i].style.height = deviceHight - sp_title_height + 'px';
							}
							break;

						case 'sp_drp':
							elm_tmp = document.querySelector('#side_searchPanel #cont_tab2');
							FNC.addClass(elm_tmp, 'open');
							elm_tmp.style.height = deviceHight + 'px';
							elm_tmp.style.top = scrollTop_sp + 'px';
							sp_title_height = FNC.getOuterHeight('#side #cont_tab2 .sp_title', true);
							elm_tmp = document.querySelectorAll('#side_searchPanel #cont_tab2 .cont_tab_innner');
							for (let i = 0; i < elm_tmp.length; i++) {
								elm_tmp[i].style.height = deviceHight - sp_title_height + 'px';
							}
							break;
					}

					//SPで閉じる×ボタンを押した時の動作
					elm_tmp = document.querySelectorAll('.sp_title .closeBtn');
					for (let i = 0; i < elm_tmp.length; i++) {
						elm_tmp[i].addEventListener('click', () => {
							FNC.removeClass('html', 'modal_ofh-html');
							FNC.removeClass('body', 'modal_ofh-body');
							document.body.removeAttribute('style');
							elm_tmp_sub = document.querySelectorAll('#jre_header_in, #side, .cont_tab_innner, .trainInfoBox_innner');
							for (let j = 0; j < elm_tmp_sub.length; j++) {
								elm_tmp_sub[j].removeAttribute('style');
							}
							window.scrollTo(0, scrollTop_sp);

							elm_tmp_sub = document.querySelectorAll('.sideContents .sp_box');
							for (let j = 0; j < elm_tmp_sub.length; j++) {
								FNC.removeClass(elm_tmp_sub[j], 'open');
								elm_tmp_sub[j].removeAttribute('style');
							}
							FNC.removeClass('#side .sp_btn > li', 'active');
						});
					}

				});
			}
		}
	}

});








/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
loadイベント
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
window.addEventListener('load', () => {


/*--------------------------------------------------------------------------------------------------------
お知らせテキスト
--------------------------------------------------------------------------------------------------------*/

	//お知らせ表示フラグがtrueなら、お知らせ要素を挿入
	if(TRAININFOHTML05_FLG) {
		if(CONST.MATCH.SP) {//SP時
			document.querySelector('#cont_tab1 .sp_side_for_traininfoLink').insertAdjacentHTML('beforebegin', trinInfoHTML05);
			document.querySelector('#cont_tab2 .sp_side_for_traininfoLink').insertAdjacentHTML('beforebegin', trinInfoHTML05);
		} else {//PC時
			document.getElementById('side_searchPanel').insertAdjacentHTML('beforeend', trinInfoHTML05);
		}
	}



/*--------------------------------------------------------------------------------------------------------
キャンペーンバナー
--------------------------------------------------------------------------------------------------------*/

	//キャンペーン実施中フラグがtureなら、キャンペーンバナーを表示
	if(CPIMPLE_FLG) {
		document.querySelector('#cont_tab1 #tbServiceIn').insertAdjacentHTML('beforeend', cp_Banner);
	} else {//非表示
		FNC.addClass('#cont_tab1 #tbServiceIn', 'not_cp_Banner');
	}





/*--------------------------------------------------------------------------------------------------------
SP時
--------------------------------------------------------------------------------------------------------*/
	if(CONST.MATCH.SP) {//SP時
		let scrollTop_sp = '';
		let sp_title_height = '';
		let deviceHight = '';

		const elm_side = document.getElementById('side');
		if(elm_side) {
			FNC.removeClass('#side_searchPanel .box-tab', 'on');
			let sideH = FNC.getOuterHeight('#side', true);
			document.getElementsByTagName('footer')[0].style.paddingBottom = sideH + 'px';
			elm_tmp = document.getElementsByClassName('pageTop');
			for (let i = 0; i < elm_tmp.length; i++) {
				elm_tmp[i].style.bottom = '14%';
			}

			elm_tmp = document.querySelectorAll('.sp_side_for_traininfoLink > span');
			for (let i = 0; i < elm_tmp.length; i++) {
				elm_tmp[i].addEventListener('click', () => {
					elm_tmp_sub = document.querySelectorAll('.sideContents .sp_box');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						FNC.removeClass(elm_tmp_sub[j], 'open');
						elm_tmp_sub[j].removeAttribute('style');
					}
					FNC.removeClass('#side .sp_btn > li', 'active');
					FNC.addClass('#sp_traininfo', 'active');
					elm_tmp_sub = document.getElementById('trainInfoBox');
					FNC.addClass(elm_tmp_sub, 'open');
					elm_tmp_sub.style.height = deviceHight + 'px';
					elm_tmp_sub.style.top = scrollTop_sp + 'px';
					sp_title_height = FNC.getOuterHeight('#side #trainInfoBox .sp_title', true);
					elm_tmp_sub = document.querySelectorAll('#trainInfoBox .trainInfoBox_innner');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						elm_tmp_sub[j].style.height = deviceHight - sp_title_height + 'px';
					}
				});
			}


			elm_tmp = document.querySelectorAll('.sp_side_for_jrticket > span');
			for (let i = 0; i < elm_tmp.length; i++) {
				elm_tmp[i].addEventListener('click', () => {
					elm_tmp_sub = document.querySelectorAll('.sideContents .sp_box');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						FNC.removeClass(elm_tmp_sub[j], 'open');
						elm_tmp_sub[j].removeAttribute('style');
					}
					FNC.removeClass('#side .sp_btn > li', 'active');
					FNC.addClass('#sp_reservation', 'active');
					elm_tmp_sub = document.querySelector('#side_searchPanel #cont_tab1');
					FNC.addClass(elm_tmp_sub, 'open');
					elm_tmp_sub.style.height = deviceHight + 'px';
					elm_tmp_sub.style.top = scrollTop_sp + 'px';
					sp_title_height = FNC.getOuterHeight('#side #cont_tab1 .sp_title', ture);
					elm_tmp_sub = document.querySelectorAll('#side_searchPanel #cont_tab1 .cont_tab_innner');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						elm_tmp_sub[j].style.height = deviceHight - sp_title_height + 'px';
					}
				});
			}


			elm_tmp = document.querySelectorAll('.sp_side_for_jrdrp > span');
			for (let i = 0; i < elm_tmp.length; i++) {
				elm_tmp[i].addEventListener('click', () => {
					elm_tmp_sub = document.querySelectorAll('.sideContents .sp_box');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						FNC.removeClass(elm_tmp_sub[j], 'open');
						elm_tmp_sub[j].removeAttribute('style');
					}
					FNC.removeClass('#side .sp_btn > li', 'active');
					FNC.addClass('#sp_drp', 'active');
					elm_tmp_sub = document.querySelector('#side_searchPanel #cont_tab2');
					FNC.addClass(elm_tmp_sub, 'open');
					elm_tmp_sub.style.height = deviceHight + 'px';
					elm_tmp_sub.style.top = scrollTop_sp + 'px';
					sp_title_height = FNC.getOuterHeight('#side #cont_tab2 .sp_title', ture);
					elm_tmp_sub = document.querySelectorAll('#side_searchPanel #cont_tab2 .cont_tab_innner');
					for (let j = 0; j < elm_tmp_sub.length; j++) {
						elm_tmp_sub[j].style.height = deviceHight - sp_title_height + 'px';
					}
				});
			}
		}
	}

/*--------------------------------------------------------------------------------------------------------
PC時
--------------------------------------------------------------------------------------------------------*/
	if(CONST.MATCH.PC) {//PC時
		//検索パネル（タブ切り替え）
		elm_tmp = document.querySelectorAll('#ekinet-area-tab .list-tab > li');
		for (let i = 0; i < elm_tmp.length; i++) {
			elm_tmp[i].addEventListener('click', () => {
				let idName = elm_tmp[i].id;
				FNC.removeClass('#ekinet-area-tab .list-tab > li', 'active');
				FNC.addClass(elm_tmp[i], 'active');
				FNC.removeClass('#side_searchPanel .box-tab', 'on');
				FNC.addClass('#side_searchPanel .box-tab#cont_' + idName, 'on');
			});
		}
	}



});
