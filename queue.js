class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.count = 0;
  }

  // 큐에 요소 추가
  enqueue(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.count++;
  }

  // 큐에서 요소 제거 및 반환
  dequeue() {
    if (this.isEmpty()) {
      return "큐가 비어있습니다.";
    }
    const removedItem = this.front.data;
    this.front = this.front.next;
    this.count--;
    if (this.isEmpty()) {
      this.rear = null;
    }
    return removedItem;
  }

  // 큐의 맨 앞 요소 반환
  peek() {
    if (this.isEmpty()) {
      return "큐가 비어있습니다.";
    }
    return this.front.data;
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.count === 0;
  }

  // 큐의 크기 반환
  size() {
    return this.count;
  }
}
// export default Queue;
// module.exports = Queue;
// const q = require("./queue");

// 큐 생성 및 사용 예시
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.size()); // 2
console.log(queue);
const q = require("./queue");
