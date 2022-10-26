// https://leetcode.com/problems/first-letter-to-appear-twice/

const repeatedCharacter = (s) => {
    let seen = {}
    for(let i = 0; i < s.length; i++){
        seen[s[i]] ? seen[s[i]]++ : seen[s[i]] = 1
        if(seen[s[i]] > 1) return s[i]
    }
};
