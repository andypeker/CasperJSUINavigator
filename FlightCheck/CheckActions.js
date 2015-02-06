

function _Single(){
//	$('.city_tab li[data-type="2"]')
//	$('.cont_wrap li[data-type="2"]')
	this.waitForSelector('.cont_wrap li[data-type="1"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="1"]', '\n点click单程按钮');
			this.click('.cont_wrap li[data-type="1"]');
		}, function(){
			this.echo("单程按钮不能点 卧槽");
		}, 500);
}

function _Single2(){
	this.waitForSelector('.cont_wrap li[data-type="1"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="1"]', '\n点click单程按钮');
			this.evaluate(function(_flt_str_){
				 //	__utils__.mouseEvent('mouseover', _flt_str_);
				 //	__utils__.mouseEvent('click', _flt_str_);
				 	$(_flt_str_).click();
				 //	__utils__.mouseEvent('mouseout', _flt_str_);
				 }, '.cont_wrap li[data-type="1"]');
		}, function(){
			this.echo("单程按钮不能点 卧槽");
		}, 500);
}


function _Double(){
	this.waitForSelector('.cont_wrap li[data-type="2"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="2"]','\n点click往返按钮');
			this.click('.cont_wrap li[data-type="2"]');
		}, function(){

		}, 500);
}


function _Double2(){
	this.waitForSelector('.cont_wrap li[data-type="2"]',
		function(){
			this.test.assertExists('.cont_wrap li[data-type="1"]', '\n点click单程按钮');
			this.evaluate(function(_flt_str_){
				 //	__utils__.mouseEvent('mouseover', _flt_str_);
				 //	__utils__.mouseEvent('click', _flt_str_);
				 	$(_flt_str_).click();
				 //	__utils__.mouseEvent('mouseout', _flt_str_);
				 }, '.cont_wrap li[data-type="2"]');
		}, function(){
			this.echo("往返按钮不能点 卧槽");
		}, 500);
}


function DepartCity_Select_rub(_city_name){
	this.waitForSelector('#js_departcity',
		function(){
		//进入出发城市选择列表
			this.test.assertExists('#js_departcity',"There are depart City Button~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Success ~ and will go depart city list: [CheckActions]");
		//   this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_departcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 02 ~");
			this.exit(401);
		}, 2000);

	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box',"There are City List");
			this.echo("Wait for rendering ~ Choose your Depart city: " + _city_name);
			this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" + ".png");
			this.echo("wait for 5s, there are no city 01~");
			this.exit(402);
		}, 5000);

	//	等城市列表数据拉出来
	this.wait(5000);
	//	如果下面的逻辑使用this.waitFor实现，就不用在这样硬等待了。

	// 这个步骤应该接受参数，${出发城市}
	this.then(function(){
		this.echo("To Depart City List ~Choose Depart City, and then Back ~");
	// this.captureSelector(this._result_cap_str + 'departcity.png', 'x(//.main-item/sub-city-box');//*[@data-id=3])');
	   if(!this.exists('.main-item .sub-city-box [data-code="' + _city_name + '"]')){
           this.echo("There is no Depart Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
           this.exit(403);
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + _city_name + '"]');//*[@data-id=3])');
	//   this.echo("Could I Choose some depart city, OK ?");
	   this.click('.main-item .sub-city-box [data-code="' + _city_name + '"]');
	})
}


function DepartCity_Select(){
	this.waitForSelector('#js_departcity',
		function(){
		//进入出发城市选择列表
			this.test.assertExists('#js_departcity',"There are depart City Button~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Success ~ and will go depart city list [CheckActions]");
		//   this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_departcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 02 ~");
			this.exit(401);
		}, 2000);

	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box',"There are City List");
			this.echo("Wait for rendering ~ Choose your Depart city: " + this._Depart_City);
			this.capture(this._result_cap_str + _TimeStamp() + "depart_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" + ".png");
			this.echo("wait for 5s, there are no city 01~");
			this.exit(402);
		}, 5000);

	//	等城市列表数据拉出来
	this.wait(5000);
	//	如果下面的逻辑使用this.waitFor实现，就不用在这样硬等待了。

	// 这个步骤应该接受参数，${出发城市}
	this.then(function(){
		this.echo("To Depart City List ~Choose Depart City, and then Back ~");
	// this.captureSelector(this._result_cap_str + 'departcity.png', 'x(//.main-item/sub-city-box');//*[@data-id=3])');
/*		if(!this.exists('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]')){
           this.echo("There is no Depart Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
           this.exit(403);
	   }
		this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');//*[@data-id=3])');
	//   this.echo("Could I Choose some depart city, OK ?");
		this.click('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');
*/
		this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]',
		   	function(){
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');//*[@data-id=3])');
			//	this.echo("Could I Choose some depart city, OK ?");
				this.click('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');
		   	}, function(){
				this.echo("There is no Depart Button available for click, so Quit");
			//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
				this.exit(403);
		   	}, 2000);
	})
}


function ArriveCity_Select_rub(_city_name){
	this.waitForSelector('#js_backcity',
		function(){
		//进入到达城市选择列表
			this.test.assertExists('#js_backcity',"There are Arrive City Button");
			this.echo("To Back City List ~ and will go arrive city list [CheckActions]");
		//	this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_backcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 022 ~");
			this.exit(411);
		}, 5000);

	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box',"There are City List");
			this.echo("Wait for rendering ~ Choose your Arrive city: " + _city_name);
			this.capture(this._result_cap_str + _TimeStamp() + "arrive_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" +".png");
			this.echo("wait for 5s, there are no city 02~");
			this.exit(412);
		}, 5000);

	this.then(function(){
	   this.echo("Choose Back City, and then Back ~");
   	   if(!this.exists('.main-item .sub-city-box [data-code="' + _city_name + '"]')){
           this.echo("There is no Arrive Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
           this.exit(413);
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + _city_name + '"]');
	   this.click('.main-item .sub-city-box [data-code="' + _city_name + '"]');
	})
}


