let member = 123;
// union type 2개 이상의 타입을 한친 타입, 가변적인 타입을 만들고 싶을 때 사용
let members = [1, '2', 3];
let obj = { name: 'jun', age: 30, sex: 'man' };
let anything;
anything = 'jun';
anything = 30;
anything = [];
let test1 = anything;
//실드를 죽여 모든 타입을 입력할 수 있다. 변경 또한 자유자재
let non;
non = 'jun';
non = 30;
non = {};
// let test2 :string = non; 타입이 다르면 에러 발생
let user = 'jun';
let age = undefined;
let married = false;
let jun = [user, age, married];
console.log(jun);
let school = {
    score: [100, 97, 84],
    teacher: 'Phill',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
console.log(school);
