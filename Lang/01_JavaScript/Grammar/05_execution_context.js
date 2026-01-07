// 1. [전역 컨텍스트 생성] (코드 실행 전)
// - 전역 변수 명단 등록: globalVar = undefined
// - 전역 함수 명단 등록: outer = f (함수 전체 로직 저장)

var globalVar = "전역";

function outer(param) {
  // 2. [outer 함수 컨텍스트 생성] (함수가 호출되는 순간)
  
  // --- [호이스팅 명단 작성 순서] ---
  // ① 매개변수 우선 등록: param = "인자값" (전달받은 값을 바로 할당)
  // ② 내부 함수 등록: inner = f (설계도 통째로 등록)
  // ③ 내부 변수 등록: outerVar = undefined (선언만 등록)
  // ------------------------------

  console.log(param);    // 결과: "인자값" (이미 ①번에서 값이 들어옴)
  console.log(outerVar); // 결과: undefined (③번에서 이름만 등록했으므로)

  var outerVar = "외부"; // 이제서야 명단의 undefined가 "외부"로 교체됨

  function inner() {
    // 3. [inner 함수 컨텍스트 생성]
    // - 내부 변수 등록: innerVar = undefined
    // - 연결 참조: "내 명단에 없으면 부모(outer) 명단을 확인해라" (스코프 체인)

    var innerVar = "내부";

    // 변수를 찾는 과정: 내 명단 확인 -> 없으면 부모 명단 확인 -> 없으면 전역 명단 확인
    console.log(innerVar); // "내부" (내 명단에 있음)
    console.log(outerVar); // "외부" (내 명단엔 없지만 부모 명단에 있음)
    console.log(param);    // "인자값" (부모 명단에 있음)
  }

  inner(); // inner 실행 컨텍스트 생성 및 실행
}

outer("인자값"); // outer 실행 컨텍스트 생성 및 실행