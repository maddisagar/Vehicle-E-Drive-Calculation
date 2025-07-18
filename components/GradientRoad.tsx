import "./GradientRoad.css"

export default function GradientRoad() {
  return (
    <div className="section gradient-section">
      <div className="section-title yellow-header">Gradient Road</div>
      <div className="gradient-grid">
        <div className="parameter-group">
          <div className="parameter-row">
            <span className="parameter-label">Gradient</span>
            <input className="parameter-value" type="text" defaultValue="9" />
            <span className="parameter-unit">deg</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Initial Velocity</span>
            <input className="parameter-value" type="text" defaultValue="0" />
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Acceleration Time</span>
            <input className="parameter-value" type="text" defaultValue="20" />
            <span className="parameter-unit">sec</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final Velocity</span>
            <input className="parameter-value" type="text" defaultValue="10" />
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Total Tractive Effort</span>
            <span className="parameter-value calculated-value">2015</span>
            <span className="parameter-unit">N</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Distance Travelled</span>
            <span className="parameter-value calculated-value">27.78</span>
            <span className="parameter-unit">mts</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Velocity</span>
            <span className="parameter-value calculated-value">2.78</span>
            <span className="parameter-unit">m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Motor Power</span>
            <span className="parameter-value calculated-value">3.37</span>
            <span className="parameter-unit">KW</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Motor Speed</span>
            <span className="parameter-value calculated-value">1894</span>
            <span className="parameter-unit">RPM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Conti. Motor Torque</span>
            <span className="parameter-value calculated-value">16.97</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Torque</span>
            <span className="parameter-value calculated-value">34</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Initial Speed</span>
            <span className="parameter-value calculated-value">95</span>
            <span className="parameter-unit">RPM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"></span>
            <span className="parameter-value calculated-value"></span>
            <span className="parameter-unit"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
