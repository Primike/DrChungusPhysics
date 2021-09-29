import { useEffect, useState } from "react";

function UserHome({user}) {

    const [dailypic, setDailyPic] = useState()
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=dqeGb7Xo6YTA7eMnGkqvXdpI4j5nsWa8H4YyoBnT')
        .then(res => res.json())
        .then(x => setDailyPic(x))
    }, [])

    return (
        <>
            {dailypic ? (
                <>
                <h1>Welcome, {user.username}! here is you NASA pic of the day</h1>
                <br/>
                <h2>{dailypic.title}</h2>
                <h3>{dailypic.date}</h3>
                <a href={dailypic.url}>
                    <img src={dailypic.url} alt = {dailypic.title}/>
                </a>
                <p>{dailypic.explanation}</p>
            </>
            ) 
            : (<h1></h1>)}
        </>
    )
}

export default UserHome