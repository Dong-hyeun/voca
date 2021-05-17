//특정 날짜를 클릭시 단어들이 나오는 페이지
import { useParams } from 'react-router-dom';
import useFetch from '../myHooks/useFetch';
import World from './Word';

export default function Day() {
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading ...</span>}
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

