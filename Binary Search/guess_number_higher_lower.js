// https://leetcode.com/problems/guess-number-higher-or-lower/


// /** 
//  * Forward declaration of guess API.
//  * @param {number} num   your guess
//  * @return 	     -1 if num is higher than the picked number
//  *			      1 if num is lower than the picked number
//  *               otherwise return 0
//  * var guess = function(num) {}
//  */

 const guessNumber = n => {
    let start = 1
    let end = n
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let pick = guess(mid)
        if (pick === 0) {
            return mid
        } else if (pick === -1) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
}