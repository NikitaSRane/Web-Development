function sum(a,b)
{

    console.log(a+b);
}

//setTimeout(sum,4000,20,30);//extra arguments

setTimeout(()=>{  // using arrow function
    sum(10,30)
},4000);