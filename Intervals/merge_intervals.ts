// https://leetcode.com/problems/merge-intervals/description/

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let results: number[][] = [intervals[0]]
    for(let i = 0; i < intervals.length; i++){
        let prevInterval: number[] = results[results.length - 1];
        let currInterval: number[] = intervals[i];
        if(currInterval[0] <= prevInterval[1]){
            prevInterval[1] = Math.max(prevInterval[1], currInterval[1]);
        } else {
            results.push(currInterval);
        }
    };

    return results
};
