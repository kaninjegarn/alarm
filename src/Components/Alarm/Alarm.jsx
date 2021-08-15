import React, { useEffect, useState } from 'react';
import moment from 'moment';
import SoundComp from '../SoundComp/SoundComp';
import AlarmList from '../AlarmList/AlarmList';
import CurrentTime from '../CurrentTime/CurrentTime';
import { fillArray } from '../../helpers';
import './alarm.scss';
import ChooseAlarm from '../ChooseAlarm/ChooseAlarm';

const Alarm = () => {
  let shortTimer;
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');
  const [msg, setMsg] = useState("Alarm");
  const [alarmIsSet, setAlarmIsSet] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [alarm, setAlarm] = useState();
  const [showMsg, setShowMsg] = useState(false);
  const [alarmObj, setAlarmObj] = useState({ when: shortTimer || '18:00', message: msg || ''})
  const [awaitingAlarm, setAwaitingAlarm] = useState(false);
  const minuteArr = fillArray(59);
  const hourArr = fillArray(24);
  const [song, setSong] = useState("eurodancer");
  

  function handleSubmit(event) {
    event.preventDefault();
    if( hour !== '' && minute !== '' ) {
      setShowErrorMsg(false);
      setAlarm(moment().format(`DD.MM.YYYY ${hour}:${minute}:00`));
      shortTimer = (hour + ":" + minute);
      setAlarmIsSet(true);
      setAwaitingAlarm(true);
      setAlarmObj({ when: shortTimer, message: msg })
    } else {
      setShowErrorMsg(true);
    }
  }

  function handleMinute(event) {
    setMinute(event.target.value);
  }

  function handleHour(event) {
    setHour(event.target.value);
  }

  function desiredSong(song) {
    setSong(`${song}.wav`);
  }

  function cancelAlarm() {
    setHour('00');
    setMinute('00');
    setAwaitingAlarm(false);
    setShowMsg(false);
    setAlarmIsSet(false);
  }

  useEffect(() => {
    if(!alarmIsSet) {
    } else {
      const interval = setInterval(() => {
        if (alarm === moment().format('DD.MM.YYYY H:mm:ss')) {
          setShowMsg(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [alarmIsSet])
 
  return(
    <>
      <ChooseAlarm desiredSong={desiredSong}/>
      <CurrentTime />
      {showMsg && <SoundComp song={song}/> }
      { awaitingAlarm === true ? (
          <AlarmList obj={alarmObj} cancelAlarm={cancelAlarm} className={showMsg ? 'middle' : 'top'}/>
        ):
        (
          <div className="alarm">
            <form onSubmit={handleSubmit}>
              <div className="container">
              <p className="container__title">What time?</p>
              <div className="container__chooseAlarm">
                <div className="errorMSG">
                  {showErrorMsg && <p>Need to specify the time.</p>}
                </div>
                <div className="container__chooseAlarm--select">
                  <select className="container__hour" name="hour" id="" value={hour} onChange={handleHour}>
                    {hourArr.map(item =>
                      <option key={item} value={item}>{item}</option>
                    )}
                  </select>
                  <p className="container__dots">:</p>
                  <select className="container__minute" name="minute" id="" value={minute} onChange={handleMinute}>
                    {minuteArr.map(item => 
                      <option key={item} value={item}>{item}</option>
                    )}
                  </select>
                </div>
              </div>
                <div className="msg">
                  <label htmlFor="msg"></label>
                  <input type="text" name="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />
                </div>
              </div>
            </form>
            <div className="submit" onClick={handleSubmit}>Save</div>
          </div>
        )
      }
    </>
  )
}

export default Alarm;