export default function Hello() {
    let name = 'Abel';

    function changeName() {
        name = name === 'Abel' ? 'Jane' : 'Abel';
        console.log(name)
        //name 은 변경되었지만, DOM 이 업데이트가 안됨
        //위 'Abel' 은 상태(state) 가 아닌 단순한 문자열(값)임
        //위 값을 상태값으로 바꾸고, setState 함수를 사용하여
        //상태값을 변경해야함 
    }
    return (
        <div>
            <h1>state</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>);
}
