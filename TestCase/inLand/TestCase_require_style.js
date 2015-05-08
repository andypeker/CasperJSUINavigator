
//	filename: CommFunc.js

exports.capture = function(o, _time){

	o.capture(_time);
}



//	filename: PayElementCheck.js

exports.payelementcheck = function(o){
	
	o.waitFor(function(){
//	do st check
	}, function(){
//	do st regualer
	}, function(){
//		do st else
	}, 10000);

	o.console("ok ? or not","debug")

}



//	filename: testcase.js

var CF = require("./CommFunc");
var PEC = require("./PayElementCheck");

CF.capture(this, _time);
PEC.payelementcheck(this);


