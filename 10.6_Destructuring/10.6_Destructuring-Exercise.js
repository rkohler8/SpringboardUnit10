/* Object Destructuring 1 */
/*  The code prints:
    8
    1846
*/

/* Object Destructuring 2 */
/*  The code prints:
    { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
*/

/* Object Destructuring 3 */
/*  The code prints:
    Your name is Alejandro, and you like purple
    Your name is Melissa and you like green
    Your name is undefined and you like green
*/

/* Array Destructuring 1 */
/*  The code prints:
    Maya
    Marisa
    Chi
*/

/* Array Destructuring 2 */
/*  The code prints:
    Raindrops on roses
    whiskers on kittens
    [ "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings" ]
*/

/* Array Destructuring 3 */
/*  The code prints:
    [ 10, 30, 20 ]
*/



/* Object Restructuring Refactoring */
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

//  SOLUTION
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
};

const { a, b } = obj.numbers;



/* ES2015 One-Line Array Swap with Destructuring */
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// SOLUTION

let arr = [ 1, 2 ];
[ arr[0], arr[1] ] = [ arr[1], arr[0] ];


/* raceResults() */
const raceResults = ([ first, second, third, ...rest ]) => ({ first, second, third, rest });