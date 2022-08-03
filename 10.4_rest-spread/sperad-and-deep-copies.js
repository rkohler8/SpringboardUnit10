const shoppingCart = [
    {
        name     : 'honey orchid',
        quantity : 2,
        price    : 13.5
    },
    {
        name     : 'african solstice',
        quantity : 4,
        price    : 25.99
    }
];

const cartCopy = [ ...shoppingCart ];

// NOTES:
// cartCopy === shoppingCart    :   false
// cartCopy[0] === shoppingCart[0] :   true