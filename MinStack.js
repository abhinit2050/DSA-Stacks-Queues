
var MinStack = function() {
    this.s1=[];
    this.minValue=Infinity;   
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   
    if(val<this.s1[this.s1.length-1]?.minNow || this.s1.length==0){
         this.s1.push({num:val, minNow:val})
            
    } else {
        this.s1.push({num:val, minNow:this.s1[this.s1.length-1].minNow })
    }
 
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.s1.length;
    return this.s1[len-1].num
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let len = this.s1.length;
    return this.s1[len-1].minNow;
};




 // Your MinStack object will be instantiated and called as such:
 var obj = new MinStack()
   console.log("new",obj.s1);
  obj.push(-2)
    console.log("first push",obj.s1);
  obj.push(0)
    console.log("second push",obj.s1);
  obj.push(-3)
    console.log("third push",obj.s1);
  var param_2 =obj.getMin();

    obj.pop()
    console.log("after pop",obj.s1);
 var param_3 = obj.top()
  var param_4 = obj.getMin()

  console.log(obj.s1);
  console.log(param_2,param_3,param_4);
 