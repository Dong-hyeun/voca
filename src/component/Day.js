//특정 날짜를 클릭시 단어들어나오는 페이지

import dummy from '../db/data.json';
import { useParams } from 'react-router-dom'
import World from './Word';

export default function Day() {
    //dummy.words
    const { words } = dummy;
    const { day } = useParams();

    const wordList = words.filter(word => word.day === Number(day));

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <World word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>)
}