// https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

const findGCD = (nums) => {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    
    for (let i = max; i >= 0; i--) {
        if (max % i === 0 && min % i === 0) return i;
    }
};
