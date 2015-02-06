/*
var casper = require("casper").create({
// clientScripts:["./jquery-2.1.1.min.js"],
   logLevel: "info",
   verbose: true,
   pageSettings: {
         loadImages: true,   
         loadPlugins: true,    
         userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'   
   },
   exitOnError: function(self, _msg){
   	  this.echo("Casper Instance exitOnError, and quit:\n" + _msg);
   	  this.capture(this._result_cap_str + "__Exit_Over.png");
   	  self.exit();
   },
   onError: function(self, _msg){
      this.capture(this._result_cap_str + "error.png");  
      console.log("onError===========================\nFATAL:" + _msg);  
      self.exit();
   },
   onLoadError: function(self, _msg){
   	  this.echo("Casper Instance onLoadError, and quit:\n" + _msg);
   	  this.capture(this._result_cap_str + "__Exit_LoadError.png");
   },
   silentErrors: function(self, _msg){
   	  this.echo("Casper Instance silentErrors, and quit:\n" + _msg);
   	  this.capture(this._result_cap_str + "__Exit_Over.png");
   },
   onDie: function(self, _msg){
      this.echo("Casper Instance call function Die, and quit:\n" + _msg);
      self.exit();
  //  casper.exit();
   },
   onAlert: function(self, _msg){
      console.log("onAlert===========================\nmsg:" + _msg);  
   },
   timeout: 9 * 1000 * 1000
});
*/

function _TEST(){
	//	如果使用_TEST方法 必须使用_TEST.call(this, _sss)的方式设置this对象
	this.test.info("\n\ninformative message in Steps, 000nu Okay!\n\n");
    if(casper.cli.args.length < 3){
	   this.echo("Need 3 parameters like: SHA SIA '2014-09-12'");
	   casper.exit();
	}
	_Depart_City = casper.cli.get(0);
	_Arrive_City = casper.cli.get(1);
	_Depart_Date = casper.cli.get(2);
//	casper.exit();
}


function _TEST_WP(_str1, _str2, _str3){
	casper.test.info("informative message in Steps, 000wp Okay!");
	_Depart_City = _str1;
	_Arrive_City = _str2;
	_Depart_Date = _str3;
}

function _TEST_WPcli(_str1, _str2, _str3){
	casper.log("informative message in Steps, 000wp Okay!", "info");
	var _cli_dcity = casper.cli.get('DepartCity');
	var _cli_acity = casper.cli.get('DepartCity');
	var _cli_ddate = casper.cli.get('DepartCity');
	var _cli_bdate = casper.cli.get('DepartCity');
	_Depart_City = _cli_dcity ? _cli_dcity : _str1;
	_Arrive_City = _str2;
	_Depart_Date = _str3;

}

function _Capture_WP(_str){
	this.capture(this._result_cap_str + _str);
}

function _CaptureSelector_WP(_str, _selector){
	this.captureSelector(this._result_cap_str + _str, _selector);
}

function _TimeStamp(){
   var _time_stamp = new Date();//.toLocaleString();//.replace(/年|月/g, "-").replace(/日/g, " ")
   return  "PageScreen_" + _time_stamp.getMonth() +  '_' + _time_stamp.getDate() + '_' + _time_stamp.getHours() + '_' + _time_stamp.getMinutes() + '_' + _time_stamp.getSeconds();
}

function _GoTo_WoXie(){
// 首页右下角的“我携”
	this.test.info("informative message in Steps _GoTo_WoXie, Okay.");
	this.waitForSelector('.tool-box .link-mc',
		function(){
			_CaptureSelector_WP.call(this, _TimeStamp() + "__112211__new_encapsulate__" + ".png", '.tool-box .link-mc');
			this.click('.tool-box .link-mc');
		}, function(){
			this.echo("Open ${testpage}, bug after 3s could not find element WoXie");
		}, 3000);
//	this is important, after 1s waiting for page rendering, essential~
	this.wait(5000);
}

function _after_TimeOut(){
	this.echo("\n\n1 Wait for some s, There are timeout, So YOU KNOW ~\n\n");
	this.capture(this._result_cap_str + _TimeStamp() + "_no_I_waitfor_TimeOut" +".png");
	this.exit();
}

function _after_TimeOut2(_error_point){
	this.echo("\n\n2 Wait for some s, There are timeout, So YOU KNOW ~\n\n");
	this.capture(this._result_cap_str + _TimeStamp() + _error_point + ".png");
	this.exit();
}


