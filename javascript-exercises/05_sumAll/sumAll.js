const sumAll = function(min, max) {
    if ((!Number.isInteger(min) || (!Number.isInteger(max)))) {
        return 'ERROR';
    }
    if ((min < 0) || (max < 0)) {
        return 'ERROR';
    }
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }
    let sum = 0;
    for (let index = min; index <= max; index++) {
        sum = sum + index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
