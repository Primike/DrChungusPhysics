import functionPlot from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 1000;
let height = 800;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;
let x = "1/x"

function Graph({equation = "x^2", derivative = "2x"}) {
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
            {3}
        </div>
    )
}

export default Graph