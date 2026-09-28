let currentmode="light";

let modebutton=document.querySelector("#mode");

modebutton.addEventListener("click", (e) => {
    /* using add and remove

    if(currentmode == "light")
    {
        currentmode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else
    {
        currentmode ="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");

    }
    console.log(currentmode);    
    */


    //toggle usage
    document.querySelector("body").classList.toggle("dark");
    console.log(e.target);
    console.dir(e);
    console.log(e.target.tagName);
    console.log(e.target.innerText);
   
});