var nextGreaterElement = function(nums1, nums2) {
    let ngeMap = {};
    let nge=[];
    let s=[];
    ngeMap[nums2[nums2.length-1]] = -1;
    s.push(nums2[nums2.length-1])
    
    for(let i=nums2.length-2;i>=0;i--){
        if(nums2[i]<s[s.length-1]){
            ngeMap[nums2[i]] = s[s.length-1];
            s.push(nums2[i])
        } else {
            
            while(s.length>0){
               
                if(s[s.length-1] && nums2[i]<s[s.length-1]){
                    ngeMap[nums2[i]] = s[s.length-1];
                    s.push(nums2[i]);
                    break;
                } else {
                     s.pop();
                }
                
        if(s.length==0){
            ngeMap[nums2[i]] = -1;
            s.push(nums2[i]);
            break;
        }        
         
            }
        }
    } 

    for(let j=0;j<nums1.length;j++){
        nge.push(ngeMap[nums1[j]])
    }
    console.log(ngeMap);
    return nge;
};

let nums1 = [2,1,3];
let nums2 = [2,3,1];

console.log(nextGreaterElement(nums1, nums2));