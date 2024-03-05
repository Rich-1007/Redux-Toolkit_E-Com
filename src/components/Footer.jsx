import React from 'react';


export const Footer = () => {
  const handleRedirect = () => {
    window.open(
      "https://example.comhttps://www.linkedin.com/in/hricheak-ghosh/",
      "_blank"
    );
  };

  return (
    <div className=''>
      Redux Toolkit Example Created by
      <button onClick={handleRedirect}>Hricheak Ghosh</button>
    </div>
  );
};
