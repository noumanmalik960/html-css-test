import React, { useState } from "react";
import { MenubarList, Pagination, Titlebar, Table } from "./components";
import "./App.css";

function App() {
  const [currMenuIndex, setCurrMenuIndex] = useState(0);

  return (
    <div className="app-container">
      <Titlebar />

      <hr className="separator" />

      {/* Menubar */}
      <div className="menu-bar-container">
        <ul className="menu-bar">
          <MenubarList
            currMenuIndex={currMenuIndex}
            setCurrMenuIndex={setCurrMenuIndex}
          />
        </ul>
      </div>

      <Table />

      <Pagination />
    </div>
  );
}

export default App;
