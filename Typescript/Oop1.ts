
// We have to design an application which performs addition and substraction of 2 numbers
// characteristics
// behaviours
class Arithmetic
{
    //characteristics
    No1 : number
    No2 : number

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

var obj= new Arithmetic()
obj.No1=11
obj.No2=10

var Result : number=0
Result=obj.Addition()
console.log("Addition is: "+Result)

Result=obj.Substraction()
console.log("Substraction is: "+Result)