class Circle
{

    //characteristics
    iRadius : number
    iPi : number = 3.14

    //behaviours

    constructor(iNo : number)
    {
        console.log("Inside Circle constructor")
        this.iRadius=iNo
    }

    Area()
    {
        var area : number = 0
        area = this.iPi * this.iRadius * this.iRadius
        return area
    }
}

class CircleX extends Circle
{

    Circumference()
    {
        var Circum : number = 0
        Circum = 2 * this.iPi * this.iRadius
        return Circum
    }
}

var iobj1 = new CircleX(5)
var iRet : number = 0
iRet = iobj1.Circumference()
console.log("Circumference of circle is :"+iRet)

iRet = iobj1.Area()
console.log("Area of circle is :"+iRet)

var iobj2 = new CircleX(3)
var iRet : number = 0
iRet = iobj2.Circumference()
console.log("Circumference of circle is :"+iRet)

iRet = iobj2.Area()
console.log("Area of circle is :"+iRet)