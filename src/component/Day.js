//특정 날짜를 클릭시 단어들어나오는 페이지
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../myHooks/useFetch';
import World from './Word';

export default function Day() {
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

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

