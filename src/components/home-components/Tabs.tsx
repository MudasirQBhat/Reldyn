import { useState } from "react";
import ParkingManagement from "./ParkingManagement";
import BankingPlatform from "./BankingPlatform";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Parking Management");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="-mt-20 md:-mt-14 relative">
      <div className="flex flex-row ml-0 md:ml-28">
        <div
          className={`tab ${
            activeTab === "Parking Management"
              ? "bg-color-dark-silver text-color-black"
              : "text-color-white"
          } py-2 px-4 md:py-4 md:px-8 rounded-t-3xl cursor-pointer font-roboto font-bold`}
          onClick={() => handleTabClick("Parking Management")}
        >
          Parking Management
        </div>
        <div
          className={`tab ${
            activeTab === "Banking Platform"
              ? "bg-color-dark-silver text-color-black"
              : "text-color-white"
          } py-4 px-8 rounded-t-3xl cursor-pointer font-roboto font-bold`}
          onClick={() => handleTabClick("Banking Platform")}
        >
          Banking Platform
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "Parking Management" ? <ParkingManagement /> : null}
        {activeTab === "Banking Platform" ? <BankingPlatform /> : null}
      </div>
    </div>
  );
};

export default Tabs;
