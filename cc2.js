let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
let testBill = 100;
let testTip = calcTip(testBill);
console.log(`For a bill of $${testBill}, the tip is $${testTip}`);

let bills = [275, 40, 430];
let tips = bills.map(calcTip);
let totals = bills.map((bill, index) => bill + tips[index]);

console.log("Data Set 1:");
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

bills = [125, 555, 44];
tips = bills.map(calcTip);
totals = bills.map((bill, index) => bill + tips[index]);

console.log("Data Set 2:");
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

