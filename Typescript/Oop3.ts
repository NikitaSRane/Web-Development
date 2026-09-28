class Demo
{
    No: number
    str: string

    constructor(x: number, name: string)
    {
        console.log("Inside parameterized constructor")
        this.No=x
        this.str=name
    }

    fun():void
    {
        console.log("Inside fun of demo class")
        console.log("Value of No is: "+this.No)
        console.log("Value of str is :"+this.str)
    }
}

var obj1= new Demo(11,"Nikita")
var obj2 =new Demo(10, "Sagar")

obj1.fun()
obj2.fun()