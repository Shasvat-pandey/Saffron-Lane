import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import Restro_video from '../../assets/Restro-video.mp4'

const VideoPlayer = ({ playerState, setPlayerState }) => {

  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (playerState && videoRef.current) {
      const p = videoRef.current.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [playerState]);

  const closeplayer = (e) => {
    if (e.target === overlayRef.current) {
      setPlayerState(false);
    }
  };

  return (
    <div
      className={`video-player ${playerState ? '' : 'hide'}`}
      ref={overlayRef}
      onClick={closeplayer}
    >
      <video ref={videoRef} src={Restro_video} autoPlay muted controls />
      
    </div>
  )
}

export default VideoPlayer
