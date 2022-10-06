// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

function isSubsequence(s, t) {
    if(!s) return true
    let i = 0
    let j = 0
    // while loop stays until j gets to s2 length
    while (i <= s.length && j <= t.length) {
    // if the char matches in each string, increase i to move forward on first string
        if (t[j] === s[i]) {
            i++
        }
    // if we get to the end of s1 then that means it's true becuase we've checked
    // all of the chars agains string 2
        if (i === s.length) {
            return true
        }
    // increase j to move through s2 if the chars don't match in each string
    // and if we're not at the end of iterating through s1
        j++;
    }
    return false
}
