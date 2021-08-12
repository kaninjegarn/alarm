import React from 'react';
import './AlarmList.scss';

const AlarmList = ({ obj, cancelAlarm }) => {
  return(
    <div className="pendingAlarm">
      <div className="pendingAlarm__container">
        <div className="pendingAlarm__when">
          <h2>{obj.when}</h2>
        </div>
        <div className="pendingAlarm__message">
         💬 {obj.message}
        </div>
      </div>
      <div className="pendingAlarm__cancel" onClick={cancelAlarm}>X</div>
    </div>
  )
}

export default AlarmList;