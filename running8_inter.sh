#!/bin/bash


casperjs test --includes=TestCase/TestcaseOptions2.js,CommFunc/common1.js,MainPage/wo_xie/goto_woxie.js,CommFunc/alert_error/pata_process.js,LogIn/Logout/logout1.js,FlightCheck/CheckActions_new.js,FlightCheck/interNational/interflightcheck2.js,inLand/beforeBillEdit.js,interNational/FlightList/interFlightListActions.js,interNational/FlightList/interflightlist3.js,interNational/BillEdit_LogOut/inter_outbillElementcheck.js,interNational/BillEdit_LogOut/PsgrFill/inter_out_fill_passenger.js,interNational/OtherInfo/phone_fill.js,interNational/XiaYiBu/XiaYiBu2.js,Pay/Pay_Logout/out_pay_action.js,Pay/PayActions_new.js,Pay/PayElementsCheck.js,CommFunc/Result_Shoot.js TestCase/inLand/testcase08_inter.js --xunit=build008_inter_result.xml
