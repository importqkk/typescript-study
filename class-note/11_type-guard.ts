interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

var tony = introduce();

// console.log(tony.skill); // 접근 안됨 -> 유니온 타입이기 때문에 공통 속성만 접근됨
console.log(tony.name);

// 타입 단언
if((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
}
else if((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
// is: 넘겨받은 파라미터가 해당 타입인지 검사
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}
if(isDeveloper(tony)) {
    console.log(tony.skill);
}
else {
    console.log(tony.age);
}