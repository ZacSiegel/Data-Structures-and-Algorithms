// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true


const wordPattern = (pattern, s) => {
    let patMap = {}
    let strMap = {}
    let str = s.split(' ')
    if(pattern.length !== str.length) return false
    for(let i = 0; i < pattern.length; i++){
        if(str[i] in strMap && strMap[str[i]] !== pattern[i] || pattern[i] in patMap && patMap[pattern[i]] !== str[i]){
            return false
        } 

        patMap[pattern[i]] = str[i]
        strMap[str[i]] = pattern[i]
        
    }
    return true
    
};
