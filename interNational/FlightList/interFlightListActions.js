

function interFlight_Show(){
		this.capture(this._result_cap_str + _TimeStamp() + "_is_there_interflight_list" + ".png");
		this._manList = this.evaluate(function(){
			return __utils__.findAll(".f_list .js_f_list_tab").length;
		});
		
		if(this._manList < 1){
			this.log("\n\nThere are no flight from Server ~\n\n", "warning");
			this.exit(801);
		}else{
			this.echo("\nThere are " + this._manList + " flights on inter [ 国际 国际 ] List Page ~\n");
		}
}


function interFlight_Select(){
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
				this.log("新式写法[ 国际 国际 ]1 哈哈", "info");
				this.test.assertExists('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info', "\n*********\n[ 国际 国际 ]1航班元素存在\n*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
				test.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No [ 国际 国际 ]1 flight selected, sorry ~");
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
				 this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The [ 国际 国际 ] Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				 this.exit(802);
		   }
		});
}


function interFlight_Select2(_flt_){
	//	航班列表的某个航班
	//	航班列表中的哪个航班呢？第14个行不行：
	//	后面可以作为参数传入
	//	this._Flt_Code_ = 6;
//		this._Flt_Code_ = ( _flt_ === undefined ) ? _flt_ : 1;
		this._Flt_Code_ = _flt_ ? _flt_ : 1;
	//	展开子舱按钮
//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
//	   this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');
	//	新式写法，哈哈
		this.waitForSelector('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold',
			function(){
				this.log("新式写法[ 国际 国际 ]2 哈哈", "info");
				this.test.assertExists('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info', "\n*********\n[ 国际 国际 ]2航班元素存在\n*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
				this.evaluate(function( _slt_str_){
					$(_slt_str_).click();
				}, '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
		//		test.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No [ 国际 国际 ]2 flight selected, sorry ~");
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
				 this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The [ 国际 国际 ] Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				 this.exit(802);
		   }
		});
}


function interFlight_Select3(_flt_){
	//	航班列表的某个航班
	//	航班列表中的哪个航班呢？第14个行不行：
	//	后面可以作为参数传入
	//	this._Flt_Code_ = 6;
//		this._Flt_Code_ = ( _flt_ === undefined ) ? _flt_ : 1;
		this._Flt_Code_ = _flt_ ? _flt_ : 1;
		var _data_prdid_ARRAY = [];
	//	展开子舱按钮
//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
//	   this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');

//	$('.f_list .js_f_list_tab[data_prdid="pid=......B}{3540}{NOR}{82956112}"]').attr('data_prdid').split(';').length
		this.wait(500, function(){
			this.log("\n看看看看看看看pre\n\n" + _data_prdid_ARRAY + "\n\n\n", "error");

			_data_prdid_ARRAY = this.evaluate(function(){
					return __utils__.findOne('.f_list .js_f_list_tab').getAttribute('data_prdid');
				}).split(';');
			// var _data_prdid_Len = _data_prdid_ARRAY.length;
			// this.log("\n看看看看看看看aft LENGTH\n\n" + _data_prdid_Len + "\n\n\n", "error");
			this.log("\n看看看看看看看aft 0\n\n" + _data_prdid_ARRAY[0] + "\n\n\n", "error");
			this.log("\n看看看看看看看aft 1\n\n" + _data_prdid_ARRAY[1] + "\n\n\n", "error");
			this.log("\n看看看看看看看aft 2\n\n" + _data_prdid_ARRAY[2] + "\n\n\n", "error");
		});

	//	新式写法，哈哈
		this.waitForSelector('.f_list .js_f_list_tab[data_prdid="' + _data_prdid_ARRAY + "-" + this._Flt_Code_ + '-0"]',
			function(){
				this.log("新式写法[ 国际 国际 ]3 哈哈", "info");
				this.test.assertExists('.js_flight_item[data-key="' + this._Flt_Code_ + '"] .f_info', "\n*********\n[ 国际 国际 ]3航班元素存在\n*********");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
				this.evaluate(function( _slt_str_){
					$(_slt_str_).click();
				}, '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
		//		test.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No [ 国际 国际 ]3 flight selected, sorry ~");
				this.exit(807);
			}, 2000);
	/*
	   this.wait(2000, function(){
		//	this.echo("\n\n***********************\n\n");
           this.capture(this._result_cap_str + _TimeStamp() + ".png");
		   this._zcNum = this.evaluate(function(_flt_){
			   return __utils__.findAll('.f_list div [data-parent-key="' + _flt_ + '"]').length;
			}, this._Flt_Code_);

		   this.echo("There are " + this._zcNum + " ZiCang of the Flight");
		   if (this._zcNum < 1){
				 this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The [ 国际 国际 ] Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				 this.exit(802);
		   }
		});
	*/
}

//	一个非常简单的办法选择一个航班
//	$('.f_list ul')[2]	$('.f_list .js_f_list_tab')[3]
function interFlight_Select4(_flt_){
		this._Flt_Code_ = _flt_ ? _flt_ : 1;
	//	这个办法可以
	//	$('.f_list ul.js_f_list_tab')[3].getAttribute('data_prdid')
/*		this.wait(500, function(){
			this.log('我要点航班列表了1: ' + this._Flt_Code_, "info");
			this.click('.js_f_list_tab[data_prdid="' + this.evaluate(function(_flt_){
				return $('.f_list .js_f_list_tab')[_flt_].getAttribute('data_prdid');
			//	__utils__.findAll('.f_list .js_f_list_tab')[_flt_].click();
			}, this._Flt_Code_) + '"]');
		});
*/

	//	这个办法可以
/*		this.wait(1000, function(){
			this.log('我要点航班列表了2~', "info");
			this.click('.js_f_list_tab[data_prdid="' + this.evaluate(function(){
				return __utils__.findOne('.f_list .js_f_list_tab').getAttribute('data_prdid') + '"]';
			}));
		});
*/
		var __flt_slt_ = '.js_f_list_tab[data_prdid="' + this.evaluate(function(_flt_){
									return $('.f_list .js_f_list_tab')[_flt_].getAttribute('data_prdid');
								}, this._Flt_Code_) + '"]';

		this.waitForSelector(__flt_slt_,
			function(){
				this.log('看到了想要的航班', "info");
				this.test.assertExists(__flt_slt_, "看到了想要的航班 我点");
				this.captureSelector(this._result_cap_str + _TimeStamp() + '_selected_inter_flight' + ".png", __flt_slt_);
				this.capture(this._result_cap_str + _TimeStamp() + ".png");
				this.click(__flt_slt_);
			}, function(){
				this.log('没看看到想要的航班 崩溃', "error");
				this.capture(this._result_cap_str + _TimeStamp() + '_no_inter_flight' + ".png");
				this.exit(806);
			}, 2000);
}


function interBillEdit_Validate(){
	// (第一次等待)wait for 3.9s, prepare rendering page of billedit.
	// this.wait(5000, function(){
	// 	if(this.visible('.cui-error-tips')){
	// 		this.test.info("这个航班满仓啦");
	// 		this.exit(1024);
	// 	}else{
	//		this.echo("ok 没有满仓, continue...");
			this.waitForSelector('[data-role="infoBox"] .flight-fltinfo2',
		//	this.waitForSelector('.flight-icon-go',
				function(){
					this.log("This is Page of  [ 国际 国际 ] BillEdit, is it ?", "info");
					this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
				}, function(){
					this.log("After 6 + 8s, the page wai still not [ 国际 国际 ] BillEdit ~", "error");
					this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
					this.exit(805);
					// this.reload(function(){
					//  	this.waitForSelector('.flight-icon-go',
					//  		function(){
					//  			this.echo("This is Page of [ 国际 国际 ]reload BillEdit, is it ?");
					//  			this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
					//  		}, function(){
					//  			this.echo("After 6 + 8s, the page wai still not [ 国际 国际 ]reload BillEdit ~");
					//  			this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
					//  			this.exit(805);
					//  		}, 18000);
					// });
				}, 18000);
	// 	}
	// });
}

