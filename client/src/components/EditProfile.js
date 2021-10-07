import { useState } from "react";
import { Button, Form } from 'semantic-ui-react'



function EditProfile({user, setUser}) {
    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [image_url,setImageUrl] = useState(user.image_url)
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`users/${user.id}/`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                username: username,
                email: email,
                image_url: image_url,
                password: password,
                password_confirmation: passwordConfirmation
            }),
        })
            .then((r) => r.json())
            .then((user) => setUser(user))
    }

    return (
        <div className = "editdiv">
          <Form onSubmit={handleSubmit} className = "signup">
            <h1>Edit Profile</h1>
            <Form.Field>
              <label>First Name</label>
              <Form.Input placeholder='First Name' value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <Form.Input placeholder='Last Name' value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Form.Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>Profile Picture</label>
              <Form.Input placeholder='Profile Picture' value={image_url} onChange={(e) => setImageUrl(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <Form.Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>New Password</label>
              <Form.Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>New Password Confirmation</label>
              <Form.Input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      );
}
export default EditProfile