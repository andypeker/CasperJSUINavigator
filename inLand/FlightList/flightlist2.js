
function Choose_O_Flt(){
	this.wait(7000, function(){
	//	this.test.assertExists('.sub-city-box',"There are no City List");
		this.echo("stop here waiting for 7s; Show Flight List ~");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});

	this.then(function(){
			this.capture(this._result_cap_str + _TimeStamp() + "Is_there_flight_list" + ".png");
			this._manList = this.evaluate(function() {
			return __utils__.findAll(".f_list div ul").length;
		});
	   if(this._manList < 1){
		   this.echo("\n\n\nThere are no flight from Server ~\n\n\n");
		   this.exit(801);
	   }
	   this.echo("There are " + this._manList + " flights on List Page ~");
	});

	this.then(function(){
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
				this.test.info("新式写法 哈哈");
				this.test.assertExists('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info', "\n*********\n航班元素存在\n*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
				this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
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
	});

	this.then(function(){
	//	this.echo("\n现在选舱位\n");

	//	第二个子舱
		this._zc_id_ = 1;
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="1"]');
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		this.waitForSelector('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]',
			function(){
				this.test.info("新式写法 哈哈 哈哈");
				this.test.assertExists('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]', "\n*********\n舱位元素存在\n*********");
				this.capture(this._result_cap_str + _TimeStamp() + "_before_select_flight" + ".png");
				this.captureSelector(this._result_cap_str + _TimeStamp() + "_selected_flight" + ".png", '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		子舱选择
		//		this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.click('.js_sublist li[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		//		航班选择
		//		$('.js_flight_item[data-key="1"] .f_info')
				this.echo('第 * 个个航班:  ' + this._Flt_Code_);
				this.echo('第 * 个个舱位:  ' + this._zc_id_);

		//		this.mouse.click('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info');
				this.mouse.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
		//		this.mouse.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"] .xq_price');
		//		this.click('.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

				// this.evaluate(function(_flt_str_){
				// //	__utils__.mouseEvent('mouseover', _flt_str_);
				// //	__utils__.mouseEvent('click', _flt_str_);
				// 	$(_flt_str_).click();
				// //	__utils__.mouseEvent('mouseout', _flt_str_);
				// }, '.js_flight_seat[data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');


			}, function(){
				this.echo("Nothing to say !");
				this.exit(808);
			}, 800);
	});

	// (第一次等待)wait for 3.9s, prepare rendering page of billedit.
	// this.wait(5000, function(){
	// 	if(this.visible('.cui-error-tips')){
	// 		this.test.info("这个航班满仓啦");
	// 		this.exit(1024);
	// 	}else{
	//		this.echo("ok 没有满仓, continue...");
		//	this.waitForSelector('.flight-bkinfo',
			this.waitForSelector('.flight-icon-go',
				function(){
					this.echo("This is Page of BillEdit, is it ?");
					this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
				}, function(){
					this.echo("After 6 + 8s, the page wai still not BillEdit ~");
					this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
			//		this.exit(805);
					// this.reload(function(){
					// 	this.waitForSelector('.flight-icon-go',
					// 		function(){
					// 			this.echo("This is Page of BillEdit, is it ?");
					// 			this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
					// 		}, function(){
					// 			this.echo("After 6 + 8s, the page wai still not BillEdit ~");
					// 			this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
					 			this.exit(805);
					// 		}, 18000);
					// });
				}, 18000);
	// 	}
	// });
}
