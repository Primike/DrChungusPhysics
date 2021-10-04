import { create, all, math } from 'mathjs'
import { Form, Button } from 'semantic-ui-react'
import { useState } from "react";

function SimpsonsRule () {
    const [f, setF] = useState("x")
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [intervals, setIntervals] = useState()

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
        <>
            <Form onSubmit={computeIntegral} className = "findroot">
                <h1>Simpson's Rule</h1>
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
                <label htmlFor="username">Start Point:</label>
                <input
                    placeholder='Start'
                    type="text"
                    id="f"
                    autoComplete="off"
                    onChange={(e) => setStart(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label htmlFor="username">End Point:</label>
                <input
                    placeholder='End'
                    type="text"
                    id="f"
                    autoComplete="off"
                    onChange={(e) => setEnd(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label htmlFor="username">Intervals:</label>
                <input
                    placeholder='Intervals'
                    type="text"
                    id="f"
                    autoComplete="off"
                    onChange={(e) => setIntervals(e.target.value)}
                />
                </Form.Field>
                <Button type="submit">Compute</Button>
            </Form>
            <h3>Definite Integral = {integral}</h3>
        </>
    )
}

export default SimpsonsRule