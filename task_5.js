// Node class представляющий узел в связанном списке
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class представляющий связанный список
class LinkedList {
    constructor() {
        this.head = null;
    }

    // метод чтобы добавить узел в связанный список
    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

// фуекция чтобы конверировать JSON в связанный список
function jsonToLinkedList(jsonData) {
    const linkedList = new LinkedList();
    if (Array.isArray(jsonData)) {
        jsonData.forEach(data => linkedList.addNode(data));
    } else {
        console.error("Введенный JSON должен быть списком обЪектов");
    }
        return linkedList;
}

// тестирование
const jsonInput = [
    { id: 1, name: "Harry Potter and The Sorcerer's Stone" },
    { id: 2, name: "Harry Potter and The Chamber of Secret" },
    { id: 3, name: "Harry Potter and The Azkaban's Prisoner" }
];

const linkedList = jsonToLinkedList(jsonInput);
console.log(linkedList);