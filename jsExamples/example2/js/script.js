var globalVar = "This is my global variable";

var globalFunction = function(paramOne) {
          var localVar = "This is is my local variable";
    var localFunction = function() {
      var superLocalVar="This is super local variable";
        alert(superLocalVar);
        alert(localVar);
        alert(paramOne);
        alert(globalVar);
    };
localFunction();
};
globalFunction(2);
