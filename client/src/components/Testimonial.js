import { Divider, Grid, Segment } from 'semantic-ui-react'

function Testimonial({testimonial}) {
    return(
        <>
            <Segment>
              <Grid columns={2} relaxed='very'>
                  <Grid.Column className="testimonialdiv">
                    <img className="testimonialimage" src={testimonial.image} alt={testimonial.author}/>
                  </Grid.Column>
                  <Grid.Column>
                    <h2 className = "testimonialname">From: {testimonial.author}</h2>
                    <h2 className = 'testimonialtext'>"{testimonial.paragraph}"</h2>
                  </Grid.Column>
              </Grid>
              <Divider vertical></Divider>
          </Segment>       
        </>
    )
}

export default Testimonial