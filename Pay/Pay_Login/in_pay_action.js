function in_Pay_with_Money(){
	this.echo("\nin am I 登录支付 ?\n");
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
					/*	this.evaluate(function(_kaNum){
							document.querySelector('#c_payment_cardbin').value = _kaNum;
						}, '6222651000000009');
						this.click('#c_payment_cardbin_button');
					*/
						this.waitForSelector('#c_payment_cardbin',
							function(){
								this.evaluate(function(_kaNum){
									document.querySelector('#c_payment_cardbin').value = _kaNum;
								}, '6222651000000009');
								this.click('#c_payment_cardbin_button');
							}, function(){
								this.echo("Some Problem of (out) ZhiFu step 4~");
								this.exit(84);
							}, 3000);

						this.waitForSelector('#li_bankPeriod',
							function (){
								this.capture(this._result_cap_str + _TimeStamp() + "_zF00in2" + ".png");
								this.evaluate(function(_ggDate){
									document.querySelector('#bankPeriod').value = _ggDate;
								}, '1216');
							}, function (){
								this.echo("Some Problem of (in) ZhiFu step 2~");
								this.exit(83);
							}, 3000);
					}, function (){
						this.echo("Some Problem of (in) ZhiFu step 1~");
						this.exit(82);
					}, 3000);
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00inE" + ".png");
			this.echo("\n\n\n\n\nAfter 10s, (IN) i found SB ZhiFu has sick ~\n\n\n\n");
			this.exit(81);
		}, 10000);

		//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
	//		this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (in) ZhiFu step 3~");
			this.exit(88);
		}, 3000);
}


function in_Pay_with_Money2(_pay_type){
	this.echo("\nin am I 登录支付 2?\n");
	//	'#c_pay_index_lpk' or '#paywaylist_ul'
	this.waitForSelector('#c_pay_index_lpk',
		function(){
			this.echo("Please pay for ~");
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00in0" + ".png");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');
			if(_pay_type === "Credit"){
			//	信用卡支付
				CreditPay.call(this);
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
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00inE" + ".png");
			this.echo("\n\n\nAfter 10s, (IN) i found SB ZhiFu has sick ~\n\n\n");
			this.exit(81);
		}, 10000);

		//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
	//		this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (in) ZhiFu step 3~");
			this.exit(88);
		}, 3000);
}


function in_Pay_with_Money3(_pay_type){
	this.echo("\nin am I 登录支付 3?\n");
	this.log("\n我到这里了 3~\n", "info");

//	change in_PayCheck3 to in_PayCheck2 at 2015-01-21
	in_PayCheck2.call(this);

	this.log("Please different type of Pay ~", "info");
	this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');
	this.wait(100, function(){
		if(_pay_type === "ChangYong"){
		//	常用卡支付
			in_ChangYongKa.call(this);
		}else if(_pay_type === "Credit"){
		//	信用卡支付
			// CreditPay2.call(this);
			CreditPay4.call(this);
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
			this.exit(93);
		}

		Zhi_Fu_Ma.call(this);
	/*
		//	最终支付动作
		this.waitForSelector('.paybox #payBtn',
			function(){
				this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//		this.click('.paybox #payBtn');
			}, function(){
				this.echo("Some Problem of (in) ZhiFu step 3~");
				this.exit(88);
			}, 3000);
	*/

	});
}

//	这个function完全不可用
function in_Pay_with_Money33(_pay_type){
	this.echo("\nin am I 登录支付 33?\n");
	this.waitForSelector('#c_payment_index_changeBtn',
		function(){
			this.click('#c_payment_index_changeBtn');
			this.capture(this._result_cap_str + _TimeStamp() + "_Immediate_Zhifu" + ".png");
		},function(){
			this.log("支付页没有更换支付方式按钮", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_Immediate_Zhifu_fail" + ".png");
			this.exit(95);
		}, 3000);

	in_PayCheck3.call(this);

	this.log("Please different type of Pay ~", "info");
	this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');
	this.wait(100, function(){
		if(_pay_type === "ChangYong"){
		//	常用卡支付
			in_ChangYongKa.call(this);
		}else if(_pay_type === "Credit"){
		//	信用卡支付
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
			this.exit(93);
		}

		Zhi_Fu_Ma.call(this);
	/*
		//	最终支付动作
		this.waitForSelector('.paybox #payBtn',
			function(){
				this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//		this.click('.paybox #payBtn');
			}, function(){
				this.echo("Some Problem of (in) ZhiFu step 3~");
				this.exit(88);
			}, 3000);
	*/
	});
}


function in_Pay_with_Money4(_pay_type){
	return function(){
		this.echo("\nin am I 登录支付 4?\n");

		in_PayCheck.call(this);

		this.echo("Please different type of Pay ~");
		this.capture(this._result_cap_str + _TimeStamp() + "_zF00out0" + ".png");
	//	this.captureSelector(this._result_cap_str + _TimeStamp() + "__000000000000000000__" + ".png", '#creditcardpay');

		if(_pay_type === "ChangYong"){
		//	常用卡支付
			in_ChangYongKa.call(this);
		}else if(_pay_type === "Credit"){
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
			this.echo("Some Problem of ZhiFu gongfu~");
			this.exit(93);
		}

	/*	
		//	最终支付动作
		this.waitForSelector('.paybox #payBtn',
			function(){
				this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//		this.click('.paybox #payBtn');
			}, function(){
				this.echo("Some Problem of (in) ZhiFu step 3~");
				this.exit(88);
			}, 3000);
	*/
		Zhi_Fu_Ma.call(this);

	}
}