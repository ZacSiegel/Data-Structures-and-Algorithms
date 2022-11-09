// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

const firstPalindrome = (words) => {
    for(let word of words){
        if(word.split('').reverse().join('') === word) return word
    }
    return ''
};
