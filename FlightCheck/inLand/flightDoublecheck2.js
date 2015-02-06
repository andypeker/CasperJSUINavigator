

//	似乎不是实现查询往返
function D_A_T_Double_Flt_Check2(){
	this.waitForSelector('li [href="/webapp/flight/"]',
		function(){
	// 		首页机票进入机票查询页
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("Could I to Flight Page ?~");
			this.log('首页可以看到机票按钮', "info");
			this.test.assertExists('li [href="/webapp/flight/"]', '首页可以看到机票按钮');
	//		this.captureSelector(this._result_cap_str + _TimeStamp(), 'li [href="/webapp/flight/"]');
			this.click('li [href="/webapp/flight/"]');
	//		this.click('li [href="/webapp/flight/?debug"]');
	//		this.thenOpen('http://m.ctrip.com/webapp/flight/?debug');
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("after 7s to Flight Failure 01 ~");
			this.log('等待7s后 我携跳首页失败了', "error");
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
	// this.wait(7000, function(){
	// 	this.echo("Stop here so that javascript(on page) could run completely, just wait for 7s.");
	// 	_Single.call(this);
	// });

	// this.wait(500, function(){
	// 		DepartCity_Select.call(this);
	// });

	// this.wait(500, function(){
	// 		ArriveCity_Select.call(this);
	// });

	// this.wait(500, function(){
	// 		Day_one_Select.call(this);
	// });
	this.wait(7000, function(){_CheckPageElementsCheck.call(this);});

	// this.wait(500, _Single.bind(this));
	// this.wait(500, DepartCity_Select.bind(this));
	// this.wait(500, ArriveCity_Select.bind(this));
	// this.wait(500, Day_one_Select.bind(this));
	this.wait(500, function(){_Double.call(this);});
	this.wait(500, function(){DepartCity_Select.call(this);});
	this.wait(500, function(){ArriveCity_Select.call(this);});
	this.wait(500, function(){Day_one_Select.call(this);});

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
			this.capture(this._result_cap_str + _TimeStamp() + "_RRRRRRRRRRRRR" + ".png");
			this.echo("click Check Button ~");
			this.click('#searchlistsubmit');
		}, function(){
			this.echo("Go to choose date, After 3s but could not go back ~");
		//	this.exit(424);
		}, 3000);
}


function D_A_T_Double_Flt_Check(){
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
	// this.wait(7000, function(){
	// 	this.echo("Stop here so that javascript(on page) could run completely, just wait for 3s.");
	// 	_Double.call(this);
	// });

	// this.wait(500, function(){
	// 	DepartCity_Select.call(this);
	// });
	
	// this.wait(500, function(){
	// 	ArriveCity_Select.call(this);
	// })

	// this.wait(500, function(){
	// 	Day_one_Select.call(this);
	// });

	this.wait(7000, function(){_CheckPageElementsCheck.call(this);});

	// this.wait(500, _Double.bind(this));
	// this.wait(500, DepartCity_Select.bind(this));
	// this.wait(500, ArriveCity_Select.bind(this));
	// this.wait(500, Day_one_Select.bind(this));

	this.wait(500, function(){_Double2.call(this);});
	this.wait(500, function(){DepartCity_Select.call(this);});
	this.wait(500, function(){ArriveCity_Select.call(this);});
	this.wait(500, function(){Day_one_Select2.call(this);});

	this.wait(2000, function(){
	//	if( typeof(this._Arrive_Date) !== 'undefined' ){
		if( this._Back_Date && typeof(this._Back_Date) !== 'undefined' && this._Back_Date !== '' ){
			this.echo("^^^^^^^^^^^^^^^返程日期^^^^^^^^\n" + this._Back_Date + "\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
			Day_two_Select2.call(this);
		}
	});
	/*
		如果不是用wait分隔这些call 这里的执行顺序会让人迷惑
	*/

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

