/* INTRO TO MAPS */
// const myMap = new Map();

// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');

// // myMap.set([], 'empty array!');
// const empty = [];
// myMap.set(empty, 'empty array!');
// myMap.set(true, 'TRUEEEE');

// myMap.get(7);


/* MAP METHODS */
const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);
// ^ CAN USE FUNCTIONS AS KEYS

const bandData = [
    [ 3, "3 Doors Down" ],
    [ 'three', "Three Dog Night" ],
    [ 'nine', "Nine Inch Nails" ],
    [ 'four', "The Four Seasons" ],
    [ 41, "Sum 41" ]
];
const bandMap = new Map(bandData);

bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');


/* ITERATING MAPS */
bandMap.forEach((val, key) => {
    console.log(key + '=>' + val);
});

for(let x of bandMap) {
    console.log(x);
}

/* SETS BASICS */
const bannedHashTags = new Set([ 'nofilter', 'justsaying', 'winning', 'yolo' ]);
// ^Set(4) {'nofilter', 'justsaying', 'winning', 'yolo'}
// const bannedHashTags = new Set('hello', 'goodbye');
// ^Set(4) {'h', 'e', 'l', 'o'}

bannedHashTags.add('bestlife').add('selfie');

function filterHashTags(tags) {
    const bannedHashTags = new Set([ 'nofilter', 'justsaying', 'winning', 'yolo' ]);
    return tags.filter((tag) => bannedHashTags.has(tag));
}

const susansTags = [ 'happymonday', 'yolo', 'winning', 'sunset' ];

const ages = [ 45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45 ];
[...new Set(ages)]; // turns (spreads) the Set back into an Array


let m = new Map();
console.log(m.set([1,2,3], true));
console.log(m.set([1,2,3], false));