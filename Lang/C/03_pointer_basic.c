#include <stdio.h>

/**
 * [포인터 기초]
 * 주소를 저장하고, 그 주소로 찾아가기
 */
int main() {
    int num = 100;      // 일반 변수
    int *ptr = &num;    // 포인터 변수 ptr을 선언하고 num의 주소(&)를 저장

    printf("1. num의 값: %d\n", num);
    printf("2. num의 주소값 (&num): %p\n", (void*)&num);
    printf("3. 포인터 ptr이 저장한 값 (num의 주소): %p\n", (void*)ptr);

    // 4. 역참조 연산자 (*) : 주소로 가서 실제 값을 가져옴
    printf("4. ptr이 가리키는 곳의 실제 값 (*ptr): %d\n", *ptr);

    // 5. 포인터를 통한 값 변경
    *ptr = 200; // ptr이 가리키는 주소(num)의 값을 직접 200으로 바꿈
    printf("5. 변경 후 num의 값: %d\n", num);

    return 0;
}