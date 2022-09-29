import ShowRemainingTime from './show-remaining-time';
import ReactDom from 'react-dom'
import React, { useState } from 'react';
import './styles.css'

const image = <div style={{
    backgroundImage: "url(" + "/image" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}}></div>

function App() {
    const [timeLeft, setTimeLeft] = useState(new Date('10/13/2022 00:00 AM') - new Date())

    setInterval(function() {
        setTimeLeft(new Date('10/13/2022 00:00 AM') - new Date())
    }, 1000)

    return (<>
        { timeLeft >= 0 ? <strong><ShowRemainingTime/></strong> : image }
    </>)
}

ReactDom.render(<App/>, document.getElementById('root'));