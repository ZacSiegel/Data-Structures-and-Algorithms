// https://leetcode.com/problems/number-of-common-factors/

const commonFactors = (a, b) => {
    const max = Math.max(a, b);
    let count = 0;
    for(let i = max; i > 0; i--){
        if(a % i === 0 && b % i === 0) count++
    }
    return count;
};
