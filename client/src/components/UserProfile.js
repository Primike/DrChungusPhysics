function UserProfile({user}) {
    return (
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <img src={user.image_url} alt="Profile" className = "courseimage"/>
            <h2>Username:{user.username}</h2>
            <h2>email: {user.email}</h2>
            <h2>Completed Courses:</h2>
        </div>
    )
}

export default UserProfile