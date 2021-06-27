import { useEffect, useState } from "react";
import axios from 'axios';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {console.log('data', data); setData(data)});
    // }, [url]);

    useEffect(() => {
        axios(url)
            .then(res => {
                console.log('data', res.data)
                const data = res.data;
                setData(data)
              })
            .catch(err => console.error(err));
    }, [url]);
    return data;
}