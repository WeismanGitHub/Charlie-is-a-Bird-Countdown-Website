import { useState } from 'react';

function ShowRemainingDays(endDate, day) {
    const [days, setDays] = useState(new Date())
    let distance;

    setInterval(function() {
        const now = new Date()
        distance = endDate - now

        setDays(Math.floor(distance / day))
    }, 1000)

    return <>{days >= 0 && <h1>{`${days} days,`}</h1>}</>
}

export default ShowRemainingDays