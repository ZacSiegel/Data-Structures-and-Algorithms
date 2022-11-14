// https://leetcode.com/problems/merge-intervals/

const merge = (intervals) => {
    // sort intervals by starting num
    intervals.sort((a, b) => a[0] - b[0]);
    
    // start result arr with first interval after sorting
    let result = [intervals[0]]
    
    for (let currInterval of intervals) {
        let prevInterval = result[result.length - 1]
        // [ [1,3],      [2,6],      [8,10],     [15,18]]   => res = [[1,3]]
        //   prevInt    currInt
        // if prevInt[1] (3) >=   currInt[0] (2)
        // then prevInt[1] = max between 3 and 6
        // prevInt becomes [1,6]
        // this is because the end of currInt is bigger than the end of prevInt 
        // and the end of prevInt overlaps with the start of currInt
        if (prevInterval[1] >= currInterval[0]) {
            prevInterval[1] = Math.max(currInterval[1], prevInterval[1])
        } else {
            // if prevInt[1] doesn't overlap with currInt[0]
            // we just add currInt to the results array
            result.push(currInterval)
        }
    }
    return result
};
