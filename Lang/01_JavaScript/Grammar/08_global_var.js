// 1. var 키워드로 전역 변수 선언
var globalVar = "나는 전역 변수입니다.";

// 2. 전역 공간에서 this 확인 (브라우저라면 window 객체)
console.log(this === window); // true

// 3. 전역 변수와 this.속성 비교
// var로 선언한 전역 변수는 전역 객체의 속성이 됩니다.
console.log(globalVar);      // "나는 전역 변수입니다."
console.log(this.globalVar); // "나는 전역 변수입니다." (this를 통해 접근 가능)
console.log(window.globalVar); // "나는 전역 변수입니다."

// 4. this를 통해 새로운 속성 생성
this.newProperty = "this로 만든 속성";
console.log(newProperty); // 전역 변수처럼 호출 가능: "this로 만든 속성"

// ---------------------------------------------------------
// 주의: let이나 const는 다르게 동작
// ---------------------------------------------------------

let letVar = "나는 let으로 선언됐어요.";
console.log(letVar);      // "나는 let으로 선언됐어요."
console.log(this.letVar); // undefined (let/const는 전역 객체의 속성이 되지 않음)