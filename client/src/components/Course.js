import { Tab } from 'semantic-ui-react'
import Chapter from './Chapter';
import Quiz from './Quiz';

function Course({course, user}) {
    let newTabRender = [];

    course.chapters.map((chapter, index) => {
        return newTabRender.push({menuItem: `Ch ${index + 1} ${chapter.title}`, render: () => <Tab.Pane> <Chapter key={chapter.title} chapter = {chapter}/> </Tab.Pane>})
    })

    newTabRender.push({menuItem: `${course.subject} Quiz`, render: () => <Tab.Pane> <Quiz quizquestions = {course.quiz_questions} course={course} user={user}/> </Tab.Pane>})

    return (
        <div className = "chaptertabs">
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={newTabRender} />
        </div>
    )
}

export default Course