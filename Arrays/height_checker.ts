// https://leetcode.com/problems/height-checker/description/

function heightChecker(heights: number[]): number {
    let sortedHeights: number[] = heights.slice(0).sort((a,b) => a - b);
    let expected: number = 0;
    for(let i = 0; i < heights.length; i++){
        if(sortedHeights[i] !== heights[i]) expected++
    }
    return expected;
};
