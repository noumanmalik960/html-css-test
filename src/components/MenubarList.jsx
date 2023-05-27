import React from "react";

const MenubarList = ({ currMenuIndex, setCurrMenuIndex }) => {
  const menuItems = [
    "기본정보 관리",
    "투자유형 관리",
    "입출금내역 조회",
    "영업내역 조회",
    "투자내역 조회",
    "채권내역 조회",
    "SMS 관리",
    "상담내역 관리",
    "1:1문의내역 조회",
  ];
  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={index == currMenuIndex ? "selected-menu" : null}
          onClick={() => setCurrMenuIndex(index)}
        >
          {item}
        </li>
      ))}
    </>
  );
};

export default MenubarList;
