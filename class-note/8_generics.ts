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
