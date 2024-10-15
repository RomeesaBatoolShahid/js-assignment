//q1
var a = 10, b = 25, c = 35;
document.write(a + "</br>");
document.write(b + "</br>");
document.write(c + "</br>");

//q2
// Legal Variables:
// 01 legal Variable
var UserName = "Romeesa";
// 02 legal Variable
var User_Name = "Romeesa Batool";
// 03 legal Variable
var username = "Romeesa Batool";
// 04 legal Variable
var _username = "Romeesa Batool";
// 05 legal Variable
var $user_name = "Romeesa Batool Shahid";  

//Illegal variables:
// 01 Illegal 
var User Name = "Romeesa";   //Illegal because it contains space 
// 02 Illegal
var User-Name = "Romeesa Batool";  //Illegal because it contains hyphen -
// 03 Illegal
var user%name = "Romeesa Batool"; //Illegal because it contains percentage sign%
// 04 Illegal
var _user#name = "Romeesa Batool"; //Illegal because it contains hash  #
// 05 Illegal
var 1user_name = "Romeesa Batool Shahid";  //Illegal because it contains number in start 1


//q3
document.write("<h2>Rules for naming JS variables </h2>");
document.write("<p>Variable name can only contain , numbers, $, and , _ . For example : $my_1stVariable<br> Variable must begin with a letter, $, or _ . For example : $name, _name or name </br> Variable names are case sensitive </br> Variable names should not be JS keywords</p>")