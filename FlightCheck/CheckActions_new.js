
//	检查是否到了查询页 如果当前不是查询页 点蛋啊
function _CheckPageElementsCheck(){
	this.waitForSelector('.city_tab',
		function(){
			this.test.assertExists('.city_tab', '可以看到单程往返按钮');
			this.log('可以看到单程往返按钮', "info");
		}, function(){
			this.log("等待7s后 当前页面根本不是航变查询页", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit409_current" + ".png");
			this.exit(409);
		}, 500);

	//	flight-srhform
	this.waitForSelector('.flight-srhform',
		function(){
			this.test.assertExists('.flight-srhform', '可以看到出发到达选择');
			this.log('可以看到出发到达选择', "info");
		}, function(){
			this.log("等待7s后 当前页面根本不是航变查询页", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit409_current" + ".png");
			this.exit(409);
		}, 500);

	//	searchlistsubmit
	this.waitForSelector('#searchlistsubmit',
		function(){
			this.test.assertExists('#searchlistsubmit', '可以看到查询按钮');
			this.log('可以看到查询按钮', "info");
		}, function(){
			this.log("等待7s后 当前页面根本不是航变查询页", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit409_current" + ".png");
			this.exit(409);
		}, 500);
}


function _CityListElementsCheck(){
	//	检查是否进入城市列表页面 元素1
	this.waitForSelector('#citylistroot',
		function(){
			this.test.assertExists('#citylistroot',"城市列表页面元素1");
			this.log('城市列表页面元素1', "info");
		//	this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_CityList" + ".png");
			this.log('城市列表页面元素1', "error");
			this.exit(402);
		}, 5000);

	//	检查是否进入城市列表页面 元素2
	this.waitForSelector('#tabtilte',
		function(){
			this.test.assertExists('.sub-city-box',"城市列表页面元素2");
			this.log('城市列表页面元素2', "info");
		//	this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_CityList" + ".png");
			this.log('城市列表页面元素2', "error");
			this.exit(402);
		}, 5000);

	//	检查是否进入城市列表页面 元素3
	this.waitForSelector('.flight-ctltsfixed-pd .flight-ctlts',
		function(){
			this.test.assertExists('.flight-ctltsfixed-pd .flight-ctlts',"城市列表页面元素3");
			this.log('城市列表页面元素3', "info");
		//	this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_CityList" + ".png");
			this.log('城市列表页面元素3', "error");
			this.exit(402);
		}, 5000);

	//	检查是否进入城市列表页面 元素4
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box', "城市列表页面元素 CityList 4");
			this.log('城市列表页面元素3', "info");
			this.capture(this._result_cap_str + _TimeStamp() + "_Citylist" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_CityList" + ".png");
			this.log('城市列表页面元素 CityList 4', "error");
			this.exit(402);
		}, 5000);
}

function _CalPageElementsCheck(){
	//	检查是否进入日历 周element
	this.waitForSelector('.cui_cldweek',
		function(){
			this.log('万年历 可以看到week列表啊', "info");
		}, function(){
			// this.echo("wait for 5s, there are no month or day~");
			this.log("万年历 不能看到week列表啊", "error");
			// this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);

	//	检查是否进入日历 月element
	this.waitForSelector('.cui_cldunit',
		function(){
			this.log('万年历 可以看到unit列表啊', "info");
		}, function(){
			// this.echo("wait for 5s, there are no month or day~");
			this.log("万年历 不能看到unit列表啊", "error");
			// this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);

	//	检查是否进入日历 月日element
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.log('万年历 可以看到day列表啊', "info");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			// this.echo("wait for 5s, there are no month or day~");
			this.log("万年历 不能看到day列表啊", "error");
			// this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);

	//	检查是否进入日历 月element的数目 最少应该有5个吧 10个也许也应该可以有
	this.wait(500, function(){
		this.log("\n\n日历页面现在是什么样子\n\n", "warning");
		this.capture(this._result_cap_str + _TimeStamp() + "_what_is_current_calculate" + ".png");

		if(this.evaluate(function(){
			return __utils__.findAll(".cui_cld_daybox").length;
			}) < 5 ){
			this.log('万年历页面不完整啊', "error");
			this.exit(421);
		}else{
			this.log('万年历页面完整啊', "info");
		}
	});
}


//	国内城市
function _GuoNei(){
	this.waitForSelector('#tabtilte li[data-mode="1"]',
		function(){
			this.test.assertExists('#tabtilte li[data-mode="1"]', '点click国内城市按钮');
			this.click('#tabtilte li[data-mode="1"]');
		}, function(){
			this.echo("国内城市按钮不能点 卧槽");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit408_current" + ".png");
			this.exit(409);
		}, 500);
}

//	国际城市
function _GuoJi(){
	this.waitForSelector('#tabtilte li[data-mode="2"]',
		function(){
			this.test.assertExists('#tabtilte li[data-mode="2"]', '点click国际城市按钮');
			this.click('#tabtilte li[data-mode="2"]');
		}, function(){
			this.echo("国际城市按钮不能点 卧槽");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit408_current" + ".png");
			this.exit(409);
		}, 500);
}

//	单程
function _Single(){
//	$('.city_tab li[data-type="2"]')
//	$('.cont_wrap li[data-type="2"]')
	this.waitForSelector('.cont_wrap li[data-type="1"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="1"]', '点click单程按钮');
			this.click('.cont_wrap li[data-type="1"]');
		}, function(){
			this.echo("单程按钮不能点 卧槽");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit408_current" + ".png");
			this.exit(408);
		}, 500);
}

//	单程
function _Single2(){
	this.waitForSelector('.cont_wrap li[data-type="1"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="1"]', '点click单程按钮');
			this.evaluate(function(_flt_str_){
				 //	__utils__.mouseEvent('mouseover', _flt_str_);
				 //	__utils__.mouseEvent('click', _flt_str_);
				 	$(_flt_str_).click();
				 //	__utils__.mouseEvent('mouseout', _flt_str_);
				 }, '.cont_wrap li[data-type="1"]');
		}, function(){
			this.echo("单程按钮不能点 卧槽");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit407_current" + ".png");
			this.exit(407);
		}, 500);
}

//	往返
function _Double(){
	this.waitForSelector('.cont_wrap li[data-type="2"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="2"]','点click往返按钮');
			this.click('.cont_wrap li[data-type="2"]');
		}, function(){
			this.echo("往返按钮不能点 卧槽");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit406_current" + ".png");
			this.exit(406);
		}, 500);
}

