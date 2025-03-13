const sumAll = function(int1, int2) {
    let lesser, greater;
    let sum = 0;
    if  (int1 < 0 || int2 < 0) {     
        return 'ERROR';

    } else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';

    } else if (int1 < int2 ) {
        lesser = int1;
        greater = int2;

    } else {
        greater = int1;
        lesser = int2;
    }
    for (let i = lesser; i <= greater; i++) {
        sum += i;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
