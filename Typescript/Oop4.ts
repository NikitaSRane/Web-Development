
// We have to design an application which performs addition and substraction of 2 numbers
// characteristics
// behaviours
class Arithmetic
{
    //characteristics
    No1 : number
    No2 : number

    constructor(Value1 : number, Value2 :number)
    {
        this.No1=Value1
        this.No2=Value2
    }
    //behaviours
    Addition() : number
    {
        var Ans : number = 0
        Ans= this.No1+this.No2
        return Ans
    }

    Substraction() : number
    {
        var Ans : number = 0
        Ans= this.No1-this.No2
        return Ans
    }

}

var obj1= new Arithmetic(11,10)

var Result : number=0
Result=obj1.Addition()
console.log("Addition is: "+Result)

Result=obj1.Substraction()
console.log("Substraction is: "+Result)


var obj2= new Arithmetic(51,10)

Result=obj2.Addition()
console.log("Addition is: "+Result)

Result=obj2.Substraction()
console.log("Substraction is: "+Result)