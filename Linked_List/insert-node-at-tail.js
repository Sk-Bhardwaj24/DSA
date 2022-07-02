const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtTail(head, data) {
  let new_node = new LinkedListNode(data);

  if (head === null) {
    head = new_node;
  } else {
    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new_node;
  }
  return head;
}