//	往返
function _Double2(){
	this.waitForSelector('.cont_wrap li[data-type="2"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="1"]', '点click往返按钮');
			this.evaluate(function(_flt_str_){
				 //	__utils__.mouseEvent('mouseover', _flt_str_);
				 //	__utils__.mouseEvent('click', _flt_str_);
				 	$(_flt_str_).click();
				 //	__utils__.mouseEvent('mouseout', _flt_str_);
				 }, '.cont_wrap li[data-type="2"]');
		}, function(){
			this.echo("往返按钮不能点 卧槽");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit405_current" + ".png");
			this.exit(405);
		}, 500);
}


function DepartCity_Select(){
	this.waitForSelector('#js_departcity',
		function(){
		//进入出发城市选择列表
			this.test.assertExists('#js_departcity', "There are depart City Button~ 有出发城市按钮");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Success ~ and will go depart city list [CheckActions]");
		//   this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_departcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 02 ~");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit402_current" + ".png");
			this.exit(401);
		}, 2000);
/*
	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box', "There are City List 有城市列表");
			this.echo("Wait for rendering ~ Choose your Depart city: " + this._Depart_City);
			this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" + ".png");
			this.echo("wait for 5s, there are no city 01~");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit402_current" + ".png");
			this.exit(402);
		}, 5000);
*/	
	this.wait(5000, function(){
		_CityListElementsCheck.call(this);
		this.echo("To Depart City List ~Choose Depart City, and then Back ~");
		this.log('可以看到城市列表 选择城市再返回', "info");
	});

	//	等城市列表数据拉出来
	this.wait(5000);
	//	如果下面的逻辑使用this.waitFor实现，就不用在这样硬等待了。

/*	
//	this.waitForSelector('#city_list .sub-city-box [data-code="' + this._Depart_City + '"]',
//	this.waitForSelector('.cityli .sub-city-box [data-code="' + this._Depart_City + '"]',
//	this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]',
//	this.waitForSelector('#inlandhotcity .sub-city-box [data-code="' + this._Depart_City + '"]',
//	this.waitForSelector('#interhotcity .sub-city-box [data-code="' + this._Depart_City + '"]',
*/
	// 这个步骤应该接受参数，${出发城市}
	this.waitForSelector('.cityli .sub-city-box [data-code="' + this._Depart_City + '"]',
	   	function(){
   		//	全局变量表示国内还是国际航班
		//	this._inlandORinter = 'inLand';
			this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');//*[@data-id=3])');
		//	this.echo("Could I Choose some depart city, OK ?");
			this.click('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');
	   	}, function(){
			this.echo("There is no Depart City available for click, so Quit 没有找到参数提供的出发城市三字码");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit403_current" + ".png");
			this.exit(403);
	   	}, 2000);
}


