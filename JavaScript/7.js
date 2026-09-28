let Arr=[250,645,300,900,50];

let discount=10;

for(let i=0;i<Arr.length;i++)
{
    let offer=Arr[i]*discount/100;
    let value=Arr[i]-offer;
    Arr[i]=value;
}
console.log(Arr);