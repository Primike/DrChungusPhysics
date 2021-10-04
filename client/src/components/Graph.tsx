import functionPlot from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 600;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;

export const Graph = ({equation = "x^2", derivative = "2x"}) => {
    return (
            <div>
                {functionPlot({
                title: `y = ${equation}`,
                target: "#root",
                width,
                height,
                xAxis: {
                    label: 'x - axis',
                    domain: [-10, 10]
                },
                yAxis: { 
                    label: 'y - axis',
                    domain: [-10, 10] },
                grid: true,
                data: [
                    {
                    fn: `${equation}`,
                    derivative: {
                        fn: `${derivative}`,
                        updateOnMouseMove: true
                    }
                    }
                ]
                })}  
            </div>
    )
}

export default Graph