/*jshint strict:false*/
/*global CasperError, console, phantom, require*/

/**
 * Create a mosaic image from all headline photos on BBC homepage
 */
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
   	  this.capture("__Exit_Over.png");
   	  self.exit();
   },
   onError: function(self, _msg){
      this.capture("error.png");  
      console.log("onError===========================\nFATAL:" + _msg);  
      self.exit();
   },
   onLoadError: function(self, _msg){
   	  this.echo("Casper Instance onLoadError, and quit:\n" + _msg);
   	  this.capture("__Exit_LoadError.png");
   },
   silentErrors: function(self, _msg){
   	  this.echo("Casper Instance silentErrors, and quit:\n" + _msg);
   	  this.capture("__Exit_Over.png");
   },
   onDie: function(self, _msg){
      this.echo("Casper Instance call function Die, and quit:\n" + _msg);
      self.exit();
  //  casper.exit();
   },
   onAlert: function(self, _msg){
      console.log("onAlert===========================\nmsg:" + _msg);  
   },
   timeout: 12 * 1000 * 1000
});

/*
casper.test.begin('Ctrip Test Results', 4, function suite(test) {
*/

function _TEST(){
    if(casper.cli.args.length < 3){
	   this.echo("Need 3 parameters like: SHA SIA '2014-09-12'");
	   casper.exit();
	}
	_Depart_City = casper.cli.get(0);
	_Arrive_City = casper.cli.get(1);
	_Depart_Date = casper.cli.get(2);
//	casper.exit();
}

function _TimeStamp(){
   var _time_stamp = new Date();//.toLocaleString();//.replace(/年|月/g, "-").replace(/日/g, " ")
   return  "PageScreen_" + _time_stamp.getMonth() +  '_' + _time_stamp.getDate() + '_' + _time_stamp.getHours() + '_' + _time_stamp.getMinutes() + '_' + _time_stamp.getSeconds();
}

function _LOGINOUT(){
// 判断是否已经登录
   if(this.exists('.member-box')){
   // 回到首页
       this.echo("I am Ying ~");
	   this.capture((_TimeStamp()) + ".png");
   /*  this.click('.sub-viewport .home-i-back');
	   this.wait(2000, function(){
		  this.capture((_TimeStamp()) + ".png");
	   });
   */  this.then(function(){
          this.echo("I am Ying 1 ~");
     	  this.captureSelector((_TimeStamp()) + "__111111____" + ".png", '.member-name');
	      this.click('.member-name');
//	   });
//	   this.then(function(){
	      this.wait(1000,function(){
	         this.echo("I am Ying 2~");
		     this.captureSelector((_TimeStamp()) + "__222222____" + ".png", '#accountbox .g-btn-s');
	         this.click('#accountbox .g-btn-s');
		  })
//	   });
//	   this.then(function(){
	      this.wait(1000, function(){
	         this.echo("I am Ying 3~");
	         this.captureSelector((_TimeStamp()) + "__logout____" + ".png", '.cui-bd');
	         if(this.exists('.cui-bd')){
		        this.echo("I am also In ~");
		        this.click('.cui-roller-btns .cui-btns-sure');
		     }else{
		        this.echo("I Could Not Log Out ~");
	         }
		  })  
	   });
   }else{
      this.echo("No Login, Continue ~");
   }
   this.then(function(){
      this.wait(2000, function(){
        this.capture((_TimeStamp()) + ".png");
        this.click('.home-header .home-i-back');
	   })
      this.echo("Log Out, Browser go back to Main Page, Quit, OK ?");
//      casper.exit();
   });
}

function _LOGININ(){
// 判断是否已经登录
   if(this.exists('.member-box')){
         // 回到首页
	   this.capture((_TimeStamp()) + ".png");
	   this.click('.sub-viewport .home-i-back');
	   this.wait(2000, function(){
		  this.capture((_TimeStamp()) + ".png");
	   })
   }else{
   	// 我携登录页面
       this.captureSelector((_TimeStamp()) + ".png", '.login-box .home-btn');
	   this.click('.login-box .home-btn');
	   this.wait(5000, function(){
		  this.capture((_TimeStamp()) + ".png");
	   });
	// 登录页面
	   this.evaluate(function(){
		  document.querySelector('input[id="username"]').value = 'wwwwww';
		  document.querySelector('input[id="password"]').value = 'good08';
	   })
	   this.capture((_TimeStamp()) + ".png");
	   this.captureSelector((_TimeStamp()) + ".png", '.btn_box .g_btn_s');
	   this.click('.btn_box .g_btn_s');
	   this.wait(4000,function(){
		  this.capture((_TimeStamp()) + ".png");
	   });
	}
   this.then(function(){
      this.wait(2000, function(){
        this.capture((_TimeStamp()) + ".png");
        this.click('.home-header .home-i-back');
	   })
      this.echo("Log In, Browser go back to Main Page, Quit, OK ?");
//      casper.exit();
   });
}

