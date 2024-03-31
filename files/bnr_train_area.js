const bnr_header_train = (function () {/*

<!-- 鉄道タブのバナーを生成（メガメニュー） -->
<div id="bnr_trainList">
<ul class="train_bnrBox_linkList">
	<li><a href="/saphir/" data-jre-ga="header_bnr_link"><img src="/material/img/category_bnr/img_train_saphir.jpg" alt="サフィール踊り子"></a></li>
	<li><a href="/shiki-shima/" data-jre-ga="header_bnr_link"><img src="/material/img/category_bnr/img_train_shikishima.jpg" alt="四季島"></a></li>
	<li><a href="/granclass/" data-jre-ga="header_bnr_link"><img src="/img/bnr/top/railway/granclass_sp.jpg" alt="グランクラス"></a></li>
	<li><a href="/railway/joyful/" data-jre-ga="header_bnr_link"><img src="/material/img/category_bnr/img_train_joyful.jpg" alt="のってたのしい列車"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

const bnr_top_train = (function () {/*

<!-- 鉄道タブのバナーを生成（トップページ） -->
<div id="top_bnr_trainList">
<ul class="train_bnrBox_linkList">
	<li><a href="/saphir/" data-jre-ga="tab_train_link"><img src="/material/img/category_bnr/img_train_saphir.jpg" alt="サフィール踊り子"></a></li>
	<li><a href="/shiki-shima/" data-jre-ga="tab_train_link"><img src="/material/img/category_bnr/img_train_shikishima.jpg" alt="四季島"></a></li>
	<li><a href="/granclass/" data-jre-ga="tab_train_link"><img src="/img/bnr/top/railway/granclass_sp.jpg" alt="グランクラス"></a></li>
	<li><a href="/railway/joyful/" data-jre-ga="tab_train_link"><img src="/material/img/category_bnr/img_train_joyful.jpg" alt="のってたのしい列車"></a></li>
</ul>
</div>

*/}).toString().split('\n').slice(1, -1).join('\n');

if(document.getElementById('megaM_train_bnrBox')) {
	document.getElementById('megaM_train_bnrBox').insertAdjacentHTML('beforeend' , bnr_header_train);
}

jr_mtd_myH_url = location.href;
//JR東サイト以外のドメインだった時aタグのパスを絶対パスにする
let header_train_a = document.querySelectorAll('#bnr_trainList a');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_train_a.length; i++) {
	let header_train_a_href = header_train_a[i].getAttribute('href');
		header_train_a_href = header_train_a_href.replace(/^\// , '//www.jreast.co.jp/');
		header_train_a[i].setAttribute('href', header_train_a_href);
	}
}
//JR東サイト以外のドメインだった時imgタグのパスを絶対パスにする
let header_train_img = document.querySelectorAll('#bnr_trainList img');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_train_img.length; i++) {
	let header_train_img_src = header_train_img[i].getAttribute('src');
		header_train_img_src = header_train_img_src.replace(/^\// , '//www.jreast.co.jp/');
		header_train_img[i].setAttribute('src', header_train_img_src);
	}
}
//JR東サイト以外のドメインだった時sourceタグのパスを絶対パスにする
let header_train_source = document.querySelectorAll('#bnr_trainList source');
if(jr_mtd_myH_url.match(/jreast-timetable\.jp|traininfo\.jreast\.co\.jp|sightseeing\.jrnets\.co\.jp/)) {
for (let i = 0; i < header_train_source.length; i++) {
	let header_train_source_srcset = header_train_source[i].getAttribute('srcset');
		header_train_source_srcset = header_train_source_srcset.replace(/^\// , '//www.jreast.co.jp/');
		header_train_source[i].setAttribute('srcset', header_train_source_srcset);
	}
}