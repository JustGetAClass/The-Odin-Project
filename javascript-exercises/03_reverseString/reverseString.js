const reverseString = function(string) {
    let reversed = '';
    let length = string.length - 1;
    for (i=length; i>=0; i--){
        reversed = reversed + string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
