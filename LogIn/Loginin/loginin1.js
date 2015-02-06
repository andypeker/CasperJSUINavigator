

function LOGININ(){
// 判断是否已经登录
	this.log("I arrive _loginin", "info");
   if(this.exists('.member-box')){
         // 回到首页
	   this.capture(this._result_cap_str + _TimeStamp() + ".png");
	   this.waitForSelector('.sub-viewport .home-i-back',
	   		function(){
			   this.click('.sub-viewport .home-i-back');
			}, function(){
				this.echo("Wo_LOGININ 01~");
			}, 2000);
   }else{
   		this.waitForSelector('.login-box .home-btn',
   			function(){
		   	//  我携登录页面
		    	this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.login-box .home-btn');
				this.click('.login-box .home-btn');
			}, function(){
				this.echo("Wo_LOGININ 04~");
			}, 3000);

		this.wait(5000, function(){
			this.capture(this._result_cap_str + _TimeStamp() + "__to_logining" + ".png");
		// 登录页面
			this.evaluate(function(){
				document.querySelector('input[id="username"]').value = 'testflight02';
				document.querySelector('input[id="password"]').value = 'Ctrip8888';
			})
		});

		this.waitForSelector('.btn_box .g_btn_s',
			function(){
			   this.capture(this._result_cap_str + _TimeStamp() + ".png");
			   this.captureSelector(this._result_cap_str + _TimeStamp() + "_login_button" + ".png", '.btn_box .g_btn_s');
			   this.click('.btn_box .g_btn_s');
			}, function(){
				this.echo("Wo_LOGININ 05~");
			}, 4000);
	}

	this.waitForSelector('.home-header .home-i-back',
		function(){
	        this.capture(this._result_cap_str + _TimeStamp() + ".png");
	        this.echo("Log In, Browser go back to Main Page, Quit, OK ?");
    	    this.click('.home-header .home-i-back');
    	}, function(){
    		this.echo("Wo_LOGININ 02~");
		}, 3000);

    this.wait(4000);
}


//	新判断的实现
function LOGININ2(){
// 判断是否已经登录
	this.log("I arrive _loginin", "info");
	//////////////////////
	this.waitForSelector('.member-box',
		function(){
		// 回到首页
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.waitForSelector('.sub-viewport .home-i-back',
				function(){
					this.log('已经登录 可以左上角返回', "info");
					this.capture(this._result_cap_str + _TimeStamp() + "__already_logining" + ".png");
					this.click('.sub-viewport .home-i-back');
				}, function(){
					this.echo("Wo_LOGININ 01~");
					this.log('已经登录 不能左上角返回', "error");
					this.capture(this._result_cap_str + _TimeStamp() + "__already_logining_error" + ".png");
				}, 2000);
		}, function(){
			this.log('还没有登录 现在输入帐号密码登录', "info");
			this.test.info('还没有登录 现在输入帐号密码登录');
			this.waitForSelector('.login-box .home-btn',
				function(){
					//  我携登录页面
					this.log('进入登录页面', "info");
					this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.login-box .home-btn');
					this.click('.login-box .home-btn');
					this.waitFor(function(){
							this.waitForSelector('input[id="username"]',
								function(){
									this.log('现在输入帐号密码', "info");
									this.test.info('现在输入帐号密码');
									this.capture(this._result_cap_str + _TimeStamp() + "__to_login_user_password" + ".png");
									// 登录页面
									this.evaluate(function(){
										document.querySelector('input[id="username"]').value = 'wwwwww';
										document.querySelector('input[id="password"]').value = 'good08';
										});
								//	this.capture(this._result_cap_str + _TimeStamp() + "__to_login_user_password" + ".png");
									return this.evaluate(function(){
										return document.querySelector('input[id="username"]').value.length > 2 
												&& document.querySelector('input[id="password"]').value.length > 2;
									});
								}, function(){
									this.log('没有看到帐号密码输入框', "error");
									this.capture(this._result_cap_str + _TimeStamp() + "__to_login_user_password_error" + ".png");
									return false;
								}, 2000);
						/*
							// 登录页面
							this.evaluate(function(){
								document.querySelector('input[id="username"]').value = 'wwwwww';
								document.querySelector('input[id="password"]').value = 'good08';
								})
						//	return true;
							return this.evaluate(function(){
								return document.querySelector('input[id="username"]').value.length > 2 
										&& document.querySelector('input[id="password"]').value.length > 2;
							});
						*/
						}, function(){
							this.waitForSelector('.btn_box .g_btn_s',
								function(){
									this.capture(this._result_cap_str + _TimeStamp() + ".png");
									this.captureSelector(this._result_cap_str + _TimeStamp() + "_login_button" + ".png", '.btn_box .g_btn_s');
									this.click('.btn_box .g_btn_s');
								//	这里要增加代码处理登录失败的情况  哈哈
								//	this.waitForAlert();
								}, function(){
									this.capture(this._result_cap_str + _TimeStamp() + "__to_login_Wo_LOGININ_05" + ".png");
									this.echo("Wo_LOGININ 05~");
							}, 1000);
						}, function(){
							this.echo("some error~");
							this.capture(this._result_cap_str + _TimeStamp() + "__to_login_Wo_LOGININ_04.5" + ".png");
							this.exit(23);
						}, 2000);
				}, function(){
					this.echo("Wo_LOGININ 04~");
					this.capture(this._result_cap_str + _TimeStamp() + "__to_login_Wo_LOGININ_04" + ".png");
				}, 2000);
		}, 3000);

	/////////////
	this.waitForSelector('.home-header .home-i-back',
		function(){
	        this.capture(this._result_cap_str + _TimeStamp() + ".png");
	        this.echo("Log In, Browser go back to Main Page, Quit, OK ?");
    	    this.click('.home-header .home-i-back');
    	}, function(){
    		this.echo("Wo_LOGININ 02~");
		}, 3000);

    this.wait(4000, function(){
    	this.log('\n\n登录处理succ 继续\n\n', "info");
	    this.exit(1001);
    });
}

