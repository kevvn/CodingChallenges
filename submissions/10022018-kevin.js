/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let maxLen = 0;
    let list = {};

    for (let j = 0;j <s.length; j++){
        while(list[s.charCodeAt(j)]){
            list[s.charCodeAt(i)] = false;
            i++;
        }
        list[s.charCodeAt(j)] = true;
        maxLen = Math.max(maxLen,j - i + 1);
    }
    return maxLen;
};
