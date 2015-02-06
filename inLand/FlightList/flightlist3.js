
function Choose_O_Flt(){
	this.wait(7000, function(){
	//	this.test.assertExists('.sub-city-box',"There are no City List");
		this.echo("stop here waiting for 7s; Show Flight List ~");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});

// 	this.wait(100, Flight_Show.bind(this));
// //	this.wait(100, ZiCang_Select.bind(this));
// //	this.wait(100, ZiCang_Select.bind(this));
// 	this.wait(100, function(){Flight_Select2.call(this, 1)});
// 	this.wait(100, function(){ZiCang_Select2.call(this, 2)});
// 	this.wait(100, BillEdit_Validate.bind(this));



	this.wait(100, function(){Flight_Show.call(this);});
	this.wait(100, function(){Flight_Select2.call(this, 1)});
	this.wait(2000, function(){ZiCang_Select2.call(this, 2)});
	this.wait(100, function(){BillEdit_Validate.call(this);});
}


function Choose_O_Flt2(_flt_, _zc_){
	this.wait(7000, function(){
	//	this.test.assertExists('.sub-city-box',"There are no City List");
		this.echo("stop here waiting for 7s; Show Flight List ~");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});

	this.wait(100, function(){
		// _flt_num_ = (_flt_ === undefined ) ? _flt_ : 1;
		// _zc_num_ = (_zc_ === undefined ) ? _zc_ : 1;
		_flt_num_ = _flt_  ? _flt_ : 1;
		_zc_num_ = _zc_  ? _zc_ : 1;
	});

//	this.wait(100, Flight_Show.bind(this));
	this.wait(100, function(){Flight_Show.call(this);});
//	this.wait(100, Flight_Select.bind(this));
//	this.wait(100, ZiCang_Select.bind(this));

	// this.wait(100, function(){Flight_Select2.call(this, _flt_num_)});
	// this.wait(100, function(){ZiCang_Select2.call(this, _zc_num_)});
	// this.wait(100, function(){_waiting_ctrip.call(this)});
	// this.wait(100, BillEdit_Validate.bind(this));
	
	this.wait(100, function(){Flight_Select2.call(this, _flt_num_)});
	this.wait(2000, function(){ZiCang_Select2.call(this, _zc_num_)});
	this.wait(100, function(){_waiting_ctrip.call(this)});
//	订单填写页检查满仓
//	this.wait(100, function(){Error_before_BillEdit_.call(this)});
//	this.wait(100, function(){_ok_page_BillEdit.call(this)});
	this.wait(100, function(){BillEdit_Validate.call(this);});

}
