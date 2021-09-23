import Course from './Course'

function Courses({courses}) {
    return (
        <>
            {courses.map((x) => (
                <Course course = {x} key ={x.subject} />
            ))}
            
        </>
    )
}

export default Courses