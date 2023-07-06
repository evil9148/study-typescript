function fn1(x: number): number {
  return
}

fn1(1)


function fn2(x?: number): void {

}
// ? :number는 :number | undefined와 같다
fn2()


function welcome(x?: string): void {
  if (x) {
    console.log(`안녕하세요, ${x}님`);

  } else {
    console.log('이름이 없습니다.');
  }
}
welcome('기준')

function count(x: string | number): string | number {
  return x.toString().length
}

console.log(count('54645'))

// const count = (x: string | number):string|number => {

// }

function canIMarry(money: number, house: boolean, attractive: string) {
  let point: number = money

  if(house === true) point += 500

  if (attractive === '상') {
    point += 100
  } else if (attractive === '중') {
    point += 50
  } else if (attractive === '하') {
    point += 10
  } else {
    alert(`상, 중, 하 중에서 하나를 입력해주세요`)
  }
  
  if(point>=300){
    return '결혼 가능'
  }else{
    return '결혼 불가능'
  }
  
}

console.log(canIMarry(300, false, '상'))