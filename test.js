let colors = [ 'orange', 'green', 'magenta'];
// .push modifies the original Array
colors.push('purple'); // OK in vanilla JS, NOT OK for redux

// Make a copy of the array with a new item
let colorsCopy = [...colors, 'blue']

console.log('colors', colors);
console.log('colorsCopy', colorsCopy);


let person = { firstName: 'Zach', lastName: 'Test'};

let personCopy = {...person, lasName: 'Andrade'}

console.log('person', person );
console.log('personCopy', personCopy);