//////////////////////////////////////////////
// 検索窓画面
//////////////////////////////////////////////
/* 画面作成処理 */
function sidePanelShow(){

	//検索パネルのHTML
	const searchPanel_cont_tab1 = `
	<form name="searchWindow" id="searchwindowfeatures" action="https://www.eki-net.com/Personal/reserve/wb/SearchWindowFeatures/KeepRouteSearchCondition" method="post" target="_blank">
		<p class="sp_title">JRきっぷ<span id="cont_tab1_close_btn" class="closeBtn"></span></p>
		<div class="cont_tab_innner">
			<div class="box-out" id="tbServiceIn">
				<div class="cont-box">
					<div class="b-box">
						<dl>
							<dt><label for="cont1Line">路線</label></dt>
							<dd>
								<div class="selectBox w100p">
									<select name="cont1Line" id="cont1Line" onchange="SetStationListByCategoryCode();"></select>
								</div>
							</dd>
						</dl>
						<dl>
							<dt><label for="cont1StationS">出発駅</label></dt>
							<dd>
								<div class="selectBox w100p">
									<select name="cont1StationS" id="cont1StationS"></select>
									<input id="ridestation" name="ridestation" type="hidden" />
								</div>
							</dd>
						</dl>
						<dl>
							<dt><label for="cont1StationE">到着駅</label></dt>
							<dd>
								<div class="selectBox w100p">
									<select name="cont1StationE" id="cont1StationE"></select>
									<input id="getoffstation" name="getoffstation" type="hidden" />
								</div>
							</dd>
						</dl>
						<div id="dateSelect_departure" class="dateSelect_cont">
							<dl>
								<dt><label for="cont1Date_departure">日時</label></dt>\
								<dd>
									<div class="selectBox">
										<select name="cont1Date_departure" id="cont1Date_departure" onchange="SetDayListBySelectedMonth();"></select>
									</div>
									<span>月</span>
									<div class="selectBox select02">
										<select name="cont1Date_departure_day" id="cont1Date_departure_day">
										</select>
									</div>
									<span>日</span>
									<input id="boardingDate" name="boardingDate" type="hidden" />
								</dd>
							</dl>
							<dl class="dateTime_select">
								<dd>
									<div class="selectBox">
										<select name="hour" id="hour" class="fix-me w55">
											<option value="00">00</option>
											<option value="01">01</option>
											<option value="02">02</option>
											<option value="03">03</option>
											<option value="04">04</option>
											<option value="05">05</option>
											<option value="06">06</option>
											<option value="07">07</option>
											<option value="08">08</option>
											<option value="09">09</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
											<option value="13">13</option>
											<option value="14">14</option>
											<option value="15">15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
											<option value="20">20</option>
											<option value="21">21</option>
											<option value="22">22</option>
											<option value="23">23</option>
										</select>
									</div>
									<span>時</span>
									<div class="selectBox select02">
										<select name="minute" id="minute" class="fix-me w55">
											<option value="00">00</option>
											<option value="05">05</option>
											<option value="10">10</option>
											<option value="15">15</option>
											<option value="20">20</option>
											<option value="25">25</option>
											<option value="30">30</option>
											<option value="35">35</option>
											<option value="40">40</option>
											<option value="45">45</option>
											<option value="50">50</option>
											<option value="55">55</option>
										</select>
									</div>
									<span>分</span>
								</dd>
							</dl>
						</div>
						<ul id="dateSelect_btn">
							<li id="departure" class="active">出発</li>
							<li id="arrival">到着</li>
							<input id="departureArrivalChoice" name="departureArrivalChoice" type="hidden" />
						</ul>
						<dl class="num_people">
							<dt>人数</dt>
							<dd><label id="maxnum">最大6名まで</label></dd>
						</dl>
						<div id="jrTicket_number">
							<dl id="jrTicket_number_adult">
								<dt><label for="adultnumber">おとな</label></dt>
								<dd>
									<div class="selectBox">
										<select name="adultnumber" id="adultnumber" onchange="CheckMaxNumber();">
											<option value="0">0名</option>
											<option value="1" selected>1名</option>
											<option value="2">2名</option>
											<option value="3">3名</option>
											<option value="4">4名</option>
											<option value="5">5名</option>
											<option value="6">6名</option>
										</select>
									</div>
								</dd>
							</dl>
							<dl id="jrTicket_number_children">
								<dt><label for="childnumber">こども</label></dt>
								<dd>
									<div class="selectBox">
										<select name="childnumber" id="childnumber" onchange="CheckMaxNumber();">
											<option value="0">0名</option>
											<option value="1">1名</option>
											<option value="2">2名</option>
											<option value="3">3名</option>
											<option value="4">4名</option>
											<option value="5">5名</option>
											<option value="6">6名</option>
										</select>
									</div>
								</dd>
							</dl>
						</div>
						<p id="jrticket_error_max_people" class="top_tP-error" style="display:none;">1回のお申込み人数は6名までとなります。</p>
					</div><!-- /.b-box -->
					<p class="ekinet-area-btn">
						<button type="button" id="kuuseki-btn">列車を検索する</button>
					</p>
				</div><!-- /.cont-box -->
			</div><!-- #tbServiceIn -->
			<!-- ▼えきねっとリンク -->
			<div class="ekinet-area-link">
				<a href="https://www.eki-net.com/" target="_blank">
					<img src="/material/img/logo_ekinet.svg" alt="えきねっとリンク">
				</a>\
			</div>
			<p class="sp_side_for_traininfoLink"></p>
			<!-- ▲えきねっとリンク -->
		</div>
		<!--▲ JRきっぷタブ-->
	</form>
	`;

	//検索パネルを挿入
	document.querySelector('#ekinet-area-inner #cont_tab1').innerHTML = searchPanel_cont_tab1;


	//初期表示処理
	loadPageDataInfo();


	//JRきっぷ　出発／到着切り替え
	elm_tmp = document.querySelectorAll('#dateSelect_btn > li');
	for (let i = 0; i < elm_tmp.length; i++) {
		elm_tmp[i].addEventListener('click', (e) => {
			FNC.removeClass('#dateSelect_btn > li', 'active');
			FNC.addClass(e.currentTarget, 'active');
		});
	}


	//「列車を検索する」ボタン押下処理
	document.getElementById('kuuseki-btn').addEventListener('click', () => {

		//最大人数超える場合、検索不可
		if(getComputedStyle(document.getElementById('maxnum')).color === 'rgb(255, 0, 0)') return;

		//乗車駅を取得して設定
		document.getElementById('ridestation').value = document.getElementById('cont1StationS').options[document.getElementById('cont1StationS').selectedIndex].text;

		//降車駅を取得して設定
		document.getElementById('getoffstation').value = document.getElementById('cont1StationE').options[document.getElementById('cont1StationE').selectedIndex].text;

		//出発到着選択
		document.getElementById('departureArrivalChoice').value = document.getElementById('departure').classList.contains('active') ? '0' : '1';

		//乗車年月日
		let rideOnDate = new Date().getFullYear() + document.getElementById('cont1Date_departure').options[document.getElementById('cont1Date_departure').selectedIndex].text + document.getElementById('cont1Date_departure_day').options[document.getElementById('cont1Date_departure_day').selectedIndex].text
		document.getElementById('boardingDate').value = rideOnDate;

		//submit
		document.searchWindow.submit();
	});
}





