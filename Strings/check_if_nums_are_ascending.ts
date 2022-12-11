// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/description/

function areNumbersAscending(s: string): boolean {
    let words: string[] = s.split(' ');
    let vals: number[] = [];
    for(let char of words){
        if(parseInt(char)) {
            vals.push(parseInt(char))
        } else {
            continue
        }
    };

    for(let i = 1; i < vals.length; i++){
        if(vals[i] > vals[i - 1]){
            continue
        } else {
            return false
        }
    };
    
    return true;
};
