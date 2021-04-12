const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = new ListNode(0);
  }

  get size() {
    let size = 1;
    let cur = this.head;
    while (cur.next) {
      size += 1;
      cur = cur.next;
    }
    return size;
  }

  enqueue(element) {
    if (this.head.value) {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = new ListNode(element);
    } else {
      this.head.value = element;
    }
  }

  dequeue() {
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }
}

module.exports = Queue;
