type myType = string | number;
//타입의 내용이 길 경우 변수로 지정이 가능하다.

let 이름: string = 'jun';
// 변수이름 오른쪽 타입지정을 할 수 있다. 이름이란 변수에 문자 type만 들어올 수 있게 설정 
// 앞으로 문자만 들어올 수 있고 다른 타입의 값은 설정을 할 수 없다.
console.log(이름);


let 이름객체: { name?: string } = { name: 'jun' }
//객체도 타입지정이 가능하며 name? 라고 입력하면 name이라는 속성이 들어갈 수도 있고 안들어가도 에러를 발생하지 말라는 옵션방식
let 객체배열: { name?: string, age?: myType, male?: string }[] = [{ name: "jun", age: '서른', male: "man" }]
//이 변수에는 객체가 담긴 배열만 들어올 수 있다
type 문자객체 = {
  [key: string]: string
}

type 숫자객체 = {
  [key: string]: number
}

let jun: 문자객체 = {
  name: 'gong',
  age: '30'
}

let num: 숫자객체 = {
  one: 1,
  two: 2,
  three: 3

}


console.log(객체배열);

function 함수(x: number): number {
  return x * 2
}
//위 함수는 파라미터로 number타입의 값만 받을 수 있고, return 값으로 number타입의 값만 return을 한다.
type Member = [number, boolean]
let 이름배열: Member = [123, true] //tuple타입
//이 배열에0는 숫자와 불린값이 담긴 배열만 들어올 수 있다


class user {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}


let myName: string = 'gijun';
let myAge: number = 30;
let myLocation: string = 'incheon';

console.log({ myName, myAge, myLocation });


let favoriteSinger: { [key: string]: string } = {
  Eminem: "Lose Yourself",
  NF: "The Search",
  kenshi: "Lemon"
}

console.log(favoriteSinger);

let project: {
  member: string[],
  days: number,
  started: boolean
} = {
  member: ['jun', 'jack', 'michle'],
  days: 30,
  started: true
}

console.log(project);
