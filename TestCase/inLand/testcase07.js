
/*
casperjs test --includes=
   TestCase/TestcaseOptions.js,
   CommFunc/common1.js,
   MainPage/wo_xie/goto_woxie.js,
   CommFunc/alert_error/pata_process.js,
   LogIn/Logout/logout1.js,
   FlightCheck/CheckActions_new.js,
   FlightCheck/inLand/flightcheck2.js,
   inLand/beforeBillEdit.js,
   inLand/FlightList/FlightListActions.js,
   inLand/FlightList/flightlist3.js,
   inLand/BillEdit_Logout/billElementcheck.js,
   inLand/BillEdit_Logout/PsgrFill/out_fill_passenger.js,
   inLand/OtherInfo/phone_fill.js,
   inLand/XiaYiBu/XiaYiBu2.js,
   Pay/Pay_Logout/out_pay_action.js,
   Pay/PayActions_new.js,
   Pay/PayElementsCheck.js,
   CommFunc/Result_Shoot.js
TestCase/inLand/testcase07.js --xunit=build007_result.xml
*/

/******************
**  Seven Case  **
******************/
// The suite callback will get the current Tester instance as its first argument:
casper.test.begin("SevenCase", 1, function(test){
//   this._result_cap_str = "../../TestCapture/Test_SixCase/";
//   this.logLevel = 'debug';
	// 从这里开始
	casper.start("http://m.ctrip.com/");

   casper._result_cap_str = "../../TestCapture/Test_SevenCase/";

//   casper.then(_CaseOption).then(_Delete_LS.bind(this));
   casper.then(_CaseOption2).then(function(){_Delete_LS.call(this)});
//   casper.then(_CaseOption);

   casper.then(function(){_TEST_T.call(this, 'HGH', 'CTU', '2014-10-25')});
	//	登出
	casper.then(GoTo_WoXie).then(LOGINOUT);
	//	选择航班
//  casper.then(_D_A_T_Flt_Check2).then(_Choose_O_Flt);
   casper.then(_D_A_T_Flt_Check2).then(function(){_Choose_O_Flt2.call(this, 2, 2)});
	//	填写订单
	casper.then(out_Check_Bill_Elements).then(out_Fill_Passenger).then(Fill_Other_Info).then(Bill_Fill_Edit_next2);
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

