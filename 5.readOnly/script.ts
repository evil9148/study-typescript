type Animal = string | number | undefined;
let animal: Animal = 'tiger';

type Info = { name: string, age: number };
let info: Info = { name: 'jun', age: 30 };

type Girlfiriend = {
  readonly name: string
}

const girlfriend: Girlfiriend = {
  name: 'gwen'
}

// girlfriend.name = 'MJ'

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY;


type Obj1 = { name: string, age: number };
type Obj2 = { age: number, gender: string };
type NewObj = Obj1 & Obj2
let obj: NewObj = { name: 'jun', age: 30, gender: 'man' }
console.log(obj);


type ObjCss = { color?: string, size: number, readonly position: number[] }

type User1 = { name: string, phone: number, email: string }

let user: User1 = { name: 'jun', phone: 1234567890, email: "abc@gmail.com" }

type User2 = { isAdult: boolean }
type User3 = User1 & User2
let user2: User3 = { name: 'jun', phone: 1234567890, email: "abc@gmail.com", isAdult: true }