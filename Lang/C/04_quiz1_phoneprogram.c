#include<stdio.h>
#include<stdlib.h>

//Q-----전화번호부 프로그램(보기/추가/종료 기능)


struct list {
	char name[10];
	char age[5];
	char phonenum[15];
};

char output(int cnt, struct list* p) {
	for (int i=0;i<cnt;i++) {
		printf("%s\t", p[i].name);
		printf("%s\t", p[i].age);
		printf("%s\n", p[i].phonenum);
	}
	printf("계속? y/n");
	char j;
	scanf(" %c", &j);

	return j;
}

void input(int cnt, struct list* p) {
	printf("이름을 입력: ");
	scanf("%s", p[cnt-1].name);
	printf("\n");
	printf("나이 입력: ");
	scanf(" %s", &p[cnt-1].age);
	printf("\n");
	printf("전화번호 입력: ");
	scanf(" %s", &p[cnt-1].phonenum);
	printf("\n");

}

int main(void) {

	int cnt = 0;
	struct list* p = (struct list*)malloc(sizeof(struct list)*100);

	for (;;) {
		printf("1.전화번호 보기\n");
		printf("2.전화번호 추가\n");
		printf("3.종료하기\n");
		printf("번호선택: ");

		int select = 0;
		scanf("%d", &select);

		if(select == 1) {
			char j = output(cnt, p);
			if (j == 'y') {
				continue;
			}
			else if (j == 'n') {
				printf("프로그램을 종료합니다.");
				break;
			}
		}
		else if (select == 2) {
			cnt = cnt + 1;
			input(cnt, p);
		}
		else if (select == 3) {
			printf("프로그램을 종료합니다.");
			break;
		}
	}
	free(p);
	return 0;
}