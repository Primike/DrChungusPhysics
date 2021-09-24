import { Tab } from 'semantic-ui-react'
import Chapter from './Chapter';

function Course({course}) {
    let newTabRender = [];
    console.log(course.chapters)
    course.chapters.map((chapter, index) => {
        newTabRender.push({menuItem: `Ch ${chapter.id} ${chapter.title}`, render: () => <Tab.Pane> <Chapter key={chapter.title} chapter = {chapter}/> </Tab.Pane>})
    })
    return (
        <div className = "thetabs">
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={newTabRender} />
        </div>
    )
}

export default Course