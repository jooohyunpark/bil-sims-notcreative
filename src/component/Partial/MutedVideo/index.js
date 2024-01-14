import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import getAssetPath from 'util/asset';
import { Content, ContentContext } from '../../../content/config';
import NotPlayginIcon from '../../SVG/Icon/NotPlayingIcon';
import PlyaingIcon from '../../SVG/Icon/PlayingIcon';
import { MediaAbove } from '../../../styles/mixins';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  max-height: inherit;
  pointer-events: none;
`;

const MuteButton = styled.button`
  position: absolute;
  display: grid;
  place-content: center;
  background: rgba(29, 29, 29, 0.45);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;

  svg {
    width: 30px;
    height: auto;
  }

  ${MediaAbove('lg')} {
    right: 40px;
    top: 40px;
    width: 60px;
    height: 60px;

    svg {
      width: 40px;
    }
  }
`;

const MutedVideo = ({ videoSrc, backupImage, style = {} }) => {
  const videoRef = useRef();
  const { content } = useContext(ContentContext);
  const [muted, setMuted] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  useEffect(() => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          // Automatic playback started!
          // We can now safely pause video...

          if (inView) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [inView]);

  return (
    <VideoContainer ref={ref}>
      <Video
        ref={videoRef}
        preload="auto"
        autoPlay
        loop
        playsInline
        muted={muted}
        crossOrigin="anonymous"
        src={getAssetPath(videoSrc)}
        poster={getAssetPath(backupImage)}
        style={style}
      >
        {backupImage && (
          <source src={getAssetPath(backupImage)} type="image/jpg" />
        )}
        <Content id="unsupportedVideoMessage" />
      </Video>

      <MuteButton
        onClick={() => {
          setMuted(!muted);
        }}
        aria-label={muted ? content.ariaLabel.play : content.ariaLabel.mute}
      >
        {muted ? <NotPlayginIcon /> : <PlyaingIcon />}
      </MuteButton>
    </VideoContainer>
  );
};

export default MutedVideo;
