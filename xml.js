const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");

// const data = {
//     UserId: 100,
//     id: 100,
//     title: "JSON 전송 테스트 해보기",
//     author: "하정목"
// };

xhr.send(); // 요청 정보
xhr.onload = () => {
    if(xhr.status === 200) { // 정상적인 응답
        const res = JSON.parse(xhr.response); // JSON 데이터를 객체로 변경
        console.log(res);
    } else {
        console.log(xhr.status, xhr.statusText); // 응답 상태와 응답 메세지를 출력
    }
}

