

/*
	$('body').css('display')
	"block"
	$('body').css('display') == none
	ReferenceError: none is not defined
	$('body').css('display') == 'none'
	false
*/

/*
	this.waitForSelector('.cui-pop-box ',
		function(){

		}, function(){

		}, 100);
*/

/*
this.waitForSelector('.cui-toast',
	_OK_PATA,
    function oops_no_PATA(){
    	this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
    	this.echo("oooooooops, there is no PATA or QTE，continue ~");
    }, 500);
*/

/*
	Method 1:
*/
/*
	if(this.evaluate(function(){
		return __utils__.visible(_sel_str_);
	}, '.cui-error-tips')){
		this.test.info("这个航班满仓啦");
		this.exit(1024);
	}else{
		this.echo("ok, 满仓检查通过 continue...");
	}
*/

/*
//	Method 2:
	this.waitForAlert(function(){
		this.echo("Alert received: " + response.data);
	})


//	Method 3:
	this.waitForPopup(/popup\.html$/, function(){
		this.test.assertEquals(this.popups.length, 1);
	})


//	Method 4
	this.waitWhileSelector('', function(){

	})

//	Method 5
	this.waitWhileVisible('', function(){

	})

//	Method 6:
	this.waitUntilVisible('', function(){

	})
*/

function Error_before_BillEdit_(){
	if(this.visible('.cui-error-tips')){
		this.test.info("这个航班满仓啦");
		this.exit(1024);
	}else{
		this.echo("ok 满仓检查通过 continue...");
	}
}


function _ok_page_BillEdit(){
	this.echo("ok 没有满仓, continue...");
	this.waitForSelector('.flight-bkinfo',
//	this.waitUntilVisible('.flight-bkinfo',
		function(){
			this.echo("This is Page of BillEdit, is it ?");
			this.capture(this._result_cap_str + _TimeStamp() + "_Bill_Edit_" + ".png");
		}, function(){
			this.echo("After 6 + 28s, the page wai still not BillEdit ~");
			this.capture(this._result_cap_str + _TimeStamp() + "_not_Bill_Edit_" + ".png");
			this.exit(805);
		}, 50000)
}


function _waiting_ctrip(){
	this.waitWhileVisible('.cui-layer-padding',
		function(){
			this.log("海豚消失 孙子你继续吧 ~", "info");
			this.capture(this._result_cap_str + _TimeStamp() + "_succ_waiting_" + ".png");

		//	然后这里做一些其他检查项（比如售完啥的）

		}, function(){
			this.log("I am always waiting for something 爷一直在等待呢 海豚不消失 爷能怎么做~", "warning");
			this.capture(this._result_cap_str + _TimeStamp() + "_fail_waiting_" + ".png");
			this.exit(1023);
		}, 18000);
}
