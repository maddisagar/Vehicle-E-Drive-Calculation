import "./Deceleration.css"

export default function Deceleration() {
  return (
    <div className="section decel-section">
      <div className="section-title yellow-header">Deceleration</div>
      <div className="decel-grid">
        <div className="parameter-group">
          <div className="parameter-row">
            <span className="parameter-label">Distance to Stop</span>
            <span className="parameter-value">100</span>
            <span className="parameter-unit">mts</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Initial Velocity</span>
            <span className="parameter-value calculated-value">45</span>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Speed</span>
            <span className="parameter-value calculated-value">68</span>
            <span className="parameter-unit">RPM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Regen Current</span>
            <span className="parameter-value calculated-value">2</span>
            <span className="parameter-unit">Amps</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Regen Current</span>
            <span className="parameter-value calculated-value">0</span>
            <span className="parameter-unit">Max A</span>
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
        
        <div className="parameter-group">
          <div className="parameter-row">
            <span className="parameter-label">Final Velocity</span>
            <span className="parameter-value">0</span>
            <span className="parameter-unit">m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Time</span>
            <span className="parameter-value calculated-value">57.60</span>
            <span className="parameter-unit">s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Torque</span>
            <span className="parameter-value calculated-value">16.41</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Torque</span>
            <span className="parameter-value calculated-value">32.81</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Deceleration</span>
            <span className="parameter-value calculated-value">-0.78</span>
            <span className="parameter-unit">m/s²</span>
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
