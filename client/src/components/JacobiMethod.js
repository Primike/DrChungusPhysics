import { create, all } from 'mathjs'
import { useState } from 'react'
import { Form, Button, Divider, Grid, Segment } from 'semantic-ui-react'

function JacobiMethod() {
    const math = create(all,  {})
    const parser = math.parser()

    const [trialz, setTrialz] = useState(1)
    const [solutionz, setSoultionz] = useState([0,0,0])

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

    const [bone,setBOne] = useState(0)
    const [btwo,setBTwo] = useState(0)
    const [bthree,setBThree] = useState(0)

    let A = [[parseFloat(zerozero),parseFloat(zeroone),parseFloat(zerotwo)],[parseFloat(onezero),parseFloat(oneone),parseFloat(onetwo)],[parseFloat(twozero),parseFloat(twoone),parseFloat(twotwo)]]
    let b = [parseFloat(bone),parseFloat(btwo),parseFloat(bthree)]
    let n = trialz
    let u = [parseFloat(zerozerou),parseFloat(zerooneu),parseFloat(zerotwou)]
    let r = 0

    function solveEquations() {
        let D = math.diag(math.diag(A))
        let Dinverse = math.inv(D)
        for (let i = 0; i < n; i++) {
            r = math.subtract(b, math.multiply(A,u))
            u = math.add(u, math.multiply(Dinverse,r))
        }
        setSoultionz(u)
    }

    return (
        <div className = "numericalmethoddiv">
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column className = "jacobimethod" >
                        <Form onSubmit={solveEquations} className = "solvequations">
                            <h1 className="methodtitle">Jacobi Method</h1>
                            <h3>Matrix:</h3>
                            <Form.Group>
                                <Form.Input width={1} onChange={(e) => setZeroZero(e.target.value)}/>
                                <Form.Input width={1} onChange={(e) => setZeroOne(e.target.value)}/>
                                <Form.Input width={1} onChange={(e) => setZeroTwo(e.target.value)}/>
                                <label> = </label>
                                <Form.Input width={1} onChange={(e) => setBOne(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input width={1} onChange={(e) => setOneZero(e.target.value)}/>
                                <Form.Input width={1} onChange={(e) => setOneOne(e.target.value)}/>
                                <Form.Input width={1} onChange={(e) => setOneTwo(e.target.value)}/>
                                <label> = </label>
                                <Form.Input width={1} onChange={(e) => setBTwo(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input width={1} onChange={(e) => setTwoZero(e.target.value)}/>
                                <Form.Input width={1} onChange={(e) => setTwoOne(e.target.value)}/>
                                <Form.Input width={1} onChange={(e) => setTwoTwo(e.target.value)}/>
                                <label> = </label>
                                <Form.Input width={1} onChange={(e) => setBThree(e.target.value)}/>
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
                        <h2>Solution: x = {solutionz[0].toFixed(5)} y = {solutionz[1].toFixed(5)} z = {solutionz[2].toFixed(5)}</h2>
                    </Grid.Column>
                    <Grid.Column className = "jacobimethod">
                        <a href="https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/d3fd06c8-d832-46a4-b187-546cb17a8065/465c4d5d-4cb8-4ce3-a959-fc12475866b9/images/screenshot.jpg" >
                            <img src="https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/d3fd06c8-d832-46a4-b187-546cb17a8065/465c4d5d-4cb8-4ce3-a959-fc12475866b9/images/screenshot.jpg" alt = 'numericalimage' className = "numericalimage"/>
                        </a>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}

export default JacobiMethod