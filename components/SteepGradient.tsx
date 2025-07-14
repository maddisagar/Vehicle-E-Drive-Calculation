import "./SteepGradient.css"

export default function SteepGradient() {
  return (
    <div className="section steep-section">
      <div className="section-title yellow-header">Steep Gradient</div>
      <div className="steep-grid">
        <div className="parameter-group">
          <div className="parameter-row">
            <span className="parameter-label">Gradient</span>
            <input className="parameter-value" type="text" defaultValue="18" />
            <span className="parameter-unit">deg</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Initial Velocity</span>
            <input className="parameter-value" type="text" defaultValue="0" />
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Acceleration Time</span>
            <input className="parameter-value" type="text" defaultValue="40" />
            <span className="parameter-unit">sec</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final Velocity</span>
            <input className="parameter-value" type="text" defaultValue="18" />
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Velocity</span>
            <span className="parameter-value calculated-value">2.78</span>
            <span className="parameter-unit">m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Distance Travelled</span>
            <span className="parameter-value calculated-value">100.00</span>
            <span className="parameter-unit">mts</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Motor Power</span>
            <span className="parameter-value calculated-value">10.98</span>
            <span className="parameter-unit">KW</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Total Tractive Effort</span>
            <span className="parameter-value calculated-value">3953</span>
            <span className="parameter-unit">N</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Motor Speed</span>
            <span className="parameter-value calculated-value">3410</span>
            <span className="parameter-unit">RPM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Conti. Motor Torque</span>
            <span className="parameter-value calculated-value">30.75</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Torque</span>
            <span className="parameter-value calculated-value">61.49</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"></span>
            <span className="parameter-value calculated-value"></span>
            <span className="parameter-unit"></span>
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