//	新判断的实现
function LOGININ3(){
// 判断是否已经登录
	this.log("I arrive _loginin 333 \n", "info");
	//////////////////////
	this.waitForSelector('.member-box',
		function(){
		// 回到首页
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.waitForSelector('.sub-viewport .home-i-back',
				function(){
					this.log('已经登录 可以左上角返回', "info");
					this.capture(this._result_cap_str + _TimeStamp() + "__already_logining" + ".png");
					this.click('.sub-viewport .home-i-back');
				}, function(){
					this.echo("Wo_LOGININ 01~");
					this.log('已经登录 不能左上角返回', "error");
					this.capture(this._result_cap_str + _TimeStamp() + "__already_logining_error" + ".png");
				}, 2000);
		}, function(){
			this.log('还没有登录 现在输入帐号密码登录', "info");
			this.test.info('还没有登录 现在输入帐号密码登录');
			this.waitForSelector('.login-box .home-btn',
				function(){
					//  我携登录页面
					this.log('进入登录页面', "info");
					this.captureSelector(this._result_cap_str + _TimeStamp() + ".png", '.login-box .home-btn');
					this.click('.login-box .home-btn');

				//	其实可以检查2个输入框 这里只检查一个帐号吧
					this.waitForSelector('input[id="username"]',
						function(){
						//	操作输入框前 等待2s
							this.wait(2000);
							this.waitFor(function(){
									this.log('现在输入帐号密码', "info");
									this.test.info('现在输入帐号密码');
									this.capture(this._result_cap_str + _TimeStamp() + "__to_login_user_password" + ".png");
									// 登录页面
								/*
									this.evaluate(function(){
										document.querySelector('input[id="username"]').value = 'wwwwww';
										document.querySelector('input[id="password"]').value = 'good08';
										})
								//	return true;
									return this.evaluate(function(){
										return document.querySelector('input[id="username"]').value.length > 2 
												&& document.querySelector('input[id="password"]').value.length > 2;
									});
								*/
									this.evaluate(function(){
										document.querySelector('input[id="username"]').value = 'wwwwww';
										document.querySelector('input[id="password"]').value = 'good08';
										});
								//	this.capture(this._result_cap_str + _TimeStamp() + "__to_login_user_password" + ".png");
									return this.evaluate(function(){
										return document.querySelector('input[id="username"]').value.length > 2 
												&& document.querySelector('input[id="password"]').value.length > 2;
									});
								}, function(){
									this.waitForSelector('.btn_box .g_btn_s',
										function(){
											this.log('登录按钮 我点', "info");
											this.capture(this._result_cap_str + _TimeStamp() + ".png");
											this.captureSelector(this._result_cap_str + _TimeStamp() + "_login_button" + ".png", '.btn_box .g_btn_s');
											this.click('.btn_box .g_btn_s');
										//	这里要增加代码处理登录失败的情况  哈哈
										//	this.waitForAlert();
										}, function(){
											this.capture(this._result_cap_str + _TimeStamp() + "__to_login_Wo_LOGININ_05" + ".png");
											this.log("Wo_LOGININ 输入账号密码后 没有登录按钮 05~", "error");
									}, 1000);
								}, function(){
									this.log("some error 输入账号密码失败 ~", "error");
									this.capture(this._result_cap_str + _TimeStamp() + "__to_login_Wo_LOGININ_04.5" + ".png");
									this.exit(23);
								}, 4000);
						}, function(){
							this.log('没有看到帐号密码输入框', "error");
							this.capture(this._result_cap_str + _TimeStamp() + "__to_login_NOexist_user_password" + ".png");
						//	this.exit(26);	
						}, 5000);
				}, function(){
					this.echo("Wo_LOGININ 04~");
					this.capture(this._result_cap_str + _TimeStamp() + "__to_login_Wo_LOGININ_04" + ".png");
				}, 2000);
		}, 3000);

	/////////////
	this.waitForSelector('.home-header .home-i-back',
		function(){
	        this.capture(this._result_cap_str + _TimeStamp() + ".png");
	        this.echo("Log In, Browser go back to Main Page, Quit, OK ?");
    	    this.click('.home-header .home-i-back');
    	}, function(){
    		this.echo("Wo_LOGININ 02~");
		}, 3000);

    this.wait(4000, function(){
    	this.log('\n\n登录处理succ 继续\n\n', "info");
	//	this.exit(1001);
    });
}

