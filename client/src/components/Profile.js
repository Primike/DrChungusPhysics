import { useEffect, useState } from "react";
import EditProfile from "./EditProfile"
import {Tab} from 'semantic-ui-react'
import CompletedCourses from "./CompletedCourses";
import UserProfile from "./UserProfile";

function Profile({ user, setUser}) {
    const [userz, setUserz] = useState(null);
    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((userz) => setUserz(userz));
          }
        });
      }, []);

    let newTabRender = [];
    
    newTabRender.push({menuItem: 'UserProfile', render: () => <Tab.Pane> <UserProfile user={user}/> </Tab.Pane>})
    newTabRender.push({menuItem: 'EditProfile', render: () => <Tab.Pane> <EditProfile user={user} setUser={setUser}/> </Tab.Pane>})
    newTabRender.push({menuItem: 'CompletedCourses', render: () => <Tab.Pane> <CompletedCourses courses={userz.courses}/> </Tab.Pane>})

    return (
        <div className= "thetabs">
            <Tab menu={{tabular: true}} panes={newTabRender} />
        </div>
    )
}

export default Profile