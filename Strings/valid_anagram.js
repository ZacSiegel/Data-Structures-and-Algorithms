// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    let dict = {}
    for(let char of s){
        dict[char] ? dict[char]++ : dict[char] = 1
    }
    for(let i = 0; i < t.length; i++){
        let letter = t[i]
                if(!dict[letter]){
            return false
        }
        if(dict[letter]){
            dict[letter]--
        }
    }
    return true 
};
