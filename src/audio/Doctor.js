import React from "react";

import music from "../../frontmatter/music/Doctor.mp3";

const Player = () => {
  return <audio controls src={music} />
};

export default Player;
