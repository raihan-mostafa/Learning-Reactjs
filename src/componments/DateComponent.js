import React, { useState } from "react";

export default function DateComponent() {
  const [dateTime, setDateTime] = useState(""); // State for storing date/time

  const displayDateTime = () => {
    const now = new Date();
    setDateTime(now.toLocaleString()); 
  };

  return (
    <>
      <button className="btn btn-primary mx-3" onClick={displayDateTime}>
        Show Date
      </button>
      <p>{dateTime}</p> 
    </>
  );
}


