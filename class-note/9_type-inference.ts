// 타입 추론의 기본 1
var a; // 타입 지정하지 않으면 기본적으로 any

var b = 10; // 숫자 할당하면 숫자로 추론함
var c = 'abc'; // 문자열 할당하면 문자열로 추론함

// 숫자를 변수로 할당해주면 리턴값도 숫자로 해석함
function getD(d = 10) {
    var e = 'hi';
    return d + e; // 문자열과 숫자 더하면 문자열로 해석
}

// 타입 추론의 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}
var item: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론의 기본 3
interface DetailedDropdown<K> extends Dropdown<K> {
    desc: string;
    tag: K;
}
var detailedItem: DetailedDropdown<string> = {
    title: 'hello',
    desc: 'ab',
    value: 'a',
    tag: 'a'
}

// Best Common Type (가장 적절한 타입)
var arr = [1, 2, true, true, 'a'];