function fn(x: number | string) {
  if (typeof x === 'string') {
    return x + '1'
  } else {

  }
} //typeof type을 체크한다. 대표적인 Narrowing 방법이다.

console.log(fn('1223'))

function fn2(x: number | string) {
  let array: number[] = []
  if (typeof x === 'number') {
    array[0] = x
  }
  return array
}

// console.log(fn2(123));


//typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모

function fn3(x: number | string) {
  let array: number[] = []
  array[0] = x as number
  return array
}

// console.log(fn3(123));

/*
assertion 문법의용도
1.Narrowing할 때 사용
2. 무슨 타입이 들어올지 100%확신할때 사용
남이 짠 코드 수정할 때 왜 에러가 났는지 모르겠을 때 디버깅용으로 주로 사용한다.
*/

type T = string | number

function fnCleaing(array: Array<T>) {
  let cleanArr = array.map(c => {
    if (typeof c === 'string') {
      return Number(c)
    } else {
      return c
    }
  })
  return console.log(cleanArr)
}
fnCleaing(['1', 2, '3', '4', 5])


function fnCleaing2(array: (string | number)[]) {
  let cleanArr: number[] = []
  array.forEach(c => {
    if (typeof c === 'string') {
      cleanArr.push(parseFloat(c))
    } else {
      cleanArr.push(c)
    }
  })
  return cleanArr
}

console.log(fnCleaing2(['1', 2, '3', '4']));

let chulsu = { subject: 'math' }
let younghee = { subject: ['science', 'english'] }
let minsu = { subject: ['science', 'art', 'korean'] }

function teachClass(sub) {
  if (!sub.subject) {
    alert(`Error`)
  } else {
    if (Array.isArray(sub.subject) === true) {
      let last = sub.subject.slice(-1)[0]
      console.log(last)
    } else {
      console.log(sub.subject);
    }
  }
}

teachClass(younghee)

function teachClass2(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') {
    return x.subject
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1]
  } else {
    return 'error'
  }
}
console.log(teachClass2({ subject: ['english', 'art']}));
