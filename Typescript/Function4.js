function Addition(Value1, value2) {
    console.log("Inside addition function");
    var Ans = 0;
    Ans = Value1 + value2;
    return Ans;
}
console.log("Start of application");
var ret = 0;
ret = Addition(10, 11);
console.log("Addition is: " + ret);
console.log("End of Application");
