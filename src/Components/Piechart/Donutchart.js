import {Doughnut} from 'react-chartjs-2'
import {Chart ,ArcElement, Title,Legend} from 'chart.js'
Chart.register({
    ArcElement, Title,Legend
})

const data={
    datasets:[{
        data:[48.8,24.3,40],
        backgroundColor:['#634832','#D7B89F','#A98F7A',"#000"],
    }
  
  ]
}

// const options = {
//   plugins: {
//     legend: {
//       display: true, // Set this to true to display the legend
//       position: 'right', // Change the legend position (e.g., 'top', 'bottom', 'left', 'right')
//     },
//     tooltip: {
//       enabled: true, // Show tooltip on hover
//     },
//   },
// };
export default function Donutchart() {
  return (
     <div  style={{ height: "300px" }}>
       <Doughnut data={data}/>
     </div>
  )
}
