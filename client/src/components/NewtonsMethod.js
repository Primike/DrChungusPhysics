import { create, all, math } from 'mathjs'
import { Form, Button } from 'semantic-ui-react'
import { useState } from "react";

function NewtonsMethod () {
    const [f, setF] = useState("x")
    const [solut,setSolut] = useState()
    const [gues, setGues] = useState()
    const [trialz, setTrialz] = useState()
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
        setSolut(guess.toFixed(10))    
    }

    return (
        <>
            <Form onSubmit={findRoot} className = "findroot">
                <h1>Newton's Method</h1>
                <Form.Field>
                    <h3>Equation:</h3>
                    <Form.Input width={4} placeholder='Equation' onChange={(e) => setF(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <h3>Initial Guess:</h3>
                    <Form.Input width={4} placeholder='Initial Guess' onChange={(e) => setGues(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <h3>Trials:</h3>
                    <Form.Input width={4} placeholder='Trials' onChange={(e) => setTrialz(e.target.value)}/>
                </Form.Field>
                <Button type="submit">Compute</Button>
            </Form>
            <h3>Root = {solut}</h3>
        </>
    )
}

export default NewtonsMethod