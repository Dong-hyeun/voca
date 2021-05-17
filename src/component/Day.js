//특정 날짜를 클릭시 단어들어나오는 페이지
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import World from './Word';

export default function Day() {
    const { day } = useParams();
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res => res.json())
            .then(data => setWords(data));
    }, [day]);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <World word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

