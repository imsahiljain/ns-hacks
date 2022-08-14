import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";

function UpdateTask({ task, updateTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState("");

  const initialRef = React.useRef();

  return (
    <>
      <IconButton
        icon={<FiEdit />}
        onClick={onOpen}
        bgColor="#414141"
        color="#e4e4e4"
        _hover={{
          bg: "#414141",
        }}
        _active={{ bg: "#414141" }}
      />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%" bgColor="#212121" color="#e4e4e4">
          <ModalHeader>Update the task </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Enter task"
                borderColor="#363636"
                _hover={{ borderColor: "#363636" }}
                _active={{ borderColor: "#363636  " }}
                _placeholder={{ color: "#414141" }}
                defaultValue={task.body}
                onChange={(e) => setBody(e.target.value)}
                onFocus={(e) => setBody(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => updateTask(task.id, body, onClose)}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateTask;