function _LOGINOUT(){
//	_Dump_Page.call(this);
//	this.capture(this._result_cap_str + _TimeStamp() + "_is_WoXie" +".png");
//	判断是否已经登录
	this.test.info("I arrive _longinout\n");
	if(this.exists('.member-box')){
	// 回到首页
		this.test.info("I am Ying test 223232 ~");
		this.echo("I am Ying ~");
		_Capture_WP.call(this, _TimeStamp() + "______new_encapsulate______.png");
	/*  this.click('.sub-viewport .home-i-back');
	this.wait(2000, function(){
	  this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});
   */	this.waitForSelector('.member-name',
			function(){
			  	this.echo("I am Ying 1 ~");
			  		this.captureSelector(this._result_cap_str + _TimeStamp() + "__111111____" + ".png", '.member-name');
					this.click('.member-name');
				this.waitForSelector('#accountbox .g-btn-s',
			    	function(){
						this.echo("I am Ying 2~");
						this.captureSelector(this._result_cap_str + _TimeStamp() + "__222222____" + ".png", '#accountbox .g-btn-s');
						this.click('#accountbox .g-btn-s');
						this.waitForSelector('.cui-bd',
						function(){
							this.echo("I am Ying 3~");
							this.captureSelector(this._result_cap_str + _TimeStamp() + "__logout____" + ".png", '.cui-bd');
							if(this.exists('.cui-bd')){
								this.echo("I am also In ~");
								this.capture(this._result_cap_str + _TimeStamp() + "ht_wrthwrth" +".png");
								this.click('.cui-roller-btns .cui-btns-sure');
							}else{
								this.echo("WoXie Open Fail 04~");
							}
						}, function(){
							this.echo("WoXie Open Fail 03~");
						}, 3000);  
				  	}, function(){
				  		this.echo("WoXie Open Fail 02~");
				  	}, 2000);
			}, function(){
					this.echo("WoXie Open Fail 01~");
			}, 2000);
	}else if(this.exists('.login-box')){
		this.test.info("qeghqerhqerhqerh\n");
		this.echo("No Login, Continue ~");
	}else if(this.exists('#login')){
		this.test.info("\n\nqeghqe6666666qerh\n\n");
		this.echo("No Login, Continue ~");
		this.waitForSelector('#c-ui-header-return',
			function(){
				this.click('#c-ui-header-return');
				this.test.info("\n\nhwrtwrth\n\n");
			}, function(){
				this.test.info("\n\nhwrtwrth22222\n\n");
			}, 3000);
	}else{
		this.test.info("I am Ying test 11111 ~");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
		_Dump_Page2.call(this, "666.html");
		this.echo("WoXie Html Changed, pay more attention ~");
		this.exit();
	}

	this.waitForSelector('.home-header .home-i-back',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("Log In, Browser go back to Main Page, OK ?");
			this.click('.home-header .home-i-back');
		}, function(){
			this.echo("Wo_LOGININ 02~");
		}, 3000);

	this.wait(4000);
}

function _LOGININ(){
// 判断是否已经登录
	this.test.info("I arrive _loginin\n");
   if(this.exists('.member-box')){
         // 回到首页
	   this.capture(this._result_cap_str + _TimeStamp() + ".png");
	   this.waitForSelector('.sub-viewport .home-i-back',
	   		function(){
			   this.click('.sub-viewport .home-i-back');
			}, function(){
				this.echo("Wo_LOGININ 01~");
			}, 2000);
   }else{
   		this.waitForSelector('.login-box .home-btn',
   			function(){
		   	//  我携登录页面
		    	this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.login-box .home-btn');
				this.click('.login-box .home-btn');
			}, function(){
				this.echo("Wo_LOGININ 04~");
			}, 3000);

		this.wait(5000, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__to_logining" + ".png");
		// 登录页面
			this.evaluate(function(){
				document.querySelector('input[id="username"]').value = 'wwwwww';
				document.querySelector('input[id="password"]').value = 'good08';
			})
		});

		this.waitForSelector('.btn_box .g_btn_s',
			function(){
			   this.capture(this._result_cap_str + _TimeStamp() + ".png");
			   this.captureSelector(this._result_cap_str + _TimeStamp() + "_login_button" + ".png", '.btn_box .g_btn_s');
			   this.click('.btn_box .g_btn_s');
			}, function(){
				this.echo("Wo_LOGININ 05~");
			}, 4000);
	}

	/  //////////////////////
	//	新判断的实现
	this.waitForSelector('.member-box',
		function(){
		// 回到首页
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.waitForSelector('.sub-viewport .home-i-back',
				function(){
					this.click('.sub-viewport .home-i-back');
				}, function(){
					this.echo("Wo_LOGININ 01~");
				}, 2000);
		}, function(){
			this.waitForSelector('.login-box .home-btn',
				function(){
					//  我携登录页面
					this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.login-box .home-btn');
					this.click('.login-box .home-btn');
					this.waitFor(function(){
							this.capture(this._result_cap_str + _TimeStamp() + "__to_logining" + ".png");
							this.waitForSelector('input[id="username"]',
								function(){
									// 登录页面
									this.evaluate(function(){
										document.querySelector('input[id="username"]').value = 'wwwwww';
										document.querySelector('input[id="password"]').value = 'good08';
										});
									return this.evaluate(function(){
										return document.querySelector('input[id="username"]').value.length > 2 
												&& document.querySelector('input[id="password"]').value.length > 2;
									});
								}, function(){
									return false;
								}, 2000);
						/*
							// 登录页面
							this.evaluate(function(){
								document.querySelector('input[id="username"]').value = 'wwwwww';
								document.querySelector('input[id="password"]').value = 'good08';
								})
						//	return true;
							return this.evaluate(function(){
								return document.querySelector('input[id="username"]').value.length > 2 
										&& document.querySelector('input[id="password"]').value.length > 2;
							});
						*/
						}, function(){
							this.waitForSelector('.btn_box .g_btn_s',
								function(){
									this.capture(this._result_cap_str + _TimeStamp() + ".png");
									this.captureSelector(this._result_cap_str + _TimeStamp() + "_login_button" + ".png", '.btn_box .g_btn_s');
									this.click('.btn_box .g_btn_s');
								//	这里要增加代码处理登录失败的情况  哈哈
								//	this.waitForAlert();
								}, function(){
									this.echo("Wo_LOGININ 05~");
							}, 1000);
						}, function(){
							this.echo("some error~");
							this.exit();
						}, 2000);
				}, function(){
					this.echo("Wo_LOGININ 04~");
				}, 2000);
		}, 3000);

	/////////////  /

	this.waitForSelector('.home-header .home-i-back',
		function(){
	        this.capture(this._result_cap_str + _TimeStamp() + ".png");
	        this.echo("Log In, Browser go back to Main Page, Quit, OK ?");
    	    this.click('.home-header .home-i-back');
    	}, function(){
    		this.echo("Wo_LOGININ 02~");
		}, 3000);
}

