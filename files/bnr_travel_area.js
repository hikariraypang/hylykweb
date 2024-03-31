const bnr_header_travel = (function () {/*

<!-- 観光タブのバナーを生成（メガメニュー） -->
<div id="bnr_travelList">
<ul class="travel_bnr_linkList">
	<li id="travel_bnr_fukko"><a href="/travel/fukko/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_tohokufukko.png" alt="東北復興ツーリズム"></a></li>
	<li id="travel_bnr_ot9"><a href="/otona/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_ot9.svg" alt="大人の休日倶楽部"></a></li>
	<li id="travel_bnr_theonsen"><a href="/the-onsen/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_theonsen.png" alt="地・温泉"></a></li>
	<li id="travel_bnr_ekihai"><a href="/ekihai/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_ekihai.svg" alt="駅からハイキング"></a></li>
	<li id="travel_bnr_drp" class="linkBlank"><a href="https://www.jre-travel.com/drp/" data-jre-ga="header_bnr_link" target="_blank" rel="noopener"><img src="/material/img/logo_drp.svg" alt="JR東日本びゅう ダイナミックレールパック（別ウィンドウで開きます）"></a></li>
	<li id="travel_bnr_tyo"><a href="/tyo/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_tyo.svg" alt="TYO"></a></li>
	<li id="travel_bnr_ekitabi"><a href="/travel/ekitabi_concierge/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_ekitabi_concierge.png" alt="駅たびコンシェルジュ"></a></li>
	<li id="travel_bnr_workation"><a href="/travel/workation/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_workation.png" alt="JREワーケーション"></a></li>
	<li id="travel_bnr_trainvert"><a href="/railway/trainvert/" data-jre-ga="header_bnr_link"><img src="/material/img/logo_trainvert.svg" alt="トランヴェール"></a></li>
	<li id="travel_bnr_tohokurelax" class="linkBlank"><a href="https://tohoku-relax.jp/" data-jre-ga="header_bnr_link" target="_blank" rel="noopener"><img src="/material/img/logo_tohoku-relax.png" alt="TOHOKU Relax（別ウィンドウで開きます）"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

const bnr_top_travel = (function () {/*

<!-- 観光タブのバナーを生成（トップページ） -->
<div id="top_bnr_travelList">
<ul class="travel_bnr_linkList">
	<li id="travel_bnr_fukko"><a href="/travel/fukko/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_tohokufukko.png" alt="東北復興ツーリズム"></a></li>
	<li id="travel_bnr_ot9"><a href="/otona/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_ot9.svg" alt="大人の休日倶楽部"></a></li>
	<li id="travel_bnr_theonsen"><a href="/the-onsen/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_theonsen.png" alt="地・温泉"></a></li>
	<li id="travel_bnr_ekihai"><a href="/ekihai/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_ekihai.svg" alt="駅からハイキング"></a></li>
	<li id="travel_bnr_drp" class="linkBlank"><a href="https://www.jre-travel.com/drp/" data-jre-ga="tab_travel_link" target="_blank" rel="noopener"><img src="/material/img/logo_drp.svg" alt="JR東日本びゅう ダイナミックレールパック（別ウィンドウで開きます）"></a></li>
	<li id="travel_bnr_tyo"><a href="/tyo/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_tyo.svg" alt="TYO"></a></li>
	<li id="travel_bnr_ekitabi"><a href="/travel/ekitabi_concierge/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_ekitabi_concierge.png" alt="駅たびコンシェルジュ"></a></li>
	<li id="travel_bnr_workation"><a href="/travel/workation/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_workation.png" alt="JREワーケーション"></a></li>
	<li id="travel_bnr_trainvert"><a href="/railway/trainvert/" data-jre-ga="tab_travel_link"><img src="/material/img/logo_trainvert.svg" alt="トランヴェール"></a></li>
	<li id="travel_bnr_tohokurelax" class="linkBlank"><a href="https://tohoku-relax.jp/" data-jre-ga="tab_travel_link" target="_blank" rel="noopener"><img src="/material/img/logo_tohoku-relax.png" alt="TOHOKU Relax（別ウィンドウで開きます）"></a></li>
	<li id="travel_bnr_mallfrusato" class="linkBlank"><a href="https://furusato.jrenet.jp/furusato?utm_source=jreast.co.jp&utm_medium=referral&utm_campaign=furusatoTOP" data-jre-ga="tab_travel_link" target="_blank" rel="noopener"><img src="/material/img/logo_mall_furusato.jpg" alt="JRE MALL ふるさと納税 寄付して旅行先を応援しよう（別ウィンドウで開きます）"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

document.getElementById('megaM_travel_bnr_linkList').insertAdjacentHTML('beforeend' , bnr_header_travel);


jr_mtd_myH_url = location.href;
//JR東サイト以外のドメインだった時aタグのパスを絶対パスにする
let header_travel_a = document.querySelectorAll('#bnr_travelList a');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_travel_a.length; i++) {
	let header_travel_a_href = header_travel_a[i].getAttribute('href');
		header_travel_a_href = header_travel_a_href.replace(/^\// , '//www.jreast.co.jp/');
		header_travel_a[i].setAttribute('href', header_travel_a_href);
	}
}
//JR東サイト以外のドメインだった時imgタグのパスを絶対パスにする
let header_travel_img = document.querySelectorAll('#bnr_travelList img');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_travel_img.length; i++) {
	let header_travel_img_src = header_travel_img[i].getAttribute('src');
		header_travel_img_src = header_travel_img_src.replace(/^\// , '//www.jreast.co.jp/');
		header_travel_img[i].setAttribute('src', header_travel_img_src);
	}
}
//JR東サイト以外のドメインだった時sourceタグのパスを絶対パスにする
let header_travel_source = document.querySelectorAll('#bnr_travelList source');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_travel_source.length; i++) {
	let header_travel_source_srcset = header_travel_source[i].getAttribute('srcset');
		header_travel_source_srcset = header_travel_source_srcset.replace(/^\// , '//www.jreast.co.jp/');
		header_travel_source[i].setAttribute('srcset', header_travel_source_srcset);
	}
}