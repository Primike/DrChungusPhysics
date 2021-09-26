import React, { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Switch, Route, NavLink } from "react-router-dom";
import Graph from "./Graph.tsx";

function NumericalMethods({setEquation, setDerivative}) {
    // const [equation, setEquation] = useState()
    // const [derivative, setDerivative] = useState()

    // function f(x) {
    //     return equation
    // }
    // function fPrime(x) {
    //     return derivative
    // }
    
    // function findRoot(e) {
    //     e.preventDefault()
        
    //     let x = 1
    //     for (let i = 0; i < 1; i++) {
    //         x = x - f(x)/fPrime(x)
    //     }
    //     console.log(x.toFixed(10))
    // }

    return (
        <>
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
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <Form onSubmit={findRoot} className = "findroot">
                <h1>Newton's Method</h1>
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
                    placeholder='Derivative'
                    type="text"
                    id="derivative"
                    autoComplete="off"
                    onChange={(e) => setDerivative(e.target.value)}
                />
                </Form.Field>
                <Button type="submit">Compute</Button>
            </Form> */}
        </>
    )
}

export default NumericalMethods