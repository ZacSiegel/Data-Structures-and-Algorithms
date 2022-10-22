// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
    if (!s.length) return 0;
    const set = new Set();
    let maxLength = 0;
    let start = 0;
    let right = 0;
    
     //  The goal is to anchor start pointer and find the longest range of [start, right].
     //  When s[start, right] has a duplicate letter, we remove s[start] from the
     //  set and move start to the next position (++) so we don't include 
     //  the previous duplicate in the next length calculation.
     
    while (start < s.length && right < s.length) {
        // if the set does not have the character at the right pointer
        // we add it to the set
        if (!set.has(s[right])) {
            set.add(s[right]);
            // we then check the max by subtracting start from right
            // 1 is added because the array is zero-indexed so min length 
            // has to be at least 1
            maxLength = Math.max(maxLength, right - start + 1);
            // move right pointer forward
            right++;
        } else {
            // delete the duplicate letter at the first position
            // and move the start pointer forward
            set.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};