function _D_A_T_Flt_List(){
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
			this.exit();
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
			this.exit();
		}, 5000);

	//	等城市列表数据拉出来
	this.wait(5000);
	//	如果下面的逻辑使用this.waitFor实现，就不用在这样硬等待了。

	// 这个步骤应该接受参数，${出发城市}
	this.then(function(){
		this.echo("To Depart City List ~Choose Depart City, and then Back ~");
	// this.captureSelector(this._result_cap_str + 'departcity.png', 'x(//.main-item/sub-city-box');//*[@data-id=3])');
	   if(!this.exists('.main-item .sub-city-box [data-code="' + _Depart_City + '"]')){
           this.echo("There is no Depart Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_0" +".png");
           this.exit();
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + _Depart_City + '"]');//*[@data-id=3])');
	//   this.echo("Could I Choose some depart city, OK ?");
	   this.click('.main-item .sub-city-box [data-code="' + _Depart_City + '"]');
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
			this.exit();
		}, 5000);

	this.then(function(){
	   this.echo("Choose Back City, and then Back ~");
   	   if(!this.exists('.main-item .sub-city-box [data-code="' + _Arrive_City + '"]')){
           this.echo("There is no Arrive Button available for click, so Quit");
		//	this.capture(this._result_cap_str + _TimeStamp() + "_000__000__000__000__000__000_1" +".png");
           this.exit();
	   }
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + _Arrive_City + '"]');
	   this.click('.main-item .sub-city-box [data-code="' + _Arrive_City + '"]');
	})

	//	进入日期选择页
	this.waitForSelector('#js_departDate',
		function(){
			this.test.assertExists('#js_departDate',"There are no Calender button");
			this.echo("to Date Page ~");
			this.click('#js_departDate');
		}, function(){
			this.echo("There is no DateChoose Button available for click, so Quit");
			this.exit();
		}, 3000);

	//	检查是否进入日期
	this.waitForSelector('.cui_cld_daybox',
		function(){
			this.echo("Wait for rendering ~ Choose your Datetime :\n");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
		}, function(){
			this.echo("wait for 5s, there are no month or day~");
			this.capture(this._result_cap_str + _TimeStamp() + "_no_monthday" +".png");
			this.exit();
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
			this.test.assertExists('.cui_cldunit', "\nok, this is calender page，and seleted date: " + _Depart_Date);
		//	__temp_selector = 'li[data-date="' + _Depart_Date + '"].cui_cld_valid';
			this.waitForSelector('li[data-date="' + _Depart_Date + '"].cui_cld_valid',
				function(){
					this.test.info("可以进入日历, 看到了想要的日期!\n");
				//	this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", '.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
				//	this.test.assertExists('.cui_cld_daybox [data-date="' + _Depart_Date + '"]', "\nok, this is calender page ~\n");
				//	this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');

				//	(查询页)去程日期：	$('li[data-date="2014-10-13"].selected-start')
				//	(查询页)返程日期：	$('li[data-date="2014-10-13"].selected-back')
				//  无效日期：      $('li[data-date="2014-10-13"].cui_cld_daypass')
				//  有效日期：      $('li[data-date="2014-10-13"].cui_cld_valid')
					this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_date" +".png", 'li[data-date="' + _Depart_Date + '"].cui_cld_valid');
					this.test.assertExists('li[data-date="' + _Depart_Date + '"].cui_cld_valid', "\nok, this is calender page ~\n");
					this.click('li[data-date="' + _Depart_Date + '"].cui_cld_valid');
				}, function(){
					this.test.info("可以进入日历, 但是7s后没有看到想要的日期!\n");
					this.echo("可以进入日历, 但是7s后没有看到想要的日期!!\n");
					_after_TimeOut2.call(this, "_no_expected_date");
				}, 7000);
		}, function(){
			this.echo("不能进入日历!\n");
			_after_TimeOut2.call(this, "_no_Calender");
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
		}, 3000);
}


