// 1. 변수 선언
let name = "JaydeJ"; // 문자는 따옴표로 감싸요
const age = 20;      // 숫자는 그냥 써요

console.log(name); // 출력: JaydeJ
console.log(age);  // 출력: 20

// 1-2. 값 바꿔보기
name = "Jay";      // let은 바꿀 수 있음
// age = 21;       // 에러 발생! const는 바꿀 수 없음

console.log(name); // 출력: Jay


//2. 자료형(Data Types) 기초: 자바스크립트가 다루는 데이터의 종류들

//2-1. String(문자열): "Hello", 'JS' (따옴표 사용)
let tech = "JavaScript"
//2-2. Number(숫자): 10, 3.14
let year = 2026;
let pi = 3.14; //정수, 실수 구분없이 Number사용

//2-3. Boolean(불리언): true(참), false(거짓)
let isFun = true;
let isHard = false;

//2-4. Null & Undefined: 비어있거나 정의되지 않은 상태
let emty = null;
let notDefined;

//자료형 확인
console.log(tech+" "+typeof tech);
console.log(year+" "+typeof year);
console.log(isFun+" "+typeof isFun);
console.log(emty+" "+typeof emty);//null은 object로 나옴
console.log(notDefined+" "+typeof notDefined);