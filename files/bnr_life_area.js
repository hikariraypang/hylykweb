const bnr_header_life = (function () {/*

<!-- 生活サービスタブのバナーを生成（メガメニュー） -->
<div id="bnr_lifeList">
<ul class="life_bnrBox_linkList">
	<li><a href="https://www.jre-hotels.jp/" target="_blank" rel="noopener" data-jre-ga="header_bnr_link"><img src="/material/img/category_bnr/img_life_jrehotels.jpg" alt="JR-EAST HOTELS（別ウィンドウで開きます）"></a></li>
	<li><a href="/life_service/cityup/" data-jre-ga="header_bnr_link"><img src="/material/img/top/life/cityup430x430.png" alt="JR東日本が提案する、ワーケーションのカタチ CITY UP"></a></li>
	<li><a href="https://www.ekipara.com/" target="_blank" rel="noopener" data-jre-ga="header_bnr_link"><img src="/material/img/category_bnr/img_life_ekipara.jpg" alt="駅のショッピング情報満載！ 駅パラ（別ウィンドウで開きます）"></a></li>
	<li><a href="https://www.takanawagateway-city.com/" target="_blank" rel="noopener" data-jre-ga="header_bnr_link"><img src="/material/img/top/life/takanawagateway_city.png" alt="TAKANAWA GATEWAY CITY"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

const bnr_top_life = (function () {/*

<!-- 生活サービスタブのバナーを生成（トップページ） -->
<div id="top_bnr_lifeList">
<ul class="life_bnrBox_linkList">
	<li><a href="https://www.jre-hotels.jp/" target="_blank" rel="noopener" data-jre-ga="tab_life_link"><img src="/material/img/category_bnr/img_life_jrehotels.jpg" alt="JR-EAST HOTELS（別ウィンドウで開きます）"></a></li>
	<li><a href="/life_service/cityup/" data-jre-ga="tab_life_link"><img src="/material/img/top/life/cityup430x430.png" alt="JR東日本が提案する、ワーケーションのカタチ CITY UP"></a></li>
	<li><a href="https://www.ekipara.com/" target="_blank" rel="noopener" data-jre-ga="tab_life_link"><img src="/material/img/category_bnr/img_life_ekipara.jpg" alt="駅のショッピング情報満載！ 駅パラ（別ウィンドウで開きます）"></a></li>
	<li><a href="https://www.takanawagateway-city.com/" target="_blank" rel="noopener" data-jre-ga="tab_life_link"><img src="/material/img/top/life/takanawagateway_city.png" alt="TAKANAWA GATEWAY CITY"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

document.getElementById('megaM_life_bnrBox_linkList').insertAdjacentHTML('beforeend' , bnr_header_life);

jr_mtd_myH_url = location.href;


//JR東サイト以外のドメインだった時aタグのパスを絶対パスにする
let header_life_a = document.querySelectorAll('#bnr_lifeList a');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_life_a.length; i++) {
	let header_life_a_href = header_life_a[i].getAttribute('href');
		header_life_a_href = header_life_a_href.replace(/^\// , '//www.jreast.co.jp/');
		header_life_a[i].setAttribute('href', header_life_a_href);
	}
}
//JR東サイト以外のドメインだった時imgタグのパスを絶対パスにする
let header_life_img = document.querySelectorAll('#bnr_lifeList img');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_life_img.length; i++) {
	let header_life_img_src = header_life_img[i].getAttribute('src');
		header_life_img_src = header_life_img_src.replace(/^\// , '//www.jreast.co.jp/');
		header_life_img[i].setAttribute('src', header_life_img_src);
	}
}
//JR東サイト以外のドメインだった時sourceタグのパスを絶対パスにする
let header_life_source = document.querySelectorAll('#bnr_lifeList source');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_life_source.length; i++) {
	let header_life_source_srcset = header_life_source[i].getAttribute('srcset');
		header_life_source_srcset = header_life_source_srcset.replace(/^\// , '//www.jreast.co.jp/');
		header_life_source[i].setAttribute('srcset', header_life_source_srcset);
	}
}