interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
    age: 33,
    name: '세호'
};

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}
var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];
//arr[0] = 10; -> 배열에 들어갈 요소는 string이어야 함

// 딕셔너리 패턴
interface StringRegexDict {
    [key: string]: RegExp; 
}
var obj: StringRegexDict = {
    // sth: /abc/,
    // cssFile: 'css' -> 정규식이 와야하는데 string이 옴
    cssFile: /\.css$/,
    jsFile: /\.js$/
}
Object.keys(obj).forEach(function(value) {})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}
// interface Developer {
//     name: string;
//     age: number;
//     language: string;
// }
interface Developer extends Person {
    language: string;
}
var captain: Developer = {
    name: '캡틴',
    age: 100,
    language: 'ts'
}