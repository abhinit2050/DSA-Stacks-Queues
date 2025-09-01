var isValid = function(s) {
    if(s.length <=1) return false;
    let h=[];
    let openingBrackets = ["(","{","["];
    let closingBrackets=[")","}","]"]

    for(let i=0;i<s.length;i++){
        //console.log(h.length,i);
        if(openingBrackets.includes(s[i])){
            if(i == s.length-1){
                return false
            }
            h.push(s[i])
        } else {
            let item = h.pop();
            if(!item){
                return false;
            }
            if(openingBrackets.indexOf(item) != closingBrackets.indexOf(s[i]) ){
                return false
            }
        }
    }

    if(h.length>0) return false;

    return true;
};



let s = "([]"

console.log(isValid(s))