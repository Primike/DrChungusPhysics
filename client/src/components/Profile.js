import CompletedCourse from "./CompletedCourse"

function Profile({user, courses}) {
    return (
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <img src={user.image_url} alt="Profile"/>
            <h2>Username:{user.username}</h2>
            <h2>email: {user.email}</h2>
            <br/>
            <br/>
            <br/>
            <h2>Completed Courses:</h2>
            {courses.map((x) => {
                return(
                    <CompletedCourse course={x} key = {x.id}/>
                )
            })}
        </div>
    )
}

export default Profile