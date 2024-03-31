'use strict';

window.addEventListener('DOMContentLoaded', footerInit);


/*--------------------------------------------------------------------------------------------------------
フッター初期化
--------------------------------------------------------------------------------------------------------*/

function footerInit() {


/*--------------------------------------------------------------------------------------------------------
footerHTMLを挿入
--------------------------------------------------------------------------------------------------------*/

	const footerHTML = `
<div id="jre_footer_in">
	<p class="topLink_sp"><a href="/" data-jre-ga="footer_link">JR東日本トップ</a></p>
	<div class="footer_top">
		<div class="footer_top_link">
			<p class="link_genre"><a href="/railway/" data-jre-ga="footer_link">鉄道・きっぷの予約</a></p>
			<ul class="category_link noJQ">
				<li><a href="/railway/#booking" data-jre-ga="footer_link">きっぷの予約</a></li>
				<li><a href="/railway/#station-search" data-jre-ga="footer_link">駅を調べる</a></li>
				<li><a href="/railway/#find" data-jre-ga="footer_link">乗りたい列車を探す</a></li>
				<li><a href="https://traininfo.jreast.co.jp/train_info/service.aspx" data-jre-ga="footer_link">運行情報</a></li>
				<li><a href="https://traininfo.jreast.co.jp/delay_certificate/" data-jre-ga="footer_link">遅延証明書</a></li>
				<li><a href="https://www.jreast-timetable.jp/" data-jre-ga="footer_link">時刻表</a></li>
				<li><a href="https://www.eki-net.com/Personal/top/index" rel="noopener" target="_blank" class="link_blank" data-jre-ga="footer_link">えきねっと<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
				<li><a href="/map/" data-jre-ga="footer_link">路線図</a></li>
				<li><a href="/railway/extratrain/" data-jre-ga="footer_link">臨時列車</a></li>
				<li><a href="/mv-guide/" data-jre-ga="footer_link">指定席券売機</a></li>
				<li><a href="/railway/#booking04" data-jre-ga="footer_link">きっぷのルール</a></li>
				<li><a href="/railway/#booking03" data-jre-ga="footer_link">定期券</a></li>
				<li><a href="/travel/otokukippu/" data-jre-ga="footer_link">おトクなきっぷ</a></li>
				<li><a href="https://www.eki-net.com/top/e-ticket/" data-jre-ga="footer_link">新幹線eチケット</a></li>
				<li><a href="/ltd_exp/" data-jre-ga="footer_link">在来線特急のご案内</a></li>
			</ul>
		</div>
		<div class="footer_top_link">
			<p class="link_genre"><a href="/travel/" data-jre-ga="footer_link">エリア・観光</a></p>
			<ul class="category_link noJQ">
				<li><a href="/travel/tohoku/" data-jre-ga="footer_link">東北・道南エリア</a></li>
				<li><a href="/travel/kanto_izu/" data-jre-ga="footer_link">関東・伊豆エリア</a></li>
				<li><a href="/travel/shinetsu_hokuriku/" data-jre-ga="footer_link">信越・北陸エリア</a></li>
				<li><a href="/travel/otokukippu/" data-jre-ga="footer_link">おトクなきっぷ</a></li>
				<li><a href="/travel/odekake/" data-jre-ga="footer_link">おでかけ・グルメ情報</a></li>
				<li><a href="/travel/event_campaign/" data-jre-ga="footer_link">イベント・キャンペーン</a></li>
				<li><a href="/travel/traintrip/" data-jre-ga="footer_link">鉄道特集</a></li>
				<li><a href="/otona/" data-jre-ga="footer_link">大人の休日倶楽部</a></li>
				<li><a href="/the-onsen/" data-jre-ga="footer_link">地・温泉</a></li>
				<li><a href="/ekihai/" data-jre-ga="footer_link">駅からハイキング</a></li>
				<li><a href="https://www.jre-travel.com/drp/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">JR東日本びゅうダイナミックレールパック<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
				<li><a href="/tyo/" data-jre-ga="footer_link">TYO By Shinkansen</a></li>
				<li><a href="/travel/ekitabi_concierge/" data-jre-ga="footer_link">駅たびコンシェルジュ</a></li>
				<li><a href="/travel/workation/" data-jre-ga="footer_link">ワーケーション</a></li>
				<li><a href="/railway/trainvert/" data-jre-ga="footer_link">トランヴェール</a></li>
			</ul>
		</div>
		<div class="footer_top_link">
			<p class="link_genre"><a href="/life/" data-jre-ga="footer_link">生活サービス</a></p>
			<ul class="category_link noJQ">
				<li><a href="/life/#ekinaka" data-jre-ga="footer_link">エキナカ</a></li>
				<li><a href="/life/#shopping_eki" data-jre-ga="footer_link">ショッピングセンター</a></li>
				<li><a href="/life/#hotel" data-jre-ga="footer_link">ホテル</a></li>
				<li><a href="/life/#leisure" data-jre-ga="footer_link" class="modal_link">スポーツ・レジャー</a></li>
				<li><a href="/life_service/immovables/" data-jre-ga="footer_link">住宅</a></li>
				<li><a href="/life/#share" data-jre-ga="footer_link">シェアオフィス</a></li>
				<li><a href="/life/#hakobyun" data-jre-ga="footer_link">列車荷物輸送</a></li>
				<li><a href="/kosodate/" data-jre-ga="footer_link">子育てサポート</a></li>
				<li><a href="/life/#ensen" data-jre-ga="footer_link" class="modal_link">沿線ブランド</a></li>
			</ul>
		</div>
		<div class="footer_top_link">
			<p class="link_genre">Suica</p>
			<ul class="category_link noJQ">
				<li><a href="/suica/" data-jre-ga="footer_link">Suica</a></li>
				<li><a href="/mobilesuica/" data-jre-ga="footer_link">モバイルSuica</a></li>
				<li><a href="/appsuica/" data-jre-ga="footer_link">Apple PayのSuica</a></li>
				<li><a href="/suicamoney/" data-jre-ga="footer_link">Suica電子マネー</a></li>
				<li><a href="/touchdego/" data-jre-ga="footer_link">タッチでGo!新幹線</a></li>
				<li><a href="/suica/suica_penguin_goods/" data-jre-ga="footer_link">Suicaのペンギングッズ</a></li>
				<li><a href="https://www.jrepoint.jp/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">JRE POINT<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
				<li><a href="//www.jreast.co.jp/card/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">ビューカード<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
			</ul>
		</div>
		<div class="footer_top_link">
			<p class="link_genre"><a href="/company/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">企業・IR・サステナビリティ<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
			<ul class="category_link noJQ">
				<li><a href="/company/corporate/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">企業情報<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
				<li><a href="/company/ir/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">IR情報（株主・投資家の皆さまへ）<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
				<li><a href="/company/csr/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">サステナビリティ<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
				<li><a href="/press/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">ニュースリリース<span class="screen-reader-text">別ウィンドウで開きます</span></a></li>
			</ul>
		</div>
		<div class="footer_top_link">
			<p class="link_genre sp_noAcc"><a href="/recruit/" target="_blank" rel="noopener" class="link_blank" data-jre-ga="footer_link">採用<span class="screen-reader-text">別ウィンドウで開きます</span></a></p>
		</div>
	<!--//.footer_top--></div>

	<div class="footer_bottom">
		<ul class="footer_bottom_link">
			<li><a href="/saferelief/" data-jre-ga="footer_link">安全・安心の取り組み</a></li>
			<li><a href="/equipment/" data-jre-ga="footer_link">お身体の不自由なお客さまへ</a></li>
			<li><a href="/info/" data-jre-ga="footer_link">よくいただくお問い合わせ</a></li>
			<li><a href="/press/" data-jre-ga="footer_link">ニュースリリース一覧</a></li>
			<li><a href="/socialmedia/" data-jre-ga="footer_link">ソーシャルメディア一覧</a></li>
			<li><a href="/smtapps/" data-jre-ga="footer_link">公式スマートフォンアプリ一覧</a></li>
		</ul>
		<p class="topLink_pc"><a href="/" data-jre-ga="footer_link">JR東日本トップ</a></p>
		<p class="My_JR"><a href="/myjreast/" data-jre-ga="footer_link">My JR-EAST</a></p>

		<ul class="footer_bottom_link02">
			<li><a href="/site/rules.html" data-jre-ga="footer_link">JR東日本ウェブサイトのご利用にあたって</a></li>
			<li><a href="/site/privacy.html" data-jre-ga="footer_link">個人情報の取扱いに関する基本方針</a></li>
			<li><a href="/company/compliance/" data-jre-ga="footer_link">JR東日本グループのコンプライアンスに関する取組み</a></li>
			<li><a href="/web_accessibility/" data-jre-ga="footer_link">ウェブアクセシビリティ方針</a></li>
		</ul>
	<!--//.footer_bottom--></div>
<!--//#jre_footer_in--></div>
<p class="copy">Copyright &copy; East Japan Railway Company All Rights Reserved.</p>
`;

	//フッターを生成する
	document.getElementById('jre_mtd_footer').insertAdjacentHTML('beforeend' , footerHTML);





/*--------------------------------------------------------------------------------------------------------
jreast.co.jp以外の該当するホストネームにマッチしたら要素のパスを書き換える
--------------------------------------------------------------------------------------------------------*/
	FNC.absolutePath('jre_mtd_footer');


/*--------------------------------------------------------------------------------------------------------
PC／SPで個別処理
--------------------------------------------------------------------------------------------------------*/

	if(CONST.MATCH.SP) {//SP時
		elm_tmp = document.querySelectorAll('#jre_footer_in .footer_top .link_genre:not(.sp_noAcc)');
		for (let i = 0; i < elm_tmp.length; i++) {
			elm_tmp[i].addEventListener('click', (e) => {
				FNC.slideToggle(e.currentTarget.nextElementSibling);
				e.currentTarget.classList.toggle('open');
			});
		}
	}
}
