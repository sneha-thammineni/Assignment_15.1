// add = (price) => {
//     return new Promise((resolve, reject) => {
//         if (price > 2) reject("price cannot exceed 3");

//         setTimeout(() => {
//             resolve(price + 2);
//         }, 300);

//     });
// }

// add(1).then((newPrice) => {
//     console.log(newPrice)
// });

var dop = new Promise((resolve, reject) => {


    setTimeout(() => {
        resolve(34.5);
    }, 300);

});
dop.then((dop) => {
    console.log(dop);
})



let result;

function slowFunction(val) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, 1000);
    });
}


slowFunction(1).then((val) => {

    result = val;
    console.log(val);
});