# 1. 이미지 관리
docker pull nginx               # 이미지 내려받기
docker images                   # 보유한 이미지 목록 확인
docker rmi [이미지ID]            # 이미지 삭제

# 2. 컨테이너 실행 및 중지
# -d: 백그라운드 실행, -p: 포트 바인딩(호스트:컨테이너), --name: 이름 설정
docker run -d -p 80:80 --name my-web nginx 
docker ps                       # 실행 중인 컨테이너 확인 (-a 추가 시 전체 확인)
docker stop my-web              # 컨테이너 중지
docker rm my-web                # 컨테이너 삭제

# 3. 네트워크 및 내부 접속 (핑 확인 등)
# -it: 터미널로 접속
docker exec -it my-web /bin/bash  # 컨테이너 내부 터미널 진입
# 내부에서 핑 테스트 (이미지에 따라 ping 설치 필요할 수 있음)
apt-get update && apt-get install iputils-ping -y
ping 8.8.8.8