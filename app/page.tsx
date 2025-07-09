import Header from "../components/Header"
import CustomerSection from "../components/CustomerSection"
import DrivingLevelRoad from "../components/DrivingLevelRoad"
import GradientRoad from "../components/GradientRoad"
import SteepGradient from "../components/SteepGradient"
import Deceleration from "../components/Deceleration"
import VehicleGraph from "../components/VehicleGraph"
import BatteryCalculation from "../components/BatteryCalculation"
import "./dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-content">
        <div className="section-left">
          <CustomerSection />
          <DrivingLevelRoad />
        </div>
        <div className="section-middle">
          <GradientRoad />
          <SteepGradient />
          <Deceleration />
        </div>
        <div className="section-right">
          <VehicleGraph />
          <BatteryCalculation />
        </div>
      </div>
    </div>
  )
}
