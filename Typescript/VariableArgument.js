function Addition() {
    var Value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Value[_i] = arguments[_i];
    }
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Value.length; cnt++) {
        sum = sum + Value[cnt];
    }
    return sum;
}
console.log(Addition());
console.log(Addition(10, 20, 30, 40));
console.log(Addition(10, 20, 30, 40, 50, 60, 70));
console.log(Addition(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
