function sum(...nums) {
    return nums.reduce((sum, n) => sum + n);
}

const sumAll = (...values) => {
    if(!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
};

function makeFamily(parent1, parent2, ...kids) {
    return {
        parents : [parent1, parent2],
        children : kids.length ? kids : 0
    };
    // console.log(parent1, parent2);
    // console.log(kids);
}

const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof v === type);
};


// filterByTpe('number', 1,2,3,'a',true)
// [1,2,3]