/* 初期表示処理 */
function loadPageDataInfo(){

	var rosenObj = document.getElementById('cont1Line');						//路線プルダウンリスト
	var rosenName = '';

	const rosenFile = '/material/json/rosen.json'; 							//読み込む路線jsonファイル名（root相対パス）
	let xmlhttp = new XMLHttpRequest(); 										//ajax通信開始

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) { 										//取得成功したら
				let data = JSON.parse(xmlhttp.responseText);					//jsonデータをパース
				for (var key in data) {
					rosenName = data[key].split(',');
					rosenObj.add(new Option(rosenName[1], rosenName[0]));		//路線リストを設定
				}
			} else { 															//取得失敗したら
				//データを読み込めませんでした
			}
		}
	}
	xmlhttp.open('GET', rosenFile, true);										//外部jsonファイル取得
	xmlhttp.send();

	rosenObj.selectedIndex = 0;													//路線初期値を設定
	SetStationListByCategoryCode('1');											//駅名設定処理を呼び出す

	var date1 = new Date();														//システム日付
	var date2 = new Date(date1);												//1か月+7日後の日付
	date2.setMonth(date1.getMonth() + 1);
	date2.setDate(date2.getDate() + 7);
	var monthObj = document.getElementById('cont1Date_departure');				//日時の月
	monthObj.innerHTML = '';

	if (date2.getMonth() - date1.getMonth() > 0) {								//日時の月リストを設定
		for (var i = date1.getMonth(); i <= date2.getMonth(); i++) {
			monthObj.add(new Option(FillZero(i+1), FillZero(i+1)));
		}
	} else {
		if (date1.getMonth() + 1 == 11 && date2.getMonth() + 1 == 1) {
			monthObj.add(new Option('11', '11'));
			monthObj.add(new Option('12', '12'));
			monthObj.add(new Option('01', '01'));
		} else if (date1.getMonth() + 1 == 12 && date2.getMonth() + 1 == 1) {
			monthObj.add(new Option('12', '12'));
			monthObj.add(new Option('01', '01'));
		} else if (date1.getMonth() + 1 == 12 && date2.getMonth() + 1 == 2) {
			monthObj.add(new Option('12', '12'));
			monthObj.add(new Option('01', '01'));
			monthObj.add(new Option('02', '02'));
		}
	}

	monthObj.value = FillZero(date1.getMonth() + 1);							//日時の月初期値を設定
	SetDayListBySelectedMonth();
	var dayObj = document.getElementById('cont1Date_departure_day');			//日時の日
	var hoursObj = document.getElementById('hour');								//日時の時
	var minutesObj = document.getElementById('minute');							//日時の分
	dayObj.value = FillZero(date1.getDate());									//日時の日初期値を設定

	if (date1.getMinutes() > 55) {												//時切上げの場合
		if (date1.getHours() + 1 > 23) {										//日切上げの場合
			if (date1.getDate() + 1 > dayObj.length) {							//月切上げの場合
				if (date1.getMonth() + 2 > 12) {								//年切上げの場合
					monthObj.value = '01';										//日時の月初期値を設定
				} else {
					monthObj.value = FillZero(date1.getMonth() + 2);			//日時の月初期値を設定
				}
				SetDayListBySelectedMonth();
				dayObj.value = '01';											//日時の日初期値を設定
			} else {
				dayObj.value = FillZero(date1.getDate() + 1);					//日時の日初期値を設定
			}
			hoursObj.value = '00';												//日時の時初期値を設定
		} else {
			hoursObj.value = FillZero(date1.getHours() + 1);					//日時の時初期値を設定
		}
		minutesObj.value = '00';												//日時の分初期値を設定
	} else {
		hoursObj.value = FillZero(date1.getHours());							//日時の時初期値を設定
		for (var j = 0; j < minutesObj.length; j++) {							//日時の分初期値を設定
			if (Number(minutesObj.options[j].value) - date1.getMinutes() >= 0) {
				minutesObj.value = minutesObj.options[j].value;
				break;
			}
		}
	}



}

