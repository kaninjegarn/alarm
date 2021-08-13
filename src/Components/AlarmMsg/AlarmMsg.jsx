import React, { useState } from 'react';
import './AlarmMsg.scss';
import Sound from 'react-sound';

const AlarmMsg = ({ msg, cancelAlarm }) => {
  const [startAudio, setStartAudio] = useState(true);
  
  function handleCancelAlarm() {
    cancelAlarm();
    setStartAudio(false);
  }

  return(
    <div className="alarmMsg">
      {
        // startAudio && 
        // <Sound
        //   url="/eurodancer.wav"
        //   playStatus={Sound.status.PLAYING}
        //   playFromPosition={300 /* in milliseconds */}
        //   volume={50}
        // />
      }
      <h1 className="alarmMsg__title">{msg}</h1>
      <div className="alarmMsg__cancel" onClick={handleCancelAlarm}>Clear</div>
    </div>
  )
}

export default AlarmMsg;