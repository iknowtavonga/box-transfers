let truck1 = Math.floor(Math.random() * 15) + 1;
let truck2 = Math.floor(Math.random() * 35) + 1;
let newHome = 0;
let i = 0;

console.log(`Truck 2 has ${truck2} boxes`);

while (i > truck1) {
    newHome++;
}

console.log(`Truck 1 had ${truck1} boxes and truck 2 had ${truck2} boxes, now your home has ${newHome} boxes`)