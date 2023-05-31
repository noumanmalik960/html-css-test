import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Dropdown(props) {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [currValue, setCurrValue] = useState(props.data[0]);

  // props.title identifies the type of dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    if (props.title === "APPROVE_REJECT_FILTER") {
      props.setCurrStatusFilterValue(item);
      setCurrValue(item);
    } else if (props.title === "STATUS_FILTER") {
      props.setCurrApprovalFilter(item);
      setCurrValue(item);
    } else setCurrValue(item);
  };

  return (
    <div ref={ref} className="dropdown" onClick={handleDropdownClick}>
      <p>{currValue}</p>
      {open ? (
        <BiChevronUp size={24} color="#5A616A" />
      ) : (
        <BiChevronDown size={24} color="#5A616A" />
      )}

      {open && (
        <div className="dropdown-items">
          <ul>
            {props.data.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
