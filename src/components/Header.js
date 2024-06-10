import React from "react";
import "./Header.css";
import HCLTechLogo from "./img/HCL Tech.svg";

export function Header() {
  return (
    <header>
      <div className="logo">
        <img src={HCLTechLogo} alt="HCLTech Logo" />
      </div>
    </header>
  );
}
