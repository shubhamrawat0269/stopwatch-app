/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const [isTimerRunning, setTimerRunning] = useState(false);

  const formatTime = (sec) => {
    let min = Math.floor(sec / 60);
    let remainSec = Math.floor(sec % 60);

    return `${min}:${remainSec < 10 ? "0" : ""}${remainSec}`;
  };

  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTime((preTime) => preTime + 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setTimerRunning(!isTimerRunning);
  };
  const resetTimer = () => {
    setTime(0);
  };

  return (
    <>
      <div>
        <h1>Stopwatch</h1>
        <div>
          <p>Time: {formatTime(time)}</p>
        </div>
        <div className="btns">
          {!isTimerRunning ? (
            <button onClick={() => setTimerRunning(!isTimerRunning)}>
              Start
            </button>
          ) : (
            <button onClick={() => stopTimer()}>Stop</button>
          )}
          <button onClick={() => resetTimer()}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
