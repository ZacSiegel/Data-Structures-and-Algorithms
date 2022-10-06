
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

const isIsomorphic = (s, t) => {
    let map = new Map()
    if(new Set(s).size != new Set(t).size){    
        return false
    }
    for(let i=0; i<s.length; i++){
      let sChar = s[i]
      let tChar = t[i]
        if(map.has(sChar) && map.get(sChar) !== tChar){
            return false
        }else{
            map.set(sChar, tChar)
        }
    }
    return true
};
