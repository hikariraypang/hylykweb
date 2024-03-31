'use strict';

/*--------------------------------------------------------------------------------------------------------
汎用定数定義
--------------------------------------------------------------------------------------------------------*/
const MATCHMEDIA_WIDTH = {
	SP: 750,//この数値以下はSP幅、以上はPCおよびTABLET幅
	PC: 850//この数値以上はPC幅
}
const MEDIAQUERY = {
	SP: window.matchMedia('(max-width:' + MATCHMEDIA_WIDTH.SP + 'px)'),
	SPMORE: window.matchMedia('(min-width:' + (MATCHMEDIA_WIDTH.SP + 1) + 'px)'),
	PCLESS: window.matchMedia('(max-width:' + MATCHMEDIA_WIDTH.PC + 'px)'),
	PC: window.matchMedia('(min-width:' + (MATCHMEDIA_WIDTH.PC + 1) + 'px)')
}
const HOSTNAME = location.hostname;
const NAVI_UA = navigator.userAgent

/******************************************************/

const CONST = {
	//ホストネームがjreast.co.jp以外（jreast-timetable.jp、traininfo.jreast.co.jp）にマッチしたらtrue
	NOT_JREASTURL: HOSTNAME.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp/),

	//ホストネームがjreast.co.jpにマッチしたらtrue
	JREASTURL: HOSTNAME.match(/www\.jreast\.co\.jp/),

	//メディアクエリー
	MEDIAQUERY: {
		SP: MEDIAQUERY.SP,
		SPMORE: MEDIAQUERY.SPMORE,
		PCLESS: MEDIAQUERY.PCLESS,
		PC: MEDIAQUERY.PC
	},

	//ウィンドウ幅にマッチ
	/*
		:<<-- SP ---:
		:           :--- SPMORE ---:--------------:--------->>:
		:           :<<-------- TABLET --------->>:
		:<<---------:--------------:--- PCLESS ---:
		:                                         :--- PC -->>:
	*/
	MATCH: {
		//ページ構築時のwindow幅　SP幅より下にマッチしたらtrue
		SP: MEDIAQUERY.SP.matches,

		//ページ構築時のwindow幅　SP幅より上にマッチしたらtrue
		SPMORE: MEDIAQUERY.SPMORE.matches,

		//ページ構築時のwindow幅　タブレット幅にマッチしたらtrue
		TABLET: MEDIAQUERY.PCLESS.matches && MEDIAQUERY.SPMORE.matches,

		//ページ構築時のwindow幅　PC幅より下にマッチしたらtrue
		PCLESS: MEDIAQUERY.PCLESS.matches,

		//ページ構築時のwindow幅　PC幅より上にマッチしたらtrue
		PC: MEDIAQUERY.PC.matches
	},

	//ユーザーエージェント判定
	UA: {
		IPHONE: NAVI_UA.indexOf('iPhone') > -1,//iPhoneだったらtrue
		ANDROID: NAVI_UA.indexOf('Android') > -1,//Androidだったらtrue
		MOBILE: NAVI_UA.indexOf('Mobile') > -1//Mobileだったらtrue
	}
};
Object.freeze(CONST);




/*--------------------------------------------------------------------------------------------------------
汎用変数定義
--------------------------------------------------------------------------------------------------------*/
let elm_tmp;//要素を格納する汎用的な変数
let elm_tmp_sub;//要素を格納する汎用的な変数




