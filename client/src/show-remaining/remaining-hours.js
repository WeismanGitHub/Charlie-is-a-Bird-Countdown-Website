function ShowRemainingHours() {
    const [hours, setHours] = useState(new Date())
    let distance;

    setInterval(function() {
        let now = new Date()
        distance = myBday - now

        setHours(Math.floor((distance % day) / hour))
    }, 1000)

    function Show () {
        if (hours >= 0) {
            return (<h1>{`${hours} ${hours == 1? 'hour,': 'hours,'}`}</h1>)
        }
    }
    
    return <Show/>
}