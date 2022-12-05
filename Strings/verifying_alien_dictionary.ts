// https://leetcode.com/problems/verifying-an-alien-dictionary/

function isAlienSorted(words: string[], order: string): boolean {
    let dict: {} = {};
    for(let i = 0; i < order.length; i++){
        dict[order[i]] = i;
    }
    for(let i = 0; i < words.length - 1; i++){
        let word1: string = words[i];
        let word2: string = words[i + 1];
        for(let j = 0; j < word1.length; j++){
            // second word is prefix
            if(j === word2.length) return false;
            if(dict[word1[j]] < dict[word2[j]]) break;
            if(dict[word1[j]] > dict[word2[j]]) return false;
        }
    }
    return true;
};
