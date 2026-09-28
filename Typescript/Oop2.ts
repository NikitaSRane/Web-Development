class Demo
{
    No: number
    str: string

    constructor()
    {
        console.log("Inside constructor of demo class")
    }


    fun():void
    {
        console.log("Inside fun of demo class")
    }
}

var obj1= new Demo()
var obj2 =new Demo()

obj1.fun()
obj2.fun()