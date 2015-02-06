
function CreditPay(){
	this.echo("\n********************************\nCreditPay CreditPay CreditPay Step~\n********************************\n");
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


function CreditPay2(){
	this.echo("\n********************************\nCreditPay CreditPay CreditPay 222 Step~\n********************************\n");
	//	信用卡支付
	this.click('#c_payment_global_creditcard');
/*
	this.waitFor('#creditcardpay',
		function(){
			this.click('#creditcardpay');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 4~");
			this.exit(991);
		}, 1000);
*/
	this.waitForSelector('#c_payment_cardbin',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1" + ".png");
		//	输入银行卡号
		/*	this.evaluate(function(_kaNum){
				document.querySelector('#c_payment_cardbin').value = _kaNum;
			}, '6222651000000009');
			this.click('#c_payment_cardbin_button');
		*/

			this.evaluate(function(_kaNum){
				document.querySelector('#c_payment_cardbin').value = _kaNum;
			}, '6222651000000009');

			this.waitForSelector('#c_payment_cardbin_button',
				function(){
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2" + ".png");
					this.click('#c_payment_cardbin_button');
					this.waitForSelector('#li_bankPeriod',
						function(){
							this.capture(this._result_cap_str + _TimeStamp() + "_zF00out3" + ".png");
							this.evaluate(function(_ggDate){
								document.querySelector('#bankPeriod').value = _ggDate;
							}, '1221');
							this.waitForSelector('#c_payment_index_payBtn',
								function(){
									this.log('这一步应该输入了信用卡的有效期 继续', "info");
									this.capture(this._result_cap_str + _TimeStamp() + "_zF00out4" + ".png");
								}, function(){
									this.log('这一步应该输入信用卡的有效期失败 遗憾', "error");
									this.capture(this._result_cap_str + _TimeStamp() + "_zF00out4_error" + ".png");
									this.echo("Some Problem of (out) ZhiFu step 4~");
									this.exit(994);
								}, 1000);
						}, function(){
							this.echo("Some Problem of (out) ZhiFu step 3~");
							this.capture(this._result_cap_str + _TimeStamp() + "_zF00out3_error" + ".png");
							this.exit(993);
						}, 3000);
				}, function(){
					this.echo("Some Problem of (out) ZhiFu step 2~");
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2_error" + ".png");
					this.exit(992);
				}, 1000);
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 1~");
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1_error" + ".png");
			this.exit(991);
		}, 3000);
}

//	这个实现够简洁
function CreditPay3(){
	this.echo("\n********************************\nCreditPay CreditPay CreditPay 333 Step~\n********************************\n");
	//	信用卡支付
	this.click('#c_payment_global_creditcard');
/*
	this.waitFor('#creditcardpay',
		function(){
			this.click('#creditcardpay');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 4~");
			this.exit(991);
		}, 1000);
*/
	this.waitForSelector('#c_payment_cardbin',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1" + ".png");
		//	输入银行卡号
		/*	this.evaluate(function(_kaNum){
				document.querySelector('#c_payment_cardbin').value = _kaNum;
			}, '6222651000000009');
			this.click('#c_payment_cardbin_button');
		*/

			this.evaluate(function(_kaNum){
				document.querySelector('#c_payment_cardbin').value = _kaNum;
			}, '6222651000000009');

			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2" + ".png");
			
			this.click('#c_payment_cardbin_button');
			this.waitForSelector('#li_bankPeriod',
				function(){
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out3" + ".png");
					this.evaluate(function(_ggDate){
						document.querySelector('#bankPeriod').value = _ggDate;
					}, '1221');
					this.waitForSelector('#c_payment_index_payBtn',
						function(){
							this.log('这一步应该输入了信用卡的有效期 继续', "info");
							this.capture(this._result_cap_str + _TimeStamp() + "_zF00out4" + ".png");
						}, function(){
							this.log('这一步应该输入信用卡的有效期失败 遗憾', "error");
							this.capture(this._result_cap_str + _TimeStamp() + "_zF00out4_error" + ".png");
							this.exit(994);
						}, 1000);
				}, function(){
					this.echo("Some Problem of (out) ZhiFu step 3~");
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2_error" + ".png");
					this.exit(993);
				}, 3000);
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 1~");
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1_error" + ".png");
			this.exit(991);
		}, 3000);
}

