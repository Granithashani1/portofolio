import React from 'react'
import { ProgressBar } from 'react-bootstrap';

function React1() {
    const now = 90;
    return (
      <div className="progres1">
        <ProgressBar now={now} label={`${now}%`} />;
      </div>
      
    );
  }

export default React1
