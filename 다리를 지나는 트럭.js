// function solution(bridge_length, weight, truck_weights) {
//   let time = 0;
//   let bridge = Array(bridge_length).fill(0);

//   while (bridge.length) {
//     bridge.shift();
//     if (truck_weights.length) {
//       //지나갈 트럭이존재하면
//       const weightSum = bridge.reduce((acc, v) => acc + v, 0);
//       // console.log(weightSum);
//       if (weightSum + truck_weights[0] <= weight) {
//         //트럭의 무게가 다리를 지나갈 수 있으면
//         bridge.push(truck_weights.shift());
//       } else {
//         bridge.push(0);
//       }
//     }
//     // console.log(time);
//     time++;
//   }
//   return time;
// }
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

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const q = new Queue();
  const wq = new Queue();
  const arr = [...truck_weights].reverse();
  for (let i = 0; i < arr.length; i++) {
    wq.enqueue(arr.pop());
  }
  for (let i = 0; i < bridge_length; i++) {
    q.enqueue(0);
  }
  console.log(1);
  while (q.size()) {
    q.dequeue();
    if (truck_weights.length) {
      //지나갈 트럭이존재하면
      let sum = 0;
      let current = q.front;
      while (current) {
        sum += current.data;
        current = current.next;
      }
      console.log(2);
      if (sum + wq.peek() <= weight) {
        //트럭의 무게가 다리를 지나갈 수 있으면
        q.enqueue(wq.dequeue());
      } else {
        q.enqueue(0);
      }
    }
    // console.log(time);
    time++;
  }
  return time;
}
solution(2, 10, [7, 4, 5, 6]);

// 테스트 1 〉	통과 (26.43ms, 35.3MB)
// 테스트 2 〉	통과 (1711.39ms, 36.7MB)
// 테스트 3 〉	통과 (0.12ms, 33.6MB)
// 테스트 4 〉	통과 (258.20ms, 36.5MB)
// 테스트 5 〉	통과 (3006.86ms, 36.9MB)
// 테스트 6 〉	통과 (745.07ms, 36.9MB)
// 테스트 7 〉	통과 (12.66ms, 35.4MB)
// 테스트 8 〉	통과 (0.86ms, 33.4MB)
// 테스트 9 〉	통과 (7.62ms, 36.1MB)
// 테스트 10 〉	통과 (1.07ms, 33.4MB)
// 테스트 11 〉	통과 (0.11ms, 33.6MB)
// 테스트 12 〉	통과 (0.36ms, 33.5MB)
// 테스트 13 〉	통과 (3.48ms, 35.4MB)
// 테스트 14 〉	통과 (0.11ms, 33.4MB)
// bridge만 큐로쓰기
// 테스트 1 〉	통과 (18.02ms, 37MB)
// 테스트 2 〉	통과 (1053.89ms, 37.6MB)
// 테스트 3 〉	통과 (0.15ms, 33.5MB)
// 테스트 4 〉	통과 (185.60ms, 38MB)
// 테스트 5 〉	통과 (5742.96ms, 39.3MB)
// 테스트 6 〉	통과 (1036.44ms, 38.3MB)
// 테스트 7 〉	통과 (7.21ms, 37MB)
// 테스트 8 〉	통과 (0.64ms, 33.5MB)
// 테스트 9 〉	통과 (5.88ms, 37.3MB)
// 테스트 10 〉	통과 (4.17ms, 36.9MB)
// 테스트 11 〉	통과 (0.13ms, 33.7MB)
// 테스트 12 〉	통과 (0.65ms, 33.5MB)
// 테스트 13 〉	통과 (5.70ms, 37MB)
// 테스트 14 〉	통과 (0.22ms, 33.5MB)

//linked list 를 쓸까..
