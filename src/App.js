import React from "react";
import Card from "./components/Card";
import cardData from "./cardData";
import banner from './assets/banner.webp'
import SideBar from "./components/SideBar";



function App() {
  return (<div className="overflow-hidden h-screen">
    <div className="grid grid-cols-12 items-center space-x-4 p-3 md:p-6">
      <div className="col-span-12 md:col-span-9">
        <img src={banner} alt="banner" />
      </div>
      <SideBar />
    </div>
    <div className="px-3 md:px-6 pb-[100px] flex justify-between items-center space-x-4 overflow-x-auto no-scrollbar">
      {cardData.map((data, i) => <Card data={data} key={i} />)}
    </div>
  </div>
  );
}

export default App;
