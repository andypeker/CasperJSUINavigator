
function in_Check_BillEdit_Elements(){
//	如果登录，检查页面元素
	//	乘机人信息
	//	id="js_selectPass_btn"
//	this.waitForSelector('#passenger-info-header',
	this.waitForSelector('#js_selectPass_btn',
		function(){
			this.test.assertExists('#js_selectPass_btn', "One button exist ~");
			this.echo("ok, Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for js_selectPass_btn button, but it does not appear~");
			this.exit(501);
		}, 8000);

	//	联系手机，还可以使用id '#linktel'
	this.waitForSelector('.flight-linktel',
		function(){
			this.test.assertExists('.flight-linktel', "Two button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for Phone Number Input button, but it does not appear~");
			this.exit(502);
		}, 8000);

	//	还有保险id '#insure'
	this.waitForSelector('#insure',
		function(){
			this.test.assertExists('#insure', "2.5 button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for BaoXian button, but it does not appear~");
			this.exit(503);
		}, 8000);

	//	报销凭证
	this.waitForSelector('#deliverybox',
		function(){
			this.test.assertExists('#deliverybox', "Three button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for PeiSongDiZhi button, but it does not appear~");
			this.exit(504);
		}, 8000);

	//	支付按钮
	this.waitForSelector('#paybox',
		function(){
			this.test.assertExists('#paybox', "Four button exist ~");
			this.echo("ok，Continue ...");
		}, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__SomeException__" + ".png");
			this.echo("I will wait 8s for Pay button, but it does not appear~");
			this.exit(505);
		}, 8000);

//	(第二次等待)刚刚进入订单填写页，只不过检查了元素，需要等待Rendering JS code Running.
	this.wait(6000);

	this.waitForResource('.cui-pop-box',
		function(){
			this.echo("No flight left. so Quit ~（很抱歉，您预订的航班已经售完）");
			this.capture(_TimeStamp() + "__Exception_no_Flight_left__" + ".png");
			this.exit(506);
		}, function(){
			this.echo("No Alert ~ so Continue ~");	
		}, 1000);
}

//	as follow function create at 2015-01-21 whyang
function new_choose_passenger(){
	this.log("这里使用新方法选择乘机人\n", "info");
	this.waitForSelector('#selPassenger ul',
		function(){
			this.log("已有待选乘机人，选一个", "info");
			this._num = this.evaluate(function(){
					return __utils__.findAll('#selPassenger ul li').length;
				});

			this.wait(500, function(){
				if( this._num >= 2 ){
						this.log("待选乘机人 包括更多按钮 大于2个 可以选 来一个", "info");
						//	下面这个方法不可行，因为待选乘机人li包括了更多按钮
						this._data_id_str = this.evaluate(function(){
						 	//	return __utils__.findOne('.js_choose').data('id');
						 		return __utils__.findOne('#selPassenger ul li').getAttribute('data-id');
						 	});

						this._num_sel = Math.ceil(Math.random() * ( this._num - 1 ));
						this.waitForSelector('#selPassenger ul li',
							
							//	方法1:
							// function(){
							// 	this.log("哥要点一个乘机人" + this._num_sel + "\n", "info");
							// 	this.evaluate(function(_str_, _sel_){

							// 		//	这个做法是弄虚作假:
							// 		document.querySelector(_str_).click();

							// 		// $( _str_ )[_sel_].click();
							// 		// $(_str_)[_sel_].trigger('touchstart');
							// 	}, '#selPassenger ul li', this._num_sel);
							//	this.click('#selPassenger ul li' + '[' + this._num_sel + ']');

							//	方法2:
							function(){
								this.log("\n\n %%%%%%%:" + this._data_id_str, "info");
								//	$('#selPassenger ul li' + '[data-id="' + 236840999 + '"]')
								this.click('#selPassenger ul li' + '[data-id="' + this._data_id_str + '"]');

							//	合流:
								this.waitFor(function(){
										// $('#passengerInfo li').length
										return this.evaluate(function(){
											return __utils__.findAll('#passengerInfo li').length;
										//	备选方式:
										//	return $('#passengerInfo li').length;	
										}) > 1 ? true : false;
									}, function(){
										this.log("哥要点一个乘机人 点中 继续\n", "info");
									}, function(){
										this.log("哥要点一个乘机人 没点中\n", "error");
										this.exit(5071);
									}, 750);
							}, function(){
								this.log("选一个乘机人 不存在 失败了\n\n", "error");
							}, 1000);
						// this.click('#selPassenger ul li' + _num_sel);
				}else{
					this.log("待选乘机人 包括更多按钮 小于1个 不能选", "error");
					this.exit(5072);
				};
			});
		}, function(){
			this.log("订单填写页没有待选乘机人", "error");
			this.exit(508);
		}, 3000);

}
