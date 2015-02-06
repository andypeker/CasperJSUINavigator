
function out_Pay_with_Money(){
	this.echo("\nout I 登录支付 ~\n");
	//	另外还有其他元素：id="order_amount" id="#order_title"
	this.waitForSelector('#creditcardpay',
		function(){
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
						this.waitForSelector('#c_payment_cardbin',
							function(){
								this.evaluate(function(_kaNum){
									document.querySelector('#c_payment_cardbin').value = _kaNum;
								}, '6222651000000009');
								this.click('#c_payment_cardbin_button');
							}, function(){
								this.echo("Some Problem of (out) ZhiFu step 4~");
								this.exit(94);
							}, 3000);
						this.waitForSelector('#li_bankPeriod',
							function (){
								this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2" + ".png");
								this.evaluate(function(_ggDate){
									document.querySelector('#bankPeriod').value = _ggDate;
								}, '1221');
							}, function (){
								this.echo("Some Problem of (out) ZhiFu step 3~");
								this.exit(93);
							}, 3000);
					}, function (){
						this.echo("Some Problem of (out) ZhiFu step 2~");
						this.exit(92);
					}, 3000);
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00outE" + ".png");
		//	this.test.assertVisible('h1', "It feels good !\n");
			this.echo("\n\n\nAfter 10s, (out) i found SB ZhiFu has sick ~\n\n\n");
			this.exit(91);
		}, 10000);

	//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.test.info("\n\nClick Button for Pay For 支付啦啦啦 ~\n\n");
			this.test.assertSelectorHasText(".paybox #payBtn", "支付");
			this.capture(this._result_cap_str + _TimeStamp() + "_beforePAY" + ".png");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//	this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 3~");
			this.exit(98);
		}, 3000);
}


function out_Pay_with_Money2(_pay_type){
	this.echo("\n\nout I 登录支付 ~\n\n");
	//	另外还有其他元素：id="order_amount" id="#order_title"
	this.waitForSelector('#creditcardpay',
		function(){
			this.echo("Please pay for ~");
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
			//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');
			if(_pay_type === "Credit"){
			//	信用卡支付
				CreditPay.call(this);
			//	try call like this, maybe that will be ok :
			//	CreditPay();
			}else if(_pay_type === "Bank"){
			//	储蓄卡支付
			//	this.click('#bankcardpay');
				BankPay.call(this);
			}else if(_pay_type === "AliPay"){
			//	支付宝支付
			//	this.click('#EB_MobileAlipay');
				AliPay.call(this);
			}else if(_pay_type === "Weixin"){
			//	weixin
				WeixinPay.call(this);
			}else{
			//	wrong !
			//	this.exit(94);
			}
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00outE" + ".png");
		//	this.test.assertVisible('h1', "It feels good !\n");
			this.echo("\n\n\nAfter 10s, (out) i found SB ZhiFu has sick ~\n\n\n");
			this.exit(91);
		}, 10000);

	//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.test.info("\n\nClick Button for Pay For 支付啦啦啦 ~\n\n");
			this.test.assertSelectorHasText(".paybox #payBtn", "支付");
			this.capture(this._result_cap_str + _TimeStamp() + "_beforePAY" + ".png");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//	this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 3~");
			this.exit(98);
		}, 3000);
}


//	这个没有闭包的方法可以这样call：casper.then(function(){_out_Pay_with_Money3.call(this, "Credit")})
function out_Pay_with_Money3(_pay_type){
	this.echo("\n\n未登录支付 ~\n\n");

	out_PayCheck2.call(this);

	this.log("Please different type of Pay ~", "info");
	this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');

	// this.waitForSelector('',
	// 	function(){

	// 	}, function(){

	// 	}, 2000);

	this.wait(100, function(){
		if(_pay_type === "Credit"){
		//	信用卡支付
		//	CreditPay.call(this);
			CreditPay2.call(this);
		//	try call like this, maybe that will be ok :
		//	CreditPay();
		}else if(_pay_type === "Bank"){
		//	储蓄卡支付
		//	this.click('#bankcardpay');
			BankPay.call(this);
		}else if(_pay_type === "AliPay"){
		//	支付宝支付
		//	this.click('#EB_MobileAlipay');
			AliPay.call(this);
		}else if(_pay_type === "Weixin"){
		//	weixin
			WeixinPay.call(this);
		}else{
		//	wrong !
			this.echo("Some Problem of ZhiFu gongfu~");
	    //	没有带参数 就返回错误码93
	        this.exit(93);
		}

		Zhi_Fu_Ma.call(this);
	/*
		//	最终支付动作
		this.waitForSelector('.paybox #payBtn',
			function(){
				this.test.info("\n\nClick Button for Pay For 支付啦啦啦 啦啦啦~\n\n");
				this.test.assertSelectorHasText(".paybox #payBtn", "支付");
				this.capture(this._result_cap_str + _TimeStamp() + "_beforePAY" + ".png");
				this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
			//	this.click('.paybox #payBtn');
			}, function(){
				this.echo("Some Problem of (out) ZhiFu step 3~");
				this.exit(98);
			}, 3000);
	*/
	});
}

/*******************************
步骤如果想要带上参数 就必须使用闭包实现，其实也不一定，比如上面那个实现和调用
*******************************/
function out_Pay_with_Money4(_pay_type){
	return function(){
		this.echo("\n\nout I am 未登录支付 ~\n\n");

		out_PayCheck.call(this);

		this.echo("Please different type of Pay ~");
		this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
	//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');

		if(_pay_type === "Credit"){
		//	信用卡支付
			CreditPay.call(this);
		//	try call like this, maybe that will be ok :
		//  事实证明 下面这个call方法不可行
		//	CreditPay();
		}else if(_pay_type === "Bank"){
		//	储蓄卡支付
		//	this.click('#bankcardpay');
			BankPay.call(this);
		}else if(_pay_type === "AliPay"){
		//	支付宝支付
		//	this.click('#EB_MobileAlipay');
			AliPay.call(this);
		}else if(_pay_type === "Weixin"){
		//	weixin
			WeixinPay.call(this);
		}else{
		//	wrong !
			this.echo("Some Problem of ZhiFu gongfu~");
		//	经过验证 如果调用_out_Pay_with_Money4时没有带参数 就返回错误码93
			this.exit(93);
		}

		Zhi_Fu_Ma.call(this);
	}
}


