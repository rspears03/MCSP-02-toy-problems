// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    let open = [];
    
    const openBal = new Set (['{'], ['['], ['(']);

    const closedBal = {
    '}' : '{',
    ']' : '[',
    ')' : '['
    }

    for(let a of str){
        if(openBal(a)){
            return true
        }else if(openbal(a) && open.pop() !== closedBal){
            return false
        }
    }
    return !open.length
};
