import "./finance.scss";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import TableData from "../../Components/Table/Table";

const heading = ["Name", "Date", "Order Id","Transaction Type", "Amount", "Invoices"]
const rows = [
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Credit Card",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Debit Card",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Credit Card",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Bank Transfer",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Bank Transfer",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"UPI",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Debit Card",
    Amount:"345",
    Invoices:"download"
  },
  {
    Name: "Syeda Rana",
    Date:"02-Jun-2023",
    Order_Id:"#00213",
    Transcation_Type:"Credit Card",
    Amount:"345",
    Invoices:"download"
  },
]
export default function Finance() {
  const [username, setUsername] = useState("");
  return (
    <div className="finance">
      <Sidebar />
      <div className="wallet-card">
        <Navbar username={username} />
        <div className="body-content">
          <div className="text">
            <p className="username">My wallet</p>
          </div>
          <div className="card-content">
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
            <div className="withdraw-button-container">
              <button className="withdraw-button">
                <span>Withdraw Money</span>
                <span>
                  <BsArrowRight size={25} />
                </span>
              </button>
            </div>
          </div>

          {/* Transcation History */}
          <div className="transcation">
            <p className="ttext">Transcation History</p>
          </div>
          <div className="t-rows">
            <TableData heading={heading} rows = {rows}/>
          </div>
        </div>
      </div>
    </div>
  );
}
