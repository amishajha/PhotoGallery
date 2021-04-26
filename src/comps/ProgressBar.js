import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></div>
  );
} 

export default ProgressBar;