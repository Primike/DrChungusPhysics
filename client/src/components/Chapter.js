import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

function Chapter({chapter}) {
    return (
        <Segment className = "chaptercontent">
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <a href={chapter.image} >
                        <img src = {chapter.image} alt = {`${chapter.title}`} className = "chapterimage"/>
                    </a>
                </Grid.Column>
                <Grid.Column>   
                    <h1 className = "chaptertitle">{chapter.title}</h1>
                    <p className = "chaptertext">{chapter.content}</p>
                </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    )
}

export default Chapter
