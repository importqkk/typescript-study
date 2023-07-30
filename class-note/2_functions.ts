// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}
//sum(10, 20, 30, 40); -> 두개의 인자를 초과하는 인자의 수 오류
sum(10, 20);

// 함수의 옵셔널 파라미터
// ?: 꼭 넘기지 않아도 되는 파라미터
function log(a: string, b?: string) {

}
log('hello world'); // a만 있고 b는 없어도 됨
log('hello ts', 'abc'); // a, b 둘 다 있어도 됨
