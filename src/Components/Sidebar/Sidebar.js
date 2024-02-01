import "../Sidebar/sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import StoreIcon from "@mui/icons-material/Store";
import MessageIcon from "@mui/icons-material/Message";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DescriptionIcon from "@mui/icons-material/Description";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import InfoIcon from "@mui/icons-material/Info";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ()=> {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ "text-decoration": "none" }}>
          <span className="logo">BRANDING</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main Menu</p>
          <li>
            <DashboardIcon className="icons" />
            <Link style={{ "text-decoration": "none" }} to="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <FilterFramesIcon className="icons" />
            <span>Order</span>
          </li>
          <li>
            <StoreIcon className="icons" />
            <span>Store</span>
          </li>
          <li>
            <MessageIcon className="icons" />
            <span>Messages</span>
          </li>
          <li>
            <ShowChartIcon className="icons" />
            <span>Statistics</span>
          </li>
          <li>
            <DescriptionIcon className="icons" />
            <span>Invoices</span>
          </li>
          <li>
            <AirportShuttleIcon className="icons" />
            <span>Shipment</span>
          </li>
          <li>
            <RequestQuoteIcon className="icons" />
            <Link to="/finance" style={{ "text-decoration": "none" }}>
              <span>Finances</span>
            </Link>
          </li>
          <p className="title help">Help & Support</p>
          <li>
            <InfoIcon className="icons" />
            <span>Help & Center</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icons" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom center">
        <div className="walletList">
          <div className="wallet">
            <div className="right">
              <AccountBalanceWalletIcon className="walleticon" />
            </div>
            <div className="left">
              <div> Current Balance</div>
              <span>$12,848</span>
            </div>
          </div>
        </div>
        <ul>
          <li className="logout">
            <LogoutIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
