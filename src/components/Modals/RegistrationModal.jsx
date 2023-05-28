import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Box,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import AppCheckbox from "../AppCheckbox";

function RegistrationModal({ isOpen, onClose }) {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={"3xl"}
      className="reg-modal"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mt={"3"} mb={"-1"}>
          <Flex justify={"space-between"}>
            <span>승인거부 사유 입력</span>
            <IoMdClose
              onClick={onClose}
              className="close-icon"
              color="#667085"
              size={24}
            />
          </Flex>
        </ModalHeader>

        <ModalBody>
          <Box mx={-6}>
            <hr className="separator" />
          </Box>

          <div className="parent-reg-grid">
            <div className="div1">회원번호</div>
            <div className="div2">abc111, abc222</div>
            <div className="div3">회원명/법인명</div>
            <div className="div4">김길동, ㈜가나다라투자</div>
            <div className="div5">승인거부 사유</div>
            <div className="div6">
              <span style={{ display: "flex" }}>
                <AppCheckbox />
                <p>서류 식별 불가</p>
              </span>
              <span style={{ display: "flex" }}>
                <AppCheckbox />
                <p>필수 서류 누락</p>
              </span>
              <span style={{ display: "flex" }}>
                <AppCheckbox />
                <p>서류의 내용이 등록된 회원정보와 다름</p>
              </span>
              <span style={{ display: "flex" }}>
                <AppCheckbox />
                <p>
                  서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                  본인서명 등)
                </p>
              </span>
              <span style={{ display: "flex" }}>
                <AppCheckbox />
                <p>서류의 유효기간이 초과됨</p>
              </span>
              <span style={{ display: "flex" }}>
                <AppCheckbox />
                <p>직접 입력</p>
              </span>
              <Box px={4} pt={2} pb={3}>
                <textarea
                  className="textarea"
                  rows={4}
                  placeholder="사유 입력"
                />
              </Box>
            </div>
          </div>

          <Box mx={-6}>
            <hr className="separator" />
          </Box>
        </ModalBody>

        {/* bottom buttons */}
        <ModalFooter justifyContent={"center"} gap={3}>
          <span className="modal-btn-primary" onClick={onClose}>
            저장{" "}
          </span>
          <span className="modal-btn-secondary" onClick={onClose}>
            취소
          </span>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RegistrationModal;
