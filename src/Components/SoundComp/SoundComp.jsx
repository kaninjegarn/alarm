import React from 'react';
import Sound from 'react-sound';

const SoundComp = () => {
  return(
    <div className="alarmMsg">
      {
        <Sound
          url="/eurodancer.wav"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
          volume={50}
        />
      }
    </div>
  )
}

export default SoundComp;