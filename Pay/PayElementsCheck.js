
//	另外还有其他元素：id="order_amount" id="#order_title"
function out_PayCheck(){
	this.test.info(" 信用卡支付了了了 ");

	this.waitForSelector('#order_amount',
		function(){
			this.test.info("Pay Page: One button exist ~");
			this.test.assertExists('#order_amount', "Pay Page: One button exist ~");
		}, function(){
			this.echo("Some Problem of out_PayCheck 没有支付amount~");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#creditcardpay',
		function(){
			this.test.info("Pay Page: Two button exist ~");
			this.test.assertExists('#creditcardpay', "Pay Page: Two button exist ~");
		}, function(){
			this.echo("Some Problem of out_PayCheck 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#bankcardpay',
		function(){
			this.test.info("Pay Page: Three button exist ~");
			this.test.assertExists('#bankcardpay', "Pay Page: Three button exist ~");
		}, function(){
			this.echo("Some Problem of out_PayCheck 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#EB_MobileAlipay',
		function(){
			this.test.info("Pay Page: Four button exist ~");
			this.test.assertExists('#EB_MobileAlipay', "Pay Page: Four button exist ~");
		}, function(){
			this.echo("Some Problem of out_PayCheck 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);

/*
	this.waitForSelector('#creditcardpay',
		function(){
			this.test.assertExists('#EB_MobileAlipay', "Pay Page:Five button exist ~");
		}, function(){
			this.echo("Some Problem of 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);
*/
}


function out_PayCheck2(){
	this.log("信用卡支付了", "info");

	this.waitForSelector('#c_payment_index_amount',
		function(){
			this.log("Pay Page: 支付金额 exist ~", "info");
			this.test.assertExists('#c_payment_index_amount', "Pay Page: 支付金额 exist ~");
		}, function(){
			this.log("Some Problem of out_PayCheck2 没有支付amount~", "error");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#c_payment_global_creditcard',
		function(){
			this.log("Pay Page: 信用卡支付 exist ~", "info");
			this.test.assertExists('#c_payment_global_creditcard', "Pay Page: 信用卡支付 exist ~");
		}, function(){
			this.log("Some Problem of out_PayCheck2 没有信用卡支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#c_payment_global_bankcard',
		function(){
			this.log("Pay Page: 储蓄卡支付 exist ~", "info");
			this.test.assertExists('#c_payment_global_bankcard', "Pay Page: 储蓄卡支付 exist ~");
		}, function(){
			this.echo("Some Problem of out_PayCheck2 没有储蓄卡支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#c_payment_global_mobileali',
		function(){
			this.log("Pay Page: 支付宝支付 exist ~", "info");
			this.test.assertExists('#c_payment_global_mobileali', "Pay Page: 支付宝支付 exist ~");
		}, function(){
			this.log("Some Problem of out_PayCheck2 没有支付宝支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);

/*
	this.waitForSelector('#creditcardpay',
		function(){
			this.test.assertExists('#EB_MobileAlipay', "Pay Page:Five button exist ~");
		}, function(){
			this.echo("Some Problem of 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);
*/
}


function in_PayCheck(){
	this.waitForSelector('#order_amount',
		function(){
			this.test.info("Pay Page: One button exist ~");
			this.test.assertExists('#order_amount', "Pay Page: One button exist ~");
		}, function(){
			this.echo("Some Problem of in_PayCheck 没有支付amount项~");
			_Pay_error_quit.call(this);
		}, 10000);

/*
	this.waitForSelector('#creditcardpay',
		function(){
			this.test.assertExists('#order_amount', "Pay Page:Two button exist ~");
		}, function(){
			this.echo("Some Problem of 没有常用信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);
*/

	this.waitForSelector('#creditcardpay',
		function(){
			this.test.info("Pay Page: Two button exist ~");
			this.test.assertExists('#creditcardpay', "Pay Page: Three button exist ~");
		}, function(){
			this.echo("Some Problem of in_PayCheck 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);

	this.waitForSelector('#bankcardpay',
		function(){
			this.test.info("Pay Page: Four button exist ~");
			this.test.assertExists('#bankcardpay', "Pay Page: Four button exist ~");
		}, function(){
			this.echo("Some Problem of in_PayCheck 没有储蓄卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);

	this.waitForSelector('#EB_MobileAlipay',
		function(){
			this.test.info("Pay Page: Five button exist ~");
			this.test.assertExists('#EB_MobileAlipay', "Pay Page: Five button exist ~");
		}, function(){
			this.echo("Some Problem of in_PayCheck 没有支付宝支付项~");
			_Pay_error_quit.call(this);
		}, 10000);

/*
	this.waitForSelector('#creditcardpay',
		function(){
			this.test.assertExists('#EB_MobileAlipay', "Pay Page: Five button exist ~");
		}, function(){
			this.echo("Some Problem of 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);
*/
}

//	也许还需要调整一点点 登录后支付页少了几个element
function in_PayCheck2(){
	this.log("信用卡支付了", "info");

	this.waitForSelector('#c_payment_index_amount',
		function(){
			this.log("Pay Page: 支付金额 exist ~", "info");
			this.test.assertExists('#c_payment_index_amount', "Pay Page: 支付金额 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck2 没有支付amount~", "error");
			_Pay_error_quit.call(this);
		}, 10000);

	this.waitForSelector('#c_payment_index_used_list',
		function(){
			this.log("Pay Page: 支付 exist ~", "info");
			this.test.assertExists('#c_payment_index_used_list', "Pay Page: 支付 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck2 没有支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);

	this.waitForSelector('#c_payment_index_cardTop',
		function(){
			this.log("Pay Page: 银行以及卡类型 exist", "info");
			this.test.assertExists('#c_payment_index_cardTop', "Pay Page: 银行以及卡类型 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck2 银行以及卡类型", "error");
			_Pay_error_quit.call(this);
		}, 10000);

	this.waitForSelector('#c_payment_index_snList_content',
		function(){
			this.log("Pay Page: 卡号有效期 exist", "info");
			this.test.assertExists('#c_payment_index_snList_content', "Pay Page: 卡号有效期 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck2 卡号有效期", "error");
			_Pay_error_quit.call(this);
		}, 10000);
	
	this.waitForSelector('#c_payment_index_payBtn',
		function(){
			this.log("Pay Page: 支付按钮 exist", "info");
			this.test.assertExists('#c_payment_index_payBtn', "Pay Page: 支付按钮 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck2 支付按钮", "error");
			_Pay_error_quit.call(this);
		}, 10000);

	// this.wait(100, function(){
	// 		this.log("这里搞定啦\n", "info");
	// 	});
}

//	直接复制out_PayCheck2 也许还需要调整一点点
function in_PayCheck3(){
	this.log("信用卡支付了", "info");

	this.waitForSelector('#c_payment_index_amount',
		function(){
			this.log("Pay Page: 支付金额 exist ~", "info");
			this.test.assertExists('#c_payment_index_amount', "Pay Page: 支付金额 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck3 没有支付amount~", "error");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#c_payment_global_creditcard',
		function(){
			this.log("Pay Page: 信用卡支付 exist ~", "info");
			this.test.assertExists('#c_payment_global_creditcard', "Pay Page: 信用卡支付 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck3 没有信用卡支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#c_payment_global_bankcard',
		function(){
			this.log("Pay Page: 储蓄卡支付 exist ~", "info");
			this.test.assertExists('#c_payment_global_bankcard', "Pay Page: 储蓄卡支付 exist ~");
		}, function(){
			this.echo("Some Problem of in_PayCheck3 没有储蓄卡支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);


	this.waitForSelector('#c_payment_global_mobileali',
		function(){
			this.log("Pay Page: 支付宝支付 exist ~", "info");
			this.test.assertExists('#c_payment_global_mobileali', "Pay Page: 支付宝支付 exist ~");
		}, function(){
			this.log("Some Problem of in_PayCheck3 没有支付宝支付项~", "error");
			_Pay_error_quit.call(this);
		}, 10000);

/*
	this.waitForSelector('#creditcardpay',
		function(){
			this.test.assertExists('#EB_MobileAlipay', "Pay Page:Five button exist ~");
		}, function(){
			this.echo("Some Problem of 没有信用卡支付项~");
			_Pay_error_quit.call(this);
		}, 10000);
*/
}


function _Pay_error_quit(){
	this.capture(this._result_cap_str + _TimeStamp() + "________Pay_error_quit" + ".png");
//	this.test.assertVisible('h1', "It feels good !\n");
	this.echo("\n\nAfter 10s, (out) SB ZhiFu 页面缺少一些东西 ~\n\n");
	this.exit(91);
}

