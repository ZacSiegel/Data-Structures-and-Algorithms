// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

function countConsistentStrings(allowed: string, words: string[]): number {
    let set = new Set(allowed);
    let total: number = 0;
    for(let word of words){
        for(let i = 0; i < word.length; i++){
            if(!set.has(word[i])) break
            if(i === word.length - 1) total++
        }
    }
    return total;
};
