
function _Choose_Double_Flt(){
	this.wait(7000, function(){
	//	this.test.assertExists('.sub-city-box',"There are no City List");
		this.echo("stop here waiting for 7s; Show Flight List ~");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});

	this.then(function(){
		this.echo("\n*************************************************\n" +
			"*************************************************\n" +
			"Choose 去程 Flight" +
			"\n*************************************************" +
			"\n*************************************************");
		this.capture(this._result_cap_str + _TimeStamp() + "Is_there_flight_list" + ".png");
		this._manList = this.evaluate(function(){
			return __utils__.findAll(".f_list div ul").length;
		});
		if(this._manList < 1){
			this.echo("\n\n\nThere are no flight from Server ~\n\n\n");
			this.exit(801);
		}
		this.echo("There are " + this._manList + " flights on List Page ~");
	});

	this.then(function(){
	// 航班列表的某个航班
	// 航班列表中的哪个航班呢？第14个行不行：
	   this._Flt_Code_ = 2;

//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
	   // 展开子舱按钮
//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

//	   this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');

	/*
		//	新式写法，哈哈
		this.waitForSelector('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold',
			function(){
				this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit();
			}, 2000)
     */

		this.waitForSelector('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold',
			function(){
				this.test.info("新式写法 哈哈哈哈");
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
				}, this._Flt_Code_)

			this.echo("There are " + this._zcNum + " ZiCang of the Flight");

			if (this._zcNum < 1){
				this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				this.exit(802);
			}
		});
	});

	this.then(function(){
		this._zc_id_ = 2;
	// 第一个子舱，选中
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"]');

	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');

		this.waitForSelector('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]',
			function(){
				this.test.info("新式写法 哈哈22222222");
				this.capture(this._result_cap_str + _TimeStamp() + "_77777777777777777" + ".png");
				this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
			}, function(){
				this.echo("Nothing to say !");
				this.exit(808);
			}, 800);

	});

	// (第一次等待)wait for 3.9s, prepare rendering page of billedit.
	this.wait(6000);
/*
	this.waitForSelector('.flight-bkinfo',
		function(){
		   	this.echo("\n\n999999999\n\n\n\n");
			this.echo("This is Page of BillEdit, is it ?");
			this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
		}, function(){
			this.echo("After 8s, the page wai still not BillEdit ~");
			this.exit(805);
		}, 8000)
*/
	this.then(function(){
			this.echo("\n*************************************************\n" +
			"*************************************************\n" +
			"Choose 返程 Flight" +
			"\n*************************************************" +
			"\n*************************************************");
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
	// 航班列表的某个航班
	// 航班列表中的哪个航班呢？第14个行不行：
	   this._Flt_Code_ = 3;

//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
	   // 展开子舱按钮
//	   this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');

//	   this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');

	/*
		//	新式写法，哈哈
		this.waitForSelector('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold',
			function(){
				this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit();
			}, 2000)
	*/
		this.waitForSelector('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold',
			function(){
				this.test.info("新式写法 哈哈哈哈");
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png",'.f_list div [data-key="' + this._Flt_Code_ + '"]');
				this.click('.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
				this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.f_list div [data-key="' + this._Flt_Code_ + '"] .flight-listfold');
			}, function(){
				this.echo("No flight selected, sorry ~");
				this.exit(807);
			}, 2000);


		this.wait(2000, function(){
		//	this.echo("\n\n***********************\n\n");
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this._zcNum = this.evaluate(function(_flt_){
					return __utils__.findAll('.f_list div [data-parent-key="' + _flt_ + '"]').length;
				}, this._Flt_Code_)

			this.echo("There are " + this._zcNum + " ZiCang of the Flight");

			if(this._zcNum < 1){
				this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				this.exit(802);
			}
		});
	});

	this.then(function(){
		this._zc_id_ = 0;
	// 第一个子舱，选中
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"]');
	//	this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');


		this.waitForSelector('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]',
			function(){
				this.test.info("新式写法 哈哈 33333333");
				this.capture(this._result_cap_str + _TimeStamp() + "_77777777777777777" + ".png");
				this.click('.f_list div [data-parent-key="' + this._Flt_Code_ + '"][data-key="' + this._zc_id_ + '"]');
			}, function(){
				this.echo("Nothing to say !");
				this.exit(808);
			}, 800);

	});

	this.wait(1000, function(){
		this.capture(this._result_cap_str + _TimeStamp() + "_88888888888888888" + ".png");
//		Error_before_BillEdit_.call(this);
	})

//	this.wait(500, Error_before_BillEdit_.bind(this));
	this.wait(500, function(){Error_before_BillEdit_.call(this);});

/*
	// (第一次等待)wait for 3.9s, prepare rendering page of billedit.
	this.waitForSelector('.flight-bkinfo',
		function(){
			this.echo("This is Page of BillEdit, is it ?");
			this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
		}, function(){
			this.echo("After 6 + 18s, the page wai still not BillEdit ~");
			this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
			this.exit(805);
		}, 8000)
*/

//	this.wait(500, _ok_page_BillEdit.bind(this));
	this.wait(500, function(){_ok_page_BillEdit.call(this);});
}

