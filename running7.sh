#!/bin/bash

cd /Users/whyang/Running/
casperjs test --includes=TestCase/TestcaseOptions2.js,CommFunc/common1.js,MainPage/wo_xie/goto_woxie.js,CommFunc/alert_error/pata_process.js,LogIn/Logout/logout1.js,FlightCheck/CheckActions_new.js,FlightCheck/inLand/flightcheck2.js,inLand/beforeBillEdit.js,inLand/FlightList/FlightListActions.js,inLand/FlightList/flightlist3.js,inLand/BillEdit_Logout/billElementcheck.js,inLand/BillEdit_Logout/PsgrFill/out_fill_passenger.js,inLand/OtherInfo/phone_fill.js,inLand/XiaYiBu/XiaYiBu2.js,Pay/Pay_Logout/out_pay_action.js,Pay/PayActions_new.js,Pay/PayElementsCheck.js,CommFunc/Result_Shoot.js TestCase/inLand/testcase07.js --xunit=build007_result.xml
