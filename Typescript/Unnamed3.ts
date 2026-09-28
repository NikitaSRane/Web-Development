
//Lambda statement

var TEMP=(No1 : number, No2 : number)=>
{
    console.log("Inside addition lambda statement")
    var Result : number=0
    Result = No1+No2
    return Result
}

var Ans: number=0
Ans=TEMP(11,10)
console.log("Addition is: "+Ans)
console.log(typeof(TEMP)) // function

