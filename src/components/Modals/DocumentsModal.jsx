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

function DocumentsModal({ isOpen, onClose, onSave }) {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={"3xl"}
      // className="reg-modal"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mt={"3"} mb={"-1"}>
          <Flex justify={"space-between"}>
            <span>서류 보기</span>
            <IoMdClose
              onClick={onClose}
              className="close-icon"
              color="#667085"
              size={24}
            />
          </Flex>
        </ModalHeader>

        <ModalBody className="doc-modal">
          <Box mx={-6}>
            <hr className="separator" />
          </Box>
          <div className="container">
            <div className="left-col">
              <span className="title">서류</span>
              <div className="new-indicator" />
            </div>
            <div className="right-col">
              <div>img</div>
              <div>img</div>
            </div>
          </div>

          <Box mx={-6}>
            <hr className="separator" />
          </Box>
        </ModalBody>

        {/* bottom buttons */}
        <ModalFooter justifyContent={"center"} alignItems={"baseline"} gap={3}>
          <span className="doc-modal-secondary-btn">파일 다운로드 </span>
          <span className="doc-modal-primary-btn" onClick={onClose}>
            확인
          </span>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DocumentsModal;
