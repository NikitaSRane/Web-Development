let btn=document.createElement("Button");
btn.innerText="Click Me!";
btn.style.backgroundColor="green";
btn.style.color="white";

let body=document.querySelector("body");
body.prepend(btn);

let p=document.querySelector("p");
p.setAttribute("class","newclass");

p.classList.add("newclass");