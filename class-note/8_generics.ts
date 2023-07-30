// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);    // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true);  // 진위값 true

/**
 * 제네릭 (T)
 * 인자로 받은 값의 자료형을 따라감
 */
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('10');

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false }

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLen<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLen('a');
logTextLen({ length: 10 })

// 제네릭 타입 제한 3 - keyokf
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOptions: T): T {
    return itemOptions;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");