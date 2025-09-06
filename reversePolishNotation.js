
// var evalRPN = function(tokens) {
    
//     let s=[];
//     let operands = ["+","-","*","/"]

//     function evaluator(el1, el2, opr){
//          switch(opr){
//                 case "+": return  el2 + el1;
//                 case "-": return  el2 - el1;
//                 case "*": return el2 * el1;
//                 case "/": return  Math.trunc(el2 / el1);
//             }
//     }

//     for(let i=0;i<tokens.length;i++){
        
//         if(operands.includes(tokens[i])){
//             let temp;
    
//             let el1 = s.pop();
//             let el2 = s.pop();
            
//             temp = evaluator(el1,el2,tokens[i]);
//             s.push(Number(temp))
//         } else {
            
//             s.push(Number(tokens[i]))
//         }
//     }

//     return s[0];
// };



//

//with eval function
var evalRPN = function(tokens) {
    
    let s=[];
    let operands = ["+","-","*","/"]

    for(let i=0;i<tokens.length;i++){
        
        if(operands.includes(tokens[i])){
            let temp;
    
            let el1 = s.pop();
            let el2 = s.pop();
            temp = eval(`${el2} ${tokens[i]} ${el1}`);   
            s.push(Math.trunc(Number(temp)))
        } else {
            s.push(Number(tokens[i]))
        }
    }

    return s[0];
};


let tokens = ["4","-2","/","2","-3","-","-"]
console.log(evalRPN(tokens));

