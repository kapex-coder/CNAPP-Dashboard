// Components
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CspmPieChartForm from "../../Forms/CspmPieChartForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WidgetModal = ({ open, setAddWidgetModal }) => {
  const handleClose = () => setAddWidgetModal(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <CspmPieChartForm />
        </Box>
      </Modal>
    </>
  );
};

export default WidgetModal;
