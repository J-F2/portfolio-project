import React from 'react';
import { useNavigate } from 'react-router-dom';

function GridElement({ id, thumbnailUrl,title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/page/${id}`); // Navigate to the dynamic page with the unique ID
  };

  return (
    <div className="grid-element" onClick={handleClick}>
      <img src={thumbnailUrl} alt={`Thumbnail ${id}`} className="video-thumbnail" />
      <p className={"element-title"}>{title}</p>
    </div>
  );
}

export default GridElement;