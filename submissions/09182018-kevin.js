/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Runtime: 112ms
 */
var addTwoNumbers = function(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let list = [];
    let val1 = '';
    let val2 = '';
    let val3 = 0;
    while(curr1 !== null || curr2 !== null){
      val1 = (curr1 !== null) ? curr1.val : 0;
      val2 = (curr2 !== null) ? curr2.val : 0;
      list.push((val1 + val2+val3) % 10)
      val3 = (val1 + val2 >= 10 || (val1 + val2+val3) >= 10) ? 1: 0;
      curr1 = (curr1 !== null) ? curr1.next : null;
      curr2 = (curr2 !== null) ? curr2.next : null;
     }
    if(val3 === 1) list.push(val3)
    return list;
};
