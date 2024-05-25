export function linkedList () {
    let last = node ("im third", null);
    let middle = node ("im second", last);
    let first = node ("im first", middle);
    
    let length = 3;

    const head = () => {return first};

    const tail = () => {return last};

    const append = function(value) {
        const newLast = node (value, null);
        const prevNode = node (last.value, newLast);

        last = newLast;
        length += 1;
    }

    const prepend = function(value) {
        const nextNode = node (first.value, first.next);
        const newFirst = node (value, nextNode);

        first = newFirst;
        length += 1;
    }

    const size = () => {return length};

    return { append, prepend, size, head, tail };
}

export function node (data, data2) {
    const value = data;
    const next = data2;

    return { value, next };
}

const list = linkedList();
