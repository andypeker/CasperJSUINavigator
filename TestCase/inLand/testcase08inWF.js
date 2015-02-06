/*
casperjs test --includes=
   TestCase/TestcaseOptions2.js,
   CommFunc/common1.js,
   MainPage/wo_xie/goto_woxie.js,
   CommFunc/alert_error/pata_process.js,
   LogIn/Loginin/login1.js,
   FlightCheck/CheckActions_new.js,
   FlightCheck/inLand/flightcheck2.js,
   inLand/beforeBillEdit.js,
   inLand/FlightList/FlightListActions.js,
   inLand/FlightList/flightlist3.js,
   inLand/BillEdit_Login/inbillElementcheck.js,
   inLand/BillEdit_Login/PsgrChoose/in_fill_passenger.js,
   inLand/BillEdit_Login/PsgrChoose/any_error/exception.js,
   inLand/OtherInfo/phone_fill.js,
   inLand/XiaYiBu/XiaYiBu2.js,
   Pay/Pay_Login/in_pay_action.js,
   Pay/PayActions_new.js,
   Pay/PayElementsCheck.js,
   CommFunc/Result_Shoot.js
TestCase/inLand/testcase08in.js --xunit=build008in_result.xml
*/

/******************
**  Eight in Case 国内 登录 **
******************/
// The suite callback will get the current Tester instance as its first argument:
casper.test.begin("EightCaseinDouble", 1, function(test){
//   this._result_cap_str = "../../TestCapture/Test_SixCase/";
//   this.logLevel = 'debug';
	// 从这里开始
   casper.start("http://m.ctrip.com/");
// 截屏文件保存路径
   casper._result_cap_str = "../../TestCapture/Test_EightinDoubleCase/";
// 全局变量表示国内国际
   casper._inlandORinter = '';

// casper.then(_CaseOption).then(_Delete_LS.bind(this));
   casper.then(_CaseOption2).then(function(){_Delete_LS.call(this)});
   // casper.then(function(){_TEST_T.call(this, 'BJS', 'CTU', '2015-02-23')});
   // casper.then(function(){_TEST_double_T3.call(this, 'BJS', 'CTU', '2015-02-23', '2015-03-06')});
   casper.then(function(){_TEST_double_T3.call(this, 'BJS', 'CTU', '2015-02-23')});
	//	登出
	casper.then(GoTo_WoXie).then(LOGININ3);
	//	选择航班
   // casper.then(D_A_T_Flt_Check2).then(function(){

   casper.then(D_A_T_Double_Flt_Check).then(function(){
//         if(this._inlandORinter === 'inLand'){
      // 不过也许应该让这个全局变量在所有方法中生效自动判断才可以更好
            // Choose_O_Flt2.call(this, 4, 1)
            Choose_Double_Flt2.call(this, 4, 2);
         // }else if(this._inlandORinter === 'interNational'){
         //    continue;
         // }else{
         //    exit(8);
         // }
      });

	//	填写订单
   casper.then(in_Check_BillEdit_Elements).then(in_Fill_Passenger).then(Fill_Other_Info).then(Bill_Fill_Edit_next2);
   //	支付
   casper.then(function(){in_Pay_with_Money3.call(this, "Credit")}).then(_Result_Shoot2);
	//	打完收工
   casper.run(function (){
         this.echo("No Money to Pay, so Stop here. Bye ~");
      //    this.capture(this._result_cap_str + _TimeStamp() + "_Game_Over" + ".png");
      // casper.exit();
      //  下面这个assertResourceExists方式不应该这么使用，Resource指的是图片、css等东西，而不是某个标签。
         test.assertResourceExists('html',"打完收功\n");
         test.done();
         casper.exit(0);
      });
});

