//Lambda statement
var TEMP = function (No1, No2) {
    console.log("Inside addition lambda statement");
    var Result = 0;
    Result = No1 + No2;
    return Result;
};
var Ans = 0;
Ans = TEMP(11, 10);
console.log("Addition is: " + Ans);
console.log(typeof (TEMP));
