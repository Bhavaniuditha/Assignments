angular.module('appGame').controller('ctrlGame',function($scope,$timeout){
  var bSize=20;
  var colors={
    GAME_OVER:"red",
    FRUIT:"orange",
    SNAKE_HEAD:"brown",
    SNAKE_BODY:"black",
    BOARD:"blue"
  };
  var drctns = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };
var snake = {
      direction:drctns.LEFT,
      parts: [{
        x: -1,
        y: -1
      }]
    };
    var food={
      x:-1,
      y:-1
    };
var interval,tempDrct,isGameOver;
$scope.score=0;
  $scope.setStyling = function(col, row) {
  if (isGameOver) {
    return colors.GAME_OVER;
  } else if (food.x == row && food.y == col) {
    return colors.FRUIT;
  } else if (snake.parts[0].x == row && snake.parts[0].y == col) {
    return colors.SNAKE_HEAD;
  } else if ($scope.board[col][row] === true) {
    return colors.SNAKE_BODY;
  }
  return colors.BOARD;
};
function update() {
  var newHead = getNewHead();
  if (boardCollision(newHead) || selfCollision(newHead)) {
    return gameOver();
  } else if (foodCollision(newHead)) {
    eatFruit();
  }
  // Remove tail
  var oldTail = snake.parts.pop();
  $scope.board[oldTail.y][oldTail.x] = false;
  // Add new front part
  snake.parts.unshift(newHead);
  $scope.board[newHead.y][newHead.x] = true;
  // Do it again
  snake.direction = tempDirection;
  $timeout(update, interval);
}


function setupBoard() {
  $scope.board = [];
  for (var i = 0; i < bSize; i++) {
    $scope.board[i] = [];
    for (var j = 0; j < bSize; j++) {
      $scope.board[i][j] = false;
    }
  }
}
$scope.startGame=function(){
  $scope.score=0;
  snake={direction:drctns.up,parts:[]};
  tempDrct=drctns.up;
  isGameOver=false;
  interval=300;
for(var i=0;i<3;i++){
  snake.parts.push({x:5+i,y:5});
}
}

});