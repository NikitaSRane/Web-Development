var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside constructor of demo class");
    }
    Demo.prototype.fun = function () {
        console.log("Inside fun of demo class");
    };
    return Demo;
}());
var obj1 = new Demo();
var obj2 = new Demo();
obj1.fun();
obj2.fun();
