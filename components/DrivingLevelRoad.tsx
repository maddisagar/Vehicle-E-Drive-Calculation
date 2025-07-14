import "./DrivingLevelRoad.css"

export default function DrivingLevelRoad() {
  return (
    <div className="section driving-section">
      <div className="section-title yellow-header">Driving on Level Road</div>
      <div className="driving-grid">
        <div className="left-column">
          <div className="parameter-row">
            <span className="parameter-label">Gear-1</span>
            <span className="parameter-value">8</span>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Gear2</span>
            <span className="parameter-value">18</span>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wheel Radius</span>
            <span className="parameter-value">0.252</span>
            <span className="parameter-unit">m</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Soft Start Kmph</span>
            <span className="parameter-value">0</span>
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Initial Velocity</span>
            <span className="parameter-value">0</span>
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Velocity-1</span>
            <span className="parameter-value">45</span>
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Acceleration Time</span>
            <span className="parameter-value">10</span>
            <span className="parameter-unit">sec</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final Velocity-2</span>
            <span className="parameter-value">45</span>
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final Accel time</span>
            <span className="parameter-value">10</span>
            <span className="parameter-unit">sec</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Total Weight</span>
            <span className="parameter-value calculated-value">1200</span>
            <span className="parameter-unit">Kg</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Total Tractive</span>
            <span className="parameter-value calculated-value">1717</span>
            <span className="parameter-unit">N</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Acceleration</span>
            <span className="parameter-value calculated-value">1.25</span>
            <span className="parameter-unit">m/s²</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Accelerated Dist</span>
            <span className="parameter-value calculated-value">62.50</span>
            <span className="parameter-unit">mts</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Accelerated Power</span>
            <span className="parameter-value calculated-value">11.92</span>
            <span className="parameter-unit">KW</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Accel Torque</span>
            <span className="parameter-value calculated-value">30</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Initial Motor RPM</span>
            <span className="parameter-value calculated-value">379</span>
            <span className="parameter-unit">RPM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Motor Torque</span>
            <span className="parameter-value calculated-value">26.70</span>
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

        <div className="right-column">
          <div className="parameter-row">
            <span className="parameter-label">Vehicle Weight</span>
            <span className="parameter-value">1200</span>
            <span className="parameter-unit">Kg</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Passenger Weight</span>
            <span className="parameter-value">0</span>
            <span className="parameter-unit">Kg</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Passengers</span>
            <span className="parameter-value">1</span>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Gradient</span>
            <span className="parameter-value">0.1</span>
            <span className="parameter-unit">deg</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Rolling Resistance</span>
            <span className="parameter-value">0.015</span>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Coefficient of Drag</span>
            <span className="parameter-value">0.2</span>
            <span className="parameter-unit"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind Speed</span>
            <span className="parameter-value">1</span>
            <span className="parameter-unit">Kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Transmission Effie</span>
            <span className="parameter-value">90</span>
            <span className="parameter-unit">%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Front Area</span>
            <span className="parameter-value">1</span>
            <span className="parameter-unit">m2</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Cont Tractive Effort</span>
            <span className="parameter-value calculated-value">217</span>
            <span className="parameter-unit">N</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final_Acce</span>
            <span className="parameter-value calculated-value">0.00</span>
            <span className="parameter-unit">m/s²</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final_Acce Dist</span>
            <span className="parameter-value calculated-value">125</span>
            <span className="parameter-unit">mts</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Final_Accel Power</span>
            <span className="parameter-value calculated-value">3.01</span>
            <span className="parameter-unit">KW</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Cont-Rated Torque</span>
            <span className="parameter-value calculated-value">7.6</span>
            <span className="parameter-unit">Nm</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Cont-Rated Power</span>
            <span className="parameter-value calculated-value">3.01</span>
            <span className="parameter-unit">KW</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Rated Speed</span>
            <span className="parameter-value calculated-value">3789</span>
            <span className="parameter-unit">RPM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Cont-Rated Torque</span>
            <span className="parameter-value calculated-value">7.6</span>
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
