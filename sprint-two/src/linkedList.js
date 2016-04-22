var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      list[value] = Node(value);
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list[value] = Node(value);
      list.tail.next = list[value];
      list.tail = list[value];
    }
  };

  list.removeHead = function() {
    var initialHead = list.head.value; 
    list.head = list.head.next;
    return initialHead;
  };

  list.contains = function(target) {
    var isFound = false;
    var counter = list.head;
    while (!isFound && counter !== list.tail.next) {
      if (counter.value === target) {
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