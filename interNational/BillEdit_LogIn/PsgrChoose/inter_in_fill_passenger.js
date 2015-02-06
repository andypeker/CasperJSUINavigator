
function inter_in_Fill_Passenger(){
	// 填名字和身份证号码
	this.echo("Here, i will input some info de passengers ~");
/*	this.mouseEvent('mousedown', '.flight-infoinput .js_newName');
	this.mouseEvent('mouseout', '.flight-infoinput .js_newName');
	this.mouseEvent('click', '.flight-infoinput .js_newName');
	this.mouseEvent('mousedown', '.flight-infoinput .js_no');
	this.mouseEvent('mouseout', '.flight-infoinput .js_no');
	this.mouseEvent('click', '.flight-infoinput .js_no');
	this.mouseEvent('mousedown', '#linkTel');
	this.mouseEvent('mouseout', '#linkTel');
	this.mouseEvent('click', '#linkTel');
*/	this.evaluate(function(_zName, _zID){
   //		$('#readmeAction').next('input').val("伟华份");
   //		$('#sel_idCard').next('label').next('input').val("460101198909011670");
   //		$('#linkTel').val("18682089631");
   		document.querySelector('.flight-infoinput .js_newName').value = _zName;
   		document.querySelector('.flight-infoinput .js_no').value  = _zID;
   	}, '杨开文', '460101198909011670');

	this.waitFor(
		function(){
			return this.evaluate(function(){
				return document.querySelector('.flight-infoinput .js_no').value.length > 17;
			})
		}, function OK_continue(){
		//	this.capture(this._result_cap_str + _TimeStamp() + "___testtesttesttest01___" + ".png")
			this.evaluate(function(){
				$('.flight-infoinput .js_newName').focus();
		    	$('.flight-infoinput .js_newName').focusout();
		    	$('.flight-infoinput .js_no').focus();
		    	$('.flight-infoinput .js_no').focusout();
		//  return  $('.flight-infoinput .js_no').val()
		//	$('.flight-infoinput .js_no').val();
			});
		//	this.echo(document.querySelector('.flight-infoinput .js_no').value.length);
			this.echo("There is ond id with length more than 17~");
		}, function oops_timeout(){
			this.echo('Id was not input successfully ~');
			this.exit(551);
		}, 2000);
}

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


function _out_Fill_Passenger_Double(){
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
			this.echo("There is ond id with length more than 17~");
		}, function oops_timeout(){
			this.echo('Id was not input successfully ~');
			this.exit(551);
		}, 2000);
}

