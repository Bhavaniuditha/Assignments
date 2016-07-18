/*(function(){

var divFoo=document.getElementById("p1");
style=divFoo.style;
style.color="blue";
style.border="1px solid black";
style.backgroundColor="green";
style.padding="30px";
//alert(style.color)

}());*/


(function(){

var divFoo=document.getElementById("p1");
/*divFoo.className=" css-class   css-class2 ";
divFoo.className=divFoo.className.replace(" css-class2 ","");//to replace
//divFoo.className="";*/


divFoo.classList.add("css-class");//for adding css-class
divFoo.classList.add("css-class2");//for adding css-class2

//divFoo.classList.remove("css-class2");//it remove completely

divFoo.classList.toggle("css-class2");//it remove and if use it again again styles get added
//divFoo.classList.toggle("css-class2");


}());