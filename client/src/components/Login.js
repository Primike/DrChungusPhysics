import { useState } from "react";
import { Button, Form } from 'semantic-ui-react'

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className = "logindiv">
      <Form className ="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Field>
        <label>Username</label>
        <Form.Input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        </Form.Field>
        <Form.Field>
        <label htmlFor="password">Password</label>
        <Form.Input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
