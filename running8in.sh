#!/bin/bash

casperjs test --includes=TestCase/TestcaseOptions2.js,CommFunc/common1.js,MainPage/wo_xie/goto_woxie.js,CommFunc/alert_error/pata_process.js,LogIn/Loginin/loginin1.js,FlightCheck/CheckActions_new.js,FlightCheck/inLand/flightcheck2.js,inLand/beforeBillEdit.js,inLand/FlightList/FlightListActions.js,inLand/FlightList/flightlist3.js,inLand/BillEdit_Login/inbillElementcheck.js,inLand/BillEdit_Login/PsgrChoose/in_fill_passenger.js,inLand/BillEdit_Login/PsgrChoose/any_error/exception.js,inLand/OtherInfo/phone_fill.js,inLand/XiaYiBu/XiaYiBu2.js,Pay/Pay_Login/in_pay_action.js,Pay/PayActions_new.js,Pay/PayElementsCheck.js,CommFunc/Result_Shoot.js TestCase/inLand/testcase08in.js --xunit=build008in_result.xml