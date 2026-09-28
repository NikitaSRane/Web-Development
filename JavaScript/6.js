let Arr=[85,97,44,37,76,60];

let len=Arr.length;
let sum=0;

for(let i of Arr)
{
    sum=sum+i;
}
let avg=sum / len;
console.log("Average is: ", avg);