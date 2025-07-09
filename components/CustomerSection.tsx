import "./CustomerSection.css"

export default function CustomerSection() {
  return (
    <div className="customer-section">
      <div className="customer-field">
        <span className="field-label">Customer</span>
        <span className="field-value">3EV</span>
      </div>
      <div className="customer-field">
        <span className="field-label">Application</span>
        <span className="field-value">1</span>
      </div>
      <div className="customer-field">
        <span className="field-label">Date</span>
        <span className="field-value">6-24-25</span>
      </div>
    </div>
  )
}
