import CourseCard from './CourseCard'

function Courses({courses}) {
    return (
        <>
            {courses.map((x) => (
                <CourseCard course = {x} key ={x.subject} />
            ))}
            
        </>
    )
}

export default Courses