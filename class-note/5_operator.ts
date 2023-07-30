// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

/**
 * 유니온 타입 (|)
 * 하나의 타입 이상을 쓸 수 있도록 하는 것
 */

var seho: string | number | boolean;

function logMessage(value: string | number) { // 문자열과 숫자 둘 다 받을 수 있음
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
// function askSomeone(someone: Developer | Person) {
//     // someone.name;
//     // someone.skill; -> 접근 안됨
//     // someone.age; -> 접근 안됨
//     // 두 인터페이스의 공통 속성만 접근할 수 있음
// }
// Developer, Person의 타입 중 하나만 선택적으로 넘기면 됨
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

/**
 * 인터섹션 타입 (&)
 * 모든 타입을 가질 수 있음
 * 잘 사용하지는 않음
 */
var capt: string & number & boolean; // 문자열, 숫자, 논리를 전부 만족할 수 없으므로 사실상 불가능(never)
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
// Develper, Person 속성 전부 넘겨야 함
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 30 });