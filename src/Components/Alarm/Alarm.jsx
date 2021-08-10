import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fillArray } from '../../helpers';

const Alarm = () => {
  const [minute, setMinute] = useState();
  const [hour, setHour] = useState();
  const [day, setDay] = useState();
  const [alarmIsSet, setAlarmIsSet] = useState(false);
  const [alarm, setAlarm] = useState()

  const minutes = 59;
  let tempArr = [];

  const minuteArr = fillArray(59);
  const hourArr = fillArray(24);

  // const minuteArr = Array.from(Array(60).keys());
  // const hourArr = Array.from(Array(24).keys());

  // const dayArr = Array.from(Array());


  // console.log(moment().format('MMMM Do YYYY, h:mm:ss'));
  // console.log(moment().format('DD.MM.YYYY h:mm:ss'));
  // console.log(moment().format());
  // console.log(moment([2021, 7, 10, 1]).fromNow());

  let timerAlarm;
  

  var start = moment().format('09.08.2021 22:19:03');

  // console.log(start)

  function handleSubmit(event) {
    event.preventDefault();

    if( hour < 10 ) {
      setHour(('0' + hour).slice(-2));
      console.log(hour)
    }
    if( minute < 10 ) {
      setMinute(('0' + minute).slice(-2));
      console.log(minute)
    }

    setAlarm(moment().format(`10.08.2021 ${hour}:${minute}`));

    setAlarmIsSet(true)
    // console.log(timerAlarm)
    // console.log("submit works");
    // console.log(hour,minute);
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

  useEffect(() => {
    console.log(alarm)
    if(!alarmIsSet) {
      console.log("ska inte köras")
    } else {
      const interval = setInterval(() => {
        console.log(moment().format('DD.MM.YYYY H:mm'), alarm);
        if (alarm === moment().format('DD.MM.YYYY H:mm')) {
          console.log("ALARM!")
        }
        const tempTime = moment().format('DD.MM.YYYY H:mm')
        if (moment(moment().format('DD.MM.YYYY H:mm:ss')).isSame(alarm)) {
          console.log("ALARM!")
        }
      }, 1000);
      return () => clearInterval(interval);


    }
      

  }, [alarmIsSet])



  return(
    <div>
      Set your Alarm
      <form onSubmit={handleSubmit}>
        <label htmlFor="hour">Hours</label>
        <select name="hour" id="" value={hour} onChange={handleHour} defaultValue={1}>
          {hourArr.map(item =>
            <option key={item} value={item}>{item}</option>
          )}
        </select>
        <label htmlFor="minute">Min</label>
        <select name="minute" id="" value={minute} onChange={handleMinute}>
          {minuteArr.map(item => 
            <option key={item} value={item}>{item}</option>
          )}
        </select>
        

        <input type="submit" value="Submit"/>
        <button onClick={handleSubmit}>click</button>
        {/* <label htmlFor="day">Day</label>
        <select name="day" id="">

        </select> */}
      </form>
    </div>
  )
}

export default Alarm;