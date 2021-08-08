import React, { useState } from 'react';

const Alarm = () => {
  var moment = require('moment'); // require
  
  const [minute, setMinute] = useState();
  const [hour, setHour] = useState();
  const [day, setDay] = useState();
  // const minuteArr = new Array(59);
  const minuteArr = Array.from(Array(60).keys());
  const hourArr = Array.from(Array(24).keys());
  const dayArr = Array.from(Array())
  // console.log(minuteArr);

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  function handleSubmit(params) {
    console.log("submit works")
    console.log(minute)
  }

  function handleMinute(event) {
    setMinute(event.target.value);
  }

  function handleHour(event) {
    setHour(event.target.value);
  }

  function handleDay(event) {
    setDay(event.target.value);
  }



  return(
    <div>
      Set your Alarm
      <form onSubmit={handleSubmit}>
        <label htmlFor="minute">Min</label>
        <select name="minute" id="" value={minute} onChange={handleMinute}>
          {minuteArr.map(item => 
            <option key={item} value={item}>{item}</option>
          )}
        </select>
        <label htmlFor="hour">Hours</label>
        <select name="hour" id="" value={hour} onChange={handleHour}>
          {hourArr.map(item => 
            <option key={item} value={item}>{item}</option>
          )}
        </select>
        <label htmlFor="day">Day</label>
        <select name="day" id="">

        </select>
      </form>
    </div>
  )
}

export default Alarm;