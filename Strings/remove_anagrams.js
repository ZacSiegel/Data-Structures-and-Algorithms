// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

const removeAnagrams = (words) => {
    let result = [words[0]]
    for(let i = 1; i < words.length; i++){
        let currLetters = words[i].split('').sort().join('')
        let prevLetters = words[i - 1].split('').sort().join('')
        if(currLetters !== prevLetters){
            result.push(words[i])
        }
    }
    return result
};
