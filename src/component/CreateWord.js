import { useRef, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../myHooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false
                }),
            }).then(res => {
                if (res.ok) { //응답이 OK이면, state 변경
                    alert('생성이 완료 되었습니다.');
                    history.push(`/day/${dayRef.current.value}`);
                    //useHistory로 생성한 history에 보내고 싶은 주소를
                    //push 하면 해당 페이지로 이동
                    //앵커태그를 사용하지 않고 페이지 전환할 때 유용💛

                    setIsLoading(false);
                }
            })
        }

    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input
                    type="text"
                    placeholder="computer"
                    ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input
                    type="text"
                    placeholder="컴퓨터"
                    ref={korRef}
                />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))};
                </select>
            </div>
            <button
                style={{
                    opacity: isLoading ? 0.3 : 1,
                }}
            >
                {isLoading ? 'Saving...' : '저장'}
            </button>
        </form >
    );
}