// https://leetcode.com/problems/merge-strings-alternately/description/

const mergeAlternately = (word1, word2) => {
    let p1 = 0;
    let p2 = 0;
    let output = '';
    while(p1 < word1.length && p2 < word2.length){
        output += word1[p1];
        output += word2[p2];
        p1++;
        p2++;
    }
    if(p1 === word1.length) output += word2.slice(p2, word2.length);
    if(p2 === word2.length) output += word1.slice(p1, word1.length);

    return output
};
