
function Fill_Other_Info(){
//	this.wait(3000,function(){
//		this.echo("\n\nInput Phone Number ?\n\n")});

//	this.capture(this._result_cap_str + _TimeStamp() + "___IVVVVVVVVVVVIII" + ".png");
	
	/*
		this.fillSelectors('.flight-infoinput', {
			'input[class="js_newName"]':   	'温加宝',
			'input[class="js_no"]':   		'460101198909011670'
		}, false);

		this.fillSelectors('.flight-section', {
			'input[id="linkTel"]': 			'18682205585'
		}, false);
	*/
	/*	this.wait(1000, function(){
			this.echo("Nothing to do, just wait for 1s.");
		})
	*/
		this.evaluate(function(_pNum){
			document.querySelector('#linkTel').value = _pNum;
		}, '18682089631');
		//	Test Action
	//	this.test.assertSelectorHasText('', '');

/*
	//	另一个写法：
		function Input_Check(_pNum){
			return this.evaluate(function(_pNum){
						document.querySelector('#linkTel').value = _pNum;
						return document.querySelector('#linkTel').value.length > 10;
					}, _pNum);
		}

		this.waitFor(
			Input_Check('18682089631')
			, function(){}
			, 1000);
*/

		this.waitFor(
			function(){
				return this.evaluate(function(){
					return document.querySelector('#linkTel').value.length > 10;
				})
			}, function OK_continue(){
		//		this.capture(this._result_cap_str + _TimeStamp() + "___testtesttesttest02___" + ".png")
				this.evaluate(function(){
					$('#linkTel').focus();
			    	$('#linkTel').focusout();
				})
				this.echo("Good News~");
			}, function oops_timeout(){
				this.echo('PhoneNum was not input successfully ~');
				this.exit(701);
			}, 2000);

		this.then(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "___IIIIIIIIIIIIIIII" + ".png");
		//	_Dump_Page2.call(this, 'phone.html');
		})
}
