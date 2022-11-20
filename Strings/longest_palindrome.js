// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s) => {
    const set = new Set();
    let count = 0;
    
    for (const char of s) {
        // if the char is in the set already, then it means there's 
        // two of that char so we can remove it from the set and just add 2 to count
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }
    // if the set has at least one char in it, we onle add
    // 1 to count because that will be mid of palindrome
    if(set.size > 0){
        return count + 1
    } else {
        return count
    }
};
