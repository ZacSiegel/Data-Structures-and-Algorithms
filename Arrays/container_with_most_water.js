// https://leetcode.com/problems/container-with-most-water/

const maxArea = (height) => {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
        // get current area of pointers
        let currArea = (right - left) * Math.min(height[left], height[right])
        maxArea = Math.max(maxArea, currArea)
        
        // if right height is smaller, move right pointer
        if(height[right] < height[left]){
            right--
            
        // if left height is smaller, move left pointer
        } else if (height[left] < height[right]){
            left++
            
        // if they're equal, move pointer that goes to larger height
        // this part can also be omitted because it doesn't matter
        // where the pointer goes to if the two heights are equal
        } else {
            Math.max(height[right-1], height[left + 1]) === height[right-1] ? right-- : left++
        }
    }
    return maxArea
};
