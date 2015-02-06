
function inter_in_Select_Passenger2(){
	// 填名字和身份证号码
	this.echo("Here, i will input some info de passengers ~");
	this.capture(this._result_cap_str + _TimeStamp() + "_in_inter_BillEdit_passenger" + ".png");
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
			this.capture(this._result_cap_str + _TimeStamp() + "_in_inter_BillEdit_passenger" + ".png");
			this.log("国际订单填写页 选择登机人 OK There is ond id with length more than 17~", "info");
		}, function oops_timeout(){
			this.log("国际订单填写页 选择登机人 失败 失败 There is ond id with length more than 17~", "error");
			this.capture(this._result_cap_str + _TimeStamp() + "_in_inter_BillEdit_passenger_fail" + ".png");
			this.exit(551);
		}, 2000);
}

/*
	除了进入按钮不同 登机人信息按钮不同 进入后的选择登机人逻辑在国际国内之间是一致的
	有些地方有更新
*/
//	$('[data-role="addPassengerBtn"]')
function inter_in_Select_Passenger(){
	this.waitForSelector('[data-role="addPassengerBtn"]',
		function(){
			this.echo("go to 1~");
			this.captureSelector(this._result_cap_str +  _TimeStamp() + "__AddPassenger__" + ".png", '[data-role="addPassengerBtn"]');
			this.click('[data-role="addPassengerBtn"]');
		}, function(){
			this.log("No button 国际订单填写页 没有按钮添加登机人 for add passenger ~", "error");
			this.exit(531);
		}, 3000);

	this.wait(1000);

	this.waitFor(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__Psgr__" + ".png");
			var _psgNum = this.evaluate(function(){
					return __utils__.findAll('.js_choose').length;
				});
			this.echo("\n%%%%%_psgNum : " + _psgNum);
			this.log("\n%%%%%_psgNum : " + _psgNum + "这里的_str是否可以var或者this.", "warning");

		//	迫不得已 把变量_str搞成this的attribute 我自己都吐了
			this._str = this.evaluate(function(){
				//	return __utils__.findOne('.js_choose').data('id');
					return __utils__.findOne('.js_choose').getAttribute('data-id');
				})
			this.echo("\n^^^^^^国际订单填写页登机人列表^^^^^^^^_str : " + this._str);
		//	this._str 不是按照顺序连续的int 这里不能用
		//	this._str = _RandomGenerate(_psgNum);
			return _psgNum > 0;
		},
		function(){
			this.echo("O come in 这里行不行呢 看看看看看看看看看~ and _str: " + this._str);
		//	this.log('&&&:::: [data-id="' + this._str + '"]', "warning");
		//	$('[data-id="205359514"]')
			this.capture(this._result_cap_str + _TimeStamp() + "__PassengerList__" + ".png");
		
			this.waitForSelector('[data-id="' + this._str + '"]',
				function(){
					this.click('[data-id="' + this._str + '"] .boa_info');
			//	IMPORTANT INFO提示 class="cui-toast" 不能用，但是在这里页面可以使用～
					this.waitForSelector('.cui-toast',
						_PsgrInfo_Loss,
		  				function(){
							this.capture(this._result_cap_str + _TimeStamp() + "__PassengerInfo_ok" + ".png");
							this.echo("oooooooops, Choosed passenger info is complete，continue ~");
						}, 1000);
					this.captureSelector(this._result_cap_str + _TimeStamp() + "__Choosed_Passenger__" + ".png", '[data-id="' + this._str + '"]');
					this.echo("\n&&& choose one passenger %%%\n");
				}, function(){
					this.capture(this._result_cap_str + _TimeStamp() + "__PassengerInfo_fail" + ".png");
					this.log("evil 111~~~~~~~~~~~~~~\n\n", "error");
					this.exit(532);
				}, 3000);

		//	end merge...
		}, function(){
			this.echo("No button for add passenger ~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.exit(533);
		}, 3000);

	this.wait(1000);

	this.waitForSelector('.rightblue',
		function(){
			this.echo("after choose one passenger, go back ~~");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PassengerChoosedBackButton__" + ".png", '.rightblue');
		//	this.capture(this._result_cap_str + _TimeStamp() + "__PassengerChhoosed__" + ".png");
			this.click('.rightblue');
		}, function(){
			this.echo("No button for add passenger ~");
			this.exit(534);
		}, 3000);

	//	等待从登机人列表回到订单填写页
	this.wait(7000);

	this.waitForSelector('[data-role="passengerInfo"]',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__inInter_PassengerBack2Bill__" + ".png");
			this.echo("Ok, There are some passengers MORE than one 我很高兴 继续~");
		}, function(){
			this.echo("Ok, There are no passengers 悲惨退出~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.exit(535);
		}, 7000);
}
