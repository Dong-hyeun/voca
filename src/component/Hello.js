export default function Hello() {

    function showName() {
        console.log('Abel')
    }


    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>show name</button>
            <button onClick={
                () => {
                    console.log(30)
                }
            }>show age</button>
        </div>);
}