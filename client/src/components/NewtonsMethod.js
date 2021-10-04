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
                <label htmlFor="username">Equation:</label>
                <input
                    placeholder='Equation'
                    type="text"
                    id="f"
                    autoComplete="off"
                    onChange={(e) => setF(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label htmlFor="username">Initial Guess:</label>
                <input
                    placeholder='Initial Guess'
                    type="text"
                    id="gues"
                    autoComplete="off"
                    onChange={(e) => setGues(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label htmlFor="username">Trials:</label>
                <input
                    placeholder='Trials'
                    type="text"
                    id="trials"
                    autoComplete="off"
                    onChange={(e) => setTrialz(e.target.value)}
                />
                </Form.Field>
                <Button type="submit">Compute</Button>
            </Form>
            <h3>Root = {solut}</h3>
        </>
    )
}

export default NewtonsMethod