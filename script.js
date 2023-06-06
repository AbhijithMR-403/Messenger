var w = window.innerWidth;
var hangOut=document.getElementById("hang-out")
console.log(w)
window.addEventListener("resize",console.log(w));
if(w>993)
{
    hangOut.classList.add("d-inline-block");
}