import React, { useState } from "react";
import MenubarList from "./components/MenubarList";
import Pagination from "./components/Pagination";
import Titlebar from "./components/Titlebar";
import Filters from "./components/Filters";
import Table from "./components/Table";
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

      <Filters />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
