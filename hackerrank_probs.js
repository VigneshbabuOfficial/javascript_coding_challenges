// hackerrank problems

// ------------- APR-20,2024 ----------------
// Bill Division :
// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
// Difficulty : EASY
// status : SUCCESS
console.log("----- Bill Division *** begins ------- ");
bonAppetit();
console.log("----- Bill Division *** ends ------- ");

function bonAppetit() {
    let billItems = [3, 10, 2, 9];
	let billAnnaNoNeedToPay = 1; // 0 based index
	let annaCharged = 12;
    bonAppetit(billItems, billAnnaNoNeedToPay, annaCharged);
    bonAppetit(billItems, billAnnaNoNeedToPay, 7);
}

function bonAppetit(bill, k, b) {

}