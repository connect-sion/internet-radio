import React from "react";

interface Props {
  src: string;
}

const Audio = ({ src }: Props) => (
  <audio controls>
    <source src={src} type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>
);

export default Audio;
