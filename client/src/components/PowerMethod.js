import { create, all} from 'mathjs'
import { useState } from 'react'
import { Form, Button} from 'semantic-ui-react'

function PowerMethod() {
    const [eigenvalue, setEigenvalue] = useState(0)
    const [eigenvector, setEigenVector] = useState([0,0,0])
    const [trialz, setTrialz] = useState(1)

    const [zerozerou, setZeroZerou] = useState(0)
    const [zerooneu, setZeroOneu] = useState(0)
    const [zerotwou, setZeroTwou] = useState(0)

    const [zerozero, setZeroZero] = useState(0)
    const [zeroone, setZeroOne] = useState(0)
    const [zerotwo, setZeroTwo] = useState(0)
    const [onezero, setOneZero] = useState(0)
    const [oneone, setOneOne] = useState(0)
    const [onetwo, setOneTwo] = useState(0)
    const [twozero, setTwoZero] = useState(0)
    const [twoone, setTwoOne] = useState(0)
    const [twotwo, setTwoTwo] = useState(0)

    const math = create(all,  {})
    let A = [[parseFloat(zerozero),parseFloat(zeroone),parseFloat(zerotwo)],[parseFloat(onezero),parseFloat(oneone),parseFloat(onetwo)],[parseFloat(twozero),parseFloat(twoone),parseFloat(twotwo)]]
    let u = [parseFloat(zerozerou),parseFloat(zerooneu),parseFloat(zerotwou)]
    let n = trialz
    let eigen = eigenvalue

    function findEigenvector() {
        for (let i = 0; i < n; i++) {
            u = math.multiply(A,u)
            eigen = math.max(u);
            u = math.dotDivide(u,eigen)
        }
        setEigenvalue(eigen)
        setEigenVector(u)
    }
    

    return (
        <div>
            <Form onSubmit={findEigenvector} className = "findroot">
                <h1>Power Method</h1>
                <h3>Matrix:</h3>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setZeroZero(e.target.value)}/>
                    <Form.Input width={1} onChange={(e) => setZeroOne(e.target.value)}/>
                    <Form.Input width={1} onChange={(e) => setZeroTwo(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setOneZero(e.target.value)}/>
                    <Form.Input width={1} onChange={(e) => setOneOne(e.target.value)}/>
                    <Form.Input width={1} onChange={(e) => setOneTwo(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setTwoZero(e.target.value)}/>
                    <Form.Input width={1} onChange={(e) => setTwoOne(e.target.value)}/>
                    <Form.Input width={1} onChange={(e) => setTwoTwo(e.target.value)}/>
                </Form.Group>
                <h3>Inital Guess Vector:</h3>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setZeroZerou(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setZeroOneu(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setZeroTwou(e.target.value)}/>
                </Form.Group>
                <h3>Trails:</h3>
                <Form.Group>
                    <Form.Input width={1} onChange={(e) => setTrialz(e.target.value)}/>
                </Form.Group>   

                <Button type="submit">Compute</Button>
            </Form>
            <h2>Dominant Eigenvalue = {eigenvalue.toFixed(5)}</h2>
            <h2>Dominant Eigenvector = [{eigenvector[0].toFixed(5)}, {eigenvector[1].toFixed(5)}, {eigenvector[2].toFixed(5)}]</h2>
        </div>
    )
}

export default PowerMethod