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
  getSum() {
    let sum = 0;
    while (!this.isEmpty()) {
      sum += this.dequeue();
    }
    return sum;
  }
}
const arr = [11, 22, 33];
const q = new Queue();
q.enqueue(arr.pop());
q.enqueue(arr.pop());
// q.enqueue(arr.pop());
// q.dequeue();

console.log(q);
const a = q.peek();
console.log(a, q.peek());
console.log(q);

// getSum class 밖에서하기
// let sum = 0;
// let current = q.front;
// while (current) {
//   sum += current.data;
//   current = current.next;
// }
// console.log(sum);
