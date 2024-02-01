import { useState, useEffect } from "react";
import DisplayLineChart from "./DisplayLineChart";
import "./linechart.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGraphData } from "../../Redux/slice/GraphData";

export default function Linechart() {
  const dispatch = useDispatch();
  const [Time, setTime] = useState("7d");
  const [coinHistory, setcoinHistory] = useState([]);
  
  const state = useSelector((state) => state.graphData);

  const fetchData = (time) => {
    dispatch(fetchGraphData(time));
  };

  useEffect(() => {
    fetchData(Time);
  }, [Time]);

  useEffect(() => {
    state.data && setcoinHistory(state.data);
  }, [state.data]);

  return (
    <div className="chart">
      <div className="top">
        <h3 className="title">Sales Analytics</h3>
        <div className="button">
          <button onClick={() => setTime("7d")}>Weekely</button>
          <button onClick={() => setTime("1y")}>Monthly</button>
          <button onClick={() => setTime("3y")}>Yearly</button>
        </div>
      </div>
      <div style={{ marginLeft: "15px" }}>
        <DisplayLineChart coinHistory={coinHistory} time={Time} />
      </div>
    </div>
  );
}
