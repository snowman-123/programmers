class Node {
  constructor(data) {
    this.data = data; // 노드의 데이터
    this.next = null; // 다음 노드를 가리키는 포인터, 초기값은 null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 링크드 리스트의 첫 번째 노드
  }

  // 링크드 리스트의 끝에 새로운 노드를 추가합니다.
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 링크드 리스트의 내용을 출력합니다.
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // 링크드 리스트에서 특정 데이터를 검색하여 해당 노드를 반환합니다.
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null; // 데이터를 찾지 못한 경우 null 반환
  }

  // 링크드 리스트에서 특정 데이터를 삭제합니다.
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

// 사용 예시
const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

myList.print(); // 출력: 10, 20, 30

const nodeToFind = myList.find(20);
console.log(nodeToFind.data); // 출력: 20

myList.delete(20);
myList.print(); // 출력: 10, 30
