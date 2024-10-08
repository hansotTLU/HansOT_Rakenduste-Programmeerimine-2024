// ÜL1
console.log("1. Ülesanne:");
let numbers = Array(9,8,7,6,5,4,3,2,1);

function findIndex(array, num){
    return array.indexOf(num);
}

console.log(findIndex(numbers, 8));


// ÜL2
console.log("2. Ülesanne:");
function addition(num1, num2){
    return(num1+num2);
}

console.log(addition(2, 2));


// ÜL3 ümber kirjutatud arrow funktsioonina:
console.log("3. Ülesanne:");

const addNumbersArrowFn = (num1, num2) => {
    return(num1 + num2)
};

console.log(addNumbersArrowFn(1,5));


// ÜL4 ümber kirjutatud shorthand arrow funktsioonina
console.log("4. Ülesanne:");

const addNumbersArrowFnShort = (num1, num2) => num1 + num2;

console.log(addNumbersArrowFn(2,6));


// ÜL5 luua fn nii, et seda saaks kutsuda nii:
//console.log(addnumbersNested(3)(4));
console.log("5. Ülesanne:");


function addNumbersNested(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

console.log(addNumbersNested(3)(4));


// ÜL6 ümber kirjutatud shorthand arrow funktsioonina
console.log("6. Ülesanne:");

const addNumbersNestedAFnShort = (num1) => (num2) => num1 + num2;

console.log(addNumbersNestedAFnShort(3)(4));


// ÜL7 ümber kirjutatud shorthand arrow funktsioonina
console.log("7. Ülesanne:");

const greet = (name) => 'Hello ' + name;

console.log(greet("Hans"));


// ÜL8
console.log("8. Ülesanne:");


const newArray = [1, 2, 3, 4, 5];

const addedArray = newArray.map(element => element + 5);

console.log(addedArray);

// ÜL8
console.log("9. Ülesanne:");

const threeParameters = newArray.map((element, Index, array) => {
    console.log(element, Index, array);

    const added = 1 + 2;

    return element + 5;
});

console.log({ threeParameters })