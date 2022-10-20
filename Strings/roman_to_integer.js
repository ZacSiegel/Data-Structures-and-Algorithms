// https://leetcode.com/problems/roman-to-integer/

const romanToInt = (s) => {
    
const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total = 0
    
    for(let i = 0; i< s.length; i++){
        if(romans[s[i]] < romans[s[i+1]]){
            total -= romans[s[i]]
        } else {
            total += romans[s[i]]
        }
    }
    return total
};
