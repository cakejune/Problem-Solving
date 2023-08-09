

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var first = new Node("Hi")
first.next = new Node("there")
var list = new SinglyLinkedList()
list.push("HELLO");
list.push("GOODBYE");
list.push("!")
// list.push("HELLO")