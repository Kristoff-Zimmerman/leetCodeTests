// 21. Merge Two Sorted Lists


// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

let list = [1,1,2,3,4,4];

var mergeTwoLists = function(list1, list2) {
 
    
};


// var reverseList = function(head) {
//     let cur = head;
//     let prev = null;
//     let next;

//     while(cur !== null) {
//         next = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = next;
//     };

//     return prev;
// }

  
// console.log(reverseList(list));