import { create, all } from 'mathjs'
import { Form, Button, Divider, Grid, Segment } from 'semantic-ui-react'
import { useState } from "react";

function NewtonsMethod () {
    const [f, setF] = useState("x")
    const [solut,setSolut] = useState()
    const [gues, setGues] = useState(1)
    const [trialz, setTrialz] = useState(100)
    const math = create(all,  {})
    const parser = math.parser()

    function findRoot(e) {
        e.preventDefault()
        let fprime = math.derivative(`${f}`, 'x').toString()
        let guess = parseFloat(gues)
        let eqn = f
        let trials = trialz     
        parser.evaluate(`f(x) = ${eqn}`)
        parser.evaluate(`g(x) = ${fprime}`)

        for (let i = 0; i < trials; i++) {
            guess = guess - parser.evaluate(`f(${guess})`)/parser.evaluate(`g(${guess})`)
        }
        setSolut(guess.toFixed(5))    
    }

    return (
        <div className = "numericalmethoddiv">
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column className = "newtonsmethod" >
                        <Form onSubmit={findRoot} className = "findroot">
                            <h1 className="methodtitle">Newton's Method</h1>
                            <Form.Field>
                                <h3>Equation:</h3>
                                <Form.Input width={5} placeholder='Equation' onChange={(e) => setF(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>Initial Guess:</h3>
                                <Form.Input width={5} placeholder='Initial Guess' value = {gues} onChange={(e) => setGues(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>Trials:</h3>
                                <Form.Input width={5} placeholder='Trials' value = {trialz} onChange={(e) => setTrialz(e.target.value)}/>
                            </Form.Field>
                            <Button type="submit">Compute</Button>
                        </Form>
                        <h3>Root = {solut}</h3>
                    </Grid.Column>
                    <Grid.Column className = "newtonsmethod">
                        <a href="https://andymath.com/wp-content/uploads/2019/08/newtons-method-notes.jpg" >
                            <img src="https://andymath.com/wp-content/uploads/2019/08/newtons-method-notes.jpg" alt = 'numericalimage' className = "numericalimage"/>
                        </a>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}

export default NewtonsMethod