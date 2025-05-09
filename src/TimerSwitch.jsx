import React, { useState } from "react";
import Timer from "./Timer";

const TimerSwitch = () => {
  const [showTimer, setShowTimer] = useState(true);

  const toggleTimer = () => {
    setShowTimer((prev) => !prev); // true를 false로, false를 true로 전환환
  };

  return (
    <div>
      <h1>타이머 예제</h1>

      <button onClick={toggleTimer} className="border">
        {showTimer ? "타이머 숨기기" : "타이머 보이기"}
      </button>
      <hr />
      {showTimer && <Timer />}
    </div>
  );
};

export default TimerSwitch;
