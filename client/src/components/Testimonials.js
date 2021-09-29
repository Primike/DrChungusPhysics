import { useState } from "react";
import Testimonial from "./Testimonial";

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
        <div className = 'newstock'>
            {testimonials.map((testimonial) => (
                <Testimonial testimonial = {testimonial} key = {testimonial.id}/>
            ))}
            <h2 className = 'addnewstock'>Add testimonial</h2>
            <form className="newstock" onSubmit={handleSubmit}>
                <label className="labeladdname">
                    From: {}
                    <input
                        className ='addstockname' 
                        type="text" 
                        name="name" 
                        value = {name} 
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <br/>
                <label className="labeladdimage">
                    Image URL: {}
                    <input 
                        className = 'addlogo'
                        type="text" 
                        name="image_url" 
                        value = {image_url} 
                        onChange={(e) => setImageURL(e.target.value)} />
                </label>
                <br/>
                <label className="labeladdprice">
                    Text: {}
                    <input 
                        className = 'addprice'
                        type="text" 
                        name="text" 
                        value = {text} 
                        onChange={(e) => setText(e.target.value)} />
                </label>
                <button className = 'addbutton' type="submit">Launch</button>
                <hr/>
            </form>
        </div>
    )
}

export default Testimonals