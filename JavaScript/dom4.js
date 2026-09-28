let boxes=document.querySelectorAll(".box");

let Count=1;
for(let box of boxes)
{
    box.innerText=`Unique Value is ${Count}`;
    Count++;
}