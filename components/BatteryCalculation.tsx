import "./BatteryCalculation.css"

export default function BatteryCalculation() {
  return (
    <div className="section battery-section">
      <div className="section-title yellow-header">Battery Discharge & Charge Calculation</div>
      <div className="battery-grid">
        <div className="battery-left">
          <div className="parameter-row">
            <span className="parameter-label">Battery Ampere Rating</span>
            <span className="parameter-value">2</span>
            <span className="parameter-unit">KWH</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Battery Voltage</span>
            <span className="parameter-value">51</span>
            <span className="parameter-unit">Volt</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Peukerts effect loss</span>
            <span className="parameter-value">0</span>
            <span className="parameter-unit">%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">SOC Usable %</span>
            <span className="parameter-value">80</span>
            <span className="parameter-unit">%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Motor + Contr Efficiency</span>
            <span className="parameter-value">88</span>
            <span className="parameter-unit">%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Nom Charging Rate</span>
            <span className="parameter-value calculated-value">1.96</span>
            <span className="parameter-unit">A</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Ampere Hour</span>
            <span className="parameter-value calculated-value">31.37</span>
            <span className="parameter-unit">AH</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Avg Drive Current</span>
            <span className="parameter-value calculated-value">67</span>
            <span className="parameter-unit">Amp</span>
          </div>
        </div>
        <div className="battery-right">
          <div className="parameter-row">
            <span className="parameter-label">Watt-Hour/Meter</span>
            <span className="parameter-value calculated-value">75.96</span>
            <span className="parameter-unit">Wh/KM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Dist Travel/Charge</span>
            <span className="parameter-value calculated-value">21.06</span>
            <span className="parameter-unit">KM</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Conti Current C Rating</span>
            <span className="parameter-value calculated-value">2.14</span>
            <span className="parameter-unit">C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Usable Hours by C rating</span>
            <span className="parameter-value calculated-value">0.37</span>
            <span className="parameter-unit">hrs</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Acc_Current-1 C rating</span>
            <span className="parameter-value calculated-value">6.56</span>
            <span className="parameter-unit">C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Acc_Current Final C rating</span>
            <span className="parameter-value calculated-value">1.65</span>
            <span className="parameter-unit">C</span>
          </div>
        </div>
      </div>
    </div>
  )
}
