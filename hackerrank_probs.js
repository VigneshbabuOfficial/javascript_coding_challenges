// hackerrank problems

// ------------- MAY-02,2024 ----------------
// The Hurdle Race :
// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true
// Difficulty : EASY
// status : SUCCESS
console.log("----- The Hurdle Race *** begins ------- ");
hurdleRace();
console.log("----- The Hurdle Race *** ends ------- ");

function hurdleRace() {
    hurdleRace_soln(1, [1, 2, 3, 3, 2]);
    hurdleRace_soln(4, [1, 6, 3, 5, 2]);
    hurdleRace_soln(7, [2, 5, 4, 5, 2]);
}

function hurdleRace_soln(k, arr) {
    const maxNumber = Math.max(...arr);
    const requiredDose = maxNumber - k > 0 ? maxNumber - k  : 0;
    console.log(" requiredDose = "+requiredDose);
    return requiredDose;
}