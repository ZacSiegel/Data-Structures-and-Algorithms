https://leetcode.com/problems/non-overlapping-intervals/

const eraseOverlapIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    let prevEnd = intervals[0][1]
    let removed = 0;
    for(let i = 1; i < intervals.length; i++){
        let currStart = intervals[i][0]
        let currEnd = intervals[i][1]
        // if no overlap, set prevEnd as next one to check
        if(currStart >= prevEnd){
            prevEnd = currEnd
        } else {
        // if there's an overlap, just keep the interval end
        // that's the smallest to prevent more overlap
            removed++
            prevEnd = Math.min(prevEnd, currEnd)
        }
    }
    return removed
};
