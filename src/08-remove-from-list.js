/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let head = l;
  let prev = l;
  let cur = l.next;
  if (prev.value === k) {
    prev = prev.next;
    cur = cur.next;
    head = prev;
  }
  while (cur) {
    if (cur.value === k) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
}

module.exports = removeKFromList;
