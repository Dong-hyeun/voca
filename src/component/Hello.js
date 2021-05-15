import { useState } from 'react';
export default function Hello(props) {
    console.log(props)
    const [name, setName] = useState('Abel');
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h2>{name}({age})</h2>
            <button
                onClick={() => {
                    setName(name === 'Abel' ? 'Jane' : 'Abel');
                    setAge(age + 1)
                }}
            >
                Change
            </button>
        </div>);
}
