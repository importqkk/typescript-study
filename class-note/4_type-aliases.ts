// interface Person {
//     name: string;
//     age: number;
// }

/**
 * 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 
 * 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
 * 
 * 인터페이스는 확장이 가능한데에 반해 타입은 확장이 불가능하므로 
 * 타입보다는 인터페이스로 선언하는 것을 권장
 */
type Person = {
    name: string;
    age: number;
}

const seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {};