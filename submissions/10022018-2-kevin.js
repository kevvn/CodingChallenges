/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let num = String(x); 
    
    // For nonstring, use an array and then check
    for(let i = 0; i< num.length/2; i++){
        if(num.charAt(i) !== num.charAt(num.length-i-1)){
            return false;
        }
    }
    return true
};