function _Choose_O_Flt(){
	this.wait(7000, function(){
	//	this.test.assertExists('.sub-city-box',"There are no City List");
		this.echo("stop here waiting for 7s; Show Flight List ~");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});

	this.then(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "Is_there_flight_list" + ".png");
			manList = this.evaluate(function() {
			return __utils__.findAll(".f_list div ul").length;
		});
	   if(manList < 1){
		   this.echo("\n\n\nThere are no flight from Server ~\n\n\n");
		   casper.exit();
	   }
	   this.echo("There are " + manList + " flights on List Page ~");
	});

	this.then(function(){
	// 航班列表的某个航班
	// 航班列表中的哪个航班呢？第14个行不行：
	   _Flt_Code_ = 2;

	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + _Flt_Code_ + '"]');
	   // 展开子舱按钮
	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold');

	   this.click('.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold');
	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');

	/*
		//	新式写法，哈哈
		this.waitForSelector('.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold',
			function(){
				this.click('.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit();
			}, 2000)
	*/
	   this.wait(2000, function(){
		//	this.echo("\n\n***********************\n\n");
           this.capture(this._result_cap_str + _TimeStamp() + ".png");
		   _zcNum = this.evaluate(function(_flt_){
			   return __utils__.findAll('.f_list div [data-parent-key="' + _flt_ + '"]').length;
			}, _Flt_Code_)
		   this.echo("There are " + _zcNum + " ZiCang of the Flight");
		   if (_zcNum < 1){
				 this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				 casper.exit();
		   }
		});
	});

	this.then(function(){
	   // 第一个子舱，选中
		this.click('.f_list div [data-parent-key="' + _Flt_Code_ + '"]');
			  
		/*	  this.evaluate(function(){
				 this.echo("I am am In in In ~");
				 __utils__.findOne('.f_list div [data-parent-key="' + _Flt_Code_ + '"]').click();
			  });
		   });
		*/
	//	_zc_str_ = '[data-parent-key="' + _Flt_Code_ + '"]';
	//	this.evaluate(function(selector, _zc_){
	//      使用document定位元素
	//      document.getElementsByClassName('f_detail')[0].children[2].click();
	//	    $(selector)[_zc_].click();
	//	}, _zc_str_, 3);
	//	this.waitForResource(
	//	);
	});

	// (第一次等待)wait for 3.9s, prepare rendering page of billedit.
	this.wait(6000);

	this.waitForSelector('.flight-bkinfo',
		function(){
			this.echo("This is Page of BillEdit, is it ?");
			this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
		}, function(){
			this.echo("After 8s, the page wai still not BillEdit ~");
		}, 8000)
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
		_file_name,
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


function _out_Check_Bill_Elements(){
//	如果未登录，检查页面元素	
/*
	this.wait(2000, function(){
		this.echo("Maybe i should stop here waiting for some minutes, for js on page to running completely~");
	})
*/
	//	id="js_addPass_btn"
	//	乘机人信息
//	this.waitForSelector('#addPassenger',
	this.waitForSelector('#js_addPass_btn',
		function(){
			this.test.assertExists('#js_addPass_btn', "One button exist ~");
			this.echo("ok, Continue ...");
		}, function(){
			_after_TimeOut2.call(this, "_js_BillEdit_btn");
		//	this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
		//	this.echo("I will wait 8s for js_addPass_btn button, but it does not appear~");
		//	casper.exit();
		}, 8000);

	//	联系手机
	this.waitForSelector('.flight-linktel',
		function(){
			this.test.assertExists('.flight-linktel', "Two button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for Phone Number Input button, but it does not appear~");
		//	casper.exit();
			_after_TimeOut2.call(this, "_js_BillEdit_btn");
		}, 8000);

/*
	//	报销凭证，报销凭证包括在'#deliverybox'内
	this.waitForSelector('.flight-infoinput-blk',
			function OK_continue(){
				this.echo("ok，Continue ...");
			},
			function oops_timeout(){
				this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
				this.echo("I will wait 8s for BaoXian button, but it does not appear~");
				casper.exit();
			},
			8000);
*/
	//报销凭证
	this.waitForSelector('#deliverybox',
		function(){
			this.test.assertExists('#deliverybox', "Three button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for PeiSongDiZhi button, but it does not appear~");
		//	casper.exit();
			_after_TimeOut2.call(this, "_js_BillEdit_btn");
		}, 8000);
	/*
	    if(this.visible('#addPassenger')){
	      	    this.echo("#addPassenger is Visible ~");
	    }else{
	      	    this.echo("#addPassenger is NOT Visible ~");
	    }

	    if(this.visible('.flight-linktel')){
	      	    this.echo(".flight-linktel is Visible ~");
	    }else{
	      	    this.echo(".flight-linktel is NOT Visible ~");
	    }

	    if(this.visible('.flight-infoinput-blk')){
	      	    this.echo(".flight-infoinput-blk is Visible ~");
	    }else{
	      	    this.echo(".flight-infoinput-blk is NOT Visible ~");
	    }

	    if(this.visible('#deliverybox')){
	      	    this.echo("#deliverybox is Visible ~");
	    }else{
	      	    this.echo("#deliverybox is NOT Visible ~");
	    }
	*/
	this.waitForSelector('#paybox',
		function(){
			this.test.assertExists('#paybox', "Four button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException" + ".png");
			this.echo("I will wait 8s for Pay button, but it does not appear~");
		//	casper.exit();
			_after_TimeOut2.call(this, "_js_BillEdit_btn");
		}, 8000);

//	(第二次等待)刚刚进入订单填写页，只不过检查了元素，需要等待Rendering JS code Running.
	this.wait(2000);
	this.waitForResource('.cui-pop-box',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeAlert" + ".png");
			this.echo("No flight left. so Quit ~（很抱歉，您预订的航班已经售完）");
			this.exit(_TimeStamp() + "__Exception_no_Flight_left__" + ".png");
		}, function(){
			this.echo("No Alert ~ so Continue ~");
		}, 1000);
}


