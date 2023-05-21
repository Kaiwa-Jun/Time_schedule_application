
// 時間表示処理

import { useState, useEffect } from 'react';

const useClock = () => {
    const [time, setTime] = useState({
        date: '',
        clockTime: ''
    });

    useEffect(() => {
        const clock = () => {
        const d = new Date();
    
        let year = d.getFullYear().toString();
        let month = (d.getMonth() + 1).toString();
        let date = d.getDate().toString();
        let dayNum = d.getDay();
        const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let day = weekday[dayNum];
        let hour = d.getHours().toString();
        let min = d.getMinutes().toString();
        let sec = d.getSeconds().toString();

        month = month.length < 2 ? "0" + month : month;
        date = date.length < 2 ? "0" + date : date;
        hour = hour.length < 2 ? "0" + hour : hour;
        min = min.length < 2 ? "0" + min : min;
        sec = sec.length < 2 ? "0" + sec : sec;
    
        let today = `${year}.${month}.${date} ${day}`;
        let clockTime = `${hour}:${min}:${sec}`;

        setTime({ date: today, clockTime });
        };

        const timerId = setInterval(clock, 1000);
        return () => clearInterval(timerId);
    }, []);

    return time;
};
export default useClock;