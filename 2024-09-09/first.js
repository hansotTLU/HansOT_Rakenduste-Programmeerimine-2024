// ÜL11 filtreerida välja uuesti massiivist kõik elemendid, mis on

const array = [1, 2, 3, 4, 5, 6];

const filteringArray = array.filter((element) => {
    console.log(element > 4);

    return element > 4;
});

console.log({ filteringArray });
console.log({ filteringArray: filteringArray });
console.log(filteringArray);


// ÜL12

const names = ["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames = names.map(name => {
    return {
        name: name,
        age: name.length+20,
        email: `${name}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse().join("")
    }
})

// {
//     name: "Anni",
//     age: 24,
//     email: 'anni@company.com',
//     address: 'Anni Street 55',
//     username: 'innA'
// }


// ÜL13 Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax

const auto = {
    model: "Ford Mustang GT",
    year: 2006,
};

// auto = {...auto, hp: 300 }

console.log({ auto });


// async/await Promise

const myPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
    console.log(await myPromise());
};

runPromise();