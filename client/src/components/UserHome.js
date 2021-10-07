import { useEffect, useState } from "react";
import { Divider, Grid, Segment } from 'semantic-ui-react'

function UserHome({user}) {

    const [dailypic, setDailyPic] = useState()
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=dqeGb7Xo6YTA7eMnGkqvXdpI4j5nsWa8H4YyoBnT')
        .then(res => res.json())
        .then(x => setDailyPic(x))
    }, [])

    return (
        <div>
            {dailypic ? 
                <>
                    <Segment className="userhome">
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                                <a href={dailypic.url} >
                                    <img src={dailypic.url} alt = {dailypic.title} className = "nasaimage"/>
                                </a>
                            </Grid.Column>
                            <Grid.Column className = "nasatext">
                                <h1 className = "welcomenasa">Welcome, {user.username}! Here is you NASA pic of the day</h1>
                                <h2>{dailypic.title}</h2>
                                <h3>{dailypic.date}</h3>             
                                <p>{dailypic.explanation}</p>
                            </Grid.Column>
                        </Grid>
                        <Divider vertical></Divider>
                    </Segment>              
                </>
                : 
                <>
                </>
            }
        </div>
    )
}

export default UserHome