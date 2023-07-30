// JS 문자열 선언
//var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// 숫자
let num: number = 10;

// 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

// 튜플: 각각의 인덱스에 타입이 정해져있는 배열
let address: [string, number] = ['gangnam', 100];

// 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: {name: string, age: number} = {
    name: 'thor',
    age: 100
}

// 진위값
let show: boolean = true;
