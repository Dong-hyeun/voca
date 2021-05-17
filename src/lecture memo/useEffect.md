# useEffect

## &nbsp; - useEffect는 어떤 상태값이 변경될 때, 동작하는

## &nbsp;&nbsp;&nbsp;&nbsp; 함수를 작성할 수 있음

## &nbsp;- 이 함수가 호출되는 시점은 랜더링의 결과가 실제

## &nbsp;&nbsp;&nbsp;&nbsp; DOM 에 반영된 즉후이다.

## &nbsp;- 따라서 랜더링 작업이 끝난 후, 어떤 작업을 하도록

## &nbsp;&nbsp; 할 때 사용

## &nbsp;&nbsp;&nbsp;&nbsp; ex) (외부) api 호출

## &nbsp;- useEffect는 원하지 않는 경우에도 호출될 수 있다.

## &nbsp;&nbsp;&nbsp;&nbsp; (이 부분은 최적화에 관련됨)

## &nbsp;- 따라서 해당 상태값이 변경될 때에만 호출되도록

## &nbsp;&nbsp;&nbsp;&nbsp; 두번째 인자에 배열을 넣고, 변경될 상태값을 넣어준다.

<br>

```javascript
   (code 예제)

    useEffect(() => {
        console.log('Count change')
    }, [count]);
```

## → count 값이 변경될에만 랜더링된다.

## → 이러한 배열을 의존성 배열이라 함

## → 즉 의존성 배열의 값이 변경되는 경우에만

## &nbsp;&nbsp;&nbsp; 랜더링된다.

## (useEffect 인자로 넣은 첫번째 함수가 호출된다.)

## - 랜더링이 완료된 후에 최초 1번만 랜더링되도록 하려면

## &nbsp;&nbsp;두번째 인자에 빈배열을 넣어준다.

## → 외부 api를 호출할 때, 최초 1번 랜더링되도록 설정
