import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import UserHome from "./UserHome"
import Courses from "./Courses";
import Course from  "./Course"
import Login from "./Login";
import NavBar from "./NavBar";
import Graph from "./Graph.tsx";
import WelcomePage from "./WelcomePage";
import 'semantic-ui-css/semantic.min.css'
import NumericalMethods from "./NumericalMethods";

function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([])

  const [equation, setEquation] = useState()
  const [derivative, setDerivative] = useState()

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

console.log(equation, derivative)
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/courses">
              <Courses courses = {courses}/>
            </Route>
            <Route path="/numericalmethods">
              <NumericalMethods setEquation = {setEquation} setDerivative={setDerivative} />
            </Route>
            <Route path="/graph">
              <Graph equation = {equation} derivative = {derivative}/>
            </Route>
            {courses.map((x) => (
              <Route path = {`/${x.subject}`} key ={`${x.subject}x`}>
                <Course course={x} />
              </Route>
            ))}
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
