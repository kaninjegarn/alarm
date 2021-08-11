import React from 'react';

const AlarmMsg = ({ msg, clearAlarm }) => {
  return(
    <div>
      <h1>{msg}</h1>
      <button onClick={clearAlarm}>Clear</button>
    </div>
  )
}

export default AlarmMsg;