// components/VideoEmbed.tsx
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoEmbedProps {
  content: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ content }) => {
  // Regular expression to match YouTube video URLs
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Extract YouTube video URL from the content
  const match = content.match(youtubeRegex);
  const youtubeUrl = match ? match[0] : '';

  return (
    <div>
      {youtubeUrl ? (
        // Embed YouTube video
        <ReactPlayer url={youtubeUrl} width="100%" height="100%" />
      ) : (
        // Handle other cases or display a message
        <p>No video found in the text.</p>
      )}
    </div>
  );
};

export default VideoEmbed;
