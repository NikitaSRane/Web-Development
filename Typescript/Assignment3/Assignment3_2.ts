class Circle
{

    //characteristics
    iRadius : number
    iPi : number = 3.14

    //behaviours

    constructor(iNo : number)
    {
        this.iRadius=iNo
    }

    Area()
    {
        var area : number = 0
        area = this.iPi * this.iRadius * this.iRadius
        return area
    }
}

var iobj1 = new Circle(5)
var iRet : number = 0
iRet = iobj1.Area()
console.log("Area of circle is :"+iRet)

var iobj2 = new Circle(3)
iRet = iobj2.Area()
console.log("Area of circle is :"+iRet)