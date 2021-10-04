import Graph from "./Graph"
import { NavLink } from "react-router-dom";
import { Form, Button } from 'semantic-ui-react'
import Iframe from 'react-iframe'

function Grapher({setEquation, setDerivative}) {
    return (
        <div>
            <Iframe id="mygraph" src="../../Graph.tsx" width="500" height="500" title = "grapher">
            </Iframe>
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
        </div>
    )
}

export default Grapher