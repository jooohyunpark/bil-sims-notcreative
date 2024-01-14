import React, { useState, useRef, useEffect } from 'react';

import { counters, logCount } from '../../../track';
import { VideoLayout, PlayButton, Video } from './styles';
import { Content } from '../../../content/config';

export default function({
  poster = '',
  src = '',
  onPlay = () => {},
  onPause = () => {},
  onEnded = () => {},
}) {
  const ref = useRef(null);
  const [showControl, setShowControl] = useState(false);

  useEffect(() => {
    ref.current.onplay = () => {
      onPlay();
    };
    ref.current.onpause = () => {
      onPause();
    };
    ref.current.onended = () => {
      onEnded();
    };
  }, []);

  return (
    <VideoLayout>
      <Video
        ref={ref}
        poster={poster}
        src={src}
        controls={showControl}
        onClick={() => {
          setShowControl(true);
        }}
        preload="auto"
        playsInline
        crossOrigin="anonymous"
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        $showControl={showControl}
      >
        <p>
          <Content id="unsupportedVideoMessage" />
        </p>
      </Video>

      {!showControl && (
        <PlayButton
          onClick={() => {
            ref.current.play();
            setShowControl(true);
          }}
          aria-label="Play"
        >
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"></path>
          </svg>
        </PlayButton>
      )}
    </VideoLayout>
  );
}
