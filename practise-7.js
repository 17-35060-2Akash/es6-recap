const products = [
    { name: 'iPhone', price: 110000 },
    { name: 'Ram-16gb', price: 5000 },
    { name: 'SSD', price: 11000 },
    { name: 'Mouse', price: 900 }
];

const is5000 = products.find(product => product.price == 5000);
// console.log(is5000);

let { name } = products[2];
name = 'Samsung EVO plus 980 1TB';

console.log(name);
console.log(products);