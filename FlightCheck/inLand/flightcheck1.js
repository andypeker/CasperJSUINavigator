

function _D_A_T_Flt_Check(){
	this.waitForSelector('li [href="/webapp/flight/"]',
		function(){
	// 		首页机票进入机票查询页
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("Could I to Flight Page ?~");
	//		this.captureSelector(this._result_cap_str + _TimeStamp(), 'li [href="/webapp/flight/"]');
			this.click('li [href="/webapp/flight/"]');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("after 7s to Flight Failure 01 ~");
			this.exit(400);
		}, 7000);

/*	this.waitFor(
		function(){
			return this.evaluate(function(){
				return document.querySelector('#js_departcity').innerHTML > 10;
			})
		}, function(){
			this.echo("\n\n~~~~~~\n\n" + this.evaluate(function(){
				return document.querySelector('#js_departcity').innerHTML;
			}) + "\n\n~~~~~~\n\n");
		//	进入出发城市选择列表
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Success ~ and will go depart city list:");
		//	this.captureSelector(this._result_cap_str + 'departcity.png', '#js_departcity');
			this.click('#js_departcity');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Failure 02 ~");
			this.exit();
		}, 4000);
*/
	//	进入航班查询页，需要等待callback执行
	this.wait(7000, function(){
		this.echo("Stop here so that javascript(on page) could run completely, just wait for 3s.");
	});

	this.waitForSelector('#js_departcity',
		function(){
		//进入出发城市选择列表
			this.test.assertExists('#js_departcity',"There are depart City Button~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("to Flight Success ~ and will go depart city list:");
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
			this.test.assertExists('.sub-city-box',"There are no City List");
			this.echo("Wait for rendering ~ Choose your Depart city :\n");
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
	   if(!this.exists('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]')){
           this.echo("There is no Depart Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
           this.exit(403);
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');//*[@data-id=3])');
	//   this.echo("Could I Choose some depart city, OK ?");
	   this.click('.main-item .sub-city-box [data-code="' + this._Depart_City + '"]');
	})

	this.waitForSelector('#js_backcity',
		function(){
		//进入到达城市选择列表
			this.test.assertExists('#js_backcity',"There are Arrive City Button");
			this.echo("To Back City List ~ and will go arrive city list");
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
			this.test.assertExists('.sub-city-box',"There are no City List");
			this.echo("Wait for rendering ~ Choose your Arrive city :\n");
			this.capture(this._result_cap_str + _TimeStamp() + "arrive_list" + ".png");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_no_City" +".png");
			this.echo("wait for 5s, there are no city 02~");
			this.exit(412);
		}, 5000);

	this.then(function(){
	   this.echo("Choose Back City, and then Back ~");
   	   if(!this.exists('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]')){
           this.echo("There is no Arrive Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
           this.exit(413);
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
	   this.click('.main-item .sub-city-box [data-code="' + this._Arrive_City + '"]');
	})

	//	进入日期选择页
	this.waitForSelector('#js_departDate',
		function(){
			this.test.assertExists('#js_departDate',"There are no Calender button");
			this.echo("to Date Page ~");
			this.click('#js_departDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.exit(420);
		}, 3000);

	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.echo("Wait for rendering ~ Choose your Datetime :\n");
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
			this.echo("Choose Date button:\n");
			this.test.assertExists('.cui_cldunit', "\nok, this is calender page，and seleted date: " + this._Depart_Date);
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
					this.test.assertExists('li[data-date="' + this._Depart_Date + '"].cui_cld_valid', "\nok, this is calender page ~\n");
					this.click('li[data-date="' + this._Depart_Date + '"].cui_cld_valid');
				}, function(){
					this.test.info("可以进入日历, 但是7s后没有看到想要的日期!\n");
					this.echo("可以进入日历, 但是7s后没有看到想要的日期!!\n");
					_after_TimeOut2.call(this, "_no_expected_date");
				//	this.exit(422);	
				}, 7000);
		}, function(){
			this.echo("不能进入日历!\n");
			_after_TimeOut2.call(this, "_no_Calender");
		//	this.exit(423);	
		}, 9000);

	//	这个步骤可以省略...省略...省略...省略...
	//	选择日期后的样子
/*	this.wait(5000, function(){
			this.echo("after Choose Date, Go Back~");
			this.capture(this._result_cap_str + _TimeStamp() + "TTTTTTTTTTTTT" +".png");
			this.capture(this._result_cap_str + _TimeStamp() + "ttttttttttttt" + ".png");
	})
*/
	this.wait(3000);
	//	点查询航班之前的样子
	this.waitForSelector('#searchlistsubmit',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "RRRRRRRRRRRRR" + ".png");
			this.echo("click Check Button ~");
			this.click('#searchlistsubmit');
		}, function(){
			this.echo("Go to choose date, After 3s but could not go back ~");
		//	this.exit(424);
		}, 3000);
}

