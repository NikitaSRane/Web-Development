var No = new Array(4);
No = [11, 21, 51, 101];
var iSum = 0;
var Cnt = 0;
for (Cnt = 0; Cnt < No.length; Cnt++) {
    console.log(No[Cnt]);
    iSum = iSum + No[Cnt];
}
console.log("Summation of array is: " + iSum);