function _in_Check_Bill_Elements(){
//	如果登录，检查页面元素
	//	乘机人信息
	//	id="js_selectPass_btn"
//	this.waitForSelector('#passenger-info-header',
	this.waitForSelector('#js_selectPass_btn',
		function(){
			this.test.assertExists('#js_selectPass_btn', "One button exist ~");
			this.echo("ok, Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for js_selectPass_btn button, but it does not appear~");
			casper.exit();
		}, 8000);

	//	联系手机，还可以使用id '#linktel'
	this.waitForSelector('.flight-linktel',
		function(){
			this.test.assertExists('.flight-linktel', "Two button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for Phone Number Input button, but it does not appear~");
			casper.exit();
		}, 8000);

	//	还有保险id '#insure'
	this.waitForSelector('#insure',
		function(){
			this.test.assertExists('#insure', "2.5 button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for BaoXian button, but it does not appear~");
			casper.exit();
		}, 8000);

	//	报销凭证
	this.waitForSelector('#deliverybox',
		function(){
			this.test.assertExists('#deliverybox', "Three button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for PeiSongDiZhi button, but it does not appear~");
			casper.exit();
		}, 8000);

	//	支付按钮
	this.waitForSelector('#paybox',
		function(){
			this.test.assertExists('#paybox', "Four button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for Pay button, but it does not appear~");
			casper.exit();
		}, 8000);

//	(第二次等待)刚刚进入订单填写页，只不过检查了元素，需要等待Rendering JS code Running.
	this.wait(6000);

	this.waitForResource('.cui-pop-box',
		function(){
			this.capture
			this.echo("No flight left. so Quit ~（很抱歉，您预订的航班已经售完）");
			this.exit(_TimeStamp() + "__Exception_no_Flight_left__" + ".png");
		}, function(){
			this.echo("No Alert ~ so Continue ~");
		}, 1000);
}


//	处理pata 提示框的操作步骤
function _OK_PATA(){
	this.capture(this._result_cap_str + _TimeStamp() + "_some_PATA_or_QTE" + ".png");
	this.echo("Process some steps for PATA ~");
}

function _out_Fill_Passenger(){
	// 填名字和身份证号码
	this.echo("Here, i will input some info de passengers ~");
/*	this.mouseEvent('mousedown', '.flight-infoinput .js_newName');
	this.mouseEvent('mouseout', '.flight-infoinput .js_newName');
	this.mouseEvent('click', '.flight-infoinput .js_newName');
	this.mouseEvent('mousedown', '.flight-infoinput .js_no');
	this.mouseEvent('mouseout', '.flight-infoinput .js_no');
	this.mouseEvent('click', '.flight-infoinput .js_no');
	this.mouseEvent('mousedown', '#linkTel');
	this.mouseEvent('mouseout', '#linkTel');
	this.mouseEvent('click', '#linkTel');
*/	this.evaluate(function(_zName, _zID){
   //		$('#readmeAction').next('input').val("伟华份");
   //		$('#sel_idCard').next('label').next('input').val("460101198909011670");
   //		$('#linkTel').val("18682089631");
   		document.querySelector('.flight-infoinput .js_newName').value = _zName;
   		document.querySelector('.flight-infoinput .js_no').value  = _zID;
   	}, '杨开文', '460101198909011670');

	this.waitFor(
		function(){
			return this.evaluate(function(){
				return document.querySelector('.flight-infoinput .js_no').value.length > 17;
			})
		}, function OK_continue(){
		//	this.capture(this._result_cap_str + _TimeStamp() + "___testtesttesttest01___" + ".png")
			this.evaluate(function(){
				$('.flight-infoinput .js_newName').focus();
		    	$('.flight-infoinput .js_newName').focusout();
		    	$('.flight-infoinput .js_no').focus();
		    	$('.flight-infoinput .js_no').focusout();
		//  return  $('.flight-infoinput .js_no').val()
		//	$('.flight-infoinput .js_no').val();
			});
		//	this.echo(document.querySelector('.flight-infoinput .js_no').value.length);
			this.echo("There is ond id with length more than 17~");
		}, function oops_timeout(){
			this.echo('Id was not input successfully ~');
			this.exit();
		}, 2000);
}

function _Fill_Other_Info(){
//	this.wait(3000,function(){
//		this.echo("\n\nInput Phone Number ?\n\n")});

//	this.capture(this._result_cap_str + _TimeStamp() + "___IVVVVVVVVVVVIII" + ".png");
	
	/*
		this.fillSelectors('.flight-infoinput', {
			'input[class="js_newName"]':   	'温加宝',
			'input[class="js_no"]':   		'460101198909011670'
		}, false);

		this.fillSelectors('.flight-section', {
			'input[id="linkTel"]': 			'18682205585'
		}, false);
	*/
	/*	this.wait(1000, function(){
			this.echo("Nothing to do, just wait for 1s.");
		})
	*/
		this.evaluate(function(_pNum){
			document.querySelector('#linkTel').value = _pNum;
		}, '18682089631');
		//	Test Action
	//	this.test.assertSelectorHasText('', '');

/*
	//	另一个写法：
		function Input_Check(_pNum){
			return this.evaluate(function(_pNum){
						document.querySelector('#linkTel').value = _pNum;
						return document.querySelector('#linkTel').value.length > 10;
					}, _pNum);
		}

		this.waitFor(
			Input_Check('18682089631')
			, function(){}
			, 1000);
*/

		this.waitFor(
			function(){
				return this.evaluate(function(){
					return document.querySelector('#linkTel').value.length > 10;
				})
			}, function OK_continue(){
		//		this.capture(this._result_cap_str + _TimeStamp() + "___testtesttesttest02___" + ".png")
				this.evaluate(function(){
					$('#linkTel').focus();
			    	$('#linkTel').focusout();
				})
				this.echo("Good News~");
			}, function oops_timeout(){
				this.echo('PhoneNum was not input successfully ~');
				this.exit();
			}, 2000);

		this.then(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "___IIIIIIIIIIIIIIII" + ".png");
		//	_Dump_Page2.call(this, 'phone.html');
		})
}

