import { Dialog, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const SuccessModal = ({ open, onClose, message }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ textAlign: "center", py: 4 }}>
        <CheckCircle sx={{ fontSize: 80, color: "#4caf50", mb: 2 }} />
        <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom>
          Success!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: "#3b82f6",
            "&:hover": { backgroundColor: "#2563eb" },
            minWidth: 120,
            borderRadius: "25px",
            textTransform: "none",
            fontSize: "16px",
            py: 1.5,
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