function ArriveCity_Select(){
	this.waitForSelector('#js_backcity',
		function(){
		//进入到达城市选择列表
			this.test.assertExists('#js_backcity',"There are Arrive City Button 有到达城市按钮");
			this.echo("To Back City List ~ and will go arrive city list [CheckActions]");
		//	this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_backcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 022 ~");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit411_current" + ".png");
			this.exit(411);
		}, 5000);
/*
	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box',"There are City List 有城市列表");
			this.echo("Wait for rendering ~ Choose your Arrive city: " + this._Arrive_City);
			this.capture(this._result_cap_str + _TimeStamp() + "arrive_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" +".png");
			this.echo("wait for 5s, there are no city 02~");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit412_current" + ".png");
			this.exit(412);
		}, 5000);
*/

	this.wait(5000, function(){
		_CityListElementsCheck.call(this);
		this.echo("Choose Back City, and then Back ~");
		this.log('可以看到城市列表 选择城市再返回', "info");
	});

	this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]',
	   	function(){
   		//	全局变量表示国内还是国际航班
		//	this._inlandORinter = 'inLand';
			this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
			this.click('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
	   	}, function(){
			this.echo("There is no Arrive City available for click, so Quit 没有找到参数提供的到达城市三字码");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit413_current" + ".png");
			this.exit(413);
	   	}, 2000);
}


//	增加城市名在国内城市列表中找不到是点国际的步骤
function Inter_DepartCity_Select(){
	this.waitForSelector('#js_departcity',
		function(){
		//	全局变量表示国内还是国际航班
		//	this._inlandORinter = 'interNational';
		//进入出发城市选择列表
			this.test.assertExists('#js_departcity', "There are depart City Button~ [ 国际国际 ] 有出发城市按钮");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.log("to Flight Success ~ and will go depart city list [ 国际国际 ]", "info");
		//   this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_departcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.log("to Flight Failure 02 [ 国际国际 ] ~", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit402_current" + ".png");
			this.exit(401);
		}, 2000);
/*
	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box', "There are City List 有城市列表");
			this.echo("Wait for rendering ~ Choose your Depart city: " + this._Depart_City);
			this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" + ".png");
			this.echo("wait for 5s, there are no city 01~");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit402_current" + ".png");
			this.exit(402);
		}, 5000);
*/	
	this.wait(5000, function(){
		_CityListElementsCheck.call(this);
		this.echo("To Depart City List ~Choose Depart City, and then Back ~");
		this.log('可以看到城市列表 选择城市再返回 [ 国际国际 ]', "info");
	});

	//	等城市列表数据拉出来
	this.wait(5000);
	//	如果下面的逻辑使用this.waitFor实现，就不用在这样硬等待了。

	// 这个步骤应该接受参数，${出发城市}
	this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]',
	   	function(){
   		//	全局变量表示国内还是国际航班
		//	this._inlandORinter = 'inLand';
			this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');//*[@data-id=3])');
		//	this.echo("Could I Choose some depart city, OK ?");
			this.click('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');
	   	}, function(){
			this.echo("There is no Depart City available for click, so Quit 没有找到参数提供的出发城市三字码");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit403_current" + ".png");
		//	this.exit(403);
			_GuoJi.call(this);
			_CityListElementsCheck.call(this);
			this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]',
			   	function(){
		   		//	全局变量表示国内还是国际航班
				//	this._inlandORinter = 'interNational';
					this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');//*[@data-id=3])');
				//	this.echo("Could I Choose some depart city, OK ?");
					this.click('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');
			   	}, function(){
					this.echo("There is no Depart City available for click, so Quit [ 国际国际 ] 没有找到参数提供的出发城市三字码");
				//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
					this.capture(this._result_cap_str + _TimeStamp() + "_exit403_current" + ".png");
					this.exit(403);
				}, 2000);
	   	}, 2000);
}


