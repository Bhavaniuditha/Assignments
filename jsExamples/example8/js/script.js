/*(function() {
    var i = 0,
        doSomething = function() {
            console.log("value is " + i);
            i = i + 1;
            if (i>9) {
              clearInterval(timer);
            //setTimeout(doSomething, 500);
            }
        };
    var timer=setInterval(doSomething, 500);
}());*/



(function(){
var speed=500,move=function(){
  var el=document.getElementById("box"),
  left=el.offsetLeft,
  moveBy=3;
  el.style.left=left+moveBy+"px";
  if(left>399){
    clearTimeout(timer);
  }
};
var timer=setInterval(move,moveBy)



}());


