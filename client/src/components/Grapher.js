import { NavLink } from "react-router-dom";
import { Form, Button, Grid, Segment } from 'semantic-ui-react'
import { useState } from "react";

function Grapher() {
    const [eqn, setEqn] = useState('');
    const [der, setDer] = useState(0);

    const handle = () => {
        localStorage.setItem('Equation', eqn);
        localStorage.setItem('Derivative', der);
     };


    return (
        <div className = "numericalmethoddiv">
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column className = "grapher">           
                        <Form>
                            <h1 className="methodtitle">Function Grapher</h1>
                            <Form.Field>
                                <h3>Equation:</h3>
                                <Form.Input width={4} placeholder='Equation' onChange={(e) => setEqn(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>Derivative(Optional):</h3>
                                <Form.Input width={4} placeholder='Derivative' value = {der} onChange={(e) => setDer(e.target.value)}/>
                            </Form.Field>
                            <Button onClick={handle}><NavLink exact to = "/graph" target = "_blank">Graph</NavLink></Button>
                            <h2>Use exp(x) for e^x</h2>
                            <h2>Use log(x) for ln(x)</h2>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}

export default Grapher