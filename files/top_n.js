'use strict';

let recommend_swiper,at_swiper,at_swiper_travel;
let recommend_sliideList = '';
let slideNone = '';



/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
DOMが構築されたら
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', () => {

/*--------------------------------------------------------------------------------------------------------
非同期でタブの中身を読み込む関数
--------------------------------------------------------------------------------------------------------*/
	/**
	 * 非同期でタブの中身を読み込む関数
	 * @param {string} currentGenreName タブのジャンル
	 * @param {string} bnr_Section 各ジャンルに対するバナーのHTML要素
	 * @return {void}
	 */
	function insertHtml(currentGenreName, bnr_Section = '') {
		axios({
			method       : 'GET',
			url          : '/inc/tab_innner_' + currentGenreName + '.html/',
			responseType : 'text',
		})
		.then(function (response) {
			// handle success
			const tabHTML = new DOMParser().parseFromString(response.data, 'text/html');//テキストデータをDOM要素にパース
			const tabSection = tabHTML.getElementById(currentGenreName + '_container').outerHTML;//DOM要素内の特定のidの中身を取得
			document.getElementById('at_' + currentGenreName).insertAdjacentHTML('beforeend' , tabSection);

			if(currentGenreName !== 'travel' && bnr_Section !== '') {
				insertBanner(currentGenreName, bnr_Section);
			}
		});
	}

/*--------------------------------------------------------------------------------------------------------
バナーを出力する関数
--------------------------------------------------------------------------------------------------------*/
	/**
	 * バナーを出力する関数
	 * @param {string} currentGenreName タブのジャンル
	 * @param {string} bnr_Section 各ジャンルに対するバナーのHTML要素
	 * @return {void}
	 */
	function insertBanner(currentGenreName, bnr_Section) {
		document.getElementById('top_'+ currentGenreName +'_bnrBox').insertAdjacentHTML('beforeend' , bnr_Section);
		slideSet(currentGenreName);
		document.getElementById('at_' + currentGenreName).getElementsByClassName('temp_loading')[0].classList.add('is_display_none');
	}










/*--------------------------------------------------------------------------------------------------------
運行情報が読み込めない時は配信停止中の文言を出す
--------------------------------------------------------------------------------------------------------*/

	let el_trainInfo_list = document.getElementsByClassName('trainInfo_list');
	let el_operation_box = document.getElementsByClassName('operation_box');
	let el_noData = document.getElementsByClassName('noData');
	if(!el_trainInfo_list[0]) {
		el_noData[0].classList.add('is-show');
		el_operation_box[0].classList.add('is-hidden');
	}

/*--------------------------------------------------------------------------------------------------------
入場規制アコーディオン
--------------------------------------------------------------------------------------------------------*/
const el_acc_btn = document.querySelectorAll('.restrictions_info.js_acc > dt');
if(el_acc_btn) {
	for (let i = 0; i < el_acc_btn.length; i++) {
		el_acc_btn[i].addEventListener('click' , function(e) {
			let thisBtn = e.currentTarget;
			if(thisBtn.classList.contains('is-active')) {
				thisBtn.classList.remove('is-active');
				thisBtn.nextElementSibling .classList.remove('is-show');
			} else {
				thisBtn.classList.add('is-active');
				thisBtn.nextElementSibling .classList.add('is-show');
			}
		});
	}
}


