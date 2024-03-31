const bnr_header_suica = (function () {/*

<!-- Suicaタブのバナーを生成 -->
<div id="bnr_suicaList">
<ul class="mugaM_suica_linkBox03_bnrlist">
	<li><a href="https://www.jrepoint.jp/" target="_blank" rel="noopener" data-jre-ga="header_bnr_link"><img src="/material/img/logo_jrepoint_sp.svg" alt="JRE POINT（別ウインドウで開きます）" id="img_mugaM_jrePoint"></a></li>
	<li><a href="/card/" target="_blank" rel="noopener" data-jre-ga="header_bnr_link">
	<img src="/material/img/logo_viewcard_sp.svg" alt="VIEW CARD（別ウインドウで開きます）" id="img_mugaM_viewCard"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

const bnr_top_suica = (function () {/*

<!-- Suicaタブのバナーを生成（トップページ） -->
<div id="top_bnr_suicaList">
<ul class="linkBox03_bnrlist">
	<li><a href="https://www.jrepoint.jp/" target="_blank" rel="noopener" data-jre-ga="tab_suica_link">
	<picture>
		<source media="(max-width: 750px)" srcset="/material/img/logo_jrepoint_sp.svg">
		<img src="/material/img/logo_jrepoint.svg" alt="JRE POINT（別ウインドウで開きます）" id="img_jrePoint">
	</picture>
	</a></li>
	<li><a href="/card/" target="_blank" rel="noopener" data-jre-ga="tab_suica_link">
	<picture>
		<source media="(max-width: 750px)" srcset="/material/img/logo_viewcard_sp.svg">
		<img src="/material/img/logo_viewcard.svg" alt="VIEW CARD（別ウインドウで開きます）" id="img_viewCard">
	</picture>
	</a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

document.getElementById('megaM_suica_bnrBox_linkList').insertAdjacentHTML('beforeend' , bnr_header_suica);

jr_mtd_myH_url = location.href;

//JR東サイト以外のドメインだった時aタグのパスを絶対パスにする
let header_suica_a = document.querySelectorAll('#bnr_suicaList a');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_suica_a.length; i++) {
	let header_suica_a_href = header_suica_a[i].getAttribute('href');
		header_suica_a_href = header_suica_a_href.replace(/^\// , '//www.jreast.co.jp/');
		header_suica_a[i].setAttribute('href', header_suica_a_href);
	}
}
//JR東サイト以外のドメインだった時imgタグのパスを絶対パスにする
let header_suica_img = document.querySelectorAll('#bnr_suicaList img');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_suica_img.length; i++) {
	let header_suica_img_src = header_suica_img[i].getAttribute('src');
		header_suica_img_src = header_suica_img_src.replace(/^\// , '//www.jreast.co.jp/');
		header_suica_img[i].setAttribute('src', header_suica_img_src);
	}
}
//JR東サイト以外のドメインだった時sourceタグのパスを絶対パスにする
let header_suica_source = document.querySelectorAll('#bnr_suicaList source');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_suica_source.length; i++) {
	let header_suica_source_srcset = header_suica_source[i].getAttribute('srcset');
		header_suica_source_srcset = header_suica_source_srcset.replace(/^\// , '//www.jreast.co.jp/');
		header_suica_source[i].setAttribute('srcset', header_suica_source_srcset);
	}
}