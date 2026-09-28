var Demo = /** @class */ (function () {
    function Demo(x, name) {
        console.log("Inside parameterized constructor");
        this.No = x;
        this.str = name;
    }
    Demo.prototype.fun = function () {
        console.log("Inside fun of demo class");
        console.log("Value of No is: " + this.No);
        console.log("Value of str is :" + this.str);
    };
    return Demo;
}());
var obj1 = new Demo(11, "Nikita");
var obj2 = new Demo(10, "Sagar");
obj1.fun();
obj2.fun();
