import React, { useEffect, useState } from 'react';
import moment from 'moment';
import AlarmMsg from '../AlarmMsg/AlarmMsg';
import { fillArray } from '../../helpers';
import './alarm.scss';

const Alarm = () => {
  const [minute, setMinute] = useState();
  const [hour, setHour] = useState();
  const [day, setDay] = useState();
  const [msg, setMsg] = useState("Alarm");
  const [alarmIsSet, setAlarmIsSet] = useState(false);
  const [alarm, setAlarm] = useState();
  const [showMsg, setShowMsg] = useState(false);

  const minuteArr = fillArray(59);
  const hourArr = fillArray(24);

  // const minuteArr = Array.from(Array(60).keys());
  // const hourArr = Array.from(Array(24).keys());

  // const dayArr = Array.from(Array());


  // console.log(moment().format('MMMM Do YYYY, h:mm:ss'));
  // console.log(moment().format('DD.MM.YYYY h:mm:ss'));
  // console.log(moment().format());
  // console.log(moment([2021, 7, 10, 1]).fromNow());

  function handleSubmit(event) {
    event.preventDefault();
    setAlarm(moment().format(`DD.MM.YYYY ${hour}:${minute}`));
    setAlarmIsSet(true)
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

  function clearAlarm(params) {
    setShowMsg(false);
  }

  useEffect(() => {
    console.log(alarm)
    if(!alarmIsSet) {
      console.log("ska inte köras")
    } else {
      const interval = setInterval(() => {
        console.log(moment().format('DD.MM.YYYY H:mm'), alarm, msg);
        if (alarm === moment().format('DD.MM.YYYY H:mm')) {
          setShowMsg(true);
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
    <div className="alarm">
      {showMsg && 
        <AlarmMsg msg={msg} clearAlarm={clearAlarm}/>
      }
      <form onSubmit={handleSubmit}>
        <div className="container">
        <p className="container__title">What time?</p>
        <div className="container__chooseAlarm">
          {/* <label htmlFor="hour">H</label> */}
          <select className="container__hour" name="hour" id="" value={hour} onChange={handleHour} defaultValue={1}>
            {hourArr.map(item =>
              <option key={item} value={item}>{item}</option>
            )}
          </select>
          <p className="container__dots">:</p>
          {/* <label htmlFor="minute">M</label> */}
          <select className="container__minute" name="minute" id="" value={minute} onChange={handleMinute}>
            {minuteArr.map(item => 
              <option key={item} value={item}>{item}</option>
            )}
          </select>
        </div>
          <div className="msg">
            <label htmlFor="msg"></label>
            <input type="text" name="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
          </div>
        </div>
        
        

        <input className="submit" type="submit" value="Save"/>
        {/* <label htmlFor="day">Day</label>
        <select name="day" id="">

        </select> */}
      </form>
    </div>
  )
}

export default Alarm;