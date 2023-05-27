import React, { useEffect, useRef } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Dropdown({ data }) {
  const ref = useRef();
  const [open, setOpen] = React.useState(false);
  const [currValue, setCurrValue] = React.useState(data[0]);

  useEffect(() => {
    let handler = (e) => {
      if (!ref.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div
      ref={ref}
      className="dropdown"
      onClick={() => setOpen((prevState) => !prevState)}
    >
      <p>{currValue}</p>
      {open ? (
        <BiChevronUp size={24} color="#5A616A" />
      ) : (
        <BiChevronDown size={24} color="#5A616A" />
      )}

      {open ? (
        <div className="dropdown-items">
          <ul>
            {data.map((item, index) => (
              <li key={index} onClick={() => setCurrValue(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
