"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encode(str, n) {
    const lettes = 'abcdefghijklmnopqrstuvwxyz';
    const number = String(n);
    const digits = convertToDigits(lettes);
    return cipher(str, number, digits);
}
exports.encode = encode;
function convertToDigits(letters) {
    let digits = {};
    for (let i = 0; i < letters.length; i++) {
        digits[letters.charAt(i)] = letters.charCodeAt(i) - 96;
    }
    return digits;
}
function cipher(stringToCipher, salt, digits) {
    let result = [];
    stringToCipher.split('').forEach((char, index) => {
        result.push(Number(digits[char]) + Number((salt.charAt(index % salt.length))));
    });
    return result;
}
console.log(encode('scout', 1939));
//# sourceMappingURL=d014.js.map