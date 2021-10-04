import { Tab } from 'semantic-ui-react'
import Grapher from "./Grapher";
import NewtonsMethod from "./NewtonsMethod";
import SimpsonsRule from './SimpsonsRule';
import PowerMethod from './PowerMethod'
import JacobiMethod from './JacobiMethod'

function NumericalMethods({setEquation, setDerivative}) {
    
    let newTabRender = [];
    
    newTabRender.push({menuItem: 'Grapher', render: () => <Tab.Pane> <Grapher setEquation={setEquation} setDerivative={setDerivative} /> </Tab.Pane>})
    newTabRender.push({menuItem: 'Newtons Method', render: () => <Tab.Pane> <NewtonsMethod/> </Tab.Pane>})
    newTabRender.push({menuItem: 'Simpsons Rule', render: () => <Tab.Pane> <SimpsonsRule/> </Tab.Pane>})
    newTabRender.push({menuItem: 'Power Method', render: () => <Tab.Pane> <PowerMethod/> </Tab.Pane>})
    newTabRender.push({menuItem: 'Jacobi Method', render: () => <Tab.Pane> <JacobiMethod/> </Tab.Pane>})

    return (
        <div className= "thetabs">
            <Tab menu={{tabular: true}} panes={newTabRender} />
        </div>
    )
}

export default NumericalMethods