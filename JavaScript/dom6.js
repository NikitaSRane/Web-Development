let newbtn=document.createElement("Button");
newbtn.innerText="Submit";

let h2=document.querySelector("h2");
h2.append(newbtn);

let h1=document.querySelector("h1");
h1.prepend(newbtn);

let heading=document.querySelector("h2");
heading.remove();
