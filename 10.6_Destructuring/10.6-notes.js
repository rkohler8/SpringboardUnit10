const teaOrder = {
    variety : 'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price : 12.99,
    hasCaffine : true,
    quantity : 3
};

// const price = teaOrder.price();
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

// const { price, quantity, teaName } = teaOrder;
// const {origin} = teaOrder;

const { price, quantity, teaName, ...others } = teaOrder;

// const { brewTemp = 175 } = teaOrder;
// if it can't find that variable then set it to 175

const { teaName: tea } = teaOrder;
//  renames new variable

const { brewTemp: temperature = 175 } = teaOrder;
//  renames variable and assigns 175 if no variable found

function checkout(tea) {
    const { quantity = 1, price } = tea;
    return quantity * price;
}

checkout(teaOrder);

const order1 = {
    variety : 'green',
    teaName : 'silver needle',
    origin : 'taiwan',
    price : 12.99,
    hasCaffine : true,
};


/* DESTRUCTURING ARRAYS */
const students = [
    { name: 'Drake', gpa: 4.6 },
    { name: 'Henrietta', gpa: 4.4 },
    { name: 'Tung', gpa: 4.0 },
    { name: 'Harry', gpa: 3.8 },
    { name: 'Ant', gpa: 3.2 }
];

const [ topStudent, secondBest,, fourth ] = students;   // creates variables from students top dow. ',,' skips the value in that order.
const fifth = sturdents[4];
const [ first, ...losers ] = students;

/* DESTRUCTURING FUNCTIONS */
const order2 = {
    variety    : 'green',
    teaName    : 'silver needle',
    origin     : 'taiwan',
    price      : 12.99,
    hasCaffine : true
    // quantity   : 4
};

// function getTotal(tea) {
//     const {quantity, price} = tea;
//     return quantity * price;
// }

function getTotal({ quantity: qty = 1, price }) {
    return quantity * price;
}

const longJumpResults = [ 'Tammy', 'Jessica', 'Violet' ];
const swimMeetResults = [ 'Japan', 'France', 'Chile' ];

function awardMedals([ gold, silver, bronze ]) {
    return {
        gold,
        silver,
        bronze
    };
}


/* NESTED DESTRUCTING */
//** VIDEO USES DATA FROM MOVIE API THAT I DON'T HAVE!!**
// const { Rated } = movie;
// const { rating, advisory } = Rated;
const { Rated: { rating, advisory: note } } = movie;
const {
    Ratings: [
        { Value: imbdRating },
        { Value: rtRating },
        { Value: metaRating }
    ],
    // Versions : [ v1, v2 ]
    Versions : [ 
        { runtime: originalRunTime }, 
        { runtime: directorsCutRunTime }
    ]
} = movie;


/* SWAPPING VARIABLES USING DESTRUCTURING */

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [ delicious, disgusting ];
// [ disgusting, delicious ] = both;

// let [a,b] = ['Mayonnaise', 'Whipped Cream'];

[ delicious, disgusting ] = [ disgusting, delicious ];