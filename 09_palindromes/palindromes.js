const palindromes = function (str) {
    let unstrict = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let palindrome = unstrict.split('').reverse().join(''); 
    if (palindrome === unstrict) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
