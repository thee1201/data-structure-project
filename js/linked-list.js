class SinglyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new SinglyNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        this.updateUI();
    }

    remove() {
        if (this.head !== null) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let current = this.head;
                let previous = null;
                while (current.next !== null) {
                    previous = current;
                    current = current.next;
                }
                previous.next = null;
            }
            this.size--;
            this.updateUI();
        }
    }

    init() {
        this.head = null;
        this.size = 0;
        this.updateUI();
    }

    updateUI() {
        const listDraw = document.getElementById('list-draw');
        listDraw.innerHTML = '';
        let current = this.head;
        while (current !== null) {
            
        }
    }
}