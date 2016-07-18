(function(){
/*var pElements=document.getElementsByTagName("p");
for(var i=0,len=pElements.length;i<len;i=i+1)
{
  alert(pElements[i]);
}*/


var pElement=document.getElementById("p1");
alert(pElement);

var pElement=document.querySelector("p");
alert(pElement.parentNode.tagName);

var pElement=document.querySelectorAll("p");
alert(pElement.length);

var pElement=document.querySelector("#p1");
alert(pElement.parentNode.tagName);

}());