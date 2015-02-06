
/*
function _Fill_Passenger2(){
		// 填名字和身份证号码
		this.echo("Here, i will input some info de passengers ~");
	
		this.fillSelectors('.flight-infoinput', {
			'input[class="js_newName"]':   	'温加宝',
			'input[class="js_no"]':   		'460101198909011670'
		}, false);

		this.echo("123123123\n\n");

		this.fillSelectors('.flight-section', {
			'input[id="linkTel"]': 			'18682205585'
		}, false);

		this.echo("333333333333333\n\n");

		_Dump_Page2.call(this, 'phone.html');
}
*/

function inter_out_Fill_Passenger_Double(){
	// 填名字和身份证号码
	this.echo("Here, i will input some info de passengers ~");
	this.evaluate(function(_zName, _zID){
   		document.querySelector('.flight-infoinput .js_newName').value = _zName;
   		document.querySelector('.flight-infoinput .js_no').value  = _zID;
   	}, '杨开文', '460101198909011670');

	this.waitFor(
		function(){
			return this.evaluate(function(){
				return document.querySelector('.flight-infoinput .js_no').value.length > 17;
			})
		}, function OK_continue(){
			this.evaluate(function(){
				$('.flight-infoinput .js_newName').focus();
		    	$('.flight-infoinput .js_newName').focusout();
		    	$('.flight-infoinput .js_no').focus();
		    	$('.flight-infoinput .js_no').focusout();
			});
			this.log("国际订单填写页 选择登机人 OK There is ond id with length more than 17~", "info");
		}, function oops_timeout(){
			this.log("国际订单填写页 选择登机人 失败 失败 There is ond id with length more than 17~", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_in_inter_BillEdit_passenger_fail" + ".png");
			this.exit(551);
		}, 2000);
}

