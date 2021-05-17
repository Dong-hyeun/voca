import { Link } from 'react-router-dom';
import useFetch from '../myHooks/useFetch';

export default function DayList() {
    const days = useFetch('http://localhost:3001/days')
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