import { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

function SignUp({ setUser }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image_url,setImageUrl] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        image_url,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className = "signupdiv">
      <Form onSubmit={handleSubmit} className = "signup">
        <h1>Sign Up</h1>
        <Form.Field>
          <label htmlFor="username">First Name</label>
          <Form.Input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Last Name</label>
          <Form.Input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Email</label>
          <Form.Input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Profile Picture</label>
          <Form.Input placeholder='Profile Picture' onChange={(e) => setImageUrl(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <Form.Input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <Form.Input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password Confirmation</label>
          <Form.Input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignUp;
