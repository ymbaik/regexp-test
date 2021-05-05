// const str = 'hello 
// world'
// 중간에 줄바꿈 해도 에러 미발생 --> backtick 기호 사용
// const str = `hello 
// world`

// const : 재할당이 안됨
// let : 재할당이 가능한 블럭단위내 영향력 있음
//backtick : `` 백틱 안에있는 문자열을 하나의 문자열로 묶어줌
// ^ : 글의 시작
// $ : 글의 끝

let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdapi.com/?apikey=7035c60c$s=frozen
The quick brown fox jumps ver the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// 검색옵션
// g :정규표현식에 일치하는 모든것을 검색하겠다는 의미
// i : 대소문자 구분하지 않겠다

// const regexp = new RegExp('the', 'gi') //생성자 방식
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// str = str.replace(regexp,'AAA')
// console.log(str)

//이크세이프 문자: 특수문자를 일반문자로 인식하게함 : \

// const regexp = /\./gi
// console.log(str.match(regexp))
//문자데이터 끝에 마침표가 있는지 검색(.$)
// const regexp = /\.$/gim
// console.log(str.match(regexp))

//줄끝이 d로 시작하는 경우
// console.log(str.match(/d$/gm))

// //시작줄이 t, T로 시작하는 경우
// console.log(str.match(/^t/gim))

// //모든 줄에서 d가 연속해서 2개 있는 경우
// console.log(str.match(/d{2}/gim))

//숫자(w)+문자(g)를 포함 바뀌는 부분을 경계로 
// console.log(str.match(/\b\w{2,3}\b/g))

// console.log(str.match(/[fox]/g))

// console.log(str.match(/[0-9]/g))

//숫자 하나이상 {1,}
// console.log(str.match(/[0-9]{1,}/g))

// console.log(str.match(/[가-힣]{1,}/g))

// console.log(str.match(/\w/g))

// console.log(str.match(/\b/g))

// console.log(str.match(/\w{1,}/g))

//\b 63개 문자가 아닌 경계에서 f로 시작해서
//\w{1,} 63개 문자들이 연속해서 1개이상
//63개 문자 아닌 경계
// console.log(str.match(/\bf\w{1,}\b/g))

// console.log(str.match(/\d/g))

// console.log(str.match(/\d{1,}/g))

//모든 공백문자 출력 (공백 + 줄바꿈 + 띄어쓰기)
// console.log(str.match(/\s/g))

// const h = `   the hello  world   !

// `
// console.log(h.replace(/\s{1,}/g, ' '))

//앞쪽 일치 패턴(@를 기준으로 앞쪽 패턴)
// console.log(str.match(/.{1,}(?=@)/g))

//뒤쪽 일치 패턴(@를 기준으로 뒤쪽 패턴)
console.log(str.match(/(?<=@).{1,}/g))

