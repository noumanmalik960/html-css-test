import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
} from "@chakra-ui/react";
import { ReactSVG } from "react-svg";
import { IoMdClose } from "react-icons/io";

function ActionModal({
  isOpen,
  onClose,
  body,
  btnCount,
  variant,
  clickHandler,
}) {
  // variant = warning/success, body="the msg to display", btnCount=1/2, clickHandler="action on button click"
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justify={"space-between"} align={"center"}>
            {variant === "warning" ? (
              <ReactSVG src="warning.svg" />
            ) : (
              <ReactSVG src="success.svg" />
            )}
            <IoMdClose
              onClick={onClose}
              className="close-icon"
              color="#667085"
              size={24}
            />
          </Flex>
        </ModalHeader>

        <ModalBody>
          <p className="modal-msg">{body}</p>
        </ModalBody>

        {/* bottom buttons */}
        <ModalFooter justifyContent={"center"} gap={3} mt={4}>
          <span className="modal-btn-primary" onClick={onClose}>
            확인
          </span>
          {btnCount === "2" ? (
            <span className="modal-btn-secondary" onClick={onClose}>
              취소
            </span>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ActionModal;
