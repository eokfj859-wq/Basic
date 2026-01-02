#include <stdio.h>

/**
 * [기초 문법 요약]
 * 변수, 자료형, 조건문, 반복문 예제
 */
int main() {
    // 1. 변수와 자료형
    int age = 25;           // 정수
    float height = 175.5f;  // 실수
    char grade = 'A';       // 문자

    // 2. 조건문 (if-else)
    if (age >= 20) {
        printf("성인입니다.\n");
    } else {
        printf("미성년자입니다.\n");
    }

    // 3. 반복문 (for) - 1부터 5까지 출력
    printf("반복문 실행: ");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\n");

    return 0;
}