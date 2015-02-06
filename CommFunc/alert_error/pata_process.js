

//	处理pata 提示框的操作步骤
function _OK_ManCang(){
	this.capture(this._result_cap_str + _TimeStamp() + "_some_PATA_or_QTE" + ".png");
	this.echo("Process some steps for PATA ~");
}

function _OK_QTE_inter(){
	this.capture(this._result_cap_str + _TimeStamp() + "_some_QTE" + ".png");
	this.echo("Process some steps for QTE ~");
	this.log( "\n^^^^^^^^^^^^^^^^^^^" + this.fetchText('.cui-pop-box'), "warning");
	this.test.assertTextExists('实时价格确认', '很明显这是QTE');
		
	this.log("\n\n有几个按钮呢 请看  " + this.evaluate(function(_slt_str_){
				return __utils__.findAll(_slt_str_).length;
			}, '.cui-pop-box .cui-btns-sure') + "\n\n", "info");

	this.waitForSelector('.cui-pop-box .cui-btns-sure',
		function(){
			this.log("\n^^^^^^^同意新价格^^^^^^^^" + this.fetchText('.cui-pop-box .cui-btns-sure'), "warning");
	//		_Dump_Page2.call(this, 'QTE.html');
			this.test.assertExists('.cui-pop-box .cui-btns-sure', "有同意价格按钮嘛");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__QTE_Price_Agree" + ".png", '.cui-pop-box .cui-btns-sure');

	/*
			this.evaluate(function(_slt_str_){
			//	重新查询按钮 统一按钮 选择器相同 只能通过[1]来命中第二个 --- 同意
				($(_slt_str_)[1]).click();
			}, '.cui-pop-box .cui-btns-sure');

			this.evaluate(function(_slt_str_){
			//	重新查询按钮 统一按钮 选择器相同 只能通过[1]来命中第二个 --- 同意
				($(_slt_str_)[1]).trigger('touchstart');
			}, '.cui-pop-box .cui-btns-sure');
	
			this.evaluate(function(_slt_str_){
		//		querySelector('a[action-type="submit"]')[0].click(); //2>可以在这里提交哦！
				querySelector(_slt_str_)[1].click();
			}, '.cui-pop-box .cui-btns-sure');
	*/
			this.log("\n\n我要玩个大的\n\n", "warning");
			this.clickLabel('同意', 'div');

		//	this.click('.cui-pop-box .cui-btns-sure [2]');
		//	this.click(x('//div[class="cui-bd"]//div[class="cui-roller-btns"]//div[1]'));
		}, function(){
			this.log("没有同意价格按钮", "error");
			this.exit(998);
		}, 2000);
}

function _OK_PATA(){
//	这个没有经过check 还需要调试
	this.capture(this._result_cap_str + _TimeStamp() + "_some_PATA" + ".png");
	this.echo("Process some steps for QTE ~");
	this.log( "\n^^^^^^^^^^^^^^^^^^^" + this.fetchText('.cui-pop-box'), "warning");
	this.test.assertTextExists('实时价格确认', '很明显这是PATA');

	this.waitForSelector('.cui-pop-box .cui-btns-sure',
		function(){
			this.log( "\n^^^^^^^同意新价格^^^^^^^^" + this.fetchText('.cui-pop-box .cui-btns-sure'), "warning");
			this.test.assertExists('.cui-pop-box .cui-btns-sure', "有同意价格按钮嘛");
			this.captureSelector(this._result_cap_str + _TimeStamp() + "__PATE_Price_Agree" + ".png", '.cui-pop-box .cui-btns-sure');
			this.evaluate(function(_slt_str_){
				$(_slt_str_).click();
			}, '.cui-pop-box .cui-btns-sure');
		//	this.click('.cui-pop-box .cui-btns-sure');
		}, function(){
			this.log("没有同意价格按钮", "error");
			this.exit(998);
		}, 2000);
}


/*
	标准化处理PATA和QTE的方法
	this.waitForSelector('.cui-pop-box',
		_OK_QTE_inter,
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + "_noPataorQTE" + ".png");
			this.echo("oooooooops, there is no QTE，continue ~");
		}, 3000);
*/