//	这个实现够简洁
function CreditPay4(){
	this.log("\n爷爷进来了", "info");
	this.echo("\n********************************\nCreditPay CreditPay CreditPay 444 Step~\n********************************\n");
	//	信用卡支付
	this.click('#c_payment_index_changeBtn');

/*
	this.waitFor('#creditcardpay',
		function(){
			this.click('#creditcardpay');
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 4~");
			this.exit(991);
		}, 1000);
*/

	this.waitForSelector('#c_payment_global_creditcard',
		function(){
			this.click('#c_payment_global_creditcard');
			this.log("非常OK\n", "info");
		}, function(){
			this.log("非常不OK\n", "info");
		}, 3000);

	this.waitForSelector('#c_payment_cardbin',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1" + ".png");
		//	输入银行卡号
		/*	this.evaluate(function(_kaNum){
				document.querySelector('#c_payment_cardbin').value = _kaNum;
			}, '6222651000000009');
			this.click('#c_payment_cardbin_button');
		*/

			this.evaluate(function(_kaNum){
				document.querySelector('#c_payment_cardbin').value = _kaNum;
				// document.querySelector('#c_payment_cardbin').setAttribute('value', _kaNum);
			}, '6222651000000009');

			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2" + ".png");
			
			this.click('#c_payment_cardbin_button');
			this.waitForSelector('#li_bankPeriod',
				function(){

					this.log("这个有效期搞不进去 咋办捏?\n", "info");
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out3" + ".png");
					this.evaluate(function(_ggDate){
						// document.querySelector('#bankPeriod').value = _ggDate;
						document.querySelector('#li_bankPeriod #bankPeriod').setAttribute('value', _ggDate);
					}, '1231');

					//	这个不是必须的
					this.waitForSelector('#c_payment_index_SnList #li_Cvv',
						function(){
							this.log("这里需要输入卡验证码", "info");
							this.evaluate(function(_ggauth){
								document.querySelector('#c_payment_index_card_cvv').setAttribute('value', _ggauth);
							}, '321');
						}, function(){
							this.log("不需要输入卡验证码", "info");
						}, 200);

					//	这个不是必须的 所以
					this.waitForSelector('#c_payment_index_SnList #li_prePhone #prephone',
						function(){
							this.log("这里需要输入手机号码", "info");
							this.evaluate(function(_ggphone){
								document.querySelector('#c_payment_index_SnList #li_prePhone #prephone').setAttribute('value', _ggphone);
							//	document.querySelector('#c_payment_index_SnList #c_pay_index_prephone #prephone').setAttribute('value', "123123123")
							}, '18682089631');
						}, function(){
							this.log("不需要手机号码", "info");
						}, 200);
					
					this.waitForSelector('#c_payment_index_payBtn',
						function(){
							this.log('这是支付按钮', "info");
							this.capture(this._result_cap_str + _TimeStamp() + "_zF00out4" + ".png");
						}, function(){
							this.log('这是支付按钮 输入信用卡的有效期等失败 遗憾', "error");
							this.capture(this._result_cap_str + _TimeStamp() + "_zF00out4_error" + ".png");
							this.exit(994);
						}, 1000);
				}, function(){
					this.echo("Some Problem of (out) ZhiFu step 3~");
					this.capture(this._result_cap_str + _TimeStamp() + "_zF00out2_error" + ".png");
					this.exit(993);
				}, 3000);
		}, function(){
			this.echo("Some Problem of (out) ZhiFu step 1~");
			this.capture(this._result_cap_str + _TimeStamp() + "_zF00out1_error" + ".png");
			this.exit(991);
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
	this.waitForSelector('#c_payment_index_payBtn',
		function(){
			this.log("\nClick Button for Pay For 支付总闸 支付啦啦啦 啦啦啦~\n", "info");
			this.test.assertSelectorHasText("#c_payment_index_payBtn", "支付");
			this.capture(this._result_cap_str + _TimeStamp() + "_beforePAY" + ".png");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayPAY__" + ".png", '#c_payment_index_payBtn');
		//	去掉这一行 就会触发支付动作 谨慎为之
		//	this.click('#c_payment_index_payBtn');
		}, function(){
			this.log("Some Problem of (out) ZhiFuMa 支付总闸 step ~", "error");
			this.exit(88);
		}, 3000);
}



