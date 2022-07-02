const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
  let new_node = new LinkedListNode(data);
  if (position === 0) {
    new_node.next = head;
    head = new_node;
  } else {
    var i = 0;
    var temp = head;
    while (i < position - 1) {
      temp = temp.next;
      i++;
    }
    new_node.next = temp.next;
    temp.next = new_node;
  }
  return head;
}
