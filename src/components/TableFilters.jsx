import React, { useEffect, useState } from "react";
import { Dropdown } from "../components";

function TableFilters({ orignalData, filteredData, setFilteredData }) {
  const dropDownOptionsData = {
    approvalStatusFilters: [
      "승인여부 전체",
      "승⁠인⁠대⁠기",
      "승인완료",
      "승인거부",
    ],
    dateFilters: ["신청일시순", "승인일시순"],
    displayLimits: ["50개씩 보기"],
  };

  // curr selected approvalStatusFilters filter value
  const [currApprovalFilter, setCurrApprovalFilter] = useState(
    dropDownOptionsData.approvalStatusFilters[0]
  );

  // filter table data based on curr selected filter from state
  useEffect(() => {
    if (currApprovalFilter === "승인여부 전체") {
      setFilteredData(orignalData);
    } else {
      const tempData = orignalData.filter(
        (item) => item.status === currApprovalFilter
      );
      setFilteredData(tempData);
    }
  }, [currApprovalFilter]);

  // setting the count of pending items
  const [pendingCount, setPendingCount] = useState(0);
  useEffect(() => {
    const pendingApprovalCount = () => {
      const pendingUsers = filteredData.filter(
        (item) => item.status == "승⁠인⁠대⁠기"
      );
      setPendingCount(pendingUsers.length);
    };

    pendingApprovalCount();
  }, [filteredData]);

  return (
    <>
      <div className="filters">
        {/* left col */}
        <div className="text-container">
          <p className="primary-text">신청 목록</p>
          <p className="secondary-text">
            (총 100명 | 승인대기 <span>{pendingCount}</span>건)
          </p>
        </div>

        {/* right col */}
        <div className="dropdowns-container">
          <Dropdown
            data={dropDownOptionsData.approvalStatusFilters}
            currApprovalFilter={currApprovalFilter}
            setCurrApprovalFilter={setCurrApprovalFilter}
            title={"STATUS_FILTER"}
          />
          <Dropdown
            data={dropDownOptionsData.dateFilters}
            title={"DATE_FILTER"}
          />
          <Dropdown
            data={dropDownOptionsData.displayLimits}
            title={"LIMIT_FILTER"}
          />
        </div>
      </div>
      {/* Separator */}
      <hr className="separator" />
    </>
  );
}

export default TableFilters;
