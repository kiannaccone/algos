// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function maxSlidingWindow(nums, k) {
    let currentSum= 0;
    let maxSum = 0;
    
    for (let i = 0; i < nums.length; i++ ) {
        currentSum += nums[i];
        if(i >= k-1) {
            maxSum = Math.max(currentSum, maxSum);
            currentSum -= nums[i - (k - 1)]
        }
    }
    return maxSum;
};

var maxSlidingWindow = function(nums, k) {
    let maxSum = 0;
    let tempSum = 0;
    if(nums.length < k) {
        return null;
    }
    for(let i = 0; i < k; i++) {
       tempSum += nums[i];
    }
    
    tempSum = maxSum;
    
    for(let i = k; i < nums.length; i++) {
       tempSum = tempSum - nums[i - k] + nums[i];
       maxSum = Math.max(tempSum, maxSum);
       }      
       return maxSum;
}

