import Graph from "./Graph"
import { NavLink } from "react-router-dom";
import { Form, Button, Divider, Grid, Segment } from 'semantic-ui-react'
import Iframe from 'react-iframe'

function Grapher({setEquation, setDerivative}) {
    return (
        <div className = "numericalmethoddiv">
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column className = "jacobimethod" >           
                        <Form>
                            <h1 className="methodtitle">Function Grapher</h1>
                            <Form.Field>
                                <h3>Equation:</h3>
                                <Form.Input width={4} placeholder='Equation' onChange={(e) => setEquation(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <h3>Derivative:</h3>
                                <Form.Input width={4} placeholder='Optional' onChange={(e) => setDerivative(e.target.value)}/>
                            </Form.Field>
                            <Button><NavLink exact to = "/graph">Graph</NavLink></Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column className = "jacobimethod">
                        <Iframe id="mygraph" src="../../Graph.tsx" width="500" height="500" title = "grapher">
                        </Iframe>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}

export default Grapher