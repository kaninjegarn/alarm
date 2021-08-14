import React from 'react';
import './AlarmList.scss';

const AlarmList = ({ obj, cancelAlarm, className }) => {
  return(
    <div className={`pendingAlarm ${className}`}>
      <div className="pendingAlarm__container">
        <div className="pendingAlarm__when">
          {className === "middle" ? (
            <>
              <p>Your alarm is ringing</p>
              <h2>{obj.when}</h2>
              <div className="pendingAlarm__message--active">
                <p>{obj.message}</p>
              </div>
            </>
          ):(
            <>
              <h2>{obj.when}</h2>
              <div className="pendingAlarm__message">
                💬 {obj.message}
              </div>
            </>
          )
        }
        </div>
      </div>
      { className === "middle" ? (
        <div className="pendingAlarm__reset" onClick={cancelAlarm}>
          <span>Reset</span>
        </div>
      ):
      (
        <div className="pendingAlarm__cancel" onClick={cancelAlarm}><span>❌</span></div>
      )
    }
    </div>
  )
}

export default AlarmList;