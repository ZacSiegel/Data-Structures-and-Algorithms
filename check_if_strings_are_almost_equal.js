// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/

const checkAlmostEquivalent = (word1, word2) => {
    let map = new Map();
    let map1 = new Map();

    for(let char of word1){
        if(!map.has(char)) map.set(char, 1)
        else map.set(char, (map.get(char) || 1) + 1)

        if(!map1.has(char)) map1.set(char, 1)
        else map1.set(char, (map1.get(char) || 1) + 1)
    }
    for(let char of word2){
        if(map.has(char) && map1.has(char)) {
            map.set(char, (map.get(char) - 1))
        } else {
            map.set(char, (map.get(char) || 0) + 1)
        }
    }

    for(let [letter, freq] of map){
        if(Math.abs(freq) > 3) return false
    }
    
    return true;
};
