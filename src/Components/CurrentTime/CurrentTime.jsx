import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './currentTIme.scss';

const CurrentTime = () => {
  const [date, setDate] = useState(moment().format('HH:mm:s'));

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(moment().format('HH:mm:ss'));
  }

  return(
    <div className="currentTime">
      <h4>{date}</h4>
    </div>
  )
}

export default CurrentTime;