//	增加城市名在国内城市列表中找不到是点国际的步骤
function Inter_ArriveCity_Select(){
	this.waitForSelector('#js_backcity',
		function(){
		//进入到达城市选择列表
			this.test.assertExists('#js_backcity',"There are Arrive City Button [ 国际国际 ] 有到达城市按钮");
			this.log("To Back City List ~ and will go arrive city list [ 国际国际 ]", "info");
		//	this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_backcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.log("to Flight Failure 022 ~[ 国际国际 ]", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit411_current" + ".png");
			this.exit(411);
		}, 5000);
/*
	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box',"There are City List 有城市列表");
			this.echo("Wait for rendering ~ Choose your Arrive city: " + this._Arrive_City);
			this.capture(this._result_cap_str + _TimeStamp() + "arrive_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" +".png");
			this.echo("wait for 5s, there are no city 02~");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit412_current" + ".png");
			this.exit(412);
		}, 5000);
*/

	this.wait(5000, function(){
		_CityListElementsCheck.call(this);
		this.echo("Choose Back City, and then Back ~");
		this.log('可以看到城市列表 选择城市再返回 [ 国际国际 ]', "info");
	});

	this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]',
	   	function(){
		//	全局变量表示国内还是国际航班
		//	this._inlandORinter = 'inLand';
			this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
			this.click('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
	   	}, function(){
			this.echo("There is no Arrive City available for click, so Quit 没有找到参数提供的到达城市三字码");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit413_current" + ".png");
		//	this.exit(413);
			_GuoJi.call(this);
			_CityListElementsCheck.call(this);
			this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]',
				function(){
				//	全局变量表示国内还是国际航班
				//	this._inlandORinter = 'interNational';
					this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
					this.click('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
				}, function(){
					this.echo("There is no Arrive City available for click, so Quit [ 国际国际 ] 没有找到参数提供的到达城市三字码");
				//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
					this.capture(this._result_cap_str + _TimeStamp() + "_exit413_current" + ".png");
					this.exit(413);
				}, 2000);
	   	}, 2000);
}