/*--------------------------------------------------------------------------------------------------------
汎用関数定義
--------------------------------------------------------------------------------------------------------*/
const FNC = {

	/*
	removeElement:		要素を削除する
	showElement:		要素を表示する
	hideElement:		要素を非表示にする
	addClass:			要素にclassを追加する
	removeClass:		要素からclassを削除する
	getOuterHeight:		要素のheight値を取得する
	slideUp:			要素をslideUpする
	slideDown:			要素をslideDownする
	slideToggle:		要素をslideDown／slideUpする
	fadeIn:				要素をフェードインさせる
	fadeOut:			要素をフェードアウトさせる
	smoothScroll		スムーススクロール
	matchHeight:		要素の高さを合わせる
	keywordSearch:		検索窓のキーワードを元に検索する
	absolutePath		JR東日本サイト以外のドメインだった場合、各タグ属性のパスを絶対パスに置換する
	*/


	/**
	 * 要素を削除する
	 * @param {string} selector DOM要素
	 * @return {void}
	 */
	removeElement: function(selector) {
		let elm = document.querySelectorAll(selector);
		if(!elm.length) return;
		for (let i = 0; i < elm.length; i++) {
			elm[i].parentNode.removeChild(elm[i]);
		}
	},


	/**
	 * 要素を表示する（display:block）
	 * @param {string | HTMLElement} selector DOM要素
	 * @return {void}
	 */
	showElement: function(selector) {
		if(typeof selector === 'object') {
			selector.style.display = 'block';
		} else {
			let elm = document.querySelectorAll(selector);
			if(!elm.length) return;
			for (let i = 0; i < elm.length; i++) {
				elm[i].style.display = 'block';
			}
		}
	},


	/**
	 * 要素を非表示にする（display:none）
	 * @param {string | HTMLElement} selector DOM要素
	 * @return {void}
	 */
	hideElement: function(selector) {
		if(typeof selector === 'object') {
			selector.style.display = 'none';
		} else {
			let elm = document.querySelectorAll(selector);
			if(!elm.length) return;
			for (let i = 0; i < elm.length; i++) {
				elm[i].style.display = 'none';
			}
		}
	},


	/**
	 * 要素にclassを追加する
	 * @param {string | HTMLElement} selector DOM要素
	 * @param {string | string[]} className 追加するclass名　複数の場合は配列にする
	 * @return {void}
	 */
	addClass: function(selector, className) {
		let arr_className = Array.isArray(className) ? className : [className];
		if(typeof selector === 'object') {
			addClass_sub(selector, arr_className);
		} else {
			let elm = document.querySelectorAll(selector);
			if(!elm.length) return;
			for (let i = 0; i < elm.length; i++) {
				addClass_sub(elm[i], arr_className);
			}
		}

		function addClass_sub(selector, arr_className) {
			for (let i = 0; i < arr_className.length; i++) {
				selector.classList.add(arr_className[i]);
			}
		}
	},


	/**
	 * 要素からclassを削除する
	 * @param {string | HTMLElement} selector DOM要素
	 * @param {string | string[]} className 追加するclass名　複数の場合は配列にする
	 * @return {void}
	 */
	removeClass: function(selector, className) {
		let arr_className = Array.isArray(className) ? className : [className];
		if(typeof selector === 'object') {
			removeClass_sub(selector, arr_className);
		} else {
			let elm = document.querySelectorAll(selector);
			if(!elm.length) return;
			for (let i = 0; i < elm.length; i++) {
				removeClass_sub(elm[i], arr_className);
			}
		}

		function removeClass_sub(selector, arr_className) {
			for (let i = 0; i < arr_className.length; i++) {
				selector.classList.remove(arr_className[i]);
			}
		}
	},


	/**
	 * 要素のheight値を取得する
	 * @param {string} selector DOM要素
	 * @param {boolean=} flg trueならmarginTop、marginBottomも取得する
	 * @return {number} 要素のheight値
	 */
	getOuterHeight: function(selector, flg = false) {
		let elm = document.querySelector(selector);
		if(!elm) return;
		let elm_offsetHeight = elm.offsetHeight;
		let style = window.getComputedStyle(elm);
		let margin = flg ? parseInt(style.marginTop) + parseInt(style.marginBottom) : 0;
		return elm_offsetHeight + margin;
	},


	/**
	 * 要素をslideUpする
	 * @param {HTMLElement} elm slideUpさせる要素
	 * @param {number=} duration アニメーション速度（ミリ秒）
	 * @param {any=} callBackFunction コールバック関数
	 * @return {void}
	 */
	slideUp: function(elm, duration = 400, callBackFunction) {
		if(elm.style.height !== '' && elm.style.height !== '0px') {
			elm.style.transitionProperty = 'height';
			elm.style.transitionDuration = String(duration / 1000) + 's';
			elm.style.transitionTimingFunction = 'ease-in-out';
			elm.style.height = '0px';
			callBack();
		}

		/**
		 * コールバック関数があれば実行する関数
		 */
		function callBack() {
			const controller = new AbortController();
			elm.addEventListener('transitionend', () => {
				if(callBackFunction) {
					callBackFunction();
				}
				controller.abort();
			}, {signal: controller.signal});
		}
	},

	/**
	 * 要素をslideDownする
	 * @param {HTMLElement} elm slideDownさせる要素
	 * @param {number=} duration アニメーション速度（ミリ秒）
	 * @param {any=} callBackFunction コールバック関数
	 * @return {void}
	 */
	slideDown: function(elm, duration = 400, callBackFunction) {
		const copyElm = elm.cloneNode(true);
		elm.parentNode.appendChild(copyElm);
		copyElm.style.cssText = 'display:block; height:auto; visibility:hidden;';
		const acc_height = copyElm.clientHeight + 'px';
		elm.parentNode.removeChild(copyElm);

		elm.style.transitionProperty = 'height';
		elm.style.transitionDuration = String(duration / 1000) + 's';
		elm.style.transitionTimingFunction = 'ease-in-out';

		elm.style.height = acc_height;
		callBack();

		/**
		 * コールバック関数があれば実行する関数
		 */
		function callBack() {
			const controller = new AbortController();
			elm.addEventListener('transitionend', () => {
				if(callBackFunction) {
					callBackFunction();
				}
				controller.abort();
			}, {signal: controller.signal});
		}
	},

	/**
	 * 要素をslideToggle（slideDown／slideUp）する
	 * @param {HTMLElement} elm slideToggleさせる要素
	 * @param {number=} duration アニメーション速度（ミリ秒）
	 * @param {any=} callBackFunction コールバック関数
	 * @return {void}
	 */
	slideToggle: function(elm, duration = 400, callBackFunction) {
		if(elm.style.height !== '' && elm.style.height !== '0px') {
			FNC.slideUp(elm,duration,callBackFunction);
			return
		}

		FNC.slideDown(elm,duration,callBackFunction);
	},

	/**
	 * フェードイン
	 * @param {HTMLElement} elm fadeInさせる要素
	 * @param {number=} duration アニメーション速度（ミリ秒）
	 * @param {any=} callBackFunction コールバック関数
	 * @return {void}
	 */
	fadeIn: function(elm, duration = 400, callBackFunction) {
		elm.style.transitionProperty = 'opacity';
		elm.style.transitionDuration = String(duration / 1000) + 's';
		elm.style.transitionTimingFunction = 'ease-in-out';
		elm.style.opacity = '1';
		callBack();

		/**
		 * コールバック関数があれば実行する関数
		 */
		function callBack() {
			const controller = new AbortController();
			elm.addEventListener('transitionend', () => {
				if(callBackFunction) {
					callBackFunction();
				}
				controller.abort();
			}, {signal: controller.signal});
		}
	},

	/**
	 * フェードアウト
	 * @param {HTMLElement} elm fadeOutさせる要素
	 * @param {number=} duration アニメーション速度（ミリ秒）
	 * @param {any=} callBackFunction コールバック関数
	 * @return {void}
	 */
	fadeOut: function(elm, duration = 400, callBackFunction) {
		elm.style.transitionDuration = String(duration / 1000) + 's';
		elm.style.opacity = '0';
		callBack();

		/**
		 * コールバック関数があれば実行する関数
		 */
		function callBack() {
			const controller = new AbortController();
			elm.addEventListener('transitionend', () => {
				elm.style.display = 'none';
				if(callBackFunction) {
					callBackFunction();
				}
				controller.abort();
			}, {signal: controller.signal});
		}
	},

	/**
	 * スムーススクロール関数
	 * @param {number} scrollStopTop スクロール先のY位置
	 * @param {number=} duration 変化にかける時間
	 * @return {void}
	 */
	smoothScroll: function(scrollStopTop, duration = 600) {

		//スクロールイベント重複防止
		if(document.body.classList.contains('is-smoothScroll')) return false;

		//スクロールイベント重複防止classを付与
		document.body.classList.add('is-smoothScroll');

		//現在のY位置（始点）
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		//変化量を決定（始点からどれだけスクロールするか）
		scrollStopTop -= scrollTop;

		//アニメーション開始時間
		const start = new Date();

		//アニメーション初回呼び出し
		requestAnimationFrame(smoothScroll_mainAnime);


		/**
		 * イージング関数
		 * @param {number} t アニメーションの経過時間
		 * @param {number} b 始点
		 * @param {number} c 変化量
		 * @param {number} d アニメーション速度（ミリ秒）
		 * @return {number} 計算に基づいた現在のスクロール位置
		 */
		const easing = (t, b, c, d) => c * (0.5 - Math.cos((t / d) * Math.PI) / 2) + b;

		/**
		 * スクロールアニメーション関数
		 */
		function smoothScroll_mainAnime() {
			//イベント発生後の経過時間
			let elapsedTime = new Date() - start;

			//アニメーション終了処理
			if (elapsedTime > duration) {
				//スクロールイベント重複防止classを削除
				document.body.classList.remove('is-smoothScroll');

				//処理を終了
				return false;
			}

			//スクロール処理
			window.scrollTo(0, easing(elapsedTime, scrollTop, scrollStopTop, duration));

			requestAnimationFrame(smoothScroll_mainAnime);
		}
	},

	/**
	 * 要素の高さ（height）を一番大きいものに合わせる。.matchHeightに内包される.matchHeightChild, .matchHeightChild02, .matchHeightChild03, .matchHeightChild04のいずれかに対して実行
	 * @return {void}
	 */
	matchHeight: function() {
		let elm_subElm;//各要素
		let subElmHeight = [];//各要素の高さを格納する配列
		let elmMaxHeight;//各要素の高さの最大値
		const elm_matchHeight = document.getElementsByClassName('matchHeight');
		const matchHeightClass = ['.matchHeightChild', '.matchHeightChild02', '.matchHeightChild03', '.matchHeightChild04'];

		if(!elm_matchHeight.length) return;

		for (let i = 0; i < elm_matchHeight.length; i++) {
			for (let j = 0; j < matchHeightClass.length; j++) {
				elm_subElm = elm_matchHeight[i].querySelectorAll(matchHeightClass[j]);
				if(elm_subElm.length) {
					subElmHeight.length = 0;
					elmMaxHeight = 0;
					for (let k = 0; k < elm_subElm.length; k++) {
						subElmHeight.push(elm_subElm[k].clientHeight);
					}

					elmMaxHeight = Math.max.apply(null, subElmHeight);

					for (let k = 0; k < elm_subElm.length; k++) {
						elm_subElm[k].style.height = elmMaxHeight + 'px';
					}
				}
			}
		}
	},

	/**
	 * 検索窓のキーワードを元に検索する
	 * @return {void}
	 */
	keywordSearch: function() {
		const inputKeyword = document.getElementById('srchInput').value;
		const iKS = EscapeSJIS(inputKeyword);
		const locPath = location.pathname;
		const refURL = encodeURI( location.protocol + '//' + location.hostname + locPath );
		const searchParam = '?ie=s&lang=ja&ja_category=all&ref=' + refURL + '&kw=' + iKS + '&ord=p&page=1';
		location.href = CONST.NOT_JREASTURL ? 'https://www.jreast.co.jp/sitesearch/' + searchParam : '/sitesearch/' + searchParam;
		sessionStorage.removeItem('scroll');
	},

	/**
	 * JR東日本サイト以外のドメインだった場合、各タグ属性のパスを絶対パスに置換する（a href、img src、source srcset）
	 * @param {string} id 調査する要素の親要素id
	 * @return {void}
	 */
	absolutePath: function(id) {
		if(CONST.NOT_JREASTURL) {//jreast.co.jp以外のドメインだった場合

			const absolutePathSource = [
				{selector: '#' + id + ' a', attr: 'href'},//aタグのhref
				{selector: '#' + id + ' img', attr: 'src'},//imgタグのsrc
				{selector: '#' + id + ' source', attr: 'srcset'}//sourceタグのsrcset
			];

			for (const data of absolutePathSource) {
				let elm = document.querySelectorAll(data.selector);
				for (let i = 0; i < elm.length; i++) {
					let attr = elm[i].getAttribute(data.attr).replace(/^\// , '//www.jreast.co.jp/');
					elm[i].setAttribute(data.attr, attr);
				}
			}
		}
	}
}





/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
DOMが構築されたら
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', () => {


/*--------------------------------------------------------------------------------------------------------
ページ内移動（スムーススクロール）
--------------------------------------------------------------------------------------------------------*/
	(function() {
		const elm_scroll_a = document.querySelectorAll('a[href^="#"');
		for (let i = 0; i < elm_scroll_a.length; i++) {
			elm_scroll_a[i].addEventListener('click', (e) => {
				e.preventDefault();
				const href = elm_scroll_a[i].getAttribute('href');
				const scrollTarget = href === '#' || href === '' ? document.getElementsByTagName('html')[0] : document.getElementById(href.replace('#',''));
				const scrollStopTop = scrollTarget.offsetTop;

				//スムーススクロール実行
				FNC.smoothScroll(scrollStopTop);
			});
		}
	}());



/*--------------------------------------------------------------------------------------------------------
リサイズイベント
--------------------------------------------------------------------------------------------------------*/
	(function() {
		const resizeMediaQuery = CONST.MEDIAQUERY.SP;//リサイズイベントが発火するウインドウ幅
		const resizeMediaQueryListener = (e) => {
			//e.matchesがtrue:SP時の処理、false:PC時の処理


			//SP時、画像を切り替える（ファイル名の末尾を【_pc】または【_sp】に切り替える）
			const elm_spImg = document.querySelectorAll('img.spImg');
			let pcName = '_pc';//PC時のファイル名
			let spName = '_sp';//SP時のファイル名

			for (let i = 0; i < elm_spImg.length; i++) {
				let attr = elm_spImg[i].getAttribute('src');
				attr = e.matches ? attr.replace(pcName,spName) : attr.replace(spName,pcName);
				elm_spImg[i].setAttribute('src', attr);
				elm_spImg[i].style.visibility = 'visible';
			}


			//PC表示の時はbodyにクラス「pc_page」を付与、SP表示の時はbodyにクラス「sp_page」を付与
			FNC.removeClass('body', ['pc_page','sp_page']);
			FNC.addClass('body', e.matches ? 'sp_page' : 'pc_page');


			//パンくずリストの位置調整
			const elm_breadcrumb = document.getElementById('breadcrumb');
			if(elm_breadcrumb) {//パンくずリストがあれば
				FNC.removeElement('#breadcrumb');
				let elm_breadcrumbHTML = elm_breadcrumb.outerHTML;

				if(e.matches) {//SP時はページ下部に移動
					document.getElementsByTagName('footer')[0].insertAdjacentHTML('beforebegin', elm_breadcrumbHTML);
				} else {//PC時はページ上部に移動
					document.querySelector('#mainVisual').insertAdjacentHTML('afterbegin', elm_breadcrumbHTML);
				}
			}

		};

		//リスナー登録
		resizeMediaQuery.addEventListener('change', resizeMediaQueryListener);

		//初期化処理
		resizeMediaQueryListener(resizeMediaQuery);

	}());


/*--------------------------------------------------------------------------------------------------------
モーダルウィンドウ
--------------------------------------------------------------------------------------------------------*/
	(function() {
		let elm_modalBg;
		let modalContents;

		//モーダルウィンドウの背景要素とコンテンツ要素のopacityを0に設定する
		elm_tmp = document.querySelectorAll('.modalContents, .modal-bg');
		for (let i = 0; i < elm_tmp.length; i++) {
			elm_tmp[i].style.opacity = '0';
		}

		//モーダルウィンドウを開く処理
		const elm_modal = document.querySelectorAll('.modalBox .modalClick .modalImg, .modalBox .modalClick .modalText');
		for (let i = 0; i < elm_modal.length; i++) {
			elm_modal[i].addEventListener('click', (e) => {
				modalContents = e.currentTarget.closest('.modalClick').nextElementSibling;
				elm_modalBg = modalContents.nextElementSibling;

				FNC.showElement(elm_modalBg);
				FNC.showElement(modalContents);

				let width = window.innerWidth;
				let height = window.innerHeight;
				let sh = document.documentElement.scrollTop || document.body.scrollTop;
				let bh = document.body.scrollHeight;
				let mw = modalContents.offsetWidth;
				let mh = modalContents.offsetHeight;
				let x = (width - mw) / 2;
				let y = sh + (height - mh) / 2;

				elm_modalBg.style.height = bh + 'px';
				modalContents.style.left = x + 'px';
				modalContents.style.top = y + 'px';

				FNC.fadeIn(modalContents);
				FNC.fadeIn(elm_modalBg);
			});
		}

		//モーダルウィンドウを閉じる処理
		const elm_modalClose = document.querySelectorAll('.modal-bg, .modalContents .close');
		for (let i = 0; i < elm_modalClose.length; i++) {
			elm_modalClose[i].addEventListener('click', () => {
				FNC.fadeOut(elm_modalBg);
				FNC.fadeOut(modalContents);
			});
		}

	}());



/*--------------------------------------------------------------------------------------------------------
ユーザーエージェントでの処置
--------------------------------------------------------------------------------------------------------*/
	(function() {
		if(CONST.UA.IPHONE || CONST.UA.ANDROID && CONST.UA.MOBILE){

			//スマホ表示時電話番号リンクを付ける。
			elm_tmp = document.getElementsByClassName('tel_link');
			for (let i = 0; i < elm_tmp.length; i++) {
				let textContent = elm_tmp[i].textContent;
				elm_tmp[i].innerHTML = '<a href="tel:' + textContent.replace(/-/g, '') + '">' + textContent + '</a>';
			}

			//スマホ表示時リンクをSP用に切り替え
			elm_tmp = document.querySelectorAll('a[data-sp-href]');
			for (let i = 0; i < elm_tmp.length; i++) {
				let spHref = elm_tmp[i].getAttribute('data-sp-href');
				if(spHref.indexOf('/estation/sp/station/') < 0) {
					elm_tmp[i].setAttribute('href', spHref);
				}
			}

			//スマホ表示時リンクをSP用に切り替え（フォームアクション）
			elm_tmp = document.querySelectorAll('body [data-sp-action]');
			for (let i = 0; i < elm_tmp.length; i++) {
				let spAction = elm_tmp[i].getAttribute('data-sp-action');
				if(spAction.indexOf('/estation/sp/result.aspx') < 0) {
					elm_tmp[i].setAttribute('action', spAction);
				}
			}
		}

	}());






});



/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
すべての要素が読み込み完了なら
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/

window.addEventListener('load', () => {


/*--------------------------------------------------------------------------------------------------------
要素の高さ合わせ（matchHeight）
--------------------------------------------------------------------------------------------------------*/
	FNC.matchHeight();

});
