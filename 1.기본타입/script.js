//타입의 내용이 길 경우 변수로 지정이 가능하다.
let 이름 = 'jun';
// 변수이름 오른쪽 타입지정을 할 수 있다. 이름이란 변수에 문자 type만 들어올 수 있게 설정 
// 앞으로 문자만 들어올 수 있고 다른 타입의 값은 설정을 할 수 없다.
console.log(이름);
let 이름객체 = { name: 'jun' };
//객체도 타입지정이 가능하며 name? 라고 입력하면 name이라는 속성이 들어갈 수도 있고 안들어가도 에러를 발생하지 말라는 옵션방식
let 객체배열 = [{ name: "jun", age: '서른', male: "man" }];
let jun = {
    name: 'gong',
    age: '30'
};
let num = {
    one: 1,
    two: 2,
    three: 3
};
console.log(객체배열);
function 함수(x) {
    return x * 2;
}
let 이름배열 = [123, true]; //tuple타입
//이 배열에0는 숫자와 불린값이 담긴 배열만 들어올 수 있다
class user {
    constructor(name) {
        this.name = name;
    }
}
let myName = 'gijun';
let myAge = 30;
let myLocation = 'incheon';
console.log({ myName, myAge, myLocation });
let favoriteSinger = {
    Eminem: "Lose Yourself",
    NF: "The Search",
    kenshi: "Lemon"
};
console.log(favoriteSinger);
let project = {
    member: ['jun', 'jack', 'michle'],
    days: 30,
    started: true
};
console.log(project);
