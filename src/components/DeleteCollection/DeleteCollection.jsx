import { Modal, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { DeleteCollectionButton, DeleteModalContainer } from "./styles";

const DeleteCollection = ({ open, onClose, onDelete }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-modal"
      aria-describedby="delete collection"
    >
      <DeleteModalContainer>
        <Stack gap="8px" alignItems={"center"}>
          <Typography fontSize={"24px"} fontWeight={500}>
            Delete Collection
          </Typography>
          <Typography fontSize={"14px"} color="#77776E">
            Are you sure you would like to delete this collection?
          </Typography>
          <Typography fontSize={"14px"} color="#77776E">
            You won’t be able to undo this.
          </Typography>
        </Stack>
        <Stack gap="8px">
          <DeleteCollectionButton onClick={onDelete}>
            Delete
          </DeleteCollectionButton>
          <DeleteCollectionButton
            bgcolor="#F1F1EE"
            textcolor="#2B2B2B"
            onClick={onClose}
          >
            Close
          </DeleteCollectionButton>
        </Stack>
      </DeleteModalContainer>
    </Modal>
  );
};

DeleteCollection.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default DeleteCollection;
