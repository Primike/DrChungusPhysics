import { Card, Image, Button, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

function CompletedCourse({course}) {
    return (
        <div className = "coursecard">
            <Card >
                <Image src={course.subject_image} className = "courseimage"/>
                <Card.Content>
                    <Card.Header>{course.subject}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Button icon labelPosition='right' size='large'><Icon name='right arrow' /><NavLink to={`/${course.subject}`}>View Course</NavLink></Button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default CompletedCourse