function ArriveCity_Select(){
	this.waitForSelector('#js_backcity',
		function(){
		//进入到达城市选择列表
			this.test.assertExists('#js_backcity',"There are Arrive City Button");
			this.echo("To Back City List ~ and will go arrive city list [CheckActions]");
		//	this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_backcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 022 ~");
			this.exit(411);
		}, 5000);

	//	检查是否进入城市列表
	this.waitForSelector('.sub-city-box',
		function(){
			this.test.assertExists('.sub-city-box',"There are City List");
			this.echo("Wait for rendering ~ Choose your Arrive city: " + this._Arrive_City);
			this.capture(this._result_cap_str + _TimeStamp() + "arrive_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" +".png");
			this.echo("wait for 5s, there are no city 02~");
			this.exit(412);
		}, 5000);

	this.then(function(){
		this.echo("Choose Back City, and then Back ~");
/*		if(!this.exists('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]')){
           this.echo("There is no Arrive Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
           this.exit(413);
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
	   this.click('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
*/
		this.waitForSelector('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]',
		   	function(){
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
				this.click('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
		   	}, function(){
				this.echo("There is no Arrive Button available for click, so Quit");
			//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
				this.exit(413);
		   	}, 2000);
	})
}


function Day_one_Select_rub(_date_str){
	//	进入日期选择页
	this.waitForSelector('#js_departDate',
		function(){
			this.test.assertExists('#js_departDate',"There are no Calender button");
			this.echo("to Date Page ~ [CheckActions]");
			this.click('#js_departDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.exit(420);
		}, 3000);

	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.echo("Wait for rendering ~ Choose your Datetime :" + _date_str);
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or day~");
			this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.exit(421);
		}, 5000);

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
			this.test.assertExists('.cui_cldunit', "ok, this is calender page，and seleted date: " + _date_str);
		//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
			this.waitForSelector('li[data-date="' + _date_str + '"].cui_cld_valid',
				function(){
					this.test.info("可以进入日历, 看到了想要的日期!\n");
				//	this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
				//	this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\nok, this is calender page ~\n");
				//	this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');

				//	(查询页)去程日期：	$('li[data-date="2014-10-13"].selected-start')
				//	(查询页)返程日期：	$('li[data-date="2014-10-13"].selected-back')
				//  无效日期：      $('li[data-date="2014-10-13"].cui_cld_daypass')
				//  有效日期：      $('li[data-date="2014-10-13"].cui_cld_valid')
					this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", 'li[data-date="' + _date_str + '"].cui_cld_valid');
					this.test.assertExists('li[data-date="' + _date_str + '"].cui_cld_valid', "ok, this is calender page ~");
					this.click('li[data-date="' + _date_str + '"].cui_cld_valid');
				}, function(){
					this.test.info("可以进入日历, 但是7s后没有看到想要的日期!\n");
				//	this.echo("可以进入日历, 但是7s后没有看到想要的日期!!\n");
					_after_TimeOut2.call(this, "_no_expected_date");
				//	this.exit(422);	
				}, 7000);
		}, function(){
			this.echo("不能进入日历!\n");
			_after_TimeOut2.call(this, "_no_Calender");
		//	this.exit(423);	
		}, 9000);
}


function Day_one_Select(){
	//	进入日期选择页
	this.waitForSelector('#js_departDate',
		function(){
			this.test.assertExists('#js_departDate',"There are no Calender button");
			this.echo("to Date Page ~ [CheckActions]");
			this.click('#js_departDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.exit(420);
		}, 3000);

	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.echo("Wait for rendering ~ Choose your Datetime :" + this._Depart_Date);
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or day~");
			this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.exit(421);
		}, 5000);

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
					this.test.info("可以进入日历, 看到了想要的日期!\n");
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
					this.test.info("可以进入日历, 但是7s后没有看到想要的日期!\n");
				//	this.echo("可以进入日历, 但是7s后没有看到想要的日期!!\n");
					_after_TimeOut2.call(this, "_no_expected_date");
				//	this.exit(422);	
				}, 7000);
		}, function(){
			this.echo("不能进入日历!\n");
			_after_TimeOut2.call(this, "_no_Calender");
		//	this.exit(423);	
		}, 9000);
}


function Day_two_Select(){
	//	进入日期选择页
	this.waitForSelector('#js_backDate',
		function(){
			this.test.assertExists('#js_backDate',"There are no Calender button");
			this.echo("to Date Page ~ [CheckActions]");
			this.click('#js_backDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.exit(420);
		}, 3000);

	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.echo("Wait for rendering ~ Choose your Back Datetime :");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or Back day~");
			this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.exit(421);
		}, 5000);

	this.wait(3000);

	//	选择航班日期
	this.waitForSelector('.cui_cldunit',
		function(){
			this.echo("Choose Date button:");
			this.test.assertExists('.cui_cldunit', "\nok, this is calender page，and seleted Back date: " + this._Back_Date);
		//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
			this.waitForSelector('li[data-date="' + this._Back_Date + '"].cui_cld_valid',
				function(){
					this.test.info("可以进入日历, 看到了想要的日期! 返程\n");
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
					this.test.info("可以进入日历, 但是7s后没有看到想要的日期! 返程\n");
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

