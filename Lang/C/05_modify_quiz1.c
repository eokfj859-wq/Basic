#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//-----Q.전화번호부 문제 (보기/생성/삭제/종료 + 메모장 기록)

struct list {
	char name[10];
	char age[5];
	char phonenum[15];
};

// 파일에서 데이터 불러오기
int load_data(struct list* p) {
	FILE* fp = fopen("phonebook.txt", "r");
	if (fp == NULL) return 0;

	int i = 0;
	while (fscanf(fp, "%s %s %s", p[i].name, p[i].age, p[i].phonenum) != EOF) {
		i++;
	}
	fclose(fp);
	return i;
}

// 파일에 현재 배열 상태를 그대로 저장 (수정/삭제 반영)
void save_data(int cnt, struct list* p) {
	FILE* fp = fopen("phonebook.txt", "w"); // "w"는 기존 내용을 지우고 새로 씁니다.
	if (fp == NULL) return;

	for (int i = 0; i < cnt; i++) {
		fprintf(fp, "%s %s %s\n", p[i].name, p[i].age, p[i].phonenum);
	}
	fclose(fp);
}

// 삭제 기능 추가
int delete_data(int cnt, struct list* p) {
	char target[10];
	int found = -1;

	printf("삭제할 이름 입력: ");
	scanf("%s", target);

	// 1. 이름 찾기
	for (int i = 0; i < cnt; i++) {
		if (strcmp(p[i].name, target) == 0) {
			found = i;
			break;
		}
	}

	// 2. 삭제 처리 (데이터 당기기)
	if (found != -1) {
		for (int i = found; i < cnt - 1; i++) {
			p[i] = p[i + 1]; // 뒤에 있는 데이터를 앞으로 한 칸씩 복사
		}
		printf("%s님의 정보를 삭제했습니다.\n", target);
		return cnt - 1; // 개수 1 감소
	}
	else {
		printf("해당 이름을 찾을 수 없습니다.\n");
		return cnt; // 개수 유지
	}
}

void output_list(int cnt, struct list* p) {
	printf("\n--- 전화번호부 리스트 (총 %d명) ---\n", cnt);
	for (int i = 0; i < cnt; i++) {
		printf("%d. %s\t%s\t%s\n", i + 1, p[i].name, p[i].age, p[i].phonenum);
	}
	printf("-------------------------------\n");
}

void input_data(int cnt, struct list* p) {
	printf("이름 입력: ");
	scanf("%s", p[cnt - 1].name);
	printf("나이 입력: ");
	scanf("%s", p[cnt - 1].age);
	printf("전화번호 입력: ");
	scanf("%s", p[cnt - 1].phonenum);
}

int main(void) {
	int cnt = 0;
	struct list* p = (struct list*)malloc(sizeof(struct list) * 100);

	cnt = load_data(p);

	for (;;) {
		printf("\n[메뉴] 1.보기 2.추가 3.삭제 4.종료\n");
		printf("번호선택: ");

		int select = 0;
		scanf("%d", &select);

		if (select == 1) {
			output_list(cnt, p);
		}
		else if (select == 2) {
			cnt++;
			input_data(cnt, p);
			save_data(cnt, p); // 파일 기록
		}
		else if (select == 3) {
			cnt = delete_data(cnt, p);
			save_data(cnt, p); // 삭제된 상태를 파일에 새로 기록
		}
		else if (select == 4) {
			printf("프로그램을 종료합니다.\n");
			break;
		}
	}

	free(p);
	return 0;
}
