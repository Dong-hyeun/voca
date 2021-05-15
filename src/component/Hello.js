import { useState } from 'react';
export default function Hello({ age }) {
    const [name, setName] = useState('Abel');
    const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';

    return (
        <div>
            <h2>{name}({age}):({msg})</h2>
            <button
                onClick={() => {
                    setName(name === 'Abel' ? 'Jane' : 'Abel');
                }}
            >
                Change
            </button>
        </div>);
}
