/*
var casper = require("casper").create({
// clientScripts:["./jquery-2.1.1.min.js"],
   logLevel: "info",
   verbose: true,
   pageSettings: {
         loadImages: true,   
         loadPlugins: true,    
         userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'   
   },
   exitOnError: function(self, _msg){
   	  this.echo("Casper Instance exitOnError, and quit:\n" + _msg);
   	  this.capture(this._result_cap_str + "__Exit_Over.png");
   	  self.exit();
   },
   onError: function(self, _msg){
      this.capture(this._result_cap_str + "error.png");  
      console.log("onError===========================\nFATAL:" + _msg);  
      self.exit();
   },
   onLoadError: function(self, _msg){
   	  this.echo("Casper Instance onLoadError, and quit:\n" + _msg);
   	  this.capture(this._result_cap_str + "__Exit_LoadError.png");
   },
   silentErrors: function(self, _msg){
   	  this.echo("Casper Instance silentErrors, and quit:\n" + _msg);
   	  this.capture(this._result_cap_str + "__Exit_Over.png");
   },
   onDie: function(self, _msg){
      this.echo("Casper Instance call function Die, and quit:\n" + _msg);
      self.exit();
  //  casper.exit();
   },
   onAlert: function(self, _msg){
      console.log("onAlert===========================\nmsg:" + _msg);  
   },
   timeout: 9 * 1000 * 1000
});
*/




/******************
**  Three Case  **
******************/
casper.test.begin("ThreeCase", 1, function suite(test){
	// 从这里开始
	casper.start("http://m.ctrip.com/", function() {
		  this.capture(this._result_cap_str + _TimeStamp() + ".png");
	}).then(function(){_TEST_WP('SHA', 'BJS', '2014-09-27')});
	//	登出
	casper.then(_GoTo_WoXie).then(_LOGININ);
	//	选择航班
	casper.then(_D_A_T_Flt_Check).then(_Choose_O_Flt);
	//	填写订单
	casper.then(_in_Check_Bill_Elements).then(_in_Fill_Passenger).then(_Fill_Other_Info).then(_Bill_Fill_Edit_next);
	//	支付
	casper.then(_in_Pay_with_Money).then(_Result_Shoot);
	//	打完收工
	casper.run(function (){
		    this.echo("No Money to Pay, so Stop here. Bye ~");
		//    this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
		//	casper.exit();
			test.assertResourceExists('html');
			test.done();
		});
});

