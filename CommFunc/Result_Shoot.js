
//  第一个实现的代码很不合理 调用第二个

function _Result_Shoot(){
	this.wait(3000);
	this.capture(this._result_cap_str + _TimeStamp() + "_afterPAY" + ".png");
	// this.test.assertVisible(".flight-bkrst");
	// this.test.assertSelectorHasText(".flight-bkrst-tips", "成功");
	// this.test.assertResourceExists('.orderid');
	if(this.exists('.flight-bkrst-list')){
		//	下单成功订单号
		this.test.info("Result 订单号: " +
			this.evaluate(function(){
			//	return document.querySelector('.orderid').getAttribute('data-id') > 10;
				return document.querySelector('.orderid').getAttribute('data-id');
			}));
	}else{
	//	等待7s后支付失败
		this.test.info("\nMay be fail to Orderid ~\n");
	//	this.exit();
	}

	this.wait(7000);
	this.echo("This is current page url:\n" + this.getCurrentUrl());
	this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
//	return 888;
}


function _Result_Shoot2(){
	this.echo("Some~~~~~~~~~~~~~~_Result_Shoot2~~~~~~~~~~~~~step 1~");
	this.log("\n这个function的处理结果不重要\n", "warning");
	this.waitForSelector('.flight-bkrst-list',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_afterPAY" + ".png");
			//	下单成功订单号
			this.log("Result 订单号: " +
				this.evaluate(function(){
				//	return document.querySelector('.orderid').getAttribute('data-id') > 10;
					return document.querySelector('.orderid').getAttribute('data-id');
				}), "info");
		}, function(){
			//	等待7s后支付失败
			this.capture(this._result_cap_str + _TimeStamp() + "_not_PAY" + ".png");
			this.log("May be fail to Orderid 支付失败 ~", "error");
		//	this.exit(931);
		}, 7000);

	this.wait(3000, function(){
		this.echo("This is current page url:\n" + this.getCurrentUrl());
		this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
	});
}