/*--------------------------------------------------------------------------------------------------------
観光タブのみ初期表示時に取得
--------------------------------------------------------------------------------------------------------*/

	insertHtml('travel');


	//各タブがクリック済かのフラグ（おすすめ以外）
	let click_flag = [true,false,false,false,false];

	const $tabListBtn = document.querySelectorAll('#tabList .btn_tabList button');
	const $bl_mainContents = document.getElementById('mainContents');
	const $main_tabContents = document.getElementById('main_tabContets');
	const $bl_tabContents = $main_tabContents.getElementsByClassName('bl_tabContents');

	for (let i = 0; i < $tabListBtn.length; i++) {
		$tabListBtn[i].addEventListener('click' , tabSwitch);
	}




	/**
	 * 各タブを切り替えた時の関数
	 * @param {HTMLElement} e クリックした要素
	 * @return {void}
	 */
	function tabSwitch(e) {
		//スマホの時はスクロールトップにタブを持ってくる
		if(CONST.MATCH.SP) {
			//スマホ時のタブ切り替えした時のスクロール位置取得（アプリバナーがあるかないか、現在スクロール位置で変わる）
			let $tabList_sTop;
			if(document.body.classList.contains('no-haveappLink') === true) {
				$tabList_sTop = document.getElementById('contents').offsetTop - 40;
			} else {
				if($bl_mainContents.classList.contains('is-fixed_padding') == false) {
					$tabList_sTop = document.getElementById('contents').offsetTop + 62;
				} else {
					$tabList_sTop = document.getElementById('contents').offsetTop;
				}
			}

			//ページ内スクロールを実行する
			FNC.smoothScroll($tabList_sTop);
		}


		let currentBtn = e.currentTarget;
		let tabNumber = e.currentTarget.dataset.tabnum;
		let currentGenreName = currentBtn.parentNode.id.replace('tabList_' , '');
		let currentGenre = currentBtn.parentNode.id.replace('tabList_' , 'at_');
		let el_loading = document.getElementsByClassName('temp_loading');
		let bnr_Section;


		//アクティブのボタン以外を押した場合
		if(!currentBtn.classList.contains('is-active')) {
			for (let i = 0; i < el_loading.length; i++) {
				el_loading[i].classList.remove('is_display_none');
			}
			//フラグがfalse（おすすめ以外）
			if(!click_flag[tabNumber] && currentGenreName !== 'recommend') {
				//各タブの共通バナーを取得して変数に格納
				switch(currentGenreName) {
					case 'train':
						bnr_Section = bnr_top_train;
						insertHtml(currentGenreName, bnr_Section);//HTMLとバナーを挿入
						break;

					case 'travel':
						bnr_Section = bnr_top_travel;
						insertBanner(currentGenreName, bnr_Section);//バナーだけ挿入
						break;

					case 'life':
						bnr_Section = bnr_top_life;
						insertHtml(currentGenreName, bnr_Section);//HTMLとバナーを挿入
						break;

					case 'suica':
						bnr_Section = bnr_top_suica;
						insertHtml(currentGenreName, bnr_Section);//HTMLとバナーを挿入
						break;
				}


				click_flag[tabNumber] = true;

			} else if(click_flag[tabNumber]) {//フラグをtrueの場合
				//各タブのスライダーを消す
				if(recommend_swiper) recommend_swiper.destroy();
				if(at_swiper) at_swiper.destroy();
				if(at_swiper_travel) at_swiper_travel.destroy();

				//もう一度スライダーを実行してローディングアニメーションを消す
				slideSet(currentGenreName);
				document.getElementById('at_' + currentGenreName).getElementsByClassName('temp_loading')[0].classList.add('is_display_none');
			}

			//ボタンをアクティブにする
			for (let n = 0; n < $tabListBtn.length; n++) {
				$tabListBtn[n].classList.remove('is-active');
			}
			currentBtn.classList.add('is-active');

			for (let m = 0; m < $bl_tabContents.length; m++) {
				$bl_tabContents[m].classList.remove('is-show');
			}

			//コンテンツを表示させる
			document.getElementById(currentGenre).classList.add('is-show');
		}
	}






	if(CONST.MATCH.SPMORE) {//SP時より大きい時
/*--------------------------------------------------------------------------------------------------------
ニュースリリース_タブ切り替え
--------------------------------------------------------------------------------------------------------*/

		const $n_tabListBtn = document.querySelectorAll('.info_btnList button');
		const $n_tabContents = document.getElementById('n_tabContets');
		const $n_tabContents_inn = $n_tabContents.getElementsByClassName('tabContents');

		for (let i = 0; i < $n_tabListBtn.length; i++) {
			$n_tabListBtn[i].addEventListener('click' , n_tabSwitch);
		}

		/**
		 * ニュースリリース_タブ切り替え
		 * @param {HTMLElement} e クリックした要素
		 * @return {void}
		 */
		function n_tabSwitch(e) {
			let currentBtn = e.currentTarget;
			let currentGenre = currentBtn.id.replace('btn_' , 'tab_');
			if(currentBtn.classList.contains('is-active')) {
			} else {
				for (let n = 0; n < $n_tabListBtn.length; n++) {
					$n_tabListBtn[n].classList.remove('is-active');
				}
				currentBtn.classList.add('is-active');
				for (let m = 0; m < $n_tabContents_inn.length; m++) {
					$n_tabContents_inn[m].classList.remove('is-show');
				}
				$n_tabContents.querySelectorAll('#' + currentGenre)[0].classList.add('is-show');
			}
		}
	}






	if(CONST.MATCH.SP) {//SP時
/*--------------------------------------------------------------------------------------------------------
ニュースリリース_アコーディオン
--------------------------------------------------------------------------------------------------------*/
		const $n_spacc_ListBtn = document.getElementsByClassName('informationBox_spBtn');
		for (let i = 0; i < $n_spacc_ListBtn.length; i++) {
			$n_spacc_ListBtn[i].addEventListener('click' , acc_toggle);
		}
		function acc_toggle(e) {
			const info_content = this.nextElementSibling;
			this.classList.toggle('is-active');
			info_content.classList.toggle('is-open');
		}

/*--------------------------------------------------------------------------------------------------------
タブボタンをスクロール固定
--------------------------------------------------------------------------------------------------------*/
		const el_main_informationArea = document.getElementById('main_informationArea');
		const el_nav_tabList = document.getElementById('nav_tabList');
		const el_main_tabContets = document.getElementById('main_tabContets');

		const topTab_options = {
			root: null,
			rootMargin: '-62px 0px 0px 0px', // ビューポートの中心を判定基準にする
			threshold: 0 // 閾値は0
		};

		const topTab_observer = new IntersectionObserver(topTab_doWhenIntersect, topTab_options);
		// 要素を監視する
		topTab_observer.observe(el_main_informationArea);

		function topTab_doWhenIntersect(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					el_main_tabContets.classList.remove('is-fixed_padding');
					document.getElementById('jre_header_in_wrap').classList.remove('is-fixed_tab');
					el_nav_tabList.classList.remove('is-fixed');
				} else {
					el_main_tabContets.classList.add('is-fixed_padding');
					document.getElementById('jre_header_in_wrap').classList.add('is-fixed_tab');
					el_nav_tabList.classList.add('is-fixed');
				}
			});
		}
	}
});








