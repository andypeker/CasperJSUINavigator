

function Flight_Show(){
		this.capture(this._result_cap_str + _TimeStamp() + "_Is_there_flight_list" + ".png");
		this._manList = this.evaluate(function(){
			return __utils__.findAll(".f_list div ul").length;
		});
		
		if(this._manList < 1){
			this.echo("\n\nThere are no flight from Server ~\n\n");
			this.exit(801);
		}
		this.echo("There are 有这么多航班:" + this._manList + " flights on 在列表页 List Page ~");
}


function Flight_Select(){
	//	航班列表的某个航班
	//	航班列表中的哪个航班呢？第14个行不行：
	//	后面可以作为参数传入
		this._Flt_Code_ = 6;
	//	展开子舱按钮
//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
//	   this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');
	//	新式写法，哈哈
		this.waitForSelector('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold',
			function(){
				this.log("新式写法 哈哈", "info");
				this.test.assertExists('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info', "*********\n航班元素存在*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
				test.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit(807);
			}, 2000)
	
	   this.wait(2000, function(){
		//	this.echo("\n\n***********************\n\n");
           this.capture(this._result_cap_str + _TimeStamp() + ".png");
		   this._zcNum = this.evaluate(function(_flt_){
			   return __utils__.findAll('.f_list div [data-parent-key="' + _flt_ + '"]').length;
			}, this._Flt_Code_);

		   this.echo("There are " + this._zcNum + " ZiCang of the Flight");
		   if (this._zcNum < 1){
				 this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				 this.exit(802);
		   }
		});
}


function Flight_Select2(_flt_){
	//	航班列表的某个航班
	//	航班列表中的哪个航班呢？第14个行不行：
	//	后面可以作为参数传入
	//	this._Flt_Code_ = 6;
//		this._Flt_Code_ = ( _flt_ === undefined ) ? _flt_ : 1;
		this._Flt_Code_ = _flt_ ? _flt_ : 0;
	//	this._Flt_Code_ = _RandomGenerate(this._manList);

	//	展开子舱按钮
//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
//	   this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');
	//	新式写法，哈哈
	//	#theFlightlist
	//	comment and modify at date 2015-01-20
	//	this.waitForSelector('.f_list [data-key="' + this._Flt_Code_ + '"] .flight-listfold .js_subswitch',
		this.waitForSelector('#theFlightlist [data-key="' + this._Flt_Code_ + '"] .flight-packdown',
			function(){
				this.log("新式写法2 哈哈", "info");
				this.test.assertExists('.f_list_tab [data-key="' + this._Flt_Code_ + '"].f_info', "*********\n航班展开子舱位按钮存在*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list_tab [data-key="' + this._Flt_Code_ + '"]');

//	2015-02-05 这里折腾了半天 整整半天 因为展开舱位的事件绑定又变化了
/*	如下 展开动作：
			$('#theFlightlist [data-key="1"] .flight-packdown').click()
			$('#theFlightlist [data-key="1"] .flight-packdown').click()

	如下 收起动作：
			$('#theFlightlist [data-key="1"] .flight-packup').click()
			$('#theFlightlist [data-key="1"] .flight-packup').click()

	去程 返程 列表展开舱位的按钮不一样，这个可以通用：
			$('#theFlightlist [data-key="1"] .js_subswitch.flight-packdown').click()

	所以下面的方法得改一下：
*/
/*
				this.evaluate(function( _slt_str_){
						$(_slt_str_).click();
					//	$(_slt_str_).click();
					//	$(_slt_str_).tap();
					//	$(_slt_str_).touchstart();
					//	$(_slt_str_).trigger('touchstart');
	//			}, '.f_list [data-key="' + this._Flt_Code_ + '"] .flight-listfold .js_subswitch');
	//	comment and modify at date 2015-01-20
	//	#theFlightlist
				}, '#theFlightlist [data-key="' + this._Flt_Code_ + '"] .js_subswitch.flight-packdown');
*/
				this.log("\n我要在这里点一下 点一下 点一下\n\n","error");
				this.click('#theFlightlist [data-key="' + this._Flt_Code_ + '"] .flight-packdown');
		//		有时候需要多点一次 但是不确定什么时候 谁知道呢
		//		我才去程列表 点一次即可 返程列表 需要点两次
				this.click('#theFlightlist [data-key="' + this._Flt_Code_ + '"] .flight-packdown');
			//	test.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

				// this.captureSelector(this._result_cap_str + _TimeStamp() + "_ExtendCangWei" + ".png",'.f_list_tab [data-key="' + this._Flt_Code_ + '"] .js_subswitch');
				this.captureSelector(this._result_cap_str + _TimeStamp() + "_ExtendCangWei" + ".png", '#theFlightlist [data-key="' + this._Flt_Code_ + '"]');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit(807);
			}, 2000)
	
		this.wait(2000, function(){

			// this.log("\n\n\n I 'm coming in 3 !!!\n\n\n", "error");

		//	this.echo("\n\n***********************\n\n");
        	this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this._zcNum = this.evaluate(function(_flt_){
				return __utils__.findAll('.js_flight_seat[data-parent-key="' + _flt_ + '"]').length;
			}, this._Flt_Code_);

			this.echo("There are " + this._zcNum + " 舱位 de 这个航班");
			if (this._zcNum < 1){
				this.log("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~", "error");
				this.exit(802);
		   }
		});

	   // this.log("\n\n\n I 'm coming in 555 !!!\n\n\n", "error");
}


function ZiCang_Select(){
	//	this.echo("\n现在选舱位\n");
	//	第二个子舱
		this._zc_id_ = 1;
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="1"]');
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		this.waitForSelector('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]',
			function(){
				this.log("新式写法 哈哈 哈哈", "info");
				this.test.assertExists('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]', "*********\n舱位元素存在*********");
				this.capture(this._result_cap_str + _TimeStamp() + "_before_select_flight" + ".png");
				this.captureSelector(this._result_cap_str + _TimeStamp() + '_CangWei' + "_selected_flight" + ".png", '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		子舱选择
		//		this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.click('.js_sublist li[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		//		航班选择
		//		$('.js_flight_item[data-key="1"] .f_info')
				this.echo('第 * 个个航班:  ' + this._Flt_Code_ + '  第 * 个个舱位:  ' + this._zc_id_);

		//		this.mouse.click('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info');
		//		this.mouse.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.mouse.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');
		//		this.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		test.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');

				this.evaluate(function(_slt_str_){
				//	__utils__.mouseEvent('mouseover', _flt_str_);
				//	__utils__.mouseEvent('click', _flt_str_);
					$(_slt_str_).click();
				//	__utils__.mouseEvent('mouseout', _flt_str_);
				}, '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');

			}, function(){
				this.echo("Nothing to say !");
				this.exit(808);
			}, 800);
}


function ZiCang_Select2(_zc_){
	//	this.echo("\n现在选舱位\n");
	//	第二个子舱
	//	this._zc_id_ = 1;
//		this._zc_id_ = ( _zc_ === undefined ) ? _zc_ : 1;
		this._zc_id_ = _zc_ ? _zc_ : 0;
	//	this._zc_id_ = _RandomGenerate(this._zcNum);

	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="1"]');
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		this.waitForSelector('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]',
			function(){
				this.log("新式写法 哈哈 哈哈", "info");
				this.test.assertExists('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]', "*********\n舱位元素存在*********");
				this.capture(this._result_cap_str + _TimeStamp() + "_before_select_flight" + ".png");
				this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_cangwei" + ".png", '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		子舱选择
		//		this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.click('.js_sublist li[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		//		航班选择
		//		$('.js_flight_item[data-key="1"] .f_info')
				this.echo('第 * 个个航班:  ' + this._Flt_Code_ + '  第 * 个个舱位:  ' + this._zc_id_);

		//		this.mouse.click('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info');
		//		this.mouse.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.mouse.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');
		//		this.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		test.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');

				this.evaluate(function(_slt_str_){
				//	__utils__.mouseEvent('mouseover', _flt_str_);
				//	__utils__.mouseEvent('click', _flt_str_);
				//	__utils__.mouseEvent('mouseout', _flt_str_);

				//	$(_slt_str_).tap();
					$(_slt_str_).click();
				//	$(_slt_str_).trigger('touchstart');

				// }, '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');
				//	2015-02-05 往返处理不够正确 改为下面的样子
				}, '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
			
			}, function(){
				this.echo("Nothing to say !");
				this.exit(808);
			}, 800);
}


function Flight_Select2_BillEdit(_flt_){
		this.log("\n\n\n I 'm coming in 222 !!!\n\n\n", "error")

	//	航班列表的某个航班
	//	航班列表中的哪个航班呢？第14个行不行：
	//	后面可以作为参数传入
	//	this._Flt_Code_ = 6;
//		this._Flt_Code_ = ( _flt_ === undefined ) ? _flt_ : 1;
		this._Flt_Code_ = _flt_ ? _flt_ : 0;
	//	this._Flt_Code_ = _RandomGenerate(this._manList);

	//	展开子舱按钮
//		this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
//		this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

	//	配合一下，后来document定位元素click没有被执行
	//	this.click('.f_list div [data-key="0"] .flight-listfold');
	//	新式写法，哈哈
	//	#theFlightlist
	//	comment and modify at date 2015-01-20
	//	this.waitForSelector('.f_list [data-key="' + this._Flt_Code_ + '"] .flight-listfold .js_subswitch',
		this.waitForSelector('#theFlightlist [data-key="' + this._Flt_Code_ + '"] .js_subswitch',
			function(){
				this.test.assertExists('.f_list_tab [data-key="' + this._Flt_Code_ + '"].f_info', "*********\n航班元素存在*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list_tab [data-key="' + this._Flt_Code_ + '"]');
				this.evaluate(function( _slt_str_){
					$(_slt_str_).click();
					// $(_slt_str_).trigger('touchstart');
				}, '#theFlightlist [data-key="' + this._Flt_Code_ + '"]');

				// this.click('#theFlightlist [data-key="' + this._Flt_Code_ + '"]');

		//		test.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '#theFlightlist [data-key="' + this._Flt_Code_ + '"]');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit(807);
			}, 2000);
}


function ZiCang_Fan_Select(_zc_){
		this._zc_id_ = _zc_ ? _zc_ : 0;

		this.log("是零吗\n\n", "debug");

		this.waitForSelector('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]',
			function(){
				this.log("看到返程舱位展开了\n\n", "info");
				this.test.assertExists('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]', "*********\n返程舱位元素存在*********");
				this.capture(this._result_cap_str + _TimeStamp() + "_before_select_flight" + ".png");
				this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_CangWei" + ".png", '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		子舱选择
		//		this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.click('.js_sublist li[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		航班选择
		//		$('.js_flight_item[data-key="1"] .f_info')
				this.echo('第 * 个个航班:  ' + this._Flt_Code_ + '  第 * 个个舱位:  ' + this._zc_id_);
				// this.echo('第 * 个个航班:  ' + this._Flt_Code_ + '  第 * 个个舱位:  ' + this._zc_id_);
				// this.echo('第 * 个个航班:  ' + this._Flt_Code_ + '  第 * 个个舱位:  ' + this._zc_id_);
				// this.echo('第 * 个个航班:  ' + this._Flt_Code_ + '  第 * 个个舱位:  ' + this._zc_id_);

				// this.evaluate(function(_slt_str_){
				// //	$(_slt_str_).tap();
				// 	$(_slt_str_).click();
				// //	$(_slt_str_).trigger('touchstart');
				// }, '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .flt-btn-yellow');
/*
			//	document.querySelector
				this.evaluate(function(_slt_str_){
					document.querySelector(_slt_str_).click();
				}, '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .flt-btn-yellow');
				// this.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .flt-btn-yellow');
*/
		//	2015-02-06 折腾了半天 发现返程订单填写页总是匹配出两个相同的button 开发SB 只能使用下面的办法处理咯
				this.clickLabel('预订', 'button');

			}, function(){
				this.echo("Nothing to say !");
				this.exit(808);
			}, 800);
}


function BillEdit_Validate(){
	this.log("来啦", "info");

	// (第一次等待)wait for 3.9s, prepare rendering page of billedit.
	// this.wait(5000, function(){
	// 	if(this.visible('.cui-error-tips')){
	// 		this.test.info("这个航班满仓啦");
	// 		this.exit(1024);
	// 	}else{
	//		this.echo("ok 没有满仓, continue...");
	this.waitForSelector('.flight-bkinfo',
		//	this.waitForSelector('.flight-icon-go',
				function(){
					this.echo("This is Page of BillEdit, is it ?");
					this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
				}, function(){
					this.echo("After 6 + 8s, the page wai still not BillEdit ~");
					this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
				//	this.exit(805);
					this.reload(function(){
					 	this.waitForSelector('.flight-icon-go',
					 		function(){
					 			this.echo("This is reload Page of BillEdit, is it ?");
					 			this.capture(this._result_cap_str + _TimeStamp() + "_reload_Bill_Edit_" + ".png");
					 		}, function(){
					 			this.echo("After reload 6 + 8s, the page wai still not BillEdit ~");
					 			this.capture(this._result_cap_str + _TimeStamp() + "_not_reload_Bill_Edit_" + ".png");
					 			_Dump_Page2.call(this, "WHYANG_bill_edit_file.html")
					 			this.exit(805);
					 		}, 18000);
					});
				}, 18000);
	//	}
	//	});

	//	as follow 3 lines add at 2015-01-20	
	this.wait(5000, function(){
		this.log("I will wait 5s here for billedit rendering ... is it oK ?\n", "warning");
	});
}

