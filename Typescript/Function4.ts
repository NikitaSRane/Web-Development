function Addition(Value1 : number , value2 : number) : number
{
    console.log("Inside addition function")
    var Ans : number = 0
    Ans= Value1+value2
    return Ans
}

console.log("Start of application")
var ret : number =0
ret=Addition(10,11)
console.log("Addition is: "+ret);
console.log("End of Application")