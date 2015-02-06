function _CaseOption(){
    casper.options.pageSettings = {
        loadImages: true,
        loadPlugins: true,    
        userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
    };

    casper.options.stepTimeout = 1000 * 1000 * 120;
//  casper.options.timeout = 1000 * 1000 * 9;
//  casper.options.waitTimeout = 1000 * 1000 * 30;
    casper.options.verbose = true;
    casper.options.logLevel = "debug";
    casper.options.viewportSize = {width: 320, height: 800};

/*
//  还可以这样做 肯定可行
    casper.options.httpStatusHandlers = {
        400:   function(self, _resource){
                    this.log(_Impor_msg_str1, "error");
                    this.log("Remote http.status.400 occur.", "error");
                    this.log(_resource.url, "error");
                    this.log(_Impor_msg_str2, "error");
                },
        404:   function(self, _resource){
                     this.log(_Impor_msg_str1, "error");
                     this.log("Remote http.status.404 occur.", "error");
                     this.log(_resource.url, "error");
                     this.log(_Impor_msg_str2, "error");
                 },
        500:   function(self, _resource){
                     this.log(_Impor_msg_str1, "error");
                     this.log("Remote http.status.500 occur.", "error");
                     this.log(_resource.url, "error");
                     this.log(_Impor_msg_str2, "error");
                 },
        503:   function(self, _resource){
                     this.log(_Impor_msg_str1, "error");
                     this.log("Remote http.status.503 occur.", "error");
                     this.log(_resource.url, "error");
                     this.log(_Impor_msg_str2, "error");
                 }
    }
*/

    // casper._Impor_msg_str1 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&";
    // casper._Impor_msg_str2 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n\n";
    var _Impor_msg_str1 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&";
    var _Impor_msg_str2 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n\n";

/************************************************************************
    有些事件的listen不能随意打开 得先搞清楚Phantom实例和Casper实例各自有哪些事件 
    这些事件分别有什么关联或者冲突 才可以
    否则会导致运行错误 比如 RangeError: Maximum call stack size exceeded.
    这个问题得找时间研究研究 已经在github CasperJS上发出了issue
************************************************************************/

/*
//  options的事件属性都属于Phantom实例
//  maybe same as remote.alert
    casper.options.onAlert = function(){
        this.log(_Impor_msg_str1, "warning");
        this.log("There are some onAlert while js code running.", "warning");
        this.log(_Impor_msg_str2, "warning");
    };
*/

/*
//  maybe same as page.error
    casper.options.onError = function(){
        this.log(_Impor_msg_str1, "error");
        this.log("There are some onError while js code running.", "error");
        this.log(_Impor_msg_str2, "error");
    };
*/
    casper.options.onLoadError = function(){
        this.log(_Impor_msg_str1, "warning");
        this.log("There are some onLoadError while js code running.", "warning");
        this.log(_Impor_msg_str2, "warning");
    };

    casper.options.exitOnError = function(){
        this.log(_Impor_msg_str1, "error");
        this.log("There are some exitOnError while js code running.", "error");
        this.log(_Impor_msg_str2, "error");
    };
/*
    casper.options.silentErrors = function(){
        this.log(_Impor_msg_str1, "error");
        this.log("There are some silentErrors while js code running.", "error");
        this.log(_Impor_msg_str2, "error");
    };
*/

//  casper.on的事件都属于casper实例 例如事件"error"会与options.onError重复

    /* 可以获取javascript错误 很重要 */
    casper.on("page.error", function(_msg, _trace){
        this.log(_Impor_msg_str1, "error");

    //  可以看看这里的this是什么？
    //  this.echo("\n::::" + this + "::::\n");
    //  Ouput of this statement will be, for example:
    //  ::::[object Casper], currently at http://m.ctrip.com/webapp/flight/#bookinginfo::::

        this.log("Error:    " + _msg, "error");
        this.log("file:     " + _trace[0].file, "warning");
        this.log("line:     " + _trace[0].line, "warning");
        this.log("function: " + _trace[0]["function"], "warning");
        this.log(_msg, "error");
    /*
        var pageAttr = "WeiHuaYang:";
        //  for(var s in casper){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
        for(var s in casper.options.page){
            pageAttr = "\t" + pageAttr + s + "\n";
        }
        //  pageAttr = pageAttr + "\n";
        //  for(var s in casper._events){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
        //  pageAttr = pageAttr + "\n";
        //  for(var s in casper._test){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
        //  pageAttr = pageAttr + "\n";
        //  for(var s in casper.test){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
    //  由此可见 test 与 _test 是同一个东西 因为它们的attribute相同
        this.log("\n\n\n" + pageAttr + "\n\n\n");
    */  
        this.log(_Impor_msg_str2, "error");
    });

    casper.on("remote.alert", function(_msg){
        this.log(_Impor_msg_str1, "warning", "remote");
        this.log("Remote alert occur.", "warning", "remote");
        //   this.test.info("Remote alert occur.", "warning");
        //   this.echo("Remote alert occur.", "warning");
        this.log(_msg, "warning", "remote");
        this.log(_Impor_msg_str2, "warning", "remote");
    });

    casper.on("remote.message", function(_msg){
        this.log(_Impor_msg_str1, "warning", "remote");
        this.log("Remote message occur.", "warning", "remote");
        //   this.test.info("Remote alert occur.", "warning");
        //   this.echo("Remote alert occur.", "warning");
        this.log(_msg, "warning", "remote");
        this.log(_Impor_msg_str2, "warning", "remote");
    });

/*
    casper.on("popup.created", function(_page){
        this.log(_Impor_msg_str1, "debug");
        this.log("Popup Created occur.", "debug");
        //   this.test.info("Remote alert occur.", "debug");
        //   this.echo("Remote alert occur.", "debug");
        this.log(_page, "debug");
        this.log(_Impor_msg_str2, "debug");
    });

    casper.on("popup.loaded", function(_page){
        this.log(_Impor_msg_str1, "debug");
        this.log("Popup Loaded occur.", "debug");
        //   this.test.info("Remote alert occur.", "debug");
        //   this.echo("Remote alert occur.", "debug");
        this.log(_page, "debug");
        this.log(_Impor_msg_str2, "debug");
    });
*/

//  也许step.error事件跟前面的options的某个属性重复了
    casper.on("step.error", function(_error){
        this.log(_Impor_msg_str1, "error", "remote");
        this.log("Step Error occur.", "error", "remote");
        //   this.test.info("Remote alert occur.", "error");
        //   this.echo("Remote alert occur.", "error");
        this.log(_error, "error", "remote");
        this.log(_Impor_msg_str2, "error", "remote");
    });


    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.400", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.400 occur.", "error");
        // this.test.info("Remote http.status.400 occur.", "error");
        // this.echo("Remote http.status.400 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });

    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.404", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.404 occur.", "error");
        // this.test.info("Remote http.status.404 occur.", "error");
        // this.echo("Remote http.status.404 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });

    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.500", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.500 occur.", "error");
        // this.test.info("Remote http.status.500 occur.", "error");
        // this.echo("Remote http.status.500 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });
    
    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.503", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.503 occur.", "error");
        // this.test.info("Remote http.status.503 occur.", "error");
        // this.echo("Remote http.status.503 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });
}