function _D_A_T_Flt_List(){
	// 首页机票进入机票查询页
	this.then(function(){
	   this.wait(2000, function(){
		   this.echo("Could I to Flight Page ?~");
	//	   this.captureSelector((_TimeStamp()), 'li [href="/webapp/flight/"]');
		   this.click('li [href="/webapp/flight/"]');
		   this.wait(3000, function(){
			  this.echo("to Flight Success ~");
			  this.capture((_TimeStamp()) + ".png");
		   });
	   });   
	})

	//进入出发城市选择列表
	this.then(function(){
	   this.echo("To Depart City List ~");
	//   this.captureSelector('departcity.png', '#js_departcity');
	   this.click('#js_departcity');
	   this.wait(2000, function(){
		  this.capture((_TimeStamp()) + ".png");
	   });
	})

	// 这个步骤应该接受参数，${出发城市}
	this.then(function(){
	   this.echo("Choose Depart City, and then Back ~");
	// this.captureSelector('departcity.png', 'x(//.main-item/sub-city-box');//*[@data-id=3])');
	   if(!this.exists('.main-item .sub-city-box [data-code="' + _Depart_City + '"]')){
           this.echo("There is no Depart Button available for click, so Quit");
           casper.exit();
	   }
	   this.captureSelector(_TimeStamp() + ".png", '.main-item .sub-city-box [data-code="' + _Depart_City + '"]');//*[@data-id=3])');
	//   this.echo("Could I Choose some depart city, OK ?");
	   this.click('.main-item .sub-city-box [data-code="' + _Depart_City + '"]');
	   this.wait(2000, function(){
		   this.capture((_TimeStamp()) + ".png");
	   })
	})


	//进入到达城市选择列表
	this.then(function(){
	   this.echo("To Back City List ~");
	// this.captureSelector('departcity.png', '#js_departcity');
	   this.click('#js_backcity');
	   this.wait(2000, function(){
		  this.capture((_TimeStamp()) + ".png");
	   });
	})


	this.then(function(){
	   this.echo("Choose Back City, and then Back ~");
   	   if(!this.exists('.main-item .sub-city-box [data-code="' + _Arrive_City + '"]')){
           this.echo("There is no Arrive Button available for click, so Quit");
           casper.exit();
	   }
	   this.captureSelector((_TimeStamp()) + ".png", '.main-item .sub-city-box [data-code="' + _Arrive_City + '"]');
	   this.click('.main-item .sub-city-box [data-code="' + _Arrive_City + '"]');
	   this.wait(2000, function(){
		   this.capture((_TimeStamp()) + ".png");
	   });
	})

	//进入日期选择页
	this.then(function(){
	   this.echo("to Date Page ~");
	   if(!this.exists('#js_departDate')){
           this.echo("There is no DateChoose Button available for click, so Quit");
           casper.exit();
	   }
	   this.click('#js_departDate');
	   this.wait(1000,function(){
		  this.capture((_TimeStamp()) + ".png");
	//      this.echo("Wait for 1s, until Date Page Rendered ~");
	   });
	})

	//选择航班日期
	this.then(function(){
	   this.click('.cui_cld_daybox [data-date="' + _Depart_Date + '"]');
	   this.wait(1500,function(){
		  this.echo("after Choose Date, Go Back~");
		  this.capture((_TimeStamp()) + ".png");
	   });
	})
}

function _Choose_O_Flt(){
	this.then(function(){
	   manList = this.evaluate(function() {
		   return __utils__.findAll(".f_list div ul").length;
		});
	   if(manList < 1){
		   this.echo("There are no flight from Server ~\nThere are no flight from Server ~\nThere are no flight from Server ~");
		   casper.exit();
	   }
	   this.echo("There are " + manList + " flights on List Page ~");
	});

	this.then(function(){
	// 航班列表的某个航班
	// 航班列表中的哪个航班呢？第14个行不行：
	   _Flt_Code_ = 5;

	   this.captureSelector((_TimeStamp()) + ".png",'.f_list div [data-key="' + _Flt_Code_ + '"]');
	   // 展开子舱按钮
	   this.captureSelector((_TimeStamp()) + ".png",'.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold');
	   this.click('.f_list div [data-key="' + _Flt_Code_ + '"] .flight-listfold');
	// 配合一下，后来document定位元素click没有被执行
	// this.click('.f_list div [data-key="0"] .flight-listfold');

	   this.wait(2000, function(){
           this.capture((_TimeStamp()) + ".png");
		   _zcNum = this.evaluate(function(_flt_){
			   return __utils__.findAll('.f_list div [data-parent-key="' + _flt_ + '"]').length;
			}, _Flt_Code_)
		   this.echo("There are " + _zcNum + " ZiCang of the Flight");
		   if (_zcNum < 1){
				 this.echo("There are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~\nThere are no ZiCang of The Flight from Server ~");
				 casper.exit();
		   }
		});
	});

	this.then(function(){
	   // 第一个子舱，选中
		this.click('.f_list div [data-parent-key="' + _Flt_Code_ + '"]');
			  
		/*	  this.evaluate(function(){
				 this.echo("I am am In in In ~");
				 __utils__.findOne('.f_list div [data-parent-key="' + _Flt_Code_ + '"]').click();
			  });
		   });
		*/
	//	_zc_str_ = '[data-parent-key="' + _Flt_Code_ + '"]';
	//	this.evaluate(function(selector, _zc_){
	//      使用document定位元素
	//      document.getElementsByClassName('f_detail')[0].children[2].click();
	//	    $(selector)[_zc_].click();
	//	}, _zc_str_, 3);
		
		this.wait(10000, function(){
		   this.echo("This is Page of BillEdit, is it ?");
		   this.capture((_TimeStamp()) + "_Bill_Edit_" + ".png");
		});


	//	this.waitForResource(


	//	);

	});
}


