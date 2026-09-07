//Question 1

function vat(amount, rate = 0.15) {
    return amount * rate;
}
console.log("VAT:", vat(1000)); 

const vatArrow = (amount, rate = 0.15) => amount * rate;
console.log("VAT Arrow:", vatArrow(1000)); // 150

//Question 2

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

//Question 3
function discountBy(rate) {
    return function (price) {
        return price - (price * rate);
    };
}
const memberPrice = discountBy(0.10);
const salePrice = discountBy(0.30);   
console.log("Member Price:", memberPrice(1000), "ETB"); 
console.log("Sale Price:", salePrice(1000), "ETB");  

//Question 4

function applyToAll(list, fn) {
    const results = [];

    for (let item of list) {
        results.push(fn(item));
    }

    return results;
}

const prices = [100, 200, 500, 1000];
const pricesWithVAT = applyToAll(
    prices,
    price => price + (price * 0.15)
);

console.log("Prices with VAT:", pricesWithVAT);

//Question 5
const cities = [
    "Addis Ababa",
    "Adama",
    "Bahir Dar",
    "Yirgalem",
    "Hawassa"
];
cities.forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});
