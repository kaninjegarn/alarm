import React from 'react';
import Sound from 'react-sound';

const SoundComp = ({ song }) => {
  return(
    <div className="alarmMsg">
      {
        <Sound
          url={`/sounds/${song}`}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
          volume={50}
        />
      }
    </div>
  )
}

export default SoundComp;