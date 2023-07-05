let member: (number | string | boolean) = 123;
// union type 2개 이상의 타입을 한친 타입, 가변적인 타입을 만들고 싶을 때 사용

let members: (number | string)[] = [1, '2', 3]
let obj: { [key: string]: (number | string) } = { name: 'jun', age: 30, sex: 'man' }




let anything: any;
anything = 'jun'
anything = 30
anything = []

let test1: string = anything;
//실드를 죽여 모든 타입을 입력할 수 있다. 변경 또한 자유자재

let non: unknown;
non = 'jun'
non = 30
non = {}

// let test2 :string = non; 타입이 다르면 에러 발생


let user: string = 'jun'
let age: (undefined | number) = undefined
let married: boolean = false
let jun: (string | undefined | number | boolean)[] = [user, age, married]
console.log(jun);


let school: { score: (number | boolean)[], teacher: string, friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: 'Phill',
  friend: 'John'
}
school.score[4] = false
school.friend = ['Lee', school.teacher]

console.log(school);


