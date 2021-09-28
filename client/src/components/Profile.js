function Profile({user}) {
    return (
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <img src={user.image_url}/>
            <h2>Username:{user.username}</h2>
            <h2>email: {user.email}</h2>
            
        </div>
    )
}

export default Profile