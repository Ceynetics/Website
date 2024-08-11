import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2024-09-09T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Coming Soon</h1>
          <p>Evolutionary Software Solutions!</p>
          <div className="countdown">
            <div className="time-block">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="time-block">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="time-block">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="time-block">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Notify Me</button>
          </form>
        </header>
      </div>
  );
}

export default App;