import "./VehicleGraph.css"

export default function VehicleGraph() {
  return (
    <div className="section graph-section">
      <div className="graph-container">
        <div className="graph-title">Vehicle Drive Torque & Speed</div>
        <div className="graph-area">
          <div className="y-axis">
            <div className="y-label">Torque (Nm)</div>
            <div className="y-values">
              <span>70</span>
              <span>60</span>
              <span>50</span>
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
              <span>-10</span>
            </div>
          </div>
          <div className="graph-plot">
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color top-speed"></span>
                <span>Top Speed</span>
              </div>
              <div className="legend-item">
                <span className="legend-color gradient-3"></span>
                <span>Gradient 3°</span>
              </div>
              <div className="legend-item">
                <span className="legend-color gradient-7"></span>
                <span>Gradient 7°</span>
              </div>
              <div className="legend-item">
                <span className="legend-color gradient-speed"></span>
                <span>Gradient Speed</span>
              </div>
            </div>
            <div className="graph-grid"></div>
          </div>
          <div className="y-axis-right">
            <div className="y-label-right">Distance (Mts)</div>
            <div className="y-values-right">
              <span>690</span>
              <span>590</span>
              <span>490</span>
              <span>390</span>
              <span>290</span>
              <span>190</span>
              <span>90</span>
              <span>-10</span>
              <span>-110</span>
            </div>
          </div>
        </div>
        <div className="x-axis">
          <div className="x-label">Speed (RPM)</div>
          <div className="x-values">
            <span>0</span>
            <span>2000</span>
            <span>4000</span>
            <span>6000</span>
            <span>8000</span>
            <span>10000</span>
            <span>12000</span>
            <span>14000</span>
            <span>16000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