/*
function _Fill_Passenger2(){
		// 填名字和身份证号码
		this.echo("Here, i will input some info de passengers ~");
	
		this.fillSelectors('.flight-infoinput', {
			'input[class="js_newName"]':   	'温加宝',
			'input[class="js_no"]':   		'460101198909011670'
		}, false);

		this.echo("123123123\n\n");

		this.fillSelectors('.flight-section', {
			'input[id="linkTel"]': 			'18682205585'
		}, false);

		this.echo("333333333333333\n\n");

		_Dump_Page2.call(this, 'phone.html');
}
*/

function _PsgrInfo_Loss(){
	this.capture(this._result_cap_str + _TimeStamp() + "_passenger_info_Loss" + ".png");
	this.echo("\n\nChoosed passenger info is NOT completely ~ Fuck ~~~\n\n");
	this.exit();
}

function _in_Fill_Passenger(){
	this.waitForSelector('#js_selectPass_btn',
		function(){
			this.echo("go to 1~");
			this.captureSelector(this._result_cap_str +  _TimeStamp() + "__AddPassenger__" + ".png", '#js_selectPass_btn');
			this.click('#js_selectPass_btn');
		}, function(){
			this.echo("No button for add passenger ~");
			this.exit();
		}, 3000);

	this.wait(1000);

	this.waitFor(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__Psgr__" + ".png");
			_psgNum = this.evaluate(function(){
					return __utils__.findAll('.js_choose').length;
				});
			this.echo("\n%%%%%_psgNum : " + _psgNum);
			_str = this.evaluate(function(){
				//	return __utils__.findOne('.js_choose').data('id');
					return __utils__.findOne('.js_choose').getAttribute('data-id');
				})
			this.echo("\n^^^^^^^^^^^^^^_str : " + _str);
			return _psgNum > 0;
		},
		function(){
			this.echo("O come in ~ and _str: " + _str);
		//	$('[data-id="205359514"]')
			this.capture(this._result_cap_str + _TimeStamp() + "__PassengerList__" + ".png");
	/*		if(this.evaluate(function(){
				return __utils__.exists('[data-id="' + _str + '"]');
			})){
				this.echo("There are one selected passenger ~ Continue ~");
				this.click('[data-id="' + _str + '"]');
			}else{
				this.echo("There are no selected passenger ~");
				this.exit();
			}
	*/
		//	start merge...
			if(this.exists('[data-id="' + _str + '"]')){
				this.click('[data-id="' + _str + '"] .boa_info');
		//		this.evaluate(function(){
		//			$('[data-id="' + _str + '"] .boa_info').focus();
		//	    	$('[data-id="' + _str + '"] .boa_info').focusout();
		//		})

		//	IMPORTANT INFO提示 class="cui-toast" 不能用，但是在这里页面可以使用～
				this.waitForSelector('.cui-toast',
					_PsgrInfo_Loss,
	  				function (){
						this.capture(this._result_cap_str + _TimeStamp() + "__PassengerInfo_ok" + ".png");
						this.echo("oooooooops, Choosed passenger info is complete，continue ~");
					}, 1000);

				this.captureSelector(this._result_cap_str + _TimeStamp() + "__Choosed_Passenger__" + ".png", '[data-id="' + _str + '"]');
				this.echo("\n&&& choose one passenger %%%\n");
		/*
				this.evaluate(function(_spsgr){
					$('[data-id="' + _spsgr + '"] .boa_info').click();
				//	$('[data-id="' + _spsgr + '"] .boa_info').focus();
			    //	$('[data-id="' + _spsgr + '"] .boa_info').focusout();
				}, _str);
		*/
			}else{
				this.echo("evil 111~~~~~~~~~~~~~~\n\n");
				this.exit();
			}
	/*		if(this.exists('.rightblue')){
				this.capture(this._result_cap_str + _TimeStamp() + "__PassengerChhoosed__" + ".png");
				this.echo("\n&&& after choose, go back %%%\n");
				this.click('#js_return .rightblue');
			}else{
				this.echo("evil 222~~~~~~~~~~~~~~\n\n");
				this.exit();
			}
	*/
		//	end merge...
		}, function(){
			this.echo("No button for add passenger ~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.exit();
		}, 3000);

/*
//	WEI SHENME ZHELI MEIYOU BEI ZHIXING ？ ---WEIHUAYANG
	this.waitForSelector('[data-id="' + _str + '"]',
		function(){
			this.echo("There are one selected passenger ~ Continue ~");
			this.click('[data-id="' + _str + '"]');
		}, function(){
			this.echo("There are no selected passenger ~");
			this.exit();
		}, 1000);
*/
	this.wait(1000);

	//	返回： #js_return 
	//	完成： .rightblue 
	//	新增： #js_addPassenger 
	//	选择： .js_boa_info
	this.waitForSelector('.rightblue',
		function(){
			this.echo("after choose one passenger, go back ~~");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PassengerChoosedBackButton__" + ".png", '.rightblue');
		//	this.capture(this._result_cap_str + _TimeStamp() + "__PassengerChhoosed__" + ".png");
			this.click('.rightblue');
		}, function(){
			this.echo("No button for add passenger ~");
			this.exit();
		}, 3000);

	//	等待从登机人列表回到订单填写页
	this.wait(7000);

	this.waitForSelector('#passengerInfo',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__PassengerBack2Bill__" + ".png");
			this.echo("Ok, There are some passengers MORE than one~");
		}, function(){
			this.echo("Ok, There are no passengers ~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.exit();
		}, 7000);
}


