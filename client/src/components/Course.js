import { useState, useEffect } from 'react';
import { Tab } from 'semantic-ui-react'
import Chapter from './Chapter';
import Quiz from './Quiz';

function Course({course, user}) {
    let newTabRender = [];

    const [usercourse, setUserCourse] = useState([])
	useEffect(() => {
		fetch('/user_courses')
		.then(res => res.json())
		.then(usercourses => setUserCourse(usercourses.filter(
			usercourse => {
				if (usercourse.user_id === user.id && usercourse.course_id === course.id) {
					return usercourse}})))
	}, [])

    course.chapters.map((chapter, index) => {
        return newTabRender.push({menuItem: `Ch ${index + 1} ${chapter.title}`, render: () => <Tab.Pane> <Chapter key={chapter.title} chapter = {chapter}/> </Tab.Pane>})
    })

    newTabRender.push({menuItem: `${course.subject} Quiz`, render: () => <Tab.Pane> <Quiz usercourse={usercourse} setUserCourse={setUserCourse} quizquestions = {course.quiz_questions} course={course} user={user}/> </Tab.Pane>})

    return (
        <div className = "chapters">
            <Tab menu={{ fluid: true, vertical: true, tabular: true}} panes={newTabRender} />
        </div>
    )
}

export default Course