import { create, all } from 'mathjs'
import { Form, Button, Divider, Grid, Segment } from 'semantic-ui-react'
import { useState } from "react";

function SimpsonsRule () {
    const [f, setF] = useState("x")
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [intervals, setIntervals] = useState(100)

    const [integral,setIntegral] = useState()
    const math = create(all,  {})
    const parser = math.parser()

    function computeIntegral(e) {
        e.preventDefault()
        let eqn = f 
        let a = parseFloat(start)
        let b = parseFloat(end)
        let r = parseFloat(intervals)
        let h = (b-a)/r  
        parser.evaluate(`f(x) = ${eqn}`)
        let s = parser.evaluate(`f(${a})`) + parser.evaluate(`f(${b})`)

        for (let i = 1; i < r; i+=2) {
            s += 4*parser.evaluate(`f(${a+i*h})`)
        }
        for (let i = 2; i < r; i+=2) {
            s += 2*parser.evaluate(`f(${a+i*h})`)
        }

        s = s*h/3
        setIntegral(s.toFixed(10))    
    }

    return (
        <div className = "numericalmethoddiv">
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column className = "simpsonsrule" >
                        <Form onSubmit={computeIntegral} className = "findroot">
                            <h1 className="methodtitle">Simpson's Rule</h1>
                            <Form.Field>
                                <h3>Equation:</h3>
                                <Form.Input width={4} placeholder='Equation' onChange={(e) => setF(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>Start Point:</h3>
                                <Form.Input width={4} placeholder='Start' onChange={(e) => setStart(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>End Point:</h3>
                                <Form.Input width={4} placeholder='End' onChange={(e) => setEnd(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>Intervals:</h3>
                                <Form.Input width={4} placeholder='Intervals' value = {intervals} onChange={(e) => setIntervals(e.target.value)}/>
                            </Form.Field>
                            <Button type="submit">Compute</Button>
                            <h3>Definite Integral = {integral}</h3>
                        </Form>
                    </Grid.Column>
                    <Grid.Column className = "simpsonsrule">
                        <a href="https://www.mathauditor.com/menu-includes/images/simp2.png" >
                            <img src="https://www.mathauditor.com/menu-includes/images/simp2.png" alt = 'numericalimage' className = "numericalimage"/>
                        </a>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}

export default SimpsonsRule