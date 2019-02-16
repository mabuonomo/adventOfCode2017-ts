export type Tower = {
    name: string,
    weight: number
}

class Node {
    public elem: Tower;
    public childs: Array<Node>;
    public father: Node

    constructor(elem: Tower) {
        this.elem = elem;
        this.childs = null;
    }
}

export class Tree {
    private head: Node = undefined;
    private horfans : Array<Node> = []

    public getHead(): Node {
        return this.head
    }

    public findNodeByName(name: string, node?: Node) {

        if (node == undefined) {
            node = this.getHead()
        }

        if (node.elem.name == name) {
            return node
        }

        if (node.childs != undefined) {
            node.childs.forEach((element: Node) => {
                return this.findNodeByName(name, element)
            });
        }

        return undefined
    }

    public createNode(tower: Tower, children: Array<Tower>): Node {
        let node = new Node(tower)
        let childs: Array<Node> = []

        children.forEach(element => {
            let child = new Node(element)
            child.father = node
            childs.push(child)
        });

        node.childs = childs

        return node
    }

    public insertNode(node: Node) {
        if (this.getHead() == undefined) {
            this.head = node
            return
        }

        let found = this.findNodeByName(node.elem.name)
        if (found == undefined) {
            this.horfans.push(node)
            return
        }

        node.childs.forEach((element: Node) => {
            let child_found = node.childs.find((value, index, array) => value.elem.name == element.elem.name)

            if (child_found == undefined) {
                element.father = found
            }
        });
    }
}