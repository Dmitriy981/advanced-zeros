module.exports = function getZerosCount(number, base) {
    var n = 2;
    var changed = base;
    var needValue;
    var zerosCount=0;
    
    while (n <= changed) {
        if (changed % n == 0) {
            needValue = changed;
            changed = Math.round(changed / n);
        } else {
            n++;
        }
    }
    
    for (var i = 1; i < 12; i++) {
        zerosCount += Math.floor(number / Math.pow(needValue, i));
    }
    
    return zerosCount;
}