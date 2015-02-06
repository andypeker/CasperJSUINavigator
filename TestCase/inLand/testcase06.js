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
**  Six Case  **
******************/
// The suite callback will get the current Tester instance as its first argument:
casper.test.begin("SixCase", 1, function(test){
//   this._result_cap_str = "../../TestCapture/Test_SixCase/";
//   this.logLevel = 'debug';
	// 从这里开始
	casper.start("http://m.ctrip.com/webapp/flight/"
      , function(){
         casper.evaluate(function(){
             if (!Function.prototype.bind) {
                 Function.prototype.bind = function (oThis) {
                     if (typeof this !== "function") {
                         // closest thing possible to the ECMAScript 5 internal IsCallable function
                         throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                     }
                     var aArgs = Array.prototype.slice.call(arguments, 1),
                         fToBind = this,
                         fNOP = function () {},
                         fBound = function () {
                             return fToBind.apply(this instanceof fNOP && oThis
                                                    ? this
                                                    : oThis,
                                                  aArgs.concat(Array.prototype.slice.call(arguments)));
                         };

                     fNOP.prototype = this.prototype;
                     fBound.prototype = new fNOP();
                     return fBound;
                 };
             }
         });

   //    casper.options.clientScripts = ['/Users/whyang/Running/3rdLib/es5-shim.min.js'];
/*         casper.on('page.initialized', function(){
           this.log("\n\n\n\n现在看看能不能搞定\n\n\n\n", "warning");
           this.evaluate(function(){
               var isFunction = function(o){
                   return typeof o == 'function';
               };

               var bind,
                   slice = [].slice,
                   proto = Function.prototype,
                   featureMap;

               featureMap = {
                   'function-bind': 'bind'
               };

               function has(feature) {
                   var prop = featureMap[feature];
                   return isFunction(proto[prop]);
               }

               // check for missing features
               if (!has('function-bind')){
                  // adapted from Mozilla Developer Network example at
                  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
                  bind = function bind(obj){
                     var args = slice.call(arguments, 1),
                        self = this,
                        nop = function(){},
                        bound = function() {
                            return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));
                        };
                     nop.prototype = this.prototype || {}; // Firefox cries sometimes if prototype is undefined
                     bound.prototype = new nop();
                     return bound;
                  };
                  proto.bind = bind;
               }
           });
         });
*/

         casper.on('page.initialized', function(){
             this.evaluate(function(){
                 var isFunction = function(o) {
                   return typeof o == 'function';
                 };

                 var bind,
                   slice = [].slice,
                   proto = Function.prototype,
                   featureMap;

                 featureMap = {
                   'function-bind': 'bind'
                 };

                 function has(feature) {
                   var prop = featureMap[feature];
                   return isFunction(proto[prop]);
                 }

                 // check for missing features
                 if (!has('function-bind')) {
                   // adapted from Mozilla Developer Network example at
                   // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
                   bind = function bind(obj) {
                     var args = slice.call(arguments, 1),
                       self = this,
                       nop = function() {
                       },
                       bound = function() {
                         return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));
                       };
                     nop.prototype = this.prototype || {}; // Firefox cries sometimes if prototype is undefined
                     bound.prototype = new nop();
                     return bound;
                   };
                   proto.bind = bind;
                 }
             });
         });
/*
         casper.on('page.resource.received', function(){
            this.log("\n\n\n\n现在看看能不能搞定 222\n\n\n\n", "warning");
            this.evaluate(function(){
               var isFunction = function(o) {
                   return typeof o == 'function';
               };

               var bind,
                   slice = [].slice,
                   proto = Function.prototype,
                   featureMap;

               featureMap = {
                   'function-bind': 'bind'
               };

               function has(feature) {
                   var prop = featureMap[feature];
                   return isFunction(proto[prop]);
               }

               // check for missing features
               if (!has('function-bind')){
                 // adapted from Mozilla Developer Network example at
                 // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
                   bind = function bind(obj){
                       var args = slice.call(arguments, 1),
                           self = this,
                           nop = function(){},
                           bound = function() {
                               return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));
                           };
                       nop.prototype = this.prototype || {}; // Firefox cries sometimes if prototype is undefined
                       bound.prototype = new nop();
                       return bound;
                   };
                   proto.bind = bind;
               }
            });
         });
*/
   });

   casper._result_cap_str = "../../TestCapture/Test_SixCase/";

//   casper.then(_CaseOption).then(_Delete_LS.bind(this));
   casper.then(_CaseOption2).then(function(){_Delete_LS.call(this)});
//   casper.then(_CaseOption);

   casper.then(function(){_TEST_T.call(this, 'HGH', 'CTU', '2014-10-25')});
	//	登出
//	casper.then(GoTo_WoXie).then(LOGINOUT);
	//	选择航班
//	casper.then(_D_A_T_Flt_Check2).then(_Choose_O_Flt);
   casper.then(_D_A_T_Flt_Check2).then(function(){_Choose_O_Flt2.call(this, 2, 2)});
	//	填写订单
	casper.then(out_Check_Bill_Elements).then(out_Fill_Passenger).then(Fill_Other_Info).then(Bill_Fill_Edit_next);
	//	支付
	casper.then(function(){out_Pay_with_Money3.call(this, "Credit")}).then(_Result_Shoot2);
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