/*--------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
すべての要素が読み込み完了なら
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
window.addEventListener('load' , function(){



/*--------------------------------------------------------------------------------------------------------
メインビジュアルスライダー、Rtoasterの通信に失敗した場合、デフォルトコンテンツを表示
--------------------------------------------------------------------------------------------------------*/
	const def_sliideList = document.getElementById('rt_recommend').getElementsByClassName('swiper-slide');
	setTimeout(function(){
	if(!def_sliideList.length) {
		document.getElementById('at_recommend').classList.add('no_slide');
		document.getElementById('at_recommend').getElementsByClassName('temp_loading')[0].classList.add('is_display_none');
	}
	},10000);




});













/*--------------------------------------------------------------------------------------------------------
関数定義
--------------------------------------------------------------------------------------------------------*/

/**
 * おすすめタブのスライダー（Rtoasterのコールバック関数で発動）
 * @return {void}
 */
function def_slideSet() {
	document.getElementById('at_recommend').getElementsByClassName('temp_loading')[0].classList.add('is_display_none');
	recommend_sliideList = document.querySelectorAll('#recommend_container .top_slider .swiper-slide a');

	//SP幅でかつスライダー内のaタグにクラス「spslnon」があった場合はスライダーを発動させない
	for (let i = 0; i < recommend_sliideList.length; i++) {
		slideNone = recommend_sliideList[i].className.indexOf('spslnon') > -1;
	}
	if (CONST.MATCH.SP) {
		if(slideNone === true) {
			document.getElementById('recommend_container').classList.add('spNoneSlider');
		} else {
			slideFunc ();
		}
	} else {
		slideFunc ();
	}

	/**
	 * スライダー自体の実行関数
	 * @return {void}
	 */
	function slideFunc() {
		const recommend_list = document.querySelectorAll('#at_recommend .top_slider .swiper-slide');
		if(recommend_list.length > 1) {
			recommend_swiper = new Swiper('#at_recommend .top_slider .swiper-container', {
				observer: true,
				observeParents: true,
				navigation: {
					nextEl: '#at_recommend .top_slider .swiper-button-next',
					prevEl: '#at_recommend .top_slider .swiper-button-prev',
				},
				pagination: {
					el: '#at_recommend .top_slider .swiper-pagination',
					clickable: true,
				},
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				effect: 'slide',
				speed: 1000,
				spaceBetween: 0,
				slidesPerGroup: 1,
				centeredSlides :true,
				slidesPerView: 1,
				loop: true,
				loopedSlides: 4,
				simulateTouch: false,
				breakpoints: {
					750: {
						simulateTouch: true,
					}
				}
			});
		} else {
			document.getElementById('at_recommend').classList.add('no_slide');
		}
	}
}


