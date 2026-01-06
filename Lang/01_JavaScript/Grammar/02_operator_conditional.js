// 2강: 연산자와 조건문

//1) 연산자-----
// 1. 산술 연산자 (+, -, *, /, %, **)
let price = 10000;
let count = 3;
let shipping = 2500;

let total = (price * count) + shipping; 
console.log("1. 총 결제 금액:", total, "원"); // 32500

let isEven = (count % 2 === 0);
console.log("2. 구매 수량은 짝수인가요?:", isEven); // false


// 2. 관계(비교) 연산자 (>, <, ===, !==)
let userAge = 25;
let isAdult = userAge >= 19;
console.log("3. 성인 여부:", isAdult); // true

let inputId = "admin";
let savedId = "admin";
let isIdMatch = (inputId === savedId); // 값과 타입 모두 비교
console.log("4. 아이디 일치 여부:", isIdMatch); // true


// 3. 논리 연산자 (&&, ||, !)
let hasCoupon = true;
let isMember = false;

// 쿠폰이 있거나, 멤버십 회원일 때만 할인 가능
let canGetDiscount = hasCoupon || isMember; 
console.log("5. 할인 적용 가능?:", canGetDiscount); // true

// 성인이면서 아이디가 일치해야 대시보드 진입 가능
let canAccessAdmin = isAdult && isIdMatch;
console.log("6. 관리자 페이지 접속 가능?:", canAccessAdmin); // true


// 4. 복합 대입 연산자 (+=, -=)
let point = 1000;
point += 500; // point = point + 500
console.log("7. 현재 포인트:", point); // 1500


//2) 조건문-----
let age = 20;
if (age >= 19) {
    console.log("성인입니다.");
}

//학점계산기
let score = 85;

if (score >= 90) {
    console.log("A학점");
} else if (score >= 80) {
    console.log("B학점");
} else {
    console.log("C학점");
}