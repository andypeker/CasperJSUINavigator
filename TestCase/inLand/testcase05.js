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
casper.test.begin("FiveCase", 1, function(test){
   this._result_cap_str = "../../TestCapture/Test_FiveCase/";

	// 从这里开始
	casper.start("http://m.ctrip.com/");
   casper.options.pageSettings = {
      loadImages: true,   
      loadPlugins: true,    
      userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'   
   };
   casper.options.timeout = 9 * 1000 * 1000;
   casper.options.verbose = true;
   casper.options.logLevel = "debug";
   casper.options.onAlert = function(){
      this.echo("There are some error while js code running .");
   };
   casper.options.onError = function(){
      this.echo("There are some error while js code running .");
   };
   casper.options.onLoadError = function(){
      this.echo("There are some error while js code running .");
   };
   casper.options.exitOnError = function(){
      this.echo("There are some error while js code running .");
   };

   casper.then(function(){_TEST_T.call(this, 'BJS', 'SIA', '2014-10-12')});
	//	登出
	casper.then(_GoTo_WoXie).then(_LOGINOUT);
	//	选择航班
	casper.then(_D_A_T_Flt_Check2).then(_Choose_O_Flt);
	//	填写订单
	casper.then(_out_Check_Bill_Elements).then(_out_Fill_Passenger).then(_Fill_Other_Info).then(_Bill_Fill_Edit_next);
	//	支付
	casper.then(function(){_out_Pay_with_Money3.call(this, "Credit")}).then(_Result_Shoot2);
	//	打完收工
   casper.run(function (){
         this.echo("No Money to Pay, so Stop here. Bye ~");
      //    this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
      // casper.exit();
      //  下面这个assertResourceExists方式不应该这么使用，Resource指的是图片、css等东西，而不是某个标签。
         test.assertResourceExists('html',"\n\n牛逼吧？\n\n");
         test.done();
         casper.exit(0);
      });
});
