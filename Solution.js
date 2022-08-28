
/**
 * @param {number} input
 * @return {boolean}
 */
var reorderedPowerOf2 = function (input) {

    const digitsFrequencyForInput = createArrayDigitsFrequency(input);
    let powerOfTwo = 1;

    for (let i = 1; i < 31; ++i) {
        if (arraysAreEqual(digitsFrequencyForInput, createArrayDigitsFrequency(powerOfTwo))) {
            return true;
        }
        powerOfTwo <<= 1;
    }
    return false;
};

/**
 * @param {number[]} first
 * @param {number[]} second
 * @return {boolean}
 */
function arraysAreEqual(first, second) {
    for (let i = 0; i < 10; ++i) {
        if (first[i] !== second[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number} n
 * @return {number}
 */
function createArrayDigitsFrequency(n) {
    const digitsFrequency = new Array(10).fill(0);
    while (n > 0) {
        ++digitsFrequency[n % 10];
        n = Math.floor(n / 10);
    }
    return digitsFrequency;
}
