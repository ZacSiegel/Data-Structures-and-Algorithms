// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
    let maxArea: number = 0;
    let left: number = 0;
    let right: number = height.length - 1;
    while(left < right){
        let currArea: number = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currArea)
        if(height[right] > height[left]){
            left++;
        } else {
            right--;
        }
    }
    return maxArea
};
