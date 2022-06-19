module.exports = function reverse(n) {
    let reverseResult = collectDigits(Math.abs(n));
        return reverseResult;
};
function collectDigits(n) {
    let digit1 = Math.floor(n / 100); // 165 / 100 = 1,65 = 1
    let digit2 = Math.floor((n / 100 - digit1) * 10); // 1,65 - 1 = 0,65 * 10 = 6,5 = 6
    let digit3 = n % 10; // 165 % 10 = 16,5 = 5 - ок, это понял
    let digitArray = new Array(); //[]
    digitArray[0] = digit1; // [1]
    digitArray[1] = digit2; // [1,6]
    digitArray[2] = digit3; // [1,6,5]
    console.log(digitArray); //testing
    console.log(digitArray.reverse()); //testing2
    return digit3 * 100 + digit2 * 10 + digit1 * 1;
   /* let reverseArrayString = digitArray.reverse().join("");
    let reverseArray = parseInt(reverseArrayString);
    return reverseArray; */
}