#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct list {
    char name[10];
    char age[5];
    char phonenum[15];
};

// 1. 파일에서 데이터 불러오기 (프로그램 시작 시)
int load_data(struct list* p) {
    FILE* fp = fopen("phonebook.txt", "r");
    if (fp == NULL) return 0; // 파일이 없으면 0명 반환

    int i = 0;
    // 파일 끝(EOF)까지 이름, 나이, 번호를 읽어옴
    while (fscanf(fp, "%s %s %s", p[i].name, p[i].age, p[i].phonenum) != EOF) {
        i++;
    }
    fclose(fp);
    return i; // 읽어온 데이터 개수 반환
}

// 2. 파일에 데이터 저장하기 (데이터 추가 시)
void save_data(int cnt, struct list* p) {
    FILE* fp = fopen("phonebook.txt", "w"); // "w" 모드로 새로 덮어쓰기
    if (fp == NULL) return;

    for (int i = 0; i < cnt; i++) {
        fprintf(fp, "%s %s %s\n", p[i].name, p[i].age, p[i].phonenum);
    }
    fclose(fp);
}

char output(int cnt, struct list* p) {
    printf("\n--- 전화번호부 리스트 ---\n");
    for (int i = 0; i < cnt; i++) {
        printf("%d. %s\t%s\t%s\n", i + 1, p[i].name, p[i].age, p[i].phonenum);
    }
    printf("-----------------------\n");
    printf("계속하시겠습니까? (y/n): ");
    char j;
    scanf(" %c", &j);
    // 버퍼 비우기 (getchar 활용)
    while (getchar() != '\n'); 
    return j;
}

void input(int cnt, struct list* p) {
    printf("이름 입력: ");
    scanf("%s", p[cnt - 1].name);
    printf("나이 입력: ");
    scanf("%s", p[cnt - 1].age);
    printf("전화번호 입력: ");
    scanf("%s", p[cnt - 1].phonenum);
    printf("데이터가 추가되었습니다.\n\n");
}

int main(void) {
    int cnt = 0;
    struct list* p = (struct list*)malloc(sizeof(struct list) * 100);

    // 프로그램 시작 시 파일에서 데이터 로드
    cnt = load_data(p);

    for (;;) {
        printf("\n[메뉴] 1.보기 2.추가 3.종료\n");
        printf("번호선택: ");

        int select = 0;
        if (scanf("%d", &select) != 1) { // 숫자가 아닌 입력 방어
            while (getchar() != '\n');
            continue;
        }

        if (select == 1) {
            if (cnt == 0) {
                printf("등록된 데이터가 없습니다.\n");
                continue;
            }
            char j = output(cnt, p);
            if (j == 'n') break;
        }
        else if (select == 2) {
            cnt++;
            input(cnt, p);
            save_data(cnt, p); // 추가될 때마다 파일에 기록
        }
        else if (select == 3) {
            printf("프로그램을 종료합니다.\n");
            break;
        }
    }

    free(p);
    return 0;
}