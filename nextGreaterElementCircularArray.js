var nextGreaterElements = function(nums) {
    let stack=[];
    let nums2 = [...nums, ...nums];
    let n = nums2.length;
    let ans = new Array(n);
    stack.push(nums2[n-1]);

    ans[n-1] = -1


    for(let i=n-2; i>=0;i--){

        while(stack.length){
            
            let top = stack[stack.length-1];
            
            if(nums2[i] < top){
                
                ans[i] = top;
                stack.push(nums2[i]);
                break;
            } else {
                stack.pop()
            }
            if(stack.length==0){
                 ans[i] = -1;
                stack.push(nums2[i]);
                break;
            }
        }
      
    }
   
    let finalAns = ans.slice(0,nums.length)

    return finalAns;
};

let nums = [1,2,1]
console.log(nextGreaterElements(nums));