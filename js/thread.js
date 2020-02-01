// 자바스크립트 실행순서 알기 : 싱글 thread > cpu 하나를 다 씀
// 코드를 모두 실행하고 마지막에 예약된 큐를 확인해서 실행한다.
// 따라서 실행결과는 동일하다.
// main thread > thread2


console.log("A");

setTimeout(function () { //thread2 만들기
    console.log("B");
}, 0);

console.log("C");

// 만약 무한 루프가 돌면 : a,c thread2로 가야할 시간이 없음
while(true) {}