import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import UserHome from "./UserHome"
import Courses from "./Courses";
import Login from "./Login";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  useEffect(() => {
    fetch('/courses')
    .then(res => res.json())
    .then(courses => setCourses(courses))
}, [])


  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/courses">
              <Courses courses = {courses}/>
            </Route>
            {/* {courses.map((x) => (
              <Route path = {`/${x.subject}`}

            )} */}
            <Route path="/">
              <UserHome user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
