import "./Header.css"
import Image from "next/image"
import SegLogo from "../assets/logo.svg"

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-section">
        <Image src={SegLogo} alt="SEG Automotive Logo" className="seg-logo" />
      </div>
      <div className="title-section">
        <h1>Vehicle e-Drive Calculation</h1>
      </div>
    </div>
  )
}