/* 選択した路線について乗車駅リストと降車駅リストを設定処理 */
function SetStationListByCategoryCode(rosen) {

	var depStationObj = document.getElementById('cont1StationS');				//乗車駅プルダウンリスト
	var arrStationObj = document.getElementById('cont1StationE');				//降車駅プルダウンリスト
	var selectedRosen = '';
	var stationName = '';

	if (rosen == undefined) {													//選択したの路線を取得
		selectedRosen = document.getElementById('cont1Line').value;
	} else {
		selectedRosen = rosen;
	}

	depStationObj.innerHTML = '';												//乗車駅リストをクリア
	arrStationObj.innerHTML = '';												//降車駅リストをクリア

	const stationFile = '/material/json/station.json'; 						//読み込む駅名jsonファイル名（root相対パス）
	let xmlhttp = new XMLHttpRequest(); 										//ajax通信開始

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) { 										//取得成功したら
				let data = JSON.parse(xmlhttp.responseText);					//jsonデータをパース
				for (var key in data) {
					stationName = data[key].split(',');
					if (selectedRosen == stationName[0]) {
						depStationObj.add(new Option(stationName[2], stationName[1]));	//乗車駅リストを設定
						arrStationObj.add(new Option(stationName[2], stationName[1]));	//降車駅リストを設定
					}
				}
			} else { 															//取得失敗したら
				//データを読み込めませんでした
			}
		}
	}
	xmlhttp.open('GET', stationFile, true);										// 外部jsonファイル取得
	xmlhttp.send();

	depStationObj.selectedIndex = 0;											//乗車駅初期値を設定
	arrStationObj.selectedIndex = 0;											//降車駅初期値を設定
}

/* 選択した月につて日のリストを設定処理 */
function SetDayListBySelectedMonth() {

	var monthObj = document.getElementById('cont1Date_departure');				//日時の月
	var dayObj = document.getElementById('cont1Date_departure_day');			//日時の日
	var date1 = new Date();														//システム日付
	var date2 = new Date();
	dayObj.innerHTML = '';														//日時の日リストをクリア
	if(monthObj.value >= date1.getMonth() + 1) {
		date2 = new Date(date1.getFullYear(), Number(monthObj.value), 0);
	} else {
		date2 = new Date(date1.getFullYear() + 1, Number(monthObj.value), 0);
	}
	var lastDay = date2.getDate();												//選択したの月の最後日を取得
	for(var i = 1; i <= lastDay; i++) {
		dayObj.add(new Option(FillZero(i), FillZero(i)));						//日時の日リストを設定
	}
}

/* 月、日、時、分は2桁未満の場合、0を頭に付けて表示する */
function FillZero(p) {
	if (p.toString().length == 1) {
		return '0' + p;
	} else {
		return '' + p;
	}
}

/* 合計人数（“人数(おとな)”＋“人数(こども)”）は最大6名までのチェック処理 */
function CheckMaxNumber() {

	var adultNumObj = document.getElementById('adultnumber');					//おとな人数
	var childrenNumObj = document.getElementById('childnumber');				//こども人数
	var maxNumObj = document.getElementById('maxnum');							//最大人数(ラベル)
	if (Number(adultNumObj.value) + Number(childrenNumObj.value) > 6) {			//6名超える場合エラーメッセージを表示する
		document.getElementById('jrticket_error_max_people').style.display ='';
	} else {
		document.getElementById('jrticket_error_max_people').style.display ='none';
	}
}
