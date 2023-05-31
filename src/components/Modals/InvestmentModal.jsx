import { useState } from "react";
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
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ReactSVG } from "react-svg";

function InvestmentModal({ isOpen, onClose, onSave }) {
  const dropdownItems = [
    "일반개인",
    "소득적격",
    "개인전문",
    "법인",
    "여신금융",
    "P2P온투",
  ];
  const [open, setOpen] = useState(false);
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
            <span>투자유형 변경</span>
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
          <div className="parent-investment-grid">
            <div className="div1 div">회원번호</div>
            <div className="div2 div">abc111</div>
            <div className="div3 div">회원명/법인명</div>
            <div className="div4 div">김길동</div>
            <div className="div5 div">
              투자유형 <span className="new-indicator" />
            </div>
            <div className="div6 div">
              <span onClick={() => setOpen((prevState) => !prevState)}>
                일반개인
                {open ? (
                  <BiChevronUp size={24} color="#5A616A" />
                ) : (
                  <BiChevronDown size={24} color="#5A616A" />
                )}
              </span>
            </div>
            <div className="div7 div">
              서류첨부
              <span className="new-indicator" />
            </div>
            <div className="div8 div">
              <p className="btn">파일 선택</p>
              <div className="icon-container">
                사업자등록증1.jpg
                <ReactSVG className="cross-icon" src="cross_icon.svg" />
              </div>
              <div className="icon-container">
                <p>서류1.jpg</p>
                <ReactSVG className="cross-icon" src="cross_icon.svg" />
              </div>
            </div>
          </div>
          {/* bottom notes */}
          <ul className="inv-modal-ul">
            <li>
              파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다. 최대 10개,
            </li>
            <li>100MB까지 등록이 가능합니다.</li>
          </ul>
          <Box mx={-6}>
            <hr className="separator" />
          </Box>
        </ModalBody>

        {/* bottom buttons */}
        <ModalFooter justifyContent={"center"} gap={3}>
          <span className="modal-btn-primary" onClick={onSave}>
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

export default InvestmentModal;
