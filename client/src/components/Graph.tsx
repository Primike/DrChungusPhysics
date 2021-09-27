import functionPlot from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 1000;
let height = 800;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;

function Graph({equation = "x^2", derivative = "2x"}) {
    return (
        <rect>
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
            <h1>qweqweqweqwe</h1>
        </rect>
    )
}

export default Graph