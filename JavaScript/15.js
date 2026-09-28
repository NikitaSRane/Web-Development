function API(value)
{
    return new Promise((resolve, reject) => {
        console.log(value);
        resolve("success");
    })
}

let promise=()=>{setTimeout(API,4000,10);};
