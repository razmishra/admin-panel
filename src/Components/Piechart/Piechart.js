import './piechart.scss'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Donutchart from './Donutchart';
export default function Piechart() {
  return (
    <div className='featured'>
       <div className="top">
        <h3 className="title">Invoices Statics</h3>
       </div>
       <div className="charinfo">
        <div className="right">
          <Donutchart/>
        </div>
        <div className="left">
          <ul>
            <p>Total Paid</p>
            <li ><FiberManualRecordIcon fontSize='small' style={{color:"#A98F7A"}} />234</li>
            <p>Total Overdue</p>
            <li><FiberManualRecordIcon fontSize='small' style={{color:"#D7B89F"}} />188</li>
            <p>Total Unpaid</p>
            <li><FiberManualRecordIcon fontSize='small'/>126</li>
          </ul>
        </div>
       </div>
    </div>
  )
}
