// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.


const checkIfPangram = (sentence) => {
    let alpha = {};
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (alpha[sentence[i]]) {
            alpha[sentence[i]]++;
        } else {
            alpha[sentence[i]] = 1;
            count++;
        }
    }
    if (count === 26) return true;
    return false;
};
