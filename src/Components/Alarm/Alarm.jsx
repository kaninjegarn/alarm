import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Alarm = () => {
  const [minute, setMinute] = useState();
  const [hour, setHour] = useState();
  const [day, setDay] = useState();
  // const minuteArr = new Array(59);
  const minuteArr = Array.from(Array(60).keys());
  const hourArr = Array.from(Array(24).keys());
  const dayArr = Array.from(Array())
  // console.log(minuteArr);

  console.log(moment().format('MMMM Do YYYY, h:mm:ss'));
  console.log(moment().format('DD.MM.YYYY h:mm:ss'));
  // console.log(moment().format());
  // console.log(moment([2021, 7, 10, 1]).fromNow());

  const timerAlarm = moment().format('09.08.2021 23:37:25');
  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log(moment().format('DD.MM.YYYY H:mm:ss'), timerAlarm);
    //   if (timerAlarm === moment().format('DD.MM.YYYY H:mm:ss')) {
    //     console.log("ALARM!")
    //   }
    //   const tempTime = moment().format('DD.MM.YYYY H:mm:ss')
    //   if (moment(moment().format('DD.MM.YYYY H:mm:ss')).isSame(timerAlarm)) {
    //     console.log("ALARM!")
    //   }
    // }, 1000);
    // return () => clearInterval(interval);

  }, [])

  var start = moment().format('09.08.2021 22:19:03');

  console.log(start)

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