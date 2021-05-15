//특정 날짜를 클릭시 단어들어나오는 페이지

import dummy from '../db/data.json';
export default function Day() {
    //dummy.words
    const { words } = dummy;
    const day = 3;
    const wordList = words.filter(word => (
        word.day === day
        // word.day 이 day 인 것만 필터링
    ));
    console.log(wordList)

    return <>
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
}