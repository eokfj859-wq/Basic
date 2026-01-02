#include <stdio.h>

/**
 * [배열과 문자열]
 * 데이터를 묶어서 관리하는 방법
 */
int main() {
    // 1. 배열 (Array)
    int scores[3] = {90, 80, 70};
    printf("첫 번째 점수: %d\n", scores[0]); // 인덱스는 0부터 시작

    // 2. 문자열 (String)
    // C에서 문자열은 char 배열이며 끝에 '\0'(널 문자)이 들어감
    char name[6] = "Gemini"; 
    
    printf("이름 출력: %s\n", name);
    
    // 배열의 각 칸에 접근하기
    for(int i = 0; i < 3; i++) {
        printf("scores[%d] = %d\n", i, scores[i]);
    }

    return 0;
}