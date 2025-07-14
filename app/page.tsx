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
      <CustomerSection />
      <div className="main-content">
        <div className="section-left">
          <DrivingLevelRoad />
        </div>
        <div className="section-middle">
          <div className="side-by-side-container">
            <GradientRoad />
            <SteepGradient />
          </div>
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