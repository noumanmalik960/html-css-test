import React from "react";
import Dropdown from "./Dropdown";
import ActionModal from "./Modals/ActionModal";
import { useDisclosure } from "@chakra-ui/react";
import RegistrationModal from "./Modals/RegistrationModal";

function TableActions() {
  const data = {
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
      {/* Table top controls actions */}
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
      <>
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
    </>
  );
}

export default TableActions;