function _CaseOption2(){
    casper.options.pageSettings = {
        loadImages: true,
        loadPlugins: true,    
        userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
    };

    casper.options.stepTimeout = 1000 * 1000 * 120;
//  casper.options.timeout = 1000 * 1000 * 9;
//  casper.options.waitTimeout = 1000 * 1000 * 30;
    casper.options.verbose = true;
    casper.options.logLevel = "debug";
    casper.options.viewportSize = {width: 320, height: 800};

//    this.log("\n\n加载外部js文件 看看能不能解决问题 他妈的\n\n", "info");
//    casper.options.clientScripts = ['/Users/whyang/Running/3rdLib/jquery-1.11.1.min.js'];
//    casper.options.clientScripts = ['/Users/whyang/Running/3rdLib/es5-shim.min.js',
//                                    '/Users/whyang/Running/3rdLib/es5-sham.min.js'];

//  casper.injectJS("/Users/whyang/Running/3rdLib/jquery-2.1.1.min.js");
//  casper.injectJS("/Users/whyang/Running/3rdLib/es5-shim.min.js");

/*
//  还可以这样做 肯定可行
    casper.options.httpStatusHandlers = {
        400:   function(self, _resource){
                    this.log(_Impor_msg_str1, "error");
                    this.log("Remote http.status.400 occur.", "error");
                    this.log(_resource.url, "error");
                    this.log(_Impor_msg_str2, "error");
                },
        404:   function(self, _resource){
                     this.log(_Impor_msg_str1, "error");
                     this.log("Remote http.status.404 occur.", "error");
                     this.log(_resource.url, "error");
                     this.log(_Impor_msg_str2, "error");
                 },
        500:   function(self, _resource){
                     this.log(_Impor_msg_str1, "error");
                     this.log("Remote http.status.500 occur.", "error");
                     this.log(_resource.url, "error");
                     this.log(_Impor_msg_str2, "error");
                 },
        503:   function(self, _resource){
                     this.log(_Impor_msg_str1, "error");
                     this.log("Remote http.status.503 occur.", "error");
                     this.log(_resource.url, "error");
                     this.log(_Impor_msg_str2, "error");
                 }
    }
*/
    var _Impor_msg_str1 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&";
    var _Impor_msg_str2 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n\n";
//    casper._Impor_msg_str1 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&";
//    casper._Impor_msg_str2 = "&&&&&&&&&&&\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n\n";

/************************************************************************
    有些事件的listen不能随意打开 得先搞清楚Phantom实例和Casper实例各自有哪些事件 
    这些事件分别有什么关联或者冲突 才可以
    否则会导致运行错误 比如 RangeError: Maximum call stack size exceeded.
    这个问题得找时间研究研究 已经在github CasperJS上发出了issue
************************************************************************/

/*
//  options的事件属性都属于Phantom实例
//  maybe same as remote.alert
    casper.options.onAlert = function(){
        this.log(_Impor_msg_str1, "warning");
        this.log("There are some onAlert while js code running.", "warning");
        this.log(_Impor_msg_str2, "warning");
    };
*/

/*
//  maybe same as page.error
    casper.options.onError = function(){
        this.log(_Impor_msg_str1, "error");
        this.log("There are some onError while js code running.", "error");
        this.log(_Impor_msg_str2, "error");
    };
*/
    casper.options.onLoadError = function(){
        this.log(_Impor_msg_str1, "warning");
        this.log("There are some onLoadError while js code running.", "warning");
        this.log(_Impor_msg_str2, "warning");
    };

    casper.options.exitOnError = function(){
        this.log(_Impor_msg_str1, "error");
        this.log("There are some exitOnError while js code running.", "error");
        this.log(_Impor_msg_str2, "error");
    };
/*
    casper.options.silentErrors = function(){
        this.log(_Impor_msg_str1, "error");
        this.log("There are some silentErrors while js code running.", "error");
        this.log(_Impor_msg_str2, "error");
    };
*/

//  casper.on的事件都属于casper实例 例如事件"error"会与options.onError重复

    /* 可以获取javascript错误 很重要 */
    casper.on("page.error", function(_msg, _trace){
        this.log(_Impor_msg_str1, "error");

    //  可以看看这里的this是什么？
    //  this.echo("\n::::" + this + "::::\n");
    //  Ouput of this statement will be, for example:
    //  ::::[object Casper], currently at http://m.ctrip.com/webapp/flight/#bookinginfo::::

        this.log("Error:    " + _msg, "error");
        this.log("file:     " + _trace[0].file, "warning");
        this.log("line:     " + _trace[0].line, "warning");
        this.log("function: " + _trace[0]["function"], "warning");
    //  this.log(_msg, "error");
    /*
        var pageAttr = "WeihuaYang:";
        //  for(var s in casper){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
        for(var s in casper.options.page){
            pageAttr = "\t" + pageAttr + s + "\n";
        }
        //  pageAttr = pageAttr + "\n";
        //  for(var s in casper._events){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
        //  pageAttr = pageAttr + "\n";
        //  for(var s in casper._test){
        //     .pageAttr = "\t" +.pageAttr + s + "\n";
        //  }
        //  pageAttr = pageAttr + "\n";
        //  for(var s in casper.test){
        //      pageAttr = "\t" + pageAttr + s + "\n";
        //  }
    //  由此可见 test 与 _test 是同一个东西 因为它们的attribute相同
        this.log("\n\n\n" + pageAttr + "\n\n\n");
    */
        this.log(_Impor_msg_str2, "error");
    });

    casper.on("remote.alert", function(_msg){
        this.log(_Impor_msg_str1, "warning", "remote");
        this.log("Remote alert occur.", "warning", "remote");
        //   this.test.info("Remote alert occur.", "warning");
        //   this.echo("Remote alert occur.", "warning");
        this.log(_msg, "warning", "remote");
        this.log(_Impor_msg_str2, "warning", "remote");
    });

    casper.on("remote.message", function(_msg){
        this.log(_Impor_msg_str1, "warning", "remote");
        this.log("Remote message occur.", "warning", "remote");
        //   this.test.info("Remote alert occur.", "warning");
        //   this.echo("Remote alert occur.", "warning");
        this.log(_msg, "warning", "remote");
        this.log(_Impor_msg_str2, "warning", "remote");
    });

/*
    casper.on("popup.created", function(_page){
        this.log(_Impor_msg_str1, "debug");
        this.log("Popup Created occur.", "debug");
        //   this.test.info("Remote alert occur.", "debug");
        //   this.echo("Remote alert occur.", "debug");
        this.log(_page, "debug");
        this.log(_Impor_msg_str2, "debug");
    });

    casper.on("popup.loaded", function(_page){
        this.log(_Impor_msg_str1, "debug");
        this.log("Popup Loaded occur.", "debug");
        //   this.test.info("Remote alert occur.", "debug");
        //   this.echo("Remote alert occur.", "debug");
        this.log(_page, "debug");
        this.log(_Impor_msg_str2, "debug");
    });
*/

//  也许step.error事件跟前面的options的某个属性重复了
    casper.on("step.error", function(_error){
        this.log(_Impor_msg_str1, "error", "remote");
        this.log("Step Error occur.", "error", "remote");
        //   this.test.info("Remote alert occur.", "error");
        //   this.echo("Remote alert occur.", "error");
        this.log(_error, "error", "remote");
        this.log(_Impor_msg_str2, "error", "remote");
    });


    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.400", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.400 occur.", "error");
        // this.test.info("Remote http.status.400 occur.", "error");
        // this.echo("Remote http.status.400 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });

    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.404", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.404 occur.", "error");
        // this.test.info("Remote http.status.404 occur.", "error");
        // this.echo("Remote http.status.404 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });

    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.500", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.500 occur.", "error");
        // this.test.info("Remote http.status.500 occur.", "error");
        // this.echo("Remote http.status.500 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });
    
    /* 可以获取Http请求状态 也很重要 */
    casper.on("http.status.503", function(_resource){
        this.log(_Impor_msg_str1, "error");
        this.log("Remote http.status.503 occur.", "error");
        // this.test.info("Remote http.status.503 occur.", "error");
        // this.echo("Remote http.status.503 occur.", "error");
        this.log(_resource.url, "error");
        this.log(_Impor_msg_str2, "error");
    });

    casper.on('resource.received', function(_resource){
        if(_resource.url.indexOf("/Query") != -1 || _resource.url.indexOf("/Search") != -1 || _resource.url.indexOf("https://secure") != -1){
            casper.log("\n\n刚刚得到响应的请求url: " + _resource.url, "debug");
            if(_resource.url.indexOf("/FlightDetail") != -1){
                casper.log("\n\n刚刚得到响应的请求 DATA: " + _resource, "debug");
            }
        }
    });

/*
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
*/	
	
	casper.on('page.initialized', function(){
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
						 return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
										aArgs.concat(Array.prototype.slice.call(arguments)));
					};

					fNOP.prototype = this.prototype;
					fBound.prototype = new fNOP();
					return fBound;
				};
			}
		});
	});


/*  casper.on('page.initialized', function(){
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

/*
    //  某些事件不能触发时，可以考虑这个方式
    // I've commented out CasperJS specific stuff, don't use it if you don't need it
    function triggerEventOnPage(selector, eventName, memo) {
        //casper.evaluate(function(selector, eventName, memo){
            var event;
            var element = document.querySelector(selector);
            event = document.createEvent("Event");
            event.initEvent(eventName, true, true);
            event.memo = memo || { };
            element.dispatchEvent(event);
        //}, selector, eventName, memo);
        //wait();
    };
*/


//  是否可以这样调用其他脚本
//    casper.options.clientScripts = ['../CommonFunc/common1.js', 'MainPage/wo_xie/goto_woxie.js', 'LogIn/Logout/logout1.js'];
//    casper.options.remoteScripts = ['../CommonFunc/common1.js', 'MainPage/wo_xie/goto_woxie.js', 'LogIn/Logout/logout1.js'];

}
