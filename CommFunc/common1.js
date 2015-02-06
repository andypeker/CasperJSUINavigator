function _RandomGenerate(_Len_max_Num){
	//	Math.ceil(Math.random()*_len)
//	return Math.ceil(Math.random()*_Len_max_Num) - 1;
	return parseInt(Math.random()*_Len_max_Num);
//	return (Math.ceil(Math.random()*_Len_max_Num) - 1) >= 0 ? (Math.ceil(Math.random()*_Len_max_Num) - 1) : 0;
}

//	废弃
function _TEST(){
	//	如果使用_TEST方法 必须使用_TEST.call(this, _sss)的方式设置this对象
	this.test.info("\n\ninformative message in Steps, 000nu Okay!\n\n");
    if(casper.cli.args.length < 3){
	   this.echo("Need 3 parameters like: SHA SIA '2014-09-12'");
	   this.exit(100);
	}
	_Depart_City = casper.cli.get(0);
	_Arrive_City = casper.cli.get(1);
	_Depart_Date = casper.cli.get(2);
//	casper.exit();
}

//	废弃
function _TEST_WP(_str1, _str2, _str3){
	// use casper.test.info but this.test.info, that will be error.
	casper.test.info("informative message in Steps, 000wp Okay!");
	_Depart_City = _str1;
	_Arrive_City = _str2;
	_Depart_Date = _str3;
}

//	flightcheck 代码已经修改 只适用于这个方法
function _TEST_T(_str1, _str2, _str3){
	// use casper.test.info but this.test.info, that will be error.
	this.test.info("informative message in Steps, 000wp Okay!");
	this._Depart_City = _str1;
	this._Arrive_City = _str2;
	this._Depart_Date = _str3;
}

function _TEST_Tcli(_str1, _str2, _str3){
	//	这个方法还没有测试过 可以在执行命令行中设置参数 出发城市 到达城市 出发日期等
	//	例如		--DepartCity='BJS' --ArriveCity='CTU' --DepartDate='2014-11-21'
	casper.log("informative message in Steps, 000wp Okay!", "info");
	var _cli_dcity = casper.cli.get('DepartCity');
	var _cli_acity = casper.cli.get('ArriveCity');
	var _cli_ddate = casper.cli.get('DepartDate');
	this._Depart_City = _cli_dcity ? _cli_dcity : _str1;
	this._Arrive_City = _cli_acity ? _cli_acity : _str2;
	this._Depart_Date = _cli_ddate ? _cli_ddate : _str3;
}

function _TEST_double_T(_str1, _str2, _str3, _str4){
	// use casper.test.info but this.test.info, that will be error.
	this.test.info("informative message in Steps, 000wp Okay!");
	this._Depart_City = _str1;
	this._Arrive_City = _str2;
	this._Depart_Date = _str3;
	//	_str4 这个判断几乎不需要
	if( typeof(_str4) !== 'undefined' ){
		this._Back_Date = _str4;
	}else{
		this._Back_Date = '';
	}
}

function _TEST_double_Tcli(_str1, _str2, _str3, _str4){
	this.log("informative message in Steps, 000wp Okay!", "info");
	this.test.info("informative message in Steps, 000wp Okay!");
	var _cli_dcity = casper.cli.get('DepartCity');
	var _cli_acity = casper.cli.get('ArriveCity');
	var _cli_ddate = casper.cli.get('DepartDate');
	var _cli_bdate = casper.cli.get('BackDate');
	this._Depart_City = _cli_dcity ? _cli_dcity : _str1;
	this._Arrive_City = _cli_acity ? _cli_acity : _str2;
	this._Depart_Date = _cli_ddate ? _cli_ddate : _str3;
	this._Back_Date = _cli_bdate ? _cli_bdate : _str4;
}

function _TEST_double_Tcli2(_str1, _str2, _str3, _str4){
	this.log("informative message in Steps, 000wp Okay!", "info");
	this.test.info("informative message in Steps, 000wp Okay!");
	var _cli_dcity = casper.cli.get('DepartCity');
	var _cli_acity = casper.cli.get('ArriveCity');
	var _cli_ddate = casper.cli.get('DepartDate');
	var _cli_bdate = casper.cli.get('BackDate');
	this._Depart_City = _cli_dcity ? _cli_dcity : (_str1 ? _str1 : function(){this.log("出发城市参数没有传入", "error")}());
	this._Arrive_City = _cli_acity ? _cli_acity : (_str2 ? _str2 : function(){this.log("到达城市参数没有传入", "error")}());
	this._Depart_Date = _cli_ddate ? _cli_ddate : (_str3 ? _str3 : function(){this.log("出发日期参数没有传入", "error")}());
	this._Back_Date = _cli_bdate ? _cli_bdate : (_str4 ? _str4 : function(){this.log("返回日期参数没有传入", "error")}());
}

