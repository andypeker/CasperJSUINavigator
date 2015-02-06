
function in_Fill_Passenger(){
	this.waitForSelector('#js_selectPass_btn',
		function(){
			this.echo("go to 1~");
			this.captureSelector(this._result_cap_str +  _TimeStamp() + "__AddPassenger__" + ".png", '#js_selectPass_btn');
			this.click('#js_selectPass_btn');
		}, function(){
			this.echo("No button for add passenger ~");
			this.exit(531);
		}, 3000);

	this.wait(1000, function(){
		this.log("\n\n\n I 'm coming in 77 !!!\n\n\n", "info");
	});

	this.waitFor(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__Psgr__" + ".png");
			var _psgNum = this.evaluate(function(){
					return __utils__.findAll('.js_choose').length;
				});
			this.echo("\n%%%%%_psgNum : " + _psgNum);
			this.log("\n%%%%%_psgNum : " + _psgNum + "这里的_str是否可以var或者this.", "warning");
		//	这个 _str 是否应该是局部变量 或者this._str
		//	这个 _str 是否应该是局部变量 或者this._str
		//	这个 _str 是否应该是局部变量 或者this._str
		//	这个 _str 是否应该是局部变量 或者this._str
		//	这个 _str 是否应该是局部变量 或者this._str
			_str = this.evaluate(function(){
				//	return __utils__.findOne('.js_choose').data('id');
					return __utils__.findOne('.js_choose').getAttribute('data-id');
				})
			this.echo("\n^^^^^^^^^^^^^^_str : " + _str);
		//	_str = _RandomGenerate(_psgNum);

			return _psgNum > 0;
		}, function(){
			this.echo("O come in ~ and _str: " + _str);
		//	$('[data-id="205359514"]')
			this.capture(this._result_cap_str + _TimeStamp() + "__PassengerList__" + ".png");
	/*		if(this.evaluate(function(){
				return __utils__.exists('[data-id="' + _str + '"]');
			})){
				this.echo("There are one selected passenger ~ Continue ~");
				this.click('[data-id="' + _str + '"]');
			}else{
				this.echo("There are no selected passenger ~");
				this.exit();
			}
	*/
		//	start merge...
		//	as follow 2 lines comment and modify at date 2015-01-20
			// if(this.exists('[data-id="' + _str + '"]')){
			// 	this.click('[data-id="' + _str + '"] .boa_info');

			this.waitForSelector('[data-id="' + _str + '"] .boa_info',
				function(){
					this.click('[data-id="' + _str + '"] .boa_info');
				
		//		this.evaluate(function(){
		//			$('[data-id="' + _str + '"] .boa_info').focus();
		//	    	$('[data-id="' + _str + '"] .boa_info').focusout();
		//		})

			//	IMPORTANT INFO提示 class="cui-toast" 不能用，但是在这里页面可以使用～
					this.waitForSelector('.cui-toast',
						// _PsgrInfo_Loss,
						function(){
							this.log("第一次选择乘机人 失败了", "error");
						//	as follow function create at 2015-01-21
							this.wait(3000, function(){
								this.click('[data-id="' +  this.evaluate(function(){
									//	return __utils__.findOne('.js_choose').data('id');
										return __utils__.findOne('.js_choose').getAttribute('data-id');
									}) + '"] .boa_info');
	
							});
							this.waitForSelector('.cui-toast',
								// _PsgrInfo_Loss.call(this, 2);
								function(){
									this.log("第二次选择乘机人 失败了", "error");
								//	as follow function create at 2015-01-21
									this.wait(3000, function(){
										this.click('[data-id="' + this.evaluate(function(){
											//	return __utils__.findOne('.js_choose').data('id');
												return __utils__.findOne('.js_choose').getAttribute('data-id');
											}) + '"] .boa_info');

									});
									this.waitForSelector('.cui-toast',
										function(){
											_PsgrInfo_Loss.call(this, 3);
										}, function(){
											this.log("第三次选择乘机人 成功", "info");
										}, 1000);
								}, function(){
									this.log("第二次选择乘机人 成功", "info");
								}, 1000);
						}, function (){
							this.log("第一次选择乘机人 成功", "info");
							this.capture(this._result_cap_str + _TimeStamp() + "__PassengerInfo_ok" + ".png");
							this.echo("oooooooops, Choosed passenger info is complete，continue ~");

							this.wait(300, function(){
								//	move code as follow 2 lines from outside of current function --- in fact next function.
								this.captureSelector(this._result_cap_str + _TimeStamp() + "__Choosed_Passenger__" + ".png", '[data-id="' + _str + '"]');
								this.echo("\n&&& choose one passenger %%%\n");
							});
						}, 1000);

		/*
				this.evaluate(function(_spsgr){
					$('[data-id="' + _spsgr + '"] .boa_info').click();
				//	$('[data-id="' + _spsgr + '"] .boa_info').focus();
			    //	$('[data-id="' + _spsgr + '"] .boa_info').focusout();
				}, _str);
		*/

		//	as follow 4 lines comment and modify at date 2015-01-20
			// }else{
			// 	this.echo("evil 111~~~~~~~~~~~~~~\n\n");
			// 	this.exit(532);
			// }
			}, function(){
				this.echo("evil 111~~~~~~~~~~~~~~\n\n");
				this.exit(532);
			}, 3000);


	/*		if(this.exists('.rightblue')){
				this.capture(this._result_cap_str + _TimeStamp() + "__PassengerChhoosed__" + ".png");
				this.echo("\n&&& after choose, go back %%%\n");
				this.click('#js_return .rightblue');
			}else{
				this.echo("evil 222~~~~~~~~~~~~~~\n\n");
				this.exit();
			}
	*/
		//	end merge...
		}, function(){
			this.echo("No button for add passenger ~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.exit(533);
		}, 3000);

/*
//	WEI SHENME ZHELI MEIYOU BEI ZHIXING ？ ---WEIHUAYANG
	this.waitForSelector('[data-id="' + _str + '"]',
		function(){
			this.echo("There are one selected passenger ~ Continue ~");
			this.click('[data-id="' + _str + '"]');
		}, function(){
			this.echo("There are no selected passenger ~");
			this.exit();
		}, 1000);
*/
	this.wait(1000);

	//	返回： #js_return 
	//	完成： .rightblue 
	//	新增： #js_addPassenger 
	//	选择： .js_boa_info
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

	this.waitForSelector('#passengerInfo li',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__PassengerBack2Bill__" + ".png");
			this.echo("Ok, There are some passengers MORE than one~");
		}, function(){

			this.log("\n这里尼玛有没有选中登机人 擦 再选一次\n", "error");
			new_choose_passenger.call(this);
			this.echo("Ok, There are no passengers ~");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			//	上面有重新选择function 这里注释
			//	this.exit(535);
		}, 7000);
}
