import React from 'react'
import { ProgressBar } from 'react-bootstrap';

function Javascript() {
    const now = 80;
    return (
      <div className="progres1">
        <ProgressBar now={now} label={`${now}%`} />;
      </div>
      
    );
  }

export default Javascript
