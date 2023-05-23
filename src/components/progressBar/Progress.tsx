import ProgressBar from "react-bootstrap/ProgressBar";

function WithLabelExample() {
  const now = 20;
  return (
    <div className="www">
      <div className="bg-blue-400">
        <ProgressBar
          className="right"
          variant="success"
          now={now}
          label={`${now}%`}
        />
      </div>
    </div>
  );
}

export default WithLabelExample;
