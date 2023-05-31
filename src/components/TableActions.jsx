import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  InvestmentModal,
  RegistrationModal,
  ActionModal,
  Dropdown,
} from "../components";

function TableActions({ checkedItemsLength }) {
  const data = {
    approvalStatuses: ["승인상태 변경", "승인완료", "승인거부"],
    // ['change approval status', 'approved', 'denial of approval']
  };

  const [currStatusFilterValue, setCurrStatusFilterValue] = useState("");
  // Registration modal states
  const {
    isOpen: isRegistrationOpen,
    onOpen: onRegistrationOpen,
    onClose: onRegistrationClose,
  } = useDisclosure();

  // Confirmation modal states
  const {
    isOpen: isSaveOpen,
    onOpen: onSaveOpen,
    onClose: onSaveClose,
  } = useDisclosure();

  // Confirm modal states
  const {
    isOpen: isConfirmOpen,
    onOpen: onConfirmOpen,
    onClose: onConfirmClose,
  } = useDisclosure();

  // Investment modal states
  const {
    isOpen: isInvestmentOpen,
    onOpen: onInvestmentOpen,
    onClose: onInvestmentClose,
  } = useDisclosure();

  const handleUpdateStatusClick = () => {
    if (currStatusFilterValue === "승인거부") {
      onRegistrationOpen();
    } else if (currStatusFilterValue === "승인완료") {
      onConfirmOpen();
    }
  };

  return (
    <>
      {/* Table top controls actions */}
      <div className="table-top-controls">
        <span onClick={onInvestmentOpen} className="btn">
          등록
        </span>
        <div className="right-col">
          <p className="table-top-controls-text">
            선택한 {checkedItemsLength}건
          </p>
          <Dropdown
            data={data.approvalStatuses}
            currStatusFilterValue={currStatusFilterValue}
            setCurrStatusFilterValue={setCurrStatusFilterValue}
            title="APPROVE_REJECT_FILTER"
          />
          <span onClick={handleUpdateStatusClick} className="btn">
            저장
          </span>
        </div>
      </div>

      {/* Modals */}
      <>
        {/* Approval/Rejection modal */}
        <RegistrationModal
          isOpen={isRegistrationOpen}
          onClose={onRegistrationClose}
          onOpen={onRegistrationOpen}
          onSave={() => {
            onRegistrationClose();
            onSaveOpen();
          }}
        />

        {/* Change of investment modal */}
        <InvestmentModal
          isOpen={isInvestmentOpen}
          onClose={onInvestmentClose}
          onOpen={onInvestmentOpen}
          onSave={() => {
            onInvestmentClose();
            onSaveOpen();
          }}
        />

        {/* Saved action modal */}
        <ActionModal
          isOpen={isSaveOpen}
          onClose={onSaveClose}
          body={"저장되었습니다."}
          btnCount={"1"}
          clickHandler={onSaveClose}
          variant={"success"}
        />

        {/* Confirmation action modal */}
        <ActionModal
          isOpen={isConfirmOpen}
          onClose={onConfirmClose}
          body={"선택된 명의 승인상태를 변경하시겠습니까?"}
          btnCount={"2"}
          clickHandler={onConfirmClose}
          variant={"warning"}
        />
      </>
    </>
  );
}

export default TableActions;
