# ES6 기본

## let 과 const

```
var name = 'alex';
var age = '26';
var address = 'Seoul';
```

```
const name = 'alex';
let age = '26';
let address = 'Seoul';
```

`let`은 선언 후 할당이 가능하고 `const`는 새로운 값을 할당할 수 없습니다.

```
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2
```
`var`는 function 스코프(scope)에서 변수를 선언합니다.

```
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```
`const`, `let`은 block 스코프(scope)에서 변수를 선언합니다.


## forEach, map

```
const before = [ 1, 2, 3, 4, 5 ];
const after = [];

before.forEach((item) => {
  after.push(item * 2);
});

console.log(after); // [ 2, 4, 6, 8, 10 ];
```
forEach는 Array를 루프를 돌면서 작업을 수행합니다. 각 요소는 함수의 첫번째 인자 item입니다.

```
const before = [ 1, 2, 3, 4, 5 ];

const after = before.map((item) => {
  return item * 2;
});

console.log(after); // [ 2, 4, 6, 8, 10 ];
```
map은 Array를 루프를 돌면서 작업을 수행하고 새로운 Array를 생성합니다.

## 화살표 함수 (Arrow function)

```
// 일반적인 함수

function square (input) {
  return input * input;
}
```

```
// 화살표 함수

const square = (input) => input * input;

const square = (input) => {
  return input * input;
}
```
화살표 함수에서는 중괄호를 작성하지 않으면 선언문이 return 됩니다.

## class

```
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const doggy = new Animal('멍뭉이', 'dog');
console.log(doggy.name) // 멍뭉이
console.log(doggy.type) // dog
```

`class`를 사용하여 클래스를 선언합니다.

```
// 클래스 상속

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.type = 'bird';
  }
}

const birdy = new Bird('짹짹이');
console.log(birdy.name); // 짹짹이
console.log(birdy.type); // bird
```

`class ... extends`로 클래스를 상속할 수 있습니다.

## 전개 연산자

```
const obj = {
  a: '1',
  b: '2', 
  c: '3',
}

const { a, b, c } = obj;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

```
객체의 속성명을 변수명으로 선언하고 값을 할당합니다.

```
const list = [ 1, 2, 3, 4, 5, 6 ];
const [ a, b, ...rest ] = list;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [ 3, 4, 5, 6 ]
```
Array의 값을 변수에 할당합니다.


## 객체 줄여쓰기

```
const name = 'alex';
const age = '26';
const address = 'seoul';

const obj = {
  name: name,
  age: age,
  address: address
}
```

```
const name = 'alex';
const age = '26';
const address = 'seoul';

const obj = {
  name,
  age,
  address
}
```

객체의 속성과 속성에 지정하는 값의 변수명이 같으면 줄여서 작성할 수 있습니다.
