// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/

const numOfStrings = (patterns, word) => {
    let total = 0;
    for(let pattern of patterns){
        if(word.includes(pattern)) total++
    }
    return total
};
