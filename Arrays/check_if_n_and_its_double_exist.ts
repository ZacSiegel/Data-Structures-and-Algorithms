// https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

function checkIfExist(arr: number[]): boolean {
    const set = new Set();
    for(let val of arr) {
      if(set.has(val)) {
        return true
      }
      set.add(val / 2);
      set.add(val * 2);
    }
    return false
};
