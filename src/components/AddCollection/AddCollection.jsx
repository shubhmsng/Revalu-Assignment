import { useState } from "react";
import { Modal, Stack, Typography } from "@mui/material";
import propTypes from "prop-types";

import {
  AddModalContainer,
  CloseButton,
  HelperText,
  Label,
  SubmitButton,
} from "./styles";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import { useEffect } from "react";

const AddCollectionModal = ({ open, onClose, onAdd }) => {
  const [collectionName, setCollectionName] = useState("");
  const [collectionDesc, setCollectionDesc] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setCollectionName("");
      setCollectionDesc("");
      setErrors({});
    }
  }, [open]);

  const validate = (key) => {
    if (key === "collectionName") {
      if (!collectionName.trim() || collectionName.trim().length > 40) {
        setErrors((prev) => ({
          ...prev,
          [key]: "Collection Name is required",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [key]: "" }));
      }
    }
    if (key === "collectionDescription") {
      if (!collectionDesc.trim() || collectionDesc.trim().length > 140) {
        setErrors((prev) => ({
          ...prev,
          [key]: "Collection Description is required",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [key]: "" }));
      }
    }
  };

  const isSubmitButtonDisabled = () => {
    return (
      !collectionName.trim() ||
      !collectionDesc.trim() ||
      collectionName.trim().length > 40 ||
      collectionDesc.trim().length > 140
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!isSubmitButtonDisabled()) {
      onAdd(collectionName, collectionDesc);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-modal"
      aria-describedby="Add collection"
    >
      <AddModalContainer>
        <form onSubmit={handleFormSubmit}>
          <Typography fontSize={"24px"} fontWeight={500}>
            New Collection
          </Typography>
          <Stack gap="24px" mt="16px">
            <Stack gap="8px">
              <Label required htmlFor="collection-name">
                Collection Name
              </Label>
              <TextInput
                id="collection-name"
                name="collection-name"
                className={errors.collectionName && "error"}
                onBlur={() => validate("collectionName")}
                onChange={(event) => setCollectionName(event.target.value)}
                placeholder="Collection Title"
              />
              <HelperText>{collectionName.trim().length} / 40</HelperText>
            </Stack>
            <Stack gap="8px">
              <Label required htmlFor="collection-description">
                Description
              </Label>
              <TextArea
                id="collection-description"
                name="collection-description"
                className={errors.collectionDescription && "error"}
                onBlur={() => validate("collectionDescription")}
                onChange={(event) => setCollectionDesc(event.target.value)}
                placeholder="Collection Description"
                rows={4}
              />
              <HelperText>{collectionDesc.trim().length} / 140</HelperText>
            </Stack>
            <Stack gap="8px" direction="row" justifyContent={"right"}>
              <CloseButton onClick={onClose}>Close</CloseButton>
              <SubmitButton
                type="submit"
                disabled={isSubmitButtonDisabled()}
                onClick={() => onAdd(collectionName, collectionDesc)}
              >
                Create Collection
              </SubmitButton>
            </Stack>
          </Stack>
        </form>
      </AddModalContainer>
    </Modal>
  );
};

AddCollectionModal.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
  onAdd: propTypes.func,
};

export default AddCollectionModal;
