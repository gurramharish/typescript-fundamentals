// Intl object

console.log(['Harish'].join(', ')); // Harish

console.log(['Harish', 'Kumar', 'Gurram'].join(' ')); // Harish Kumar Gurram

console.log(['apple', 'grape', 'orange'].join(', ')) // apple, grape, orange

console.log(Intl.ListFormat.supportedLocalesOf());

const formatter = new Intl.ListFormat('en', {
    style: 'long', // allowed values long, short, narrow
    type: 'conjunction' // conjunction, disjunction, or unit
})
const items = ['apple', 'grape', 'orange'];

console.log("long format: ", formatter.format(items));

const array = [
    'Sojourner',
    'Opportunity',
    'Spirit',
    'Curiosity',
    'Perseverance',
]

// Unit
console.log("Unit narrow : ", new Intl.ListFormat('en', { style: 'narrow', type: 'unit' }).format(array));

console.log("Unit long : ", new Intl.ListFormat('en', { style: 'long', type: 'unit' }).format(array));

console.log("Unit short : ", new Intl.ListFormat('en', { style: 'long', type: 'unit' }).format(array));

// Conjunction
console.log("conjunction narrow : ", new Intl.ListFormat('en', { style: 'narrow', type: 'conjunction' }).format(array));

console.log("conjunction long : ", new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(array));

console.log("conjunction short : ", new Intl.ListFormat('en', { style: 'short', type: 'conjunction' }).format(array));

// Disjunction
console.log("Disjunction narrow : ", new Intl.ListFormat('en', { style: 'narrow', type: 'disjunction' }).format(array));

console.log("Disjunction long : ", new Intl.ListFormat('en', { style: 'long', type: 'disjunction' }).format(array));

console.log("Disjunction short : ", new Intl.ListFormat('en', { style: 'short', type: 'disjunction' }).format(array));
