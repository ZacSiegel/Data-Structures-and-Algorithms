// https://leetcode.com/problems/find-the-difference/submissions/
// O(n) linear time complexity


const findTheDifference = (s, t) => {
    let seenS = {}
    let seenT = {}

    for (let i = 0; i < s.length; i++) {
        seenS[s[i]] ? seenS[s[i]]++ : seenS[s[i]] = 1
    }
    for (let i = 0; i < t.length; i++) {
        seenT[t[i]] ? seenT[t[i]]++ : seenT[t[i]] = 1
    }
    for (let char in seenT) {
        if (seenS[char] !== seenT[char]) return char
    }

};
