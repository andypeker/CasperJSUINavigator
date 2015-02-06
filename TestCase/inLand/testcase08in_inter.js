/*
   国际 & 未登录
casperjs test --includes=
   TestCase/TestcaseOptions.js,
   CommFunc/common1.js,
   MainPage/wo_xie/goto_woxie.js,
   CommFunc/alert_error/pata_process.js,
   LogIn/Loginin/loginin1.js,
   FlightCheck/CheckActions_new.js,
   FlightCheck/interNational/interflightcheck2.js,
   inLand/beforeBillEdit.js,
   interNational/FlightList/interFlightListActions.js,
   interNational/FlightList/interflightlist3.js,
   interNational/BillEdit_LogIn/inter_inbillElementcheck.js,
   interNational/BillEdit_LogIn/PsgrChoose/inter_in_select_passenger.js,
   interNational/BillEdit_LogIn/PsgrChoose/any_error/exception.js,
   interNational/OtherInfo/phone_fill.js,
   interNational/XiaYiBu/XiaYiBu2.js,
   Pay/Pay_Login/in_pay_action.js,
   Pay/PayActions_new.js,
   Pay/PayElementsCheck.js,
   CommFunc/Result_Shoot.js
TestCase/inLand/testcase08in_inter.js --xunit=build008in_inter_result.xml
*/

/******************
**  Eight in Inter Case 国际 登录 **
******************/
// The suite callback will get the current Tester instance as its first argument:
casper.test.begin("EightinInterCase", 1, function(test){
//   this._result_cap_str = "../../TestCapture/Test_SixCase/";
//   this.logLevel = 'debug';
	// 从这里开始
   casper.start("http://m.ctrip.com/");
// 截屏文件保存路径
   casper._result_cap_str = "../../TestCapture/Test_EightinInterCase/";
// 全局变量表示国内国际
   casper._inlandORinter = '';

// casper.then(_CaseOption).then(_Delete_LS.bind(this));
   casper.then(_CaseOption2).then(function(){_Delete_LS.call(this)});
// casper.then(_CaseOption);
/* 
SEL   首尔 MFM   澳门 TYO   东京 TPE   台北 OSA   大阪 LON   伦敦 PAR   巴黎
*/
   casper.then(function(){_TEST_T.call(this, 'HGH', 'TYO', '2014-10-25')});

	//	登出
   casper.then(GoTo_WoXie).then(LOGININ);
	//	选择航班
//  casper.then(_D_A_T_Flt_Check2).then(_Choose_O_Flt);
   casper.then(inter_D_A_T_Flt_Check2).then(function(){
//         if(this._inlandORinter === 'inLand'){
      // 不过也许应该让这个全局变量在所有方法中生效自动判断才可以更好
            inter_Choose_O_Flt2.call(this, 2, 2)
         // }else if(this._inlandORinter === 'interNational'){
         //    continue;
         // }else{
         //    exit(8);
         // }
      });

	//	填写订单
//	casper.then(inter_out_BillEditElementsCheck).then(inter_out_Fill_Passenger).then(inter_Fill_Other_Info).then(inter_BillEdit_Fill_next);
   casper.then(inter_in_BillEditElementsCheck).then(inter_in_Select_Passenger).then(inter_Fill_Other_Info).then(inter_BillEdit_Fill_next2);
   //	支付
   casper.then(function(){in_Pay_with_Money33.call(this, "Credit");}).then(_Result_Shoot);
	//	打完收工
   casper.run(function (){
         this.echo("No Money to Pay, so Stop here. Bye ~");
      // this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
      // casper.exit();
      // 下面这个assertResourceExists方式不应该这么使用，Resource指的是图片、css等东西，而不是某个标签。
         test.assertResourceExists('html',"\n\n牛逼吧？\n\n");
         test.done();
         casper.exit(0);
      });
});


