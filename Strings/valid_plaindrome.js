// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = s.length-1;
    while(left <= right){
        if(s[left] === s[right]){
            left++
            right--
        } else {
            return false
        }
    }
    return true
};
