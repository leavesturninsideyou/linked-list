function linkedList () {
    
}

function node (data, data2) {
    const value = data;
    const next = data2;

    return { value, next };
}

const head = node (null, node1);
const node1 = node (null, tail);
const tail = node (null, null);