function _Dump_Page(){
    require('fs').write(
	          _TimeStamp() + "_Bill_Edit_" + ".html",
	      	  require('utils').format(this.getPageContent()),
	          function(){this.echo("Dump content of page to one file, OK ~")}
	);
//    require('utils').dump(JSON.parse(this.getPageContent()));
//    this.echo("\n\n\n\n\n" + require('utils').format(this.getPageContent()) + "\n\n\n\n\n");
//    this.getHTML();
}

function _Dump_Page2(_file_name){
    require('fs').write(
	     	  _file_name,
	     	  require('utils').format(this.getPageContent()),
	    // 	  require('utils').format(this.getHTML()), //getPageContent will provide more info than getHTML ~ I, promise ~
	          function(){this.echo("Dump content of page to one file, OK ~")}
	);
}


// 登录了,重新的实现
function _Bill_Fill_Edit(){
	this.then(function(){
	//   this.capture((_TimeStamp()) + '5555555' + ".png", '#flightInfo');
	   if(!this.exists('#addPassenger')){
          this.echo("No Passenger Element~\n\n\n");
		  casper.exit();
	   }else if(!this.exists('.flight-linktel')){
	      this.echo("No Phone Number Element~\n\n\n");
		  casper.exit();
	   }else if(!this.exists('.flight-infoinput-blk')){
	      this.echo("No Bao Xian element~\n\n\n");
		  casper.exit();
	   }else if(!this.exists('#deliverybox')){
	      this.echo("No EMS Address Element~\n\n\n");
		  casper.exit();
	   }else{
	      if(this.visible('#addPassenger')){
	      	    this.echo("#addPassenger is Visible ~");
	      }else{
	      	    this.echo("#addPassenger is NOT Visible ~");
	      }

	      if(this.visible('.flight-linktel')){
	      	    this.echo(".flight-linktel is Visible ~");
	      }else{
	      	    this.echo(".flight-linktel is NOT Visible ~");
	      }

	      if(this.visible('.flight-infoinput-blk')){
	      	    this.echo(".flight-infoinput-blk is Visible ~");
	      }else{
	      	    this.echo(".flight-infoinput-blk is NOT Visible ~");
	      }

	      if(this.visible('#deliverybox')){
	      	    this.echo("#deliverybox is Visible ~");
	      }else{
	      	    this.echo("#deliverybox is NOT Visible ~");
	      }
/*
        //实现检测element并且超时的例子
        //this.waitForResource();
        //this.waitUntilVisible();
	      this.waitForSelector('#addPassenger',
	      	   function OK_continue(){
	      	   	   this.echo("After less than 8s, Continue ...");
	    //  	   function(){this.click('#addPassenger');}();
	      	   },
	      	   function oops_timeout(){this.then(
	      	   	   function(){
	      	   	   	   this.captureSelector(_TimeStamp() + "__SomeException__" + ".png", '#addPassenger');
	      	   	   	   this.echo("I will wait 8s for some button, but it does not appear~");
	      	   //	   	   casper.exit();
	      	   	   })
	      	   },
	      	   8000);

	      // 实现检测event并且超时的例子
	      this.waitFor(
	      	   function(){
	      	   	   return true;
	      	   	//   return this.evaluate(function(){
	      	   	//	     return __utils__exists('#some thing');
	      	   	//       document.alert("some thing ~");
	      	   	//       return true;
	      	   	//       (function some_other(){return 1;})();
	      	   	//   })
	      	   },
	      	   function OK_continue(){
	      	   	   this.echo("After less than 6s, Continue ...");
	      	// 	   (function(){this.click('#addPassenger');})();
	      	   },
	      	   function oops_timeout(){
	      	   	   this.echo("I will wait 6s for some Event of DOM, but it does not happen~").exit();
	      	   },
	      	   6000);
*/
    /*    this.echo("Dump Content of Current Page ~");
          this.echo("Is it one complete web page ? 2 :" + require('utils').isWebPage(this.page));

	      _Dump_Page.call(this);
	      _Dump_Page2.call(this, 'yHalf.html');

	      this.echo("Good News~");
	      this.captureSelector(_TimeStamp() + "__Article__" + ".png", '#addPassenger');
		  this.captureSelector(_TimeStamp() + "__flight-linktel__" + ".png", '.flight-linktel');
		  this.captureSelector(_TimeStamp() + "__infoinput-blk__" + ".png", '.flight-infoinput-blk');
		  this.captureSelector(_TimeStamp() + "__deliverybox__" + ".png", '#deliverybox');
	*/
	   }
	})

	this.then(function(){
	// 填名字和身份证号码
/*     this.fillSelectors('#addPassenger',{
	      "input[name='js_newName']": '身份证',
	      'input[name="js_no"]': '341001199711102959'
	   });
	   
	   this.fillXPath('#addPassenger',{
	      'input[@name="js_newName"]': '身份证',
	      'input[@name="js_no"]': '341001199711102959'
	   });
*/	   this.echo("Here, i will input some info de passengers ~");
	   this.evaluate(function(){
	   //  document.querySelector('input[id="js_newName"]').value = '文件包';
	       document.querySelector('input[id="js_no"]').value = '341001199711102959';
	   //    document.querySelector('input[id="linkTel"]').value = '18682089631';
	   });

	   this.echo("Good News~");
	   this.capture((_TimeStamp()) + "___IIIIIIIIIIIIIIII" + ".png");

/* 	   this.evaluate(function(){
	// 填充姓名，证件号码，手机号码，等
	// this.echo("Do Something Else ~");
       })
	// document.querySelector('input[id="linkTel"]').value = '18682089631';
	   this.wait(1000, function(){
		  this.capture((_TimeStamp()) + ".png");
	   });
*/	})

	this.then(function(){
	    if(!this.exists('#paybox')){
		      this.echo("No XiaYiBu Button~");
		      casper.exit();
		}else{
		    this.captureSelector(_TimeStamp() + "__PayBox__" + ".png", '#paybox');
	    	this.wait(1000, function(){
	    	//	this.echo("Now, click Button XiaYiBu, OK~");
			    this.captureSelector(_TimeStamp() + "__PayButton__" + ".png", '.btn');
			    this.click('#paybox .btn');
			//    this.echo("OK, I'v clicked Button XiaYiBu~");
			/*    this.waitForSelector('.cui-toast',
			    	function(){
	                     this.echo("oooooooops, Alert received: ");
	                },
	                function(){
	                	 this.echo("oooooooops, after 1s, Alert not received: ");
	                },
	                1000);
	        
	            this.waitForResource(
	                function(){

	                },
	                function(){

	                },
	            	1000);
	        */
			    if(this.exists('.cui-toast')){
			    	this.echo("oooooooops, Alert ~~~~~~~~~~~~~~~~~~");
			    }else{
			    	this.echo("oooooooops, there is no Alert ~~~~~~~~~~~~~~~~~~");
			    }
			    this.captureSelector(_TimeStamp() + "__XX_Alert__" + ".png", '.cui-toast');
		    });
    	}
    });
}

