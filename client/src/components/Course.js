import { Card, Image, Button } from 'semantic-ui-react'

function Course({course}) {
    return (
        <Card>
            <Image src={course.subject_image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{course.subject}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Study of quantum objects and interactions
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button>Add Course</Button>
            </Card.Content>
        </Card>
    )
}

export default Course