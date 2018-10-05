(function outerFunction(outerArg){
  var outerFuncVar = 'x';
  (function innerFunction(innerArg){
    var innerFuncVar='y';
    console.log("outerArg= " + outerArg + "\n" +
                "outerFuncVar= " + outerFuncVar + "\n" +
                "innerArg= " + innerArg + "\n" +
                "innerFuncVar= " + innerFuncVar + "\n" +
                "globalVar= " + globalVar);
  })(5);
})(7);
