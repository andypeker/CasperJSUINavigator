

function _PsgrInfo_Loss(_time){
	this.capture(this._result_cap_str + _TimeStamp() + "_passenger_info_Loss" + ".png");
	this.log("\nChoosed passenger info is NOT completely ~ Fuck ~~~\n", "warning");
	this.log("第[variable]" + _time + "次选择乘机人 失败", "error");
	this.exit(571);
}

