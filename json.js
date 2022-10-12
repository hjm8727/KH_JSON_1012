let memberInfo = [
    {
        name: "하정목",
        age: 36,
        job: "프로그래머",
        addr: "서울시 강남구 일원동"
    },
    {
        name: "김꽃분",
        age: 32,
        job: "팀장",
        addr: "의정부시 가능동"
    },
    {
        name: "안유진",
        age: 20,
        job: "아이브",
        addr: "서울시 강남기 청담동"
    }
];

let json = JSON.stringify(memberInfo);
console.log(json);

let objectJson = JSON.parse(json);
console.log(objectJson);