import "../Navbar/navbar.scss"
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import user from '../Navbar/userimage.jpg'

function Navbar({username}) {
  return (
    <div className='navbar'>
      <div className="wrapper">
       <p className="username">Welcome, {username?username:"Syeda Sana"}</p>
        <div className="items">
        <div className="search">
          <input type="text" placeholder="Search"/>
          <CiSearch size={20}/>
        </div>
          <div className="item">
            <IoNotificationsOutline className="icon"/>
          </div>
          <div className="item">
            <img src={user} alt="user" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
