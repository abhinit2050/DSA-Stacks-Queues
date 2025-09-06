var dailyTemperatures = function(temperatures) {
    let s=[];
    
    let n = temperatures.length;
    let ans= new Array(n).fill(0)
    ans[n-1] = 0;
    s.push([n-1]);


    for(let j=n-2;j>=0;j--){
       
        while(s.length){
           let top = s[s.length-1];
            if(temperatures[j]>=temperatures[top]){  
                 s.pop();
                
            } else {
               ans[j] = top -j
                break;
                
            }
            
           
        }
         s.push(j);
        
    }
   console.log(ans);

    return ans
};

let temperatures = [73,74,75,71,69,72,76,73]

console.log(dailyTemperatures(temperatures));
