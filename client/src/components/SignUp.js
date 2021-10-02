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
          <input
            placeholder='First Name'
            type="text"
            id="first_name"
            autoComplete="off"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Last Name</label>
          <input
            placeholder='Last Name'
            type="text"
            id="last_name"
            autoComplete="off"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Email</label>
          <input
            placeholder='Email'
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Profile Picture</label>
          <input
            placeholder='Profile Picture'
            type="text"
            id="username"
            autoComplete="off"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input
            placeholder='Username'
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
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
