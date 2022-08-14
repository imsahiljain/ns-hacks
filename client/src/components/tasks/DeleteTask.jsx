import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

function DeleteAllTask({ deleteTaskAll }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        px="8"
        h="45"
        bgColor="#2e2e2e"
        color="#e4e4e4"
        _hover={{
          bg: "#414141",
        }}
        _active={{ bg: "#414141" }}
        mt="8"
        onClick={onOpen}
      >
        Delete all tasks
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" bgColor="#212121">
          <ModalHeader>Are you sure you want to delete all tasks?</ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="blue" onClick={() => deleteTaskAll()}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function DeleteTask({ task, deleteTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<FiTrash2 />}
        onClick={onOpen}
        bgColor="#414141"
        color="#e4e4e4"
        _hover={{
          bg: "#414141",
        }}
        _active={{ bg: "#414141" }}
      />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" bgColor="#212121" color="#e4e4e4">
          <ModalHeader>Are you sure you want to delete this tasks?</ModalHeader>
          <ModalBody>
            <Text>{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => deleteTask(task.id, onClose)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { DeleteTask, DeleteAllTask };