function _TEST_double_T2(_str1, _str2, _str3, _str4){
	// use casper.test.info but this.test.info, that will be error.
	this.test.info("informative message in Steps, 000wp Okay!");
	this._Depart_City = _str1;
	this._Arrive_City = _str2;
	this._Depart_Date = _str3;
	if( typeof(_str4) !== 'undefined' && typeof(_str4) === 'string' ){
		this._Back_Date = _str4;
	}else{
		this._Back_Date = '';
	}
}

function _TEST_double_T3(_str1, _str2, _str3, _str4){
	// use casper.test.info but this.test.info, that will be error.
	this.test.info("informative message in Steps, 000wp Okay!");
	this._Depart_City = _str1;
	this._Arrive_City = _str2;
	this._Depart_Date = _str3;
	if( _str4 && typeof(_str4) === 'string' ){
		this._Back_Date = _str4;
	}else{
		this._Back_Date = '';
	}
}

//  下面2个方法经过encapsulate 可以默认包括并使用保存截屏图片的路径
function _Capture_WP(_str){
	this.capture(this._result_cap_str + _str);
}

function _CaptureSelector_WP(_str, _selector){
	this.captureSelector(this._result_cap_str + _str, _selector);
}


function _TimeStamp2(){
   var _time_stamp = new Date();//.toLocaleString();//.replace(/年|月/g, "-").replace(/日/g, " ")
   return  "PageScreen_" + _time_stamp.getMonth() +  '_' + _time_stamp.getDate() + '_' + _time_stamp.getHours() + '_' + _time_stamp.getMinutes() + '_' + _time_stamp.getSeconds();
}

function _TimeStamp(){
   var _time_stamp = new Date();//.toLocaleString();//.replace(/年|月/g, "-").replace(/日/g, " ")
   return  "PageScreen_" + _time_stamp.getDate() + '_' + _time_stamp.getHours() + '_' + _time_stamp.getMinutes() + '_' + _time_stamp.getSeconds();
}

function _after_TimeOut(){
	this.echo("\n\n1 Wait _after_TimeOut, There are timeout, So YOU KNOW ~\n\n");
	this.capture(this._result_cap_str + _TimeStamp() + "_no_I_waitfor_TimeOut" +".png");
	this.exit(200);
}

function _after_TimeOut2(_error_point){
	this.echo("\n\n2 Wait _after_TimeOut2, There are timeout, So YOU KNOW ~\n\n");
	this.capture(this._result_cap_str + _TimeStamp() + _error_point + ".png");
	this.exit(201);
}

function _Dump_Page(){
    require('fs').write(
	          _TimeStamp() + ".html",
	      	  require('utils').format(this.getPageContent()),
	          function(){this.echo("Dump content of page to one file, OK ~")}
	);
//    require('utils').dump(JSON.parse(this.getPageContent()));
//    this.echo("\n\n\n\n\n" + require('utils').format(this.getPageContent()) + "\n\n\n\n\n");
//    this.getHTML();
}
//	Usage: _Dump_Page.call(this);

function _Dump_Page2(_file_name){
    require('fs').write(
		this._result_cap_str + '/' + _file_name,
		require('utils').format(this.getPageContent()),
	//	require('utils').format(this.getHTML()), //getPageContent will provide more info than getHTML ~ I, promise ~
		function(){this.echo("Dump content of page to one file, OK ~")}
	);
}
//	Usage: _Dump_Page2.call(this, 'file.name');

//	IMPORTANT INFO
//	可以选择很多class或者ic，比如 class="cui-breaking-load flight-loading"
//	还有class="cui-i cui-m-logo", class="cui-i cui-w-loading" 或者 id="js_loadFrame"
//	但是class="cui-layer-padding" 和 class="cui-layer-content" 不可用！
function _Wait_or_notWait(){
	this.waitForSelector('.cui-breaking-load',
		function(){
		//	this.echo("Keep Waiting...");
		}, function(){
		//	//this.echo("stop Waiting, and continue...");
		}, 100);
}

function _Delete_LS(){
	this.log("尝试删除浏览器的LocalStorage", "info");
	this.evaluate(function(){
		window.localStorage.clear();
	})
	// this.evaluate(function(){
	// 	$('.flight-infoinput .js_newName').focus();
	// })
	this.log( "\tSome Information: " +
		this.evaluate(function(){
			return document.location.host + "   \t" +
			document.location.hostname + "   \t" +
			document.location.origin + "   \t" +
			document.location.pathname + "\n";
		}), "info");
}