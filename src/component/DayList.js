import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DayList() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/days')
            .then(res => res.json())
            .then(data => setDays(data));
    }, []);

    return (
        <div>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul >
        </div>
    );

    /* 
       리액트에서 앵커태그는 <Link> 로 작성    
    */

}