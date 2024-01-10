import moment from "moment";
import "./Clock.css";
import { useEffect, useState } from "react";

const Clock = () => {
  const [datatime, setDatatime] = useState(moment().format("LTS"));

  useEffect(() => {
    const timeID = setInterval(() => {
      setDatatime(moment().format("LTS"));
    }, 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []);

  return (
    <div className="clock">
      <div>{datatime}</div>
    </div>
  );
};
export default Clock;
