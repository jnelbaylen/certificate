// function addTwoAndSeven() {
//     return 2 + 7;
// }

// console.log(addTwoAndSeven());

// function addThreeAndFour() {
//     return 3 + 4;
// }

// console.log(addThreeAndFour());


// Sum

function calculateSum(num1, num2) {
    return num1 + num2
}

console.log(calculateSum(2,5));
console.log(calculateSum(10,10));
console.log(calculateSum(5,5));

// Difference

function calculateDifference(num1, num2) {
    return num1 - num2
}

console.log(calculateDifference(22,5));
console.log(calculateDifference(12,1));
console.log(calculateDifference(17,9));

// Product

function calculateProduct(num1, num2) {
    return num1 * num2
}

console.log(calculateProduct(13,5));
console.log(calculateProduct(12,1));
console.log(calculateProduct(17,9));

// Quotient

function calculateQuotient(num1, num2) {

    if (num2 === 0){
        return "Error: Division by zero"
    } else {
        return num1 / num2
    }
}

console.log(calculateQuotient(3,0));
console.log(calculateQuotient(7,11));
console.log(calculateQuotient(17,9));

// Calculate the Square

function calculateSquare(num) {
    return num * num
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

// Calculate the Square Root

function calculateSquareRoot(num) {
    return Math.sqrt(num)
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));