// 타입 단언 (type assertion)
// 타입스크립트가 타입을 추론하지 말고 개발자가 정한대로(as ~) 타입을 지정
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
var div = document.querySelector('div');
// 스크립트가 실행되는 시점에 div라는 요소가 정말 있는지 확언할 수 없기 때문에(null일 수 있기 때문에)
// if문으로 감싸줘야 함
if(div) {
    div.innerText;
}

// 타입 단언을 한다면 if문으로 감싸주지 않아도 됨
var div2 = document.querySelector('div') as HTMLDivElement;
div2.innerText;