import React from "react";
import Dropdown from "./Dropdown";
import ActionModal from "./ActionModal";
import { useDisclosure } from "@chakra-ui/react";
import RegistrationModal from "./RegistrationModal";

function Filters() {
  const data = {
    dropdownStatus: ["승인여부 전체", "승인대기", "승인완료", "승인거부"],
    orderData: ["신청일시순", "승인일시순"],
    limits: ["10개씩 보기", "50개씩 보기", "100개씩 보기"],
    approvalLimits: ["승인상태 변경", "승인완료", "승인거부"],
  };

  const {
    isOpen: isConfirmOpen,
    onOpen: onConfirmOpen,
    onClose: onConfirmClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const {
    isOpen: isRegistrationOpen,
    onOpen: onRegistrationOpen,
    onClose: onRegistrationClose,
  } = useDisclosure();

  return (
    <>
      <div className="filters">
        {/* left col */}
        <div className="text-container">
          <p className="primary-text">신청 목록</p>
          <p className="secondary-text">
            (총 100명 | 승인대기 <span>1</span>건)
          </p>
        </div>

        {/* right col */}
        <div className="dropdowns-container">
          <Dropdown data={data.dropdownStatus} />
          <Dropdown data={data.orderData} />
          <Dropdown data={data.limits} />
        </div>
      </div>

      {/* Separator */}
      <hr className="separator" />

      {/* Table top controls */}
      <div className="table-top-controls">
        <span onClick={onRegistrationOpen} className="btn">
          등록
        </span>
        <div className="right-col">
          <p className="table-top-controls-text">선택한 0건</p>
          <Dropdown data={data.approvalLimits} />
          <span onClick={onDeleteOpen} className="btn">
            저장
          </span>
        </div>
      </div>

      {/* Modals */}
      <ActionModal
        isOpen={isConfirmOpen}
        onOpen={onConfirmOpen}
        onClose={onConfirmClose}
        body={"선택된 신청건이 없습니다."}
        btnCount={"1"}
        variant="warning"
      />
      <ActionModal
        isOpen={isDeleteOpen}
        onOpen={onDeleteOpen}
        onClose={onDeleteClose}
        body={"저장되었습니다."}
        btnCount={"2"}
        variant="success"
      />

      {/* Registration modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={onRegistrationClose}
        onOpen={onRegistrationOpen}
      />
    </>
  );
}

export default Filters;
