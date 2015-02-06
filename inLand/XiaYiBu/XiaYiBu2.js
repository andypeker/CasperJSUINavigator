
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


//	$('#paybox .j_orderDetails').click()
//	$('#paybox .j_btn').click()
function Bill_Fill_Edit_next(){
	this._zhifu_selector_ = '#paybox .j_btn';
	this._money_detail_selector_ = '#paybox .j_btn';

	this.waitForSelector(_zhifu_selector_,
		function(){
			this.log("\n!!!!!!!!!111!!!!!!!!!\nI will click button to Xia Yi Bu, Fucker ~\n!!!!!!!!!!!!!!!!!!!!!\n", "info");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayBox__" + ".png", _zhifu_selector_);
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayButton__" + ".png", _zhifu_selector_);
			// this.evaluate(function(){
			// //	点按钮下一步	
			// 	$('#paybox .j_btn').focus();
			// //	$('#paybox .btn').click();		
			// //	$('#paybox .btn').focusout();
			// });

			this.evaluate(function(_selector_){
			//	点按钮下一步	
				$(_selector_).focus();
				$(_selector_).click();
				$(_selector_).focusout();
			}, this._money_detail_selector_);

			this.capture(this._result_cap_str + _TimeStamp() + "_money_detail" + ".png");
			
			this.evaluate(function(_selector_){
			//	点按钮下一步	
				$(_selector_).focus();
			}, this._zhifu_selector_);

			this.click(this._zhifu_selector_);

			this.evaluate(function(_selector_){
				$(_selector_).focusout();
			}, this._zhifu_selector_);

			this.waitForSelector('.cui-toast',
				_OK_PATA,
			    function oops_no_PATA(){
			    	this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
			    	this.echo("oooooooops, there is no PATA or QTE，continue ~");
			    }, 2500);
		//	this.waitForAlert(
		//	);
		//	this.waitForPopup(
		//	);

		//	黑名单
		//	J_verifyCodeMask
	/*		if(this.visible('.J_verifyCodeMask'))
			{
				this.test.info("这个帐户黑名单了啦");
			//	this.click('');
				this.exit(1024);
			}else{
				this.echo("ok, 黑名单检查通过 go continue...");
			}
	*/
			this.wait(1000, function(){
				if(this.visible('.cui-toast') || this.visible('.J_verifyCodeMask')){
					this.echo("这里遇到困难");
					_OK_PATA.call(this);
					this.exit(902);
				}else{
					this.echo("没有PATA/QTE 也 重复订单 也 没有黑名单");
					this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
				}
			});

		}, function(){
			this.echo("Finished Fill for Bill, but After 3s could not find element XiaYiBu~");
			this.exit(901);
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


function Bill_Fill_Edit_next2(){
	var _zhifu_selector_ = '#paybox .j_btn';
	var _money_detail_selector_ = '#paybox .j_btn';

	this.waitForSelector(_zhifu_selector_,
		function(){
			this.log("\n!!!!!!!!!!222!!!!!!!!\nI will click button to Xia Yi Bu, Fucker ~\n!!!!!!!!!!!!!!!!!!!!!\n", "info");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayBox__" + ".png", _zhifu_selector_);
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayButton__" + ".png", _zhifu_selector_);
			// this.evaluate(function(){
			// //	点按钮下一步	
			// 	$('#paybox .j_btn').focus();
			// //	$('#paybox .btn').click();		
			// //	$('#paybox .btn').focusout();
			// });

			this.evaluate(function(_selector_){
				//	点按钮下一步	
					$(_selector_).focus();
					$(_selector_).click();
					$(_selector_).focusout();
				}, _money_detail_selector_);

			this.waitForSelector('#order-detail',
	//		this.waitUntilVisible('#order-detail',
				function(){
					this.log("可以打开订单金额详情","info");
					this.capture(this._result_cap_str + _TimeStamp() + "_money_detail" + ".png");

					this.evaluate(function(_selector_){
						//	点按钮下一步	
							$(_selector_).focus();
						}, _zhifu_selector_);

					this.click(_zhifu_selector_);

					this.evaluate(function(_selector_){
							$(_selector_).focusout();
						}, _zhifu_selector_);

					this.wait(5000, function(){
							if(this.visible('.cui-toast') || this.visible('.J_verifyCodeMask')){
								this.echo("这里遇到困难");
								_OK_ManCang.call(this);
								this.exit(902);
							}else{
								this.echo("没有满仓 也 重复订单 也 没有黑名单");
								this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
							}
						});

					this.waitForSelector('.cui-toast',
						_OK_PATA,
					    function oops_no_PATA(){
					    	this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
					    	this.echo("oooooooops, there is no PATA or QTE，continue ~");
					    }, 2500);

				}, function(){
					this.echo("Money Detail not open and display ~");
					this.exit(903);
				}, 1000);
		}, function(){
			this.echo("Finished Fill for Bill, but After 3s could not find element XiaYiBu~");
			this.exit(901);
		}, 2000);

	//	下一步后页面需要时间才能打开，10s够不够？
	this.wait(5000);
//	this.wait(100, function(){_Dump_Page.call(this);});
}

