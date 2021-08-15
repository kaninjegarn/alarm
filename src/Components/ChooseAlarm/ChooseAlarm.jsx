import React, { useEffect, useState } from 'react' ;
import './ChooseAlarm.scss';

const ChooseAlarm = ({ desiredSong }) => {
  const soundsArray = [
    { id: 0, name: "Bumbibjörnarna"},
    { id: 1, name: "Caramelldansen"},
    { id: 2, name: "eurodancer"},
    { id: 3, name: "Wrecking Ball"},
    { id: 4, name: "Cotton Eye Joe"},
    { id: 5, name: "Sailor Moon"},
    { id: 6, name: "The Moomins"}
  ];
  const [showList, setShowList] = useState(false);
  const [activeSound, setActiveSound] = useState("eurodancer");
  
  function handleSound(event) {
    event.preventDefault();
    setActiveSound(event.target.value);
    setShowList(false);
  }

  useEffect(() => {
    if (activeSound !== "" ) {
      desiredSong(activeSound)
    }
  }, [activeSound])

  return(
    <>
      <div className="background">
        <div className="chooseAlarm">
          {!showList ? (
            <div className="chooseAlarm__toggle" onClick={() => setShowList(true)}>
              <strong><p >Current song:</p><h4>{activeSound}</h4></strong>
              <div className="chooseAlarm__change"><strong>Change song here</strong></div>
            </div>
          ) : (
            soundsArray.map(item =>
              <button key={item.id} value={item.name} onClick={handleSound}>{item.name}</button>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default ChooseAlarm;