// ------------- MAY-09,2024 ----------------
// Program to copy all elements of one array into another array :
// https://www.javatpoint.com/java-program-to-copy-all-elements-of-one-array-into-another-array
// Difficulty : EASY
// status : SUCCESS
console.log("----- copy all elements of one array into another array *** begins ------- ");
copyArrayToArray();
console.log("----- copy all elements of one array into another array *** ends ------- ");
console.log(" ---------------------------------------------- ");
function copyArrayToArray() {
    let arr = [1, 2, 3, 4, 5, 6];
    let arr1 = [...arr];
    console.log('arr = ', arr, ' arr1 = ', arr1);
}


// Program to find the frequency of each element in the array :
// https://www.javatpoint.com/java-program-to-find-the-frequency-of-each-element-in-the-array
// Difficulty : EASY
// status : SUCCESS
console.log("----- Program to find the frequency of each element in the array : *** begins ------- ");
frequencyOfElementsInArray();
console.log("----- Program to find the frequency of each element in the array : *** ends ------- ");
console.log(" ---------------------------------------------- ");
function frequencyOfElementsInArray() {
    let arr = [1, 2, 8, 3, 2, 2, 2, 5, 1];

    const frequencyMap = arr.reduce((map, current) => { 
        map.set(current, (map.get(current) || 0) + 1); 
        return map;}, new Map);

        frequencyMap.forEach((value, key) => {
            console.log(key + " - " + value);
        });

}