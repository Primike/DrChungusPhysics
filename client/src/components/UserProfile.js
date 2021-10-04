import { Divider, Grid, Segment } from 'semantic-ui-react'

function UserProfile({user}) {
    return (
        <div className = "numericalmethoddiv">
            <Segment>
              <Grid columns={2} relaxed='very'>
                  <Grid.Column className="profilediv">
                    <h1 className = "names">{user.first_name} {user.last_name}</h1>
                    <h2 className = "username">Username: {user.username}</h2>
                    <h2 className = "email">Email: {user.email}</h2>
                  </Grid.Column>
                  <Grid.Column> 
                    <img src={user.image_url} alt="Profile" className = "profileimage"/>
                  </Grid.Column>
              </Grid>
              <Divider vertical></Divider>
            </Segment> 
        </div>
    )
}

export default UserProfile