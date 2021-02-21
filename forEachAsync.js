const array = [{
        name: 'harish',
        age: '30'
    },
    {
        name: 'Madhuri',
        age: '25'
    }
]
async function loopArrayAsync(array) {
    let x = await Promise.all(array.map(async a => {
        return Promise.resolve(a.name);
    }));
    console.log("Cc : ", x);
    return x;
}

// const start = async () => {
//     await loopArrayAsync(array);
//     console.log('Done');

// }
loopArrayAsync(array).then((result) => {
    console.log("Done : ", result);
});