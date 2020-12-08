import React from 'react';
import './App.css';

function App() {
  return (
    <section className="timer-container">
      <section className="timer">
        <i class="fas fa-bell"></i>
        <span className="mdi mdi-calendar-clock timer-icon"></span>
        <h2>Countdown Timer</h2>
        <p>Countdown to a special date :)</p>
      </section>
    </section>
  );
}

export default App;
