import { useState } from "react";
import Testimonial from "./Testimonial";
import { Form, Button } from 'semantic-ui-react'

function Testimonals({testimonials, handleAddTestimonial}) {
    const [name, setName] = useState("");
    const [image_url, setImageURL] = useState("")
    const [text, setText] = useState("")

    function handleSubmit(event) {       
        event.preventDefault();
    
        fetch("/testimonials", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: name,
            paragraph: text,
            image: image_url,
          }),
        })
          .then((resp) => resp.json())
          .then((testimonial) => {
            handleAddTestimonial(testimonial);
            setName("");
            setImageURL('')
            setText('')
          });
          
      }

    return (
        <>

            <h1 className="testimonialshead">Testimonials</h1>       
                <div className = "testimonialform">
                    <Form onSubmit={handleSubmit} className = "addtestimonial">
                        <h1>Add testimonial</h1>
                        <Form.Field>
                            <h3>From:</h3>
                            <Form.Input placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <h3>Image URL: {}</h3>
                            <Form.Input placeholder='Image' value = {image_url} onChange={(e) => setImageURL(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <h3>Text: {}</h3>
                            <Form.Input placeholder='Text' value = {text} onChange={(e) => setText(e.target.value)}/>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
                <div className = "numericalmethoddiv">
                    {testimonials.map((testimonial) => (
                      <Testimonial testimonial = {testimonial} key = {testimonial.id}/>
                    ))}
                </div>
        </>
    )
}

export default Testimonals