function _Result_Shoot(){
   this.wait(9000, function(){
      this.capture((_TimeStamp()) + "_Game_Over" + ".png");
      this.echo("This is current page url:\n" + this.getCurrentUrl());
   });
}

// 从这里开始
casper.start("http://m.ctrip.com/", function() {
	  this.capture((_TimeStamp()) + ".png");
}).then(_TEST);

/*
casper.then(function(){
  manList = this.evaluate(function() {
	   return __utils__.findAll("#nav .nav-list li").length;
	});
		this.echo(manList + " button on main page");
});
*/

casper.then(function(){
// 首页右下角的“我携”
   this.click('.tool-box .link-mc');
   this.wait(2000, function(){
	  this.capture((_TimeStamp()) + ".png");
   })
}).then(_LOGINOUT).then(_D_A_T_Flt_List).then(function(){
   this.echo("click Check Button ~");
   this.click('#searchlistsubmit');
   this.wait(7000, function(){
      this.echo("Show Flight List ~");
      this.capture((_TimeStamp()) + ".png");
   });
}).then(_Choose_O_Flt).then(_Bill_Fill_Edit).then(_Result_Shoot);


casper.run(function (){
    this.echo("No Money to Pay, so Stop here. Bye ~");
	casper.exit();
});

/*
})
*/
