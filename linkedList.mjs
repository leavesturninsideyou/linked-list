export function linkedList () {
    let head = node (null, node1);
    let node1 = node (null, tail);
    let tail = node (null, null);

    let length = 3;

    const append = function(value) {
        tail = node1;
        const newTail = node (value, null);
        length += 1;
    }

    const prepend = function(value) {
        head = node1;
        const newHead = node (value, node1);
        length += 1;
    }

    const size = () => {return length};

    return { append, prepend, size };
}

export function node (data, data2) {
    const value = data;
    const next = data2;

    return { value, next };
}


console.log(linkedList.size, "i dont work");