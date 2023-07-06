function fn(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
    }
} //typeof type을 체크한다. 대표적인 Narrowing 방법이다.
console.log(fn('1223'));
function fn2(x) {
    let array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    return array;
}
// console.log(fn2(123));
//typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모
function fn3(x) {
    let array = [];
    array[0] = x;
    return array;
}
function fnCleaing(array) {
    let cleanArr = array.map(c => {
        if (typeof c === 'string') {
            return Number(c);
        }
        else {
            return c;
        }
    });
    return console.log(cleanArr);
}
fnCleaing(['1', 2, '3', '4', 5]);
function fnCleaing2(array) {
    let cleanArr = [];
    array.forEach(c => {
        if (typeof c === 'string') {
            cleanArr.push(parseFloat(c));
        }
        else {
            cleanArr.push(c);
        }
    });
    return cleanArr;
}
console.log(fnCleaing2(['1', 2, '3', '4']));
let chulsu = { subject: 'math' };
let younghee = { subject: ['science', 'english'] };
let minsu = { subject: ['science', 'art', 'korean'] };
function teachClass(sub) {
    if (!sub.subject) {
        alert(`Error`);
    }
    else {
        if (Array.isArray(sub.subject) === true) {
            let last = sub.subject.slice(-1)[0];
            console.log(last);
        }
        else {
            console.log(sub.subject);
        }
    }
}
teachClass(younghee);
function teachClass2(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return 'error';
    }
}
console.log(teachClass2({ subject: ['english', 'art'] }));
