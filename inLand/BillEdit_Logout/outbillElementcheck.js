

function out_Check_BillEdit_Elements(){
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
			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
		//	this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
		//	this.echo("I will wait 8s for js_addPass_btn button, but it does not appear~");
		//	this.exit(601);
		}, 8000);

	//	联系手机
	this.waitForSelector('.flight-linktel',
		function(){
			this.test.assertExists('.flight-linktel', "Two button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for Phone Number Input button, but it does not appear~");
		//	this.exit(602);
			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
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
		//	this.exit(603);
			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
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

			_after_TimeOut2.call(this, "_js_error_BillEdit_btn");
		//	this.exit(605);
		}, 8000);

//	(第二次等待)刚刚进入订单填写页，只不过检查了元素，需要等待Rendering JS code Running.
	this.wait(2000);
	this.waitForResource('.cui-pop-box',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeAlert" + ".png");
			this.echo("No flight left. so Quit ~（很抱歉，您预订的航班已经售完）");
			this.capture(_TimeStamp() + "__Exception_no_Flight_left__" + ".png");
			this.exit(606);
		}, function(){
			this.echo("No Alert ~ so Continue ~");
		}, 1000);
//	满仓检查是不是真的应该放在这里

}
