import React from "react";
import { ReactSVG } from "react-svg";

function AppCheckbox() {
  const [checked, setChecked] = React.useState(false);
  return checked ? (
    <ReactSVG
      onClick={() => setChecked((prevState) => !prevState)}
      className="checkbox"
      src="checkbox.svg"
    />
  ) : (
    <ReactSVG
      onClick={() => setChecked((prevState) => !prevState)}
      className="checkbox"
      src="checkbox-unchecked.svg"
    />
  );
}

export default AppCheckbox;
