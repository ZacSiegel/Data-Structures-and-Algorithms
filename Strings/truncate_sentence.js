// https://leetcode.com/problems/truncate-sentence/description/

const truncateSentence = (s, k) => {
    let strs = s.split(' ')
    let arr = [];
    for(let i = 0; i < k; i++){
        arr.push(strs[i]);
    }
    return arr.join(' ');
};
