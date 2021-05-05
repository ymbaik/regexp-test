# 정규표현식(RegExp)

정규식, Regular Expression

## 역활

- 문자 검색(search)
- 무자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com

## 정규식 생성

```js
// 생성자
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')  
//gi : 정규표현식에 일치하는 모든것을 검색하겠다는 의미(g), 대소문자 구분하지 않겠다(i)

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdapi.com/?apikey=7035c60c$s=frozen
The quick brown fox jumps ver the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(분자열)` | 일치 여부(Boolean) 반환 
match	| `문자열.match(정규식)` |	일치하는 문자열의 배열(Array) 반환
replace	| `문자열.replace(정규식,대체문자)` |	일치하는 문자열을 대체하고 대체된 문자열(String) 반환

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 중 일치(multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(line) 시작에 있는 ab와 일치
ab$ | 줄(line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a\|b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 여속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | 영어 소문자
[A-Z] | 영어 대문자
[0-9] | 숫자
[가-힣] 한글
\w | 63개 문자(word, 대소영문 52개, 숫자 10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(boundary)
\d | 숫자에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(lookhead)
(?<=) | 뒤쪽 일치(lookbehind)
