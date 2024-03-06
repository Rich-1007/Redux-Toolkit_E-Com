import React from 'react';


export const Footer = () => {
  const handleRedirect = () => {
    window.open(
      "https://example.comhttps://www.linkedin.com/in/hricheak-ghosh/",
      "_blank"
    );
  };

  return (
    <div className='bg-slate-600 justify-center text-white items-center flex min-h-20 '> 
      Redux Toolkit Example Created by&nbsp;
      <button className=' text-green-500 ' onClick={handleRedirect }> Hricheak Ghosh</button>
    </div>
  );
};
