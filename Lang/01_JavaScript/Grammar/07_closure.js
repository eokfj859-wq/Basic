const counter = (function() {
    let privateCount = 0; // 외부에서 절대로 직접 접근 불가

    return {
        increment: function() { privateCount++; },
        decrement: function() { privateCount--; },
        getValue: function() { return privateCount; }
    };
})();

counter.increment();
console.log(counter.getValue()); // 1
console.log(counter.privateCount); // undefined (접근 불가, 은닉화 성공)

/**
 * var: 함수 스코프만 따릅니다. 가끔 담장을 넘어 전역 변수처럼 행동할 때가 있어 위험합니다.
let & const: 블록 스코프({ })를 아주 엄격하게 따릅니다. 
그래서 함수 안에 가두면 밖에서 절대로 훔쳐볼 수 없습니다. 
자바의 로컬 변수와 똑같은 성질을 가졌다고 보시면 됩니다.
 */