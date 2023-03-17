import ProgressBar from "react-bootstrap/ProgressBar";
import {} from '../style/Home.css'

function WithLabelExample() {
  const now = 100;
  return (
    <div className="progres1">
      <ProgressBar now={now} label={`${now}%`} />;
    </div>
    
  );
}

export default WithLabelExample;
