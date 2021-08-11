import React from 'react';
import './AlarmList.scss';

const AlarmList = ({ obj }) => {
  return(
    <div className="pendingAlarm">
      <div>
        <h2>{obj.when}</h2>
      </div>
      <div>
        {obj.message}
      </div>
    </div>
  )
}

export default AlarmList;