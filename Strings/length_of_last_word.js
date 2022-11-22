// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = (s) => {
    let strs = s.trim().split(' ')
    return strs[strs.length-1].length
};
