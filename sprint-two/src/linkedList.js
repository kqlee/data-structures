var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    var isFound = false;
    var counter = list.head;
    while (!isFound && counter !== null) {
      if ( counter.value === target ) {
        isFound = true;
      } else {
        counter = counter.next;
      }
    }

    return isFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// list.addToTail ----- constant time  O(1)
// list.removeHead ----- constant time  O(1)
// list.contains ----- linear O(n)