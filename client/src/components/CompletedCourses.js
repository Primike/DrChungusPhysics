import CompletedCourse from "./CompletedCourse"

function CompletedCourses({courses}) {
    return (
        <>
            <h1>Completed Courses Will Show Up Here!</h1>
            <div className ="courses">
                {courses ?
                    courses.map((x) => {
                        return(
                            <CompletedCourse course={x} key = {x.id}/>
                        )
                    })
                    :
                    <>
                    </>              
                }
            </div>
        </>
    )
}

export default CompletedCourses