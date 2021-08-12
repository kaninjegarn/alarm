import React, { useEffect, useState } from 'react';
import moment from 'moment';
import AlarmMsg from '../AlarmMsg/AlarmMsg';
import AlarmList from '../AlarmList/AlarmList';
import CurrentTime from '../CurrentTime/CurrentTime';
import { fillArray } from '../../helpers';
import './alarm.scss';

import Sound from 'react-sound';

const Alarm = () => {
  let shortTimer;
  const [minute, setMinute] = useState('');
  const [hour, setHour] = useState('');
  const [msg, setMsg] = useState("Alarm");
  const [alarmIsSet, setAlarmIsSet] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [alarm, setAlarm] = useState();
  const [showMsg, setShowMsg] = useState(false);
  const [alarmObj, setAlarmObj] = useState({ when: shortTimer || '18:00', message: msg || ''})
  const [awaitingAlarm, setAwaitingAlarm] = useState(false);
  const minuteArr = fillArray(59);
  const hourArr = fillArray(24);
  

  function handleSubmit(event) {
    event.preventDefault();
    if( hour !== '' && minute !== '' ) {
      setShowErrorMsg(false);
      setAlarm(moment().format(`DD.MM.YYYY ${hour}:${minute}`));
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

  function clearAlarm(params) {
    setShowMsg(false);
  }

  function cancelAlarm(params) {
    setHour('');
    setMinute('');
    setAwaitingAlarm(false);
  }

  // WORKS
  function play() {
    // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    var audio = new Audio('/eurodancer.wav');
    audio.play();
  }
  // var t = new Audio('eurodancer.wav');
  // t.play();

  useEffect(() => {
    if(!alarmIsSet) {
      console.log("ska inte köras")
    } else {
      const interval = setInterval(() => {
        console.log(moment().format('DD.MM.YYYY H:mm'), alarm, msg);
        if (alarm === moment().format('DD.MM.YYYY H:mm')) {
          setShowMsg(true);
          console.log("ALARM!")
        }
        // const tempTime = moment().format('DD.MM.YYYY H:mm')
        // if (moment(moment().format('DD.MM.YYYY H:mm:ss')).isSame(alarm)) {
        //   console.log("ALARM!")
        // }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [alarmIsSet])

  //   < Sound
  // url = "/eurodancer.wav"
  // playStatus = { Sound.status.PLAYING }
  // playFromPosition = { 300 /* in milliseconds */}
  // onLoading = { this.handleSongLoading }
  // onPlaying = { this.handleSongPlaying }
  // onFinishedPlaying = { this.handleSongFinishedPlaying }
  //   />
  return(
    <>
      
      <CurrentTime />
      { showMsg &&
        <AlarmMsg msg={msg} clearAlarm={clearAlarm} />
      }
      {
        awaitingAlarm === true ? (
          <AlarmList obj={alarmObj} cancelAlarm={cancelAlarm}/>
        ): 
        (
          <div className="alarm">
            <button onClick={play}>Play Audio</button>
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
              <input className="submit" type="submit" value="Save"/>
            </form>
          </div>
        )
      }
    </>
  )
}

export default Alarm;