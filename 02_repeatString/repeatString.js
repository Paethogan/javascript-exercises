const repeatString = function(str, num) {
    let myString = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let count = 1; count <= num; count++) {
        myString += str;
    }
    return myString;
};

// Do not edit below this line
module.exports = repeatString;
