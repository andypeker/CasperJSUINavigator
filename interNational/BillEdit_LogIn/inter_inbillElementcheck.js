
//	国际航班填写页 登录 未登录 元素检查相同
function inter_in_BillEditElementsCheck(){
	this.log('国际航班 未登录 来咯', "info");
//	如果未登录，检查页面元素	
	//	id="js_addPass_btn"
	//	填写页航班信息
//	this.waitForSelector('#addPassenger',
	this.waitForSelector('[data-role="infoBox"] .flight-fltinfo2',
		function(){
			this.test.assertExists('[data-role="infoBox"] .flight-fltinfo2', "[国际航班] 航班信息 exist ~");
			this.echo("ok, [国际航班] Continue ...");
		}, function(){
			_after_TimeOut2.call(this, "_js_inter_error_BillEdit_btn");
		//	this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.log("[国际航班] I will wait 8s for 1 button, but it does not appear~", "warning");
		//	this.exit(601);
		}, 8000);

	//	添加登机人
	this.waitForSelector('[data-role="passengerBox"]',
		function(){
			this.test.assertExists('[data-role="passengerBox"]', "[国际航班] 登机人 exist ~");
			this.echo("ok，[国际航班] Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.log("[国际航班] I will wait 8s for 2 button, but it does not appear~", "warning");
		//	this.exit(602);
			_after_TimeOut2.call(this, "_js_inter_error_BillEdit_btn");
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
	//	保险
	this.waitForSelector('[data-role="insure"]',
		function(){
			this.test.assertExists('[data-role="insure"]', "[国际航班] 保险 exist ~");
			this.echo("ok，[国际航班] Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.log("[国际航班] I will wait 8s for 3 button, but it does not appear~", "warning");
		//	this.exit(603);
			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
		}, 8000);

	//	data-role="delvBox"
	//	报销凭证
	this.waitForSelector('[data-role="delvBox"]',
		function(){
			this.test.assertExists('[data-role="delvBox"]', "[国际航班] 报销凭证 exist ~");
			this.echo("ok，[国际航班] Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.log("[国际航班] I will wait 8s for 4 button, but it does not appear~", "warning");
		//	this.exit(603);
			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
		}, 8000);


	this.waitForSelector('#paybox',
		function(){
			this.test.assertExists('#paybox', "[国际航班] 支付 or 下一步 exist ~");
			this.echo("ok，[国际航班] Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException" + ".png");
			this.log("[国际航班] I will wait 8s for Pay button, but it does not appear~", "warning");
			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
		//	this.exit(605);
		}, 8000);

//	(第二次等待)刚刚进入订单填写页，只不过检查了元素，需要等待Rendering JS code Running.
	this.wait(2000);
	this.waitForResource('.cui-pop-box',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeAlert" + ".png");
			this.echo("[国际航班] No flight left. so Quit ~（很抱歉，您预订的航班已经售完）");
			this.capture(_TimeStamp() + "__Exception_no_Flight_left__" + ".png");
			this.exit(606);
		}, function(){
			this.echo("No Alert ~ so Continue ~");
		}, 1000);
//	满仓检查是不是真的应该放在这里

}
