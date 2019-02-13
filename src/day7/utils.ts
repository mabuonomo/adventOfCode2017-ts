export type Tower = {
    name: string,
    weight: number
}

class Node {
    public elem: Tower;
    public next: Node;

    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }
}

export class LinkedList {
    private head: Node = null;
    private len: number = 0;

    public getHead(): Node {
        return this.head
    }

    public append(elem: Tower) {
        let node = new Node(elem);
        let current: Node;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    public removeAt(pos: number) {
        if (pos > -1 && pos < this.len) {
            let current: Node = this.head;
            let previous: Node;
            let index: number = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current.elem;
        } else {
            return null;
        }
    }


    public insert(elem: Tower, pos: number) {
        if (pos > -1 && pos < this.len) {
            let current: Node = this.head;
            let index: number = 0;
            let previous: Node;
            let node: Node = new Node(elem);

            if (pos === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        } else {
            return false;
        }
    }
}