//https://leetcode.com/problems/split-a-string-in-balanced-strings/

function balancedStringSplit(s: string): number {
    let result: number = 0;
    let currCount: number = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R') currCount++;
        else if(s[i] === 'L') currCount--;
        if(currCount === 0) result++;
    }
    return result;
};
