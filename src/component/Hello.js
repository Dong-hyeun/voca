import { useState } from 'react';
export default function Hello() {
    const [name, setName] = useState('Abel');

    function changeName() {
        const newName = name === 'Abel' ? 'Jane' : 'Abel';
        setName(newName)
    }
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>);
}
