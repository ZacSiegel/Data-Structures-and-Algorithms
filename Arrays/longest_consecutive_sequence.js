// https://leetcode.com/problems/longest-consecutive-sequence/

const longestConsecutive = (nums) => {
    if (nums == null || nums.length === 0) return 0;

    const set = new Set(nums);
    let maxSeq = 0;

    for (let num of set) {
        // make sure starting from the beginning of sequence
        // if there is no num - 1, it means num is start of sequence
        if (!set.has(num - 1)) {
            let currNum = num;
            let currMax = 1;

            while (set.has(currNum + 1)) {
                currNum++;
                currMax++;
            }
            maxSeq = Math.max(maxSeq, currMax);
        }
    }

    return maxSeq;
}
