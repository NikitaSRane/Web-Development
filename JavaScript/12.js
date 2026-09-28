let num=prompt("Enter number: ");

let Arr=[];
for(let iCnt=1;iCnt <=num;iCnt++)
{
    Arr[iCnt-1]=iCnt;
}
console.log(Arr);

let sum= Arr.reduce((val, val1) =>{
    return val+val1;
});

console.log("Sum is: ",sum);


let prod=Arr.reduce((val, val1)=>{
    return val*val1;
})
console.log("Product is: ",prod);