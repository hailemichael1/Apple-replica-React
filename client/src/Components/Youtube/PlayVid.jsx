import React from 'react'

const PlayVid = ({vidId}) => {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${vidId}`}
        title="Building the Netflix Clone"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default PlayVid
