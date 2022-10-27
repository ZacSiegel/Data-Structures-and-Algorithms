// https://leetcode.com/problems/3sum/

const threeSum = (nums) => {
    nums = nums.sort((a,b)=> a- b)
    let result = []
    for(let i = 0; i < nums.length - 2; i++){
        // making sure not to use same start value twice
        if( i > 0 && nums[i] === nums[i-1]) continue
        let left = i + 1
        let right = nums.length-1
        while(left < right){
            let threeSum = nums[i] + nums[left] + nums[right]
            if(threeSum === 0){
                // add nums to result 
                result.push([nums[i], nums[left], nums[right]])
                // to prevent duplicates, we use a while loop to make sure left
                // and right pointers don't land on the same num again
                while(nums[left] === nums[left + 1]) left++
                while(nums[right] === nums[right - 1]) right--
                // once we know the nums are not dupes, we move both pointers
                left++
                right--
            } else if (threeSum < 0){
                left++
            } else {
                right--
            }
        }
    }
    return result
};
