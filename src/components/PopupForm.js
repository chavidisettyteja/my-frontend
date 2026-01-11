import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const PopupForm = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScXWoZGqpvbuFirhLuhFRU6KqiCzOb4pzTSkwmAFyhBopMwtw/formResponse";

    const formBody = new URLSearchParams({
      "entry.1977728637": formData.name,
      "entry.1093727647": formData.phone
    });

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody.toString()
      });

      setFormData({ name: "", email: "", phone: "" });
      onSubmit();
    } catch (err) {
      console.error("Submission likely successful:", err);
      onSubmit();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
        }
      }}
    >
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f2c185, #e8a84d)",
          p: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Typography fontWeight={700} fontSize={18}>
          Get Project Brochure
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* ================= CONTENT ================= */}
      <DialogContent>
        <Typography
          sx={{ mb: 3, mt: 1, color: "#444", fontSize: 14 }}
        >
          Fill in your details to instantly download the brochure.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          <TextField
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1, color: "#999" }} />
            }}
          />

          <TextField
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1, color: "#999" }} />
            }}
          />

          <TextField
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: <PhoneIcon sx={{ mr: 1, color: "#999" }} />
            }}
          />

          {/* ================= CTA ================= */}
          <Button
            type="submit"
            size="large"
            sx={{
              mt: 2,
              py: 1.4,
              borderRadius: 3,
              fontWeight: 600,
              fontSize: 15,
              background:
                "linear-gradient(135deg, #111, #333)",
              color: "#fff",
              transition: "0.3s",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #000, #222)",
                transform: "translateY(-2px)"
              }
            }}
          >
            📄 Submit & Download Brochure
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
