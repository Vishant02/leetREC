const x = [3,2,2,3];

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let y=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            y.push(nums[i])
        }
    }
    // console.log(y);
    return y.length,y
};

console.log(removeElement(x,3))



