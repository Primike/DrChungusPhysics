import { useState } from "react";
import { Button, Form } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import { create, all, math } from 'mathjs'

function NumericalMethods({setEquation, setDerivative}) {
    const [f, setF] = useState("x")
    const [fprime, setfPrime] = useState("1")
    const math = create(all,  {})
    const parser = math.parser()

    console.log(f, fprime)
    function findRoot(e) {
        e.preventDefault()
        let eqn = f
        let der = fprime
        let trials = 100
        let guess = 6
        parser.evaluate(`f(x) = ${eqn}`)
        parser.evaluate(`g(x) = ${der}`)

        for (let i = 0; i < trials; i++) {
            guess = guess - parser.evaluate(`f(${guess})`)/parser.evaluate(`g(${guess})`)
        }
        
        console.log(guess.toFixed(10))       
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
                <label htmlFor="username">Derivative:</label>
                <input
                    placeholder='Derivative'
                    type="text"
                    id="fPrime"
                    autoComplete="off"
                    onChange={(e) => setfPrime(e.target.value)}
                />
                </Form.Field>
                <Button type="submit">Compute</Button>
            </Form>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1>Function Grapher</h1>
            <Form className = "findroot">
                <Form.Field>
                <label htmlFor="username">Equation:</label>
                <input
                    placeholder='Equation'
                    type="text"
                    id="equation"
                    autoComplete="off"
                    onChange={(e) => setEquation(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label htmlFor="username">Derivative:</label>
                <input
                    placeholder='Optional'
                    type="text"
                    id="derivative"
                    autoComplete="off"
                    onChange={(e) => setDerivative(e.target.value)}
                />
                </Form.Field>
            </Form>
            <Button><NavLink exact to = "/graph">Graph</NavLink></Button>
            
        </>
    )
}

export default NumericalMethods