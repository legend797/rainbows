import MuxPlayer from '@mux/mux-player-react';

export default function VideoPlayer({token, id}) {
  return (token && id) && (
    <MuxPlayer
    streamType="live"
    playbackId= {id}
    metadataVideoTitle="RIS RAINBOW"
    metadataViewerUserId=""
    primaryColor="#FFFFFF"
    secondaryColor="#000000"
    tokens={{
        playback: token,
        thumbnail: token,
        storyboard: token
    }}
  />
  );
}