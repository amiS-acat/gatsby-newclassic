import React, { useEffect } from "react";
import useSound from "use-sound";

import music from "../../../../content/music/La_vallée_des_cloches.mp3";

const Pause = ({ stop }) => {
  return <div className="player" onClick={() => stop()}></div>;
};

const Play = ({ play, stop }) => {
  return <div className="player" onClick={(() => stop(), play)}></div>;
};

const Player = () => {
  const [play, { stop, isPlaying }] = useSound(music);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return <div>{isPlaying ? <Pause stop={stop} /> : <Play play={play} />}</div>;
};

export default Player;
