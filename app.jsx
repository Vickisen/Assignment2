import React, { useEffect, useState } from "react";
import "./App.css";
import distanceInWordsToNow from "date-fns/getDate";

function App() {
  const [argDate, setArgDate] = useState();

  function handleInput(event) {
    setArgDate(new Date(event.target.value));
  }

  useEffect(() => {
    writeDateToFile(argDate);
  }, [argDate]);

  function writeDateToFile(date) {
  }

  function compareDates() {
    const currentDate = new Date();
    if (argDate < currentDate) {
      alert(`The date ${argDate} is before the current date ${currentDate}.`);
    } else if (argDate > currentDate) {
      alert(`The date ${argDate} is after the current date ${currentDate}.`);
    } else {
      alert(`The date ${argDate} is the same as the current date ${currentDate}.`);
    }
  }

  function currentDate() {
    const currentDate = new Date();
    return alert("Today's date is " + currentDate);
  }

  function courseStartDate() {
    let startingDate = new Date("2022-08-31");
    let distance = distanceInWordsToNow(startingDate);
    return alert(`I started this course on ${startingDate}.`);
  }

  return (
    <div className="App">
      <input type="date" onChange={handleInput} />
      <button className="button" onClick={compareDates}>
        Do you want to compare the date from your input to todays date?
      </button>
      <button className="button" onClick={currentDate}>
        Click me for current date!
      </button>
      <button className="button" onClick={courseStartDate}>
        When did I start this course?
      </button>
    </div>
  );
}

export default App;