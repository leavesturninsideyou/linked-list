export function linkedList () {
    let last = node ("im third", null);
    let middle = node ("im second", last);
    let first = node ("im first", middle);
    
    let length = 3;

    const head = () => {return first};

    const tail = () => {return last};

    const append = function(value) {
        const newLast = node (value, null);

        last.next = newLast;
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

    const at = function(index, current = 1, subject = first) {
        if (current === index) {
            return subject;
        } else {
            return at(index, current + 1, subject.next);
        }
    }

    const pop = function() {
        let penult = list.at(length - 1);

        last = penult;
        penult.next = null;
    }

    const contains = function(value, current = 1, subject = first) {
        if (subject.value !== value) {
            return false;
        }

        if (subject.value === value) {
            return true;
        } 

        //unfinished
        
        return contains(value, current + 1, subject.next)
    }

    return { append, prepend, size, head, tail, at, pop, contains };
}

export function node (data, data2) {
    const value = data;
    const next = data2;

    return { value, next };
}

const list = linkedList();

console.log(list.contains("im second"));




