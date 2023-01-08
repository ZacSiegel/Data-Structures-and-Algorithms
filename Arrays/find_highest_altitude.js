// https://leetcode.com/problems/find-the-highest-altitude/description/

const largestAltitude = (gain) => {
    let max = 0;
    let curr = 0;
    for(let i = 0; i < gain.length; i++){
        curr += gain[i];
        if (curr > max) max = curr;
    }
    return max;
};
