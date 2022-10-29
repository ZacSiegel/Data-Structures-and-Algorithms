// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
 let start: number = 0;
    let right: number = 0;
    let set = new Set();
    let maxLen: number = 0
    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right])
            maxLen = Math.max(maxLen, right - start + 1)
            right++
        } else {
            set.delete(s[start])
            start++
        }
    }
    return maxLen
};
