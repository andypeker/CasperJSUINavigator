
function LOGINOUT(){
//	_Dump_Page.call(this);
//	this.capture(this._result_cap_str + _TimeStamp() + "_is_WoXie" +".png");
//	判断是否已经登录
	this.log("I arrive _longinout 我要登出", "info");
	if(this.exists('.member-box')){
	// 回到首页
		this.log("I am Ying test 223232 ~ 我要登出", "info");
		this.echo("I am Ying ~");
		_Capture_WP.call(this, _TimeStamp() + "______new_encapsulate______.png");
	/*  this.click('.sub-viewport .home-i-back');
	this.wait(2000, function(){
	  this.capture(this._result_cap_str + _TimeStamp() + ".png");
	});
   */	this.waitForSelector('.member-name',
			function(){
			  	this.echo("I am Ying 1 ~");
		  		this.captureSelector(this._result_cap_str + _TimeStamp() + "__111111____" + ".png", '.member-name');
		  		this.log('我要点按钮 1', "info");
		  		this.test.assertExists('.member-name', "有某X按钮 我点");
				this.click('.member-name');
				this.waitForSelector('#accountbox .g-btn-s',
					function(){
						this.echo("I am Ying 2~");
						this.log('我要点按钮 2', "info");
						this.captureSelector(this._result_cap_str + _TimeStamp() + "__222222____" + ".png", '#accountbox .g-btn-s');
						this.test.assertExists('#accountbox .g-btn-s', "有某X按钮 我点");
						this.click('#accountbox .g-btn-s');
						this.waitForSelector('.cui-bd',
							function(){
								this.echo("I am Ying 3~");
								this.captureSelector(this._result_cap_str + _TimeStamp() + "__logout____" + ".png", '.cui-bd');
								if(this.exists('.cui-bd')){
									this.echo("I am also In ~");
									this.log('我要点退出登录按钮 3', "info");
									this.capture(this._result_cap_str + _TimeStamp() + "ht_wrthwrth" +".png");
									this.test.assertExists('.cui-roller-btns .cui-btns-sure', "有退出登录按钮 我点");
									this.click('.cui-roller-btns .cui-btns-sure');
								}else{
									this.log("不能进入我携 奔溃 04", "warning");
									this.echo("WoXie Open Fail 04~");
									_Capture_WP.call(this, _TimeStamp() + "__main_to_woxie_Fail_04__.png");
								}
							}, function(){
								this.log("不能进入我携 奔溃 03", "warning");
								this.echo("WoXie Open Fail 03~");
								_Capture_WP.call(this, _TimeStamp() + "__main_to_woxie_Fail_03__.png");
							}, 3000);  
				  	}, function(){
				  		this.log("不能进入我携 奔溃 02", "warning");
				  		this.echo("WoXie Open Fail 02~");
				  		_Capture_WP.call(this, _TimeStamp() + "__main_to_woxie_Fail_02__.png");
				  	}, 2000);
			}, function(){
				this.log("不能进入我携 奔溃 01", "warning");
				this.echo("WoXie Open Fail 01~");
				_Capture_WP.call(this, _TimeStamp() + "__main_to_woxie_Fail_01__.png");
			//	this.exit(35);
			}, 2000);
	}else if(this.exists('.login-box')){
		this.log("qeghqerhqerhqerh 其实没有登录 2继续", "info");
		this.echo("No Login, Continue ~");
	}else if(this.exists('#login')){
		this.log("qeghqe6666666qerh 其实没有登录 3继续", "info");
		this.echo("No Login, Continue ~");
		this.waitForSelector('#c-ui-header-return',
			function(){
				this.log('点左上角返回按钮', "info");
			//	这里的逻辑下否会与下面的左上角返回操作重复呢？	
				this.click('#c-ui-header-return');
			}, function(){
				this.log('左上角没有返回按钮', "error");
			//	this.exit(34);	
			}, 3000);
	}else{
		this.log("I am Ying test 11111 ~\n 其实没有登录 4继续", "info");
		this.capture(this._result_cap_str + _TimeStamp() + ".png");
		_Dump_Page2.call(this, "666.html");
		this.echo("WoXie Html Changed, pay more attention ~");
		this.exit(33);
	}

	this.waitForSelector('.home-header .home-i-back',
		function(){
			this.capture(this._result_cap_str + _TimeStamp() + ".png");
			this.echo("Log In, Browser go back to Main Page, OK ?");
			this.log('我携可以看到左上角返回跳首页按钮', "info");
			this.test.assertExists('.home-header .home-i-back', '我携可以看到左上角返回跳首页按钮 我点');
			this.click('.home-header .home-i-back');
		}, function(){
			this.echo("Wo_LOGININ 02~");
			this.log('我携没有左上角返回跳首页按钮', "error");
	//		this.exit(32);
		}, 3000);
}