function Day_one_Select(){
	//	进入日期选择页
	this.waitForSelector('#js_departDate',
		function(){
			this.test.assertExists('#js_departDate',"There are no Calender button 有日期选择按钮");
			this.log("to 日期选择页 Date Page ~ [CheckActions]", "info");
			this.click('#js_departDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit420_current" + ".png");
			this.exit(420);
		}, 3000);
/*
	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.log('可以看到日期列表 万年历啊', "info");
			this.echo("Wait for rendering ~ Choose your Datetime :" + this._Depart_Date);
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or day~");
			this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);
*/
	this.wait(5000, function(){
		_CalPageElementsCheck.call(this);
		this.echo("Wait for rendering ~ Choose your Datetime :" + this._Depart_Date);
	})

	this.wait(3000);
/*
	//	选择航班日期
	this.then(function(){
		this.echo("Choose Date button, ok ?ok ?ok ?ok ?ok ?ok ?ok ?\n\n\n");
		this.test.assertExists('.cui_cldunit', "\n\nok, this is calender page，and seleted date: " + _Depart_Date);
		this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
		this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\n\nok, this is calender page ~\n\n");
		this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
	})
*/
	//	选择航班日期
	this.waitForSelector('.cui_cldunit',
		function(){
			this.echo("Choose Date button");
			this.test.assertExists('.cui_cldunit', "ok, this is calender page，and seleted date: " + this._Depart_Date);
		//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
			this.waitForSelector('li[data-date="' + this._Depart_Date + '"].cui_cld_valid',
				function(){
					this.log("看到了想要的日期", "info");
				//	this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
				//	this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\nok, this is calender page ~\n");
				//	this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');

				//	(查询页)去程日期：	$('li[data-date="2014-10-13"].selected-start')
				//	(查询页)返程日期：	$('li[data-date="2014-10-13"].selected-back')
				//  无效日期：      $('li[data-date="2014-10-13"].cui_cld_daypass')
				//  有效日期：      $('li[data-date="2014-10-13"].cui_cld_valid')
					this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", 'li[data-date="' + this._Depart_Date + '"].cui_cld_valid');
					this.test.assertExists('li[data-date="' + this._Depart_Date + '"].cui_cld_valid', "ok, this is calender page ~");
					this.click('li[data-date="' + this._Depart_Date + '"].cui_cld_valid');
				}, function(){
					this.log("但是7s后没有看到想要的日期", "error");
				//	this.echo("可以进入日历, 但是7s后没有看到想要的日期!!\n");
					_after_TimeOut2.call(this, "_no_expected_date");
				//	this.exit(422);	
				}, 7000);
		}, function(){
			this.log("不能进入日历!", "error");
			_after_TimeOut2.call(this, "_no_Calender");
		//	this.exit(423);	
		}, 9000);
}


function Day_one_Select2(){
	//	进入日期选择页
	this.waitForSelector('#js_departDate',
		function(){
			this.test.assertExists('#js_departDate',"There are no Calender button 有日期选择按钮");
			this.log("to 日期选择页 Date Page ~ [CheckActions]", "info");
			this.click('#js_departDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit420_current" + ".png");
			this.exit(420);
		}, 3000);
/*
	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.log('可以看到日期列表 万年历啊', "info");
			this.echo("Wait for rendering ~ Choose your Datetime :" + this._Depart_Date);
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or day~");
			this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);
*/
	this.wait(5000, function(){
		_CalPageElementsCheck.call(this);
		this.echo("Wait for 日期选择页 rendering ~ Choose your Datetime :" + this._Depart_Date);
		this.test.assertExists('.cui_cldunit', "ok, this is calender page，and seleted date: " + this._Depart_Date);
	});

/*
	//	选择航班日期
	this.then(function(){
		this.echo("Choose Date button, ok ?ok ?ok ?ok ?ok ?ok ?ok ?\n\n\n");
		this.test.assertExists('.cui_cldunit', "\n\nok, this is calender page，and seleted date: " + _Depart_Date);
		this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
		this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\n\nok, this is calender page ~\n\n");
		this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
	})
*/

	//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
	this.waitForSelector('li[data-date="' + this._Depart_Date + '"].cui_cld_valid',
		function(){
			this.log("看到了想要的日期", "info");
		//	this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
		//	this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\nok, this is calender page ~\n");
		//	this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');

		//	(查询页)去程日期：	$('li[data-date="2014-10-13"].selected-start')
		//	(查询页)返程日期：	$('li[data-date="2014-10-13"].selected-back')
		//  无效日期：      $('li[data-date="2014-10-13"].cui_cld_daypass')
		//  有效日期：      $('li[data-date="2014-10-13"].cui_cld_valid')
			this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", 'li[data-date="' + this._Depart_Date + '"].cui_cld_valid');
			this.test.assertExists('li[data-date="' + this._Depart_Date + '"].cui_cld_valid', "ok, this is calender page ~");
			this.click('li[data-date="' + this._Depart_Date + '"].cui_cld_valid');
		}, function(){
			this.log("但是7s后没有看到想要的日期", "error");
		//	this.echo("可以进入日历, 但是7s后没有看到想要的日期!!\n");
			_after_TimeOut2.call(this, "_no_expected_date");
		//	this.exit(422);	
		}, 7000);
}


function Day_two_Select(){
	//	进入日期选择页
	this.waitForSelector('#js_backDate',
		function(){
			this.test.assertExists('#js_backDate', "There are no Calender button 有到达日期选择按钮");
			this.echo("to Date Page ~ [CheckActions]");
			this.click('#js_backDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit420_current" + ".png");
			this.exit(420);
		}, 3000);

/*
	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.log('可以看到日期列表 万年历 2啊', "info");
			this.echo("Wait for rendering ~ Choose your Back Datetime :");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or Back day~");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);
*/
	this.wait(5000, function(){
		_CalPageElementsCheck.call(this);
		this.echo("Wait for rendering ~ Choose your Back Datetime :" + this._Back_Date);
	})

	this.wait(3000);
	//	选择航班日期
	this.waitForSelector('.cui_cldunit',
		function(){
			this.echo("Choose Date button:");
			this.test.assertExists('.cui_cldunit', "ok, this is calender page，and seleted Back date: " + this._Back_Date);
		//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
			this.waitForSelector('li[data-date="' + this._Back_Date + '"].cui_cld_valid',
				function(){
					this.log("看到了想要的日期 返程", "info");
				//	this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
				//	this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\nok, this is calender page ~\n");
				//	this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');

				//	(查询页)去程日期：	$('li[data-date="2014-10-13"].selected-start')
				//	(查询页)返程日期：	$('li[data-date="2014-10-13"].selected-back')
				//  无效日期：      $('li[data-date="2014-10-13"].cui_cld_daypass')
				//  有效日期：      $('li[data-date="2014-10-13"].cui_cld_valid')
					this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", 'li[data-date="' + this._Back_Date + '"].cui_cld_valid');
					this.test.assertExists('li[data-date="' + this._Back_Date + '"].cui_cld_valid', "ok, this is Back calender page ~");
					this.click('li[data-date="' + this._Back_Date + '"].cui_cld_valid');
				}, function(){
					this.log("但是7s后没有看到想要的日期 返程", "error");
				//	this.echo("可以进入日历, 但是7s后没有看到想要的日期!! 返程\n");
					_after_TimeOut2.call(this, "_no_expected_date");
				//	this.exit(422);	
				}, 7000);
		}, function(){
			this.echo("不能进入日历!");
			_after_TimeOut2.call(this, "_no_Calender");
		//	this.exit(423);	
		}, 9000);
}


function Day_two_Select2(){
	//	进入日期选择页
	this.waitForSelector('#js_backDate',
		function(){
			this.test.assertExists('#js_backDate', "There are no Calender button 有到达日期选择按钮");
			this.log("to Date Page 我要选择返程日期 需要返程日期按钮~ [CheckActions]", "info");

			this.click('#js_backDate');
		//	换个姿势 再来一次
			// this.evaluate(function(_str_){
			// 	$(_str_).click();
			// 	// $(_str_).trigger("touchstart");
			// }, '#js_backDate');
		}, function(){
			this.log("There is no DateChoose Button available 没有返程日期按钮, so Quit", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit420_current" + ".png");
			this.exit(420);
		}, 3000);

/*
	//	检查是否进入日期	
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.log('可以看到日期列表 万年历 2啊', "info");
			this.echo("Wait for rendering ~ Choose your Back Datetime :");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or Back day~");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "_exit421_current" + ".png");
			this.exit(421);
		}, 5000);
*/
	this.wait(5000, function(){
		this.log("\n选返程日期啦\n", "info");
		_CalPageElementsCheck.call(this);
		this.echo("Wait for rendering ~ Choose your Back Datetime :" + this._Back_Date);
	//	this.echo("Choose Date button:");
	//	下面这个得调整一下
	//	this.test.assertExists('.cui_cldunit', "ok, this is calender page，and seleted Back date: " + this._Back_Date);
	});

	//	选择航班日期
	//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
	this.waitForSelector('li[data-date="' + this._Back_Date + '"].cui_cld_valid',
		function(){
			this.log("看到了想要的日期 返程", "info");
		//	this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
		//	this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\nok, this is calender page ~\n");
		//	this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');

		//	(查询页)去程日期：	$('li[data-date="2014-10-13"].selected-start')
		//	(查询页)返程日期：	$('li[data-date="2014-10-13"].selected-back')
		//  无效日期：      $('li[data-date="2014-10-13"].cui_cld_daypass')
		//  有效日期：      $('li[data-date="2014-10-13"].cui_cld_valid')
			this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", 'li[data-date="' + this._Back_Date + '"].cui_cld_valid');
			this.test.assertExists('li[data-date="' + this._Back_Date + '"].cui_cld_valid', "ok, this is Back calender page ~");
			this.click('li[data-date="' + this._Back_Date + '"].cui_cld_valid');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "Back_Date_" + ".png");
			this.log("但是7s后没有看到想要的日期 返程", "error");
		//	this.echo("可以进入日历, 但是7s后没有看到想要的日期!! 返程\n");
			_after_TimeOut2.call(this, "_no_expected_date");
		//	this.exit(422);	
		}, 7000);
}

