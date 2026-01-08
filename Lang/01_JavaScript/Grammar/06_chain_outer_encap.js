/**
 * [JS 심화 개념 학습]
 * 1. 스코프 체인 (Scope Chain)
 * 2. 외부 환경 참조 (outerEnvironmentReference)
 * 3. 변수 은닉화 (Variable Encapsulation)
 */

// 전역 스코프 (Global Scope)
let globalVar = "나는 전역 변수야";

function outerFunction() {
    // 외부 함수 스코프 (Outer Scope)
    let outerVar = "나는 외부 함수 변수야";
    let hiddenVar = "이것은 외부에서 접근 불가 (은닉화 예정)";

    console.log("--- outerFunction 실행 중 ---");

    function innerFunction() {
        // 내부 함수 스코프 (Inner Scope)
        let innerVar = "나는 내부 함수 변수야";
        
        /**
         * [개념 1 & 2: 스코프 체인과 outerEnvironmentReference]
         * innerFunction의 'outerEnvironmentReference'는 
         * outerFunction의 스코프를 가리킵니다.
         * 변수를 찾을 때 [내부 -> 외부 -> 전역] 순서로 타고 올라가는데, 
         * 이 연결 고리가 '스코프 체인'입니다.
         */
        console.log(innerVar);  // 1순위: 현재 스코프에서 찾음
        console.log(outerVar);  // 2순위: outerEnvironmentReference를 타고 외부에서 찾음 (스코프 체이닝)
        console.log(globalVar); // 3순위: 더 타고 올라가 전역에서 찾음
    }
     /*
 실생활 비유: 물건 찾기
여러분이 방 안에서 '리모컨'을 찾는다고 가정해 볼게요.
내부(함수) 스코프: 일단 내가 지금 있는 **'내 방'**을 뒤집니다. (찾으면 끝!)
외부(부모 함수) 스코프: 방에 없으면 **'거실'**로 나갑니다. (여기서 찾으면 끝!)
전역(Global) 스코프: 거실에도 없으면 **'마당'**이나 **'공용 복도'**까지 나가서 찾습니다.
이때 **'내 방 -> 거실 -> 마당'**으로 연결된 이동 경로가 바로 스코프 체인이고, 
"내 방 다음은 거실이야"라고 적힌 문틀의 표지판이 outerEnvironmentReference입니다.
 */

    innerFunction();

    /**
     * [개념 3: 변수 은닉화 (Encapsulation)]
     * 클로저(Closure)를 이용해 외부에서 직접 접근할 수 없는 변수를 만드는 기법입니다.
     * 자바의 private 필드와 유사한 효과를 냅니다.
     */
    return {
        getHiddenVar: function() {
            return hiddenVar; // 내부 함수를 통해서만 접근 허용
        },
        setHiddenVar: function(value) {
            hiddenVar = value; // 내부 함수를 통해서만 수정 허용
        }
    };
}

// 실행 및 테스트
const myModule = outerFunction();

console.log("--- 은닉화 테스트 ---");
// console.log(hiddenVar); // ❌ 에러! 외부 스코프에서는 hiddenVar에 직접 접근 불가 (은닉화 성공)

console.log(myModule.getHiddenVar()); // ✅ Getter 메서드를 통해 안전하게 접근
myModule.setHiddenVar("은닉된 값이 변경됨");
console.log(myModule.getHiddenVar());

/**
 * 요약하자면:
 * - outerEnvironmentReference: 내가 태어난 곳의 정보를 담은 '지도'.
 * - 스코프 체인: 그 지도를 따라 변수를 찾아가는 '과정'.
 * - 은닉화: 지도를 외부인에게 보여주지 않고 특정 '통로(함수)'만 열어주는 '보안'.
 * 
 * 왜 클로저로 은닉화를 하나요?
.담장 (은닉화): 함수 안에 let으로 변수를 선언하면, 그 함수 밖에서는 절대로 그 변수를 
직접 건드릴 수 없습니다. (자바의 private 필드와 같습니다.)
.출입문 (클로저): 하지만 변수를 아예 못 쓰면 무용지물이겠죠? 그래서 그 변수를 사용할 수 있는 
내부 함수를 만들어서 밖으로 내보내 줍니다.
.기억력 (클로저의 특성): 이때 클로저 덕분에 이 내부 함수는 밖으로 나가서도 자기가 살던 
방의 변수를 기억하고 수정할 수 있습니다.
 */