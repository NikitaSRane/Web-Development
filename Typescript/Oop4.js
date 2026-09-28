// We have to design an application which performs addition and substraction of 2 numbers
// characteristics
// behaviours
var Arithmetic = /** @class */ (function () {
    function Arithmetic(Value1, Value2) {
        this.No1 = Value1;
        this.No2 = Value2;
    }
    //behaviours
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(11, 10);
var Result = 0;
Result = obj1.Addition();
console.log("Addition is: " + Result);
Result = obj1.Substraction();
console.log("Substraction is: " + Result);
var obj2 = new Arithmetic(51, 10);
Result = obj2.Addition();
console.log("Addition is: " + Result);
Result = obj2.Substraction();
console.log("Substraction is: " + Result);
