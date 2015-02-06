

function GoTo_WoXie(){
// 首页右下角的“我携”
	this.test.info("informative message in Steps _GoTo_WoXie, Okay.");
	this.waitForSelector('.tool-box .link-mc',
		function(){
			_CaptureSelector_WP.call(this, _TimeStamp() + "__112211__new_encapsulate__" + ".png", '.tool-box .link-mc');
			this.click('.tool-box .link-mc');
		}, function(){
			this.echo("Open ${testpage}, bug after 3s could not find element WoXie");
		//	this.exit(11);	
		}, 3000);
//	this is important, after 1s waiting for page rendering, essential~
	this.wait(5000);
}

