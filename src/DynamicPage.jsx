import React from 'react';
import { useParams } from 'react-router-dom';
import BackBar from './BackBar';

function DynamicPage({ gridElements }) {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const element = gridElements.find((item) => item.id === parseInt(id)); // Find the matching element

  if (!element) {
    return <div>Page not found</div>; // Handle invalid IDs
  }

  return (
    <>
      <div style={{ minHeight: "91.5vh" }}>
        <h1 className='page-title'>{element.title}</h1>

        {element.content && (
          <div className='video-holder'>
            <iframe
                className='video'
                src={element.content}
                title="YouTube video player"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
            />
          </div>
        )}
        {!element.content && (
          <div className='video-holder'>
            <img src={element.thumbnailUrl} alt={`Thumbnail ${element.id}`} className="video-thumbnail" />
          </div>
        )}

        {element.description && <div className="summary">{element.description}</div>}
        {element.pdf && <iframe className="pdf" frameBorder="0" src={element.pdf} />}
        {element.links && (
          <ul className="links-list">
            {element.links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link.length > 50 ? `${link.substring(0, 50)}...` : link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <BackBar />
    </>
  );
}

export default DynamicPage;