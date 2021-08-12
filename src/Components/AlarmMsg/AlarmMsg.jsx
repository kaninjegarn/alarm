import React from 'react';

const AlarmMsg = ({ msg, clearAlarm }) => {
  var audio = new Audio('/eurodancer.wav');
  audio.play();
  return(
    <div>
      <h1>{msg}</h1>
      <button onClick={clearAlarm}>Clear</button>
    </div>
  )
}

export default AlarmMsg;