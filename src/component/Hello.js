export default function Hello() {

    function showName() {
        console.log('Abel');
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button onClick={
                () => {
                    console.log(30)
                }
            }>Show age</button>

        </div>);
}
