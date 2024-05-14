import React, { useState, useEffect } from 'react';

function Video() {
    const [videoUrl, setVideoUrl] = useState('');

    
    const handleFileChange = (event) => {
      const file = event.target.files[0]; 
      const url = URL.createObjectURL(file); 
      setVideoUrl(url); 
    };
  
    return (
      <div className="video-container">
        <h1>Reproductor de Video</h1>
        <div className="video-wrapper">
         
          {videoUrl && (
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          )}
  
          
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
    );
  }

export default Video;