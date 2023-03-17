import React from 'react'
import { ProgressBar } from 'react-bootstrap';

function Csharp() {
    const now = 50;
    return (
      <div className="progres1">
        <ProgressBar now={now} label={`${now}%`} />;
      </div>
      
    );
  }

export default Csharp
