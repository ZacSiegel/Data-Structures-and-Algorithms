// https://leetcode.com/problems/ransom-note/

const canConstruct = (ransomNote, magazine) => {
    let mMap = {};
    
    for(let char of magazine){
        mMap[char] ? mMap[char]++ : mMap[char] = 1;
    }
    
    for(let letter of ransomNote){
        if(letter in mMap && mMap[letter] > 0){
            mMap[letter]--
        } else {
            return false
        }
    }
    return true
};
