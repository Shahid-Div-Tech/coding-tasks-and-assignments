import { useEffect, useState } from "react";

function CurrentDate() {
  const [time, setTime] = useState(new Date());
  let date = new Date();

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return <p>This is the current time: {time.toLocaleString()}</p>;
}

export default CurrentDate;
