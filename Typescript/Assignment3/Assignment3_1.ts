class Arithmetic
{
    //characteristics

    iNo1 : number
    iNo2 : number

    //behaviours

    constructor(iValue1 : number, iValue2 : number)
    {
        this.iNo1 = iValue1
        this.iNo2 = iValue2
    }

    Addition() : number
    {
        var iRet : number = 0
        iRet = this.iNo1 + this.iNo2
        return iRet
    }

    Substraction() : number
    {
        var iRet : number = 0
        iRet = this.iNo1 - this.iNo2
        return iRet
    }

    Multiplication() : number
    {
        var iRet : number = 0
        iRet = this.iNo1 * this.iNo2
        return iRet
    }

    Division() : number
    {
        var iRet : number = 0
        iRet = this.iNo1 / this.iNo2
        return iRet
    }
}

var iAns : number = 0
var iobj1 = new Arithmetic(21,11)
iAns = iobj1.Addition()
console.log("Addition is : "+iAns)

iAns = iobj1.Substraction()
console.log("Substraction is : "+iAns)

iAns = iobj1.Multiplication()
console.log("Multiplication is : "+iAns)

iAns = iobj1.Division()
console.log("Division is : "+iAns)

var iobj2 = new Arithmetic(10,20)

iAns = iobj2.Addition()
console.log("Addition is : "+iAns)

iAns = iobj2.Substraction()
console.log("Substraction is : "+iAns)

iAns = iobj2.Multiplication()
console.log("Multiplication is : "+iAns)

iAns = iobj2.Division()
console.log("Division is : "+iAns)