/**
 * 観光タブのスライダー（Rtoasterのコールバック関数で発動）
 * @return {void}
 */
function travel_slideSet() {
	const travel_list = document.querySelectorAll('#at_travel .top_slider .swiper-slide');
	if(travel_list.length > 1) {
		at_swiper_travel = new Swiper('#at_travel .top_slider .swiper-container', {
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: '#at_travel .top_slider .swiper-button-next',
				prevEl: '#at_travel .top_slider .swiper-button-prev',
			},
			pagination: {
				el: '#at_travel .top_slider .swiper-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			effect: 'slide',
			speed: 1000,
			centeredSlides :true,
			slidesPerView: 1,
			loop: true,
			loopedSlides: 4,
			simulateTouch: false,
			breakpoints: {
				750: {
					simulateTouch: true
				}
			}
		});
	} else {
		document.getElementById('at_travel').classList.add('no_slide');
	}
}



/**
 * 各タブを切り替えた時に再発動させるための関数
 * @param {string} tabName タブの名前
 * @return {void}
 */
function slideSet(tabName){

	let elm_id;

	//tabNameの値によって分岐
	switch(tabName) {
		case 'recommend':
			def_slideSet();
			break;

		case 'travel':
			travel_slideSet();
			break;

		case 'train':
			elm_id = 'at_train';
			break;

		case 'life':
			elm_id = 'at_life';
			break;

		case 'suica':
			elm_id = 'at_suica';
			break;
	}

	//elm_idに値が格納されていればその値を元にswiperを起動
	if(typeof elm_id !== 'undefined') {

		const train_list = document.querySelectorAll('#' + elm_id + ' .top_slider .swiper-slide');
		if(train_list.length > 1) {
			at_swiper = new Swiper('#' + elm_id + ' .top_slider .swiper-container', {
				observer: true,
				observeParents: true,
				navigation: {
					nextEl: '#' + elm_id + ' .top_slider .swiper-button-next',
					prevEl: '#' + elm_id + ' .top_slider .swiper-button-prev',
				},
				pagination: {
					el: '#' + elm_id + ' .top_slider .swiper-pagination',
					clickable: true,
				},
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				effect: 'slide',
				speed: 1000,
				centeredSlides :true,
				slidesPerView: 1,
				loop: true,
				loopedSlides: 4,
				simulateTouch: false,
				breakpoints: {
					750: {
						simulateTouch: true
					}
				}
			});
		} else {
			document.getElementById(elm_id).classList.add('no_slide');
		}

	}

}
