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

