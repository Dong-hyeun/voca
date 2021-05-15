import dummy from '../db/data.json';
export default function DayList() {
    // console.log(dummy);
    const { days } = dummy;
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>Day {day.day}</li>
            ))}
        </ul >
    );

}