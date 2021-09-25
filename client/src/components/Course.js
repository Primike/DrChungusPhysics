import { Tab } from 'semantic-ui-react'
import Chapter from './Chapter';
import Quiz from './Quiz';

function Course({course}) {
    let newTabRender = [];

    course.chapters.map((chapter) => {
        return newTabRender.push({menuItem: `Ch ${chapter.id} ${chapter.title}`, render: () => <Tab.Pane> <Chapter key={chapter.title} chapter = {chapter}/> </Tab.Pane>})
    })

    newTabRender.push({menuItem: `${course.subject} Quiz`, render: () => <Tab.Pane> <Quiz quizquestions = {course.quiz_questions}/> </Tab.Pane>})

    return (
        <div className = "chaptertabs">
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={newTabRender} />
        </div>
    )
}

export default Course