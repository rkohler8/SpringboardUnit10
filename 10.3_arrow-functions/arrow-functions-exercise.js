//  CODE TO BE REFACTORED
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

//  REFACTORED ARROW FUNCTION
const refactoredDouble = arr => arr.map(val => val * 2);


//  CODE TO BE REFACTORED
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}

// MY ANSWER
const refactoredSquareAndFindEvens = numbers => {
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}

//  BEST ANSWER
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)