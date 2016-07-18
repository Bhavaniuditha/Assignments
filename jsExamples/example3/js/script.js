var obj="This is a string object.";
var length=obj.length;//24
alert(length);
var index=obj.indexOf("is");//2
alert(index);
var index2=obj.indexOf("is",index+1);//5
alert(index2);
var index3=obj.indexOf("this");//-1
alert(index3);
var index4=obj.lastIndexOf("is");//5
alert(index4);
var index5=obj.lastIndexOf("is",index4-1);//5
alert(index5);
var substr1=obj.substr(5,2);//is
alert(substr1);
var substr2=obj.substring(2,6);//is i
alert(substr2);
var newString=obj.replace("object","value");
alert(newString);
alert(obj);
var lower=obj.toLowerCase();
alert(lower);
var upper=obj.toUpperCase();
alert(upper);