// 登录了,重新的实现
//function _Bill_Fill_Edit(){
//	this.then(_Check_Bill_Elements);
//	目前_out_Check_Bill_Elements和_in_Check_Bill_Elements逻辑一致，如果后面需要返回或者构造变量，再分开。
//	this.then(_out_Check_Bill_Elements);
//	this.then(_in_Check_Bill_Elements);

//	this.then(_out_Fill_Passenger);
//	this.then(_in_Fill_Passenger);
//	this.then(_Fill_Other_Info);
/*
	this.wait(3000, function(){
	//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayBox__" + ".png", '#paybox');
		this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayButton__" + ".png", '#paybox .btn');
	//	this.click('#paybtn .btn');
		this.click('#paybox .btn');
		this.echo("OK, I'd clicked Button XiaYiBu~");
	});
*/

function _Bill_Fill_Edit_next(){
	this.waitForSelector('#paybox .btn',
		function(){
			this.test.info("\n\n!!!!!!!!!!!!!!!!!!!!!\nI will click button to Xia Yi Bu, Fucker ~\n!!!!!!!!!!!!!!!!!!!!!\n\n");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayBox__" + ".png", '#paybox');
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayButton__" + ".png", '#paybox .btn');
			this.evaluate(function(){
			//	点按钮下一步	
				$('#paybox .btn').focus();
			//	$('#paybox .btn').click();
			//	$('#paybox .btn').focusout();
			});
			this.click('#paybox .btn');
			this.evaluate(function(){
				$('#paybox .btn').focusout();
			});

			this.waitForSelector('.cui-toast',
				_OK_PATA,
			    function oops_no_PATA(){
			    	this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
			    	this.echo("oooooooops, there is no PATA or QTE，continue ~");
			    }, 500);
			// this.waitForAlert(
			// 	);
			// this.waitForPopup(
			// 	);
		}, function(){
			this.echo("Finished Fill for Bill, but After 3s could not find element XiaYiBu~");
		}, 3000);
/*
	this.waitForSelector('.cui-layer-padding',
		function(){
			this.captureSelector(this._result_cap_str + _TimeStamp() + "_Fill_orEdit_Error" + ".png", '.cui-layer-padding');
			this.echo("No XiaYiBu, there are some problem ~");
			this.exit();
		}, function(){
			this.echo("go, continue");
		}, 500);	
*/

	//	下一步后页面需要时间才能打开，10s够不够？
	this.wait(5000);
//	this.wait(100, function(){_Dump_Page.call(this);});
}


function _Result_Shoot(){
	this.wait(3000);
	this.capture(this._result_cap_str + _TimeStamp() + "_afterPAY" + ".png");
	// this.test.assertVisible(".flight-bkrst");
	// this.test.assertSelectorHasText(".flight-bkrst-tips", "成功");
	// this.test.assertResourceExists('.orderid');
	if(this.exists('.flight-bkrst-list')){
		this.test.info("Result : " +
			this.evaluate(function(){
				return document.querySelector('.orderid').getAttribute('data-id') > 10;
			}));
	}else{
		this.test.info("\nMay be fail to Orderid ~\n");
	}
	this.wait(7000);
	this.echo("This is current page url:\n" + this.getCurrentUrl());
	this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
	return 888;
}

function _out_Pay_with_Money(){
	this.echo("\n\nout I am coming ~\n\n");
	//	另外还有其他元素：id="order_amount" id="#order_title"
	this.waitForSelector('#creditcardpay',
		function (){
				this.echo("Please pay for ~");
				this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
			//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');
			//	信用卡支付
				this.click('#creditcardpay');
			//	储蓄卡支付
			//	this.click('#bankcardpay');
			//	支付宝支付
			//	this.click('#EB_MobileAlipay');
				this.waitForSelector('.list_st_border',
					function (){
						this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1" + ".png");
					//	输入银行卡号
						this.evaluate(function(_kaNum){
							document.querySelector('#c_payment_cardbin').value = _kaNum;
						}, '6222651000000009');
						this.click('#c_payment_cardbin_button');
						this.waitForSelector('#li_bankPeriod',
							function (){
								this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2" + ".png");
								this.evaluate(function(_ggDate){
									document.querySelector('#bankPeriod').value = _ggDate;
								}, '1221');
							}, function (){
								this.echo("Some Problem of (out) ZhiFu step 2~");
								this.exit();
							}, 3000);
					}, function (){
						this.echo("Some Problem of (out) ZhiFu step 1~");
						this.exit();
					}, 3000);
		}, function (){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00outE" + ".png");
		//	this.test.assertVisible('h1', "It feels good !\n");
			this.echo("\n\n\n\n\nAfter 10s, (out) i found SB ZhiFu has sick ~\n\n\n\n");
			this.exit();
		}, 10000);

	//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.test.info("\n\nClick Button for Pay For 支付啦啦啦 ~\n\n");
			this.capture(this._result_cap_str + _TimeStamp() + "_beforePAY" + ".png");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//	this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 3~");
			this.exit();
		}, 3000);
}


