import CourseCard from './CourseCard'

function Courses({courses}) {
    return (
        <div className ="courses">
            {courses.map((x) => (
                <CourseCard course = {x} key ={x.subject} />
            ))}           
        </div>
    )
}

export default Courses