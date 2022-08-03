const greenTeas = [ 'snow jasmie', 'fragrant leaf' ];
const oolongTeas = [ 'honey orchid', 'winter sprout' ];
const herbalTeas = [ 'african solstice', 'marshmallowroot' ];
const coffees = [ 'guatemala red cat', 'snow leopard blend' ];

const palette = [ 'lavender berry', 'sunflower yellow', 'orchid orange' ];

// const paletteCopy = palette.slice();
const paletteCopy = [ ...palette ];
const paletteCopy2 = [ 'sky blue', ...palette, 'grass green' ];


const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas ];
/* ['snow jasmie', 'fragrant leaf', 'honey orchid', 'winter sprout', 'african solstice', 
'marshmallowroot'] */

const withCaffine = [ ...greenTeas, ...oolongTeas, ...coffees, "Earl Grey"];

const vowels = 'aeiou';
const vowelArr = [ ...vowels, 'sometimes y' ];