function _in_Pay_with_Money(){
	this.echo("\n\nin am I coming in ?\n\n");
	//	'#c_pay_index_lpk' or '#paywaylist_ul'
	this.waitForSelector('#c_pay_index_lpk',
		function(){
			this.echo("Please pay for ~");
				this.capture(this._result_cap_str + _TimeStamp() + "_zF00in0" + ".png");
				this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');
			//	信用卡支付
				this.click('#creditcardpay');
			//	储蓄卡支付
			//	this.click('#bankcardpay');
			//	支付宝支付
			//	this.click('#EB_MobileAlipay');
				this.waitForSelector('.list_st_border',
					function (){
						this.capture(this._result_cap_str + _TimeStamp() + "_zF00in1" + ".png");
					//	输入银行卡号
						this.evaluate(function(_kaNum){
							document.querySelector('#c_payment_cardbin').value = _kaNum;
						}, '6222651000000009');
						this.click('#c_payment_cardbin_button');
						this.waitForSelector('#li_bankPeriod',
							function (){
								this.capture(this._result_cap_str + _TimeStamp() + "_zF00in2" + ".png");
								this.evaluate(function(_ggDate){
									document.querySelector('#bankPeriod').value = _ggDate;
								}, '1216');
							}, function (){
								this.echo("Some Problem of (in) ZhiFu step 2~");
								this.exit();
							}, 3000);
					}, function (){
						this.echo("Some Problem of (in) ZhiFu step 1~");
						this.exit();
					}, 3000);
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00inE" + ".png");
			this.echo("\n\n\n\n\nAfter 10s, (IN) i found SB ZhiFu has sick ~\n\n\n\n");
			this.exit();
		}, 10000);

		//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
	//		this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (in) ZhiFu step 3~");
			this.exit();
		}, 3000);
}


/******************
**   First Case  **
******************//*
casper.test.setUp(function(){
	// 从这里开始
	casper.start("http://m.ctrip.com/", function() {
		  this.capture(this._result_cap_str + _TimeStamp() + ".png");
		  this.test.info("starting ...");
	});
});

casper.test.tearDown(function(){
	casper.run(function (){
		this.echo("No Money to Pay, so Stop here. Bye ~");
	//    this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
		casper.exit();
	});

	test.assertResourceExists('html');
	test.done();
});

casper.test.begin("FirstCase", 1, function suite(){
//	test: function(test){
		//	检查参数
		casper.then(function(){_TEST_WP('SHA', 'BJS', '2014-09-27')});
		//	登录
		casper.then(_GoTo_WoXie).then(_LOGININ);
		//	选择航班
		casper.then(_D_A_T_Flt_List).then(_Choose_O_Flt);
		//	填写订单
		casper.then(_in_Check_Bill_Elements).then(_in_Fill_Passenger).then(_Fill_Other_Info).then(_Bill_Fill_Edit_next);
		//	支付
		casper.then(_in_Pay_with_Money).then(_Result_Shoot);
//	}
});
*/

/******************
**  Second Case  **
******************/
casper.test.begin("SecondCase", 1, function suite(test){
	this._result_cap_str = "../../TestCapture/Test_SecondCase/";
	// 从这里开始
	casper.start("http://m.ctrip.com/", function() {
		  this.capture(this._result_cap_str + _TimeStamp() + ".png");
	}).then(function(){_TEST_WP('SHA', 'CTU', '2014-09-30')});
	//	登出
	casper.then(_GoTo_WoXie).then(_LOGINOUT);
	//	选择航班
	casper.then(_D_A_T_Flt_List).then(_Choose_O_Flt);
	//	填写订单
	casper.then(_out_Check_Bill_Elements).then(_out_Fill_Passenger).then(_Fill_Other_Info).then(_Bill_Fill_Edit_next);
	//	支付
	casper.then(_out_Pay_with_Money).then(_Result_Shoot);
	//	打完收工
	casper.run(function (){
		    this.echo("No Money to Pay, so Stop here. Bye ~");
		//    this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
		//	casper.exit();
		//  下面这个assertResourceExists方式不应该这么使用，Resource指的是图片、css等东西，而不是某个标签。
			test.assertResourceExists('html',"\n\n牛逼吧？\n\n");
			test.done();
			return 999;
		});
});

/******************
**  Three Case  **
******************//*
casper.test.begin("ThreeCase", 1, function suite(test){
	// 从这里开始
	casper.start("http://m.ctrip.com/", function() {
		  this.capture(this._result_cap_str + _TimeStamp() + ".png");
	}).then(function(){_TEST_WP('SHA', 'BJS', '2014-09-27')});
	//	登出
	casper.then(_GoTo_WoXie).then(_LOGININ);
	//	选择航班
	casper.then(_D_A_T_Flt_List).then(_Choose_O_Flt);
	//	填写订单
	casper.then(_in_Check_Bill_Elements).then(_in_Fill_Passenger).then(_Fill_Other_Info).then(_Bill_Fill_Edit_next);
	//	支付
	casper.then(_in_Pay_with_Money).then(_Result_Shoot);
	//	打完收工
	casper.run(function (){
		    this.echo("No Money to Pay, so Stop here. Bye ~");
		//    this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
		//	casper.exit();
			test.assertResourceExists('html');
			test.done();
		});
});
*/