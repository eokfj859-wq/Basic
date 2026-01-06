//중첩된 참조형 데이터 (Nested Reference)
// 특징: 객체 내부의 프로퍼티가 또 다른 참조형 데이터의 주소를 가짐.
// ---------------------------------------------------------
var user = {
    id: 1,
    info: {           // <--- 중첩된 참조형 (객체 안의 객체)
        city: 'Seoul',
        zip: '12345'
    },
    tags: ['it', 'js'] // <--- 중첩된 참조형 (객체 안의 배열)
};

// [얕은 복사 테스트]
var user2 = { ...user }; // 전개 연산자로 겉면만 복사 (Shallow Copy)

user2.id = 2;            // 기본형은 독립적으로 복사됨
user2.info.city = 'Busan'; // 중첩된 객체는 주소만 복사되었으므로 원본과 연결됨

console.log("\n--- 3. 중첩된 참조형 데이터 ---");
console.log(user.id);          // 1 (기본형은 안전함)
console.log(user.info.city);   // 'Busan' (원본의 중첩 객체까지 바뀌어버림!)
console.log(user.info === user2.info); // true (내부 객체의 주소는 같음)


// ---------------------------------------------------------
// 해결책: 깊은 복사 (Deep Copy)
// 특징: 내부의 중첩된 객체까지 모두 새로운 메모리 주소에 복사함.
// ---------------------------------------------------------
// 가장 쉬운 방법: JSON 직렬화/역직렬화 (단, 함수나 undefined 등은 누락될 수 있음)
var deepUser = JSON.parse(JSON.stringify(user));

deepUser.info.city = 'Jeju';

console.log("\n--- 4. 깊은 복사 해결책 ---");
console.log(user.info.city);     // 'Busan' (원본 유지)
console.log(deepUser.info.city); // 'Jeju' (완벽히 독립된 새 객체)
console.log(user.info === deepUser.info); // false (서로 다른 주소)