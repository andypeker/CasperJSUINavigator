
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

function inter_Bill_Fill_Edit_next(){
	this.waitForSelector('#paybox .btn',
		function(){
			this.test.info("\n\n!!!!!!!!!!!!!!!!!!!!!\nI will click button to Xia Yi Bu, Fucker ~\n!!!!!!!!!!!!!!!!!!!!!\n\n");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayBox__" + ".png", '#paybox');
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PayButton__" + ".png", '#paybox .btn');
			this.evaluate(function(){
			//	点按钮下一步	
				$('#paybox .btn').focus();
			//	$('#paybox .btn').click();		
			//	$('#paybox .btn').focusout();
			});
			this.click('#paybox .btn');
			this.evaluate(function(){
				$('#paybox .btn').focusout();
			});

			this.waitForSelector('.cui-toast',
				_OK_PATA,
			    function oops_no_PATA(){
			    	this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
			    	this.echo("oooooooops, there is no PATA or QTE，continue ~");
			    }, 500);
			// this.waitForAlert(
			// 	);
			// this.waitForPopup(
			// 	);
		}, function(){
			this.echo("Finished Fill for Bill, but After 3s could not find element XiaYiBu~");
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
