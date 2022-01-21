function linkedList(arr) {
    const consLinkedList = value => {
        return {
            value: value,
            next_node: null
        }
    }
    let head;
    let curr;
    for (const a of arr) {
        if (head == undefined) {
            head = consLinkedList(a)
            curr = head
            continue
        }
        const node = consLinkedList(a)
        curr.next_node = node
        curr = node
    }
    return head
}

function printLinkedList(ll) {
    let curr = ll
    while (curr) {
        console.log(curr.value)
        curr = curr.next_node
    }
}

function reverseLinkedList(ll) {
   
    const kernel = {
        prev: null,
        node: null,
        succ: null
    }

    const head = ll

    kernel.succ = head

    let new_head;

    while (true) {
       
        if (kernel.node) {
            kernel.node.next_node = kernel.prev
        }
   
        kernel.prev = kernel.node
        kernel.node = kernel.succ
        if (!kernel.succ.next_node) {
            kernel.succ.next_node = kernel.prev
            new_head = kernel.succ
            break
        }
        kernel.succ = kernel.succ.next_node

    }

    return new_head
}

const array = [...new Array(10).keys()]
console.log(array)
const list = linkedList(array)
printLinkedList(list)
const rlist = reverseLinkedList(list)
printLinkedList(rlist)%  
