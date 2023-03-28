import React from 'react';
import './Circle.css';

const LoadingCircle =({ message }) => {
  return (
    <div className="loading-container">
      <div className="loading-circle" />
      <p className="loading-message">{message}</p>
    </div>
  );
}
export default LoadingCircle