import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

export default function DayList() {
    // console.log(dummy);
    const { days } = dummy;
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul >
    );

    /* 
       리액트에서 앵커태그는 <Link> 로 작성    
    */

}