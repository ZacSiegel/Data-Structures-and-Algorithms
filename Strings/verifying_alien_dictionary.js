// https://leetcode.com/problems/verifying-an-alien-dictionary/

const isAlienSorted = (words, order) => {
    let dict = {}
    for (let i = 0; i < order.length; i++) {
        dict[order[i]] = i
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i]
        let word2 = words[i + 1]
        for (let j = 0; j < word1.length; j++) {
            // if second word is prefix, j will be at it's length
            if (j === word2.length) return false
            // checking letter values in dict
            // break is used because we only need to check one letter at a time
            if(word1[j] !== word2[j]){
                if(dict[word1[j]] > dict[word2[j]]) return false
                if(dict[word1[j]] < dict[word2[j]]) break
            }
        }
    }
    return true
};
