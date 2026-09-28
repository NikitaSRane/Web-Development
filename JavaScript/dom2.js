// Ways of selecting elements

// 1) Using TagName

let h1=document.getElementsByTagName("h1"); // give HTMLCollection ie. array[]
//select only one element
console.log(h1);
console.log(h1[0].innerText);

//using loop

for(let element of h1)
{
    console.log(element.innerText);
}

// 2) using id

let id=document.getElementById("first_id");
console.log(id);
console.log(id.innerText);


// 3) using class
let divclass=document.getElementsByClassName("div_class");
console.log(divclass);
console.log(divclass[0].innerText);

for(let element of divclass)
{
    console.log(element.innerText);
}

//4) using QuerySelector

let query=document.querySelector("h1"); // using tagname
console.log(query);
console.log(query.innerText);

let queryid=document.querySelector("#first_id"); // using id
console.log(queryid);
console.log(queryid.innerText);

let queryclass=document.querySelector(".div_class");
console.log(queryclass);
console.log(queryclass.innerText);

//5) using QuerySelectorAll
let All=document.querySelectorAll("p"); // using tagname
console.log(All);

for(let element of All)
{
    console.log(element.innerText);
}


// Difference in innerText, innerHtml, textContent

let h2=document.querySelector("h2");
console.log(h2.innerText);
console.log(h2.textContent);
console.log(h2.innerHTML);

