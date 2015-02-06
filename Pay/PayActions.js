
function in_ChangYongKa(){
	//	常用卡支付
	//	this.click('#bankcardpay');
	//	there are no implement
}

function CreditPay(){

	this.echo("\n\n********************************\nCreditPay CreditPay CreditPay Step~\n********************************\n\n");
	//	信用卡支付
	this.click('#creditcardpay');
/*
	this.waitFor('#creditcardpay',
		function(){
			this.click('#creditcardpay');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 4~");
			this.exit(991);
		}, 1000);
*/

	this.waitForSelector('.list_st_border',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1" + ".png");
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
					this.exit(994);
				}, 3000);

			this.waitForSelector('#li_bankPeriod',
				function(){
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2" + ".png");
					this.evaluate(function(_ggDate){
						document.querySelector('#bankPeriod').value = _ggDate;
					}, '1221');
				}, function(){
					this.echo("Some Problem of (out) ZhiFu step 2~");
					this.exit(993);
				}, 3000);
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 1~");
			this.exit(992);
		}, 3000);
}


function BankPay(){
	//	储蓄卡支付
	//	this.click('#bankcardpay');
	//	there are no implement
}


function AliPay(){
	//	支付宝支付
	//	this.click('#EB_MobileAlipay');
	//	there are no implement
}


function WeixinPay(){
	//	there are no implement
}


function Zhi_Fu_Ma(){
	//	最终支付动作
	this.waitForSelector('.paybox #payBtn',
		function(){
			this.test.info("\n\nClick Button for Pay For 支付啦啦啦 啦啦啦 啦啦啦~\n\n");
			this.test.assertSelectorHasText(".paybox #payBtn", "支付");
			this.capture(this._result_cap_str + _TimeStamp() + "_beforePAY" + ".png");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '.paybox #payBtn');
		//	this.click('.paybox #payBtn');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 3~");
			this.exit(88);
		}, 3000);
}

