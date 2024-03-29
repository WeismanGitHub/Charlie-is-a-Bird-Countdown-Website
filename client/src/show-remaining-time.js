import { useState } from 'react';

// order is important
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function ShowRemainingTime() {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    setInterval(function() {
        const distance = new Date('10/13/2022 00:00 AM') - new Date()

        setDays(Math.floor(distance / day))
        setHours(Math.floor((distance % day) / hour))
        setMinutes(Math.floor((distance % hour) / minute))
        setSeconds(Math.floor((distance % minute) / second))
    }, 10)

    return (<>
        {days > 0 ? days : 0} days,
        <br/>
        {hours > 0 ? hours : 0} hours,
        <br/>
        {minutes > 0 ? minutes : 0} minutes,
        <br/>
        and {seconds > 0 ? seconds : 0} seconds...
    </>)
}

export default ShowRemainingTime