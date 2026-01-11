import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Input,
  Checkbox,
  Divider,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AMENITIES } from "./Aminities/amenitiesConfig";

const BHK_OPTIONS = ["2BHK", "3BHK", "4BHK"];

function AdminPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    possession: "",
    status: "",
    location: "",
    minPrice: "",
    maxPrice: "",
  });

  const [amenities, setAmenities] = useState(
    AMENITIES.reduce((acc, a) => {
      acc[a.key] = false;
      return acc;
    }, {})
  );

  const [bhk, setBhk] = useState({
    "2BHK": false,
    "3BHK": false,
    "4BHK": false,
  });

  const [image, setImage] = useState(null);
  const [bgimage, setBgImage] = useState(null);
  const [brochure, setBrochure] = useState(null);

  const [imagePreview, setImagePreview] = useState("");
  const [bgPreview, setBgPreview] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleAmenity = (key) =>
    setAmenities((p) => ({ ...p, [key]: !p[key] }));

  const toggleBhk = (key) =>
    setBhk((p) => ({ ...p, [key]: !p[key] }));

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      data.append("amenities", JSON.stringify(amenities));
      data.append("bhk", JSON.stringify(bhk));

      if (image) data.append("image", image);
      if (bgimage) data.append("bgimage", bgimage);
      if (brochure) data.append("brochure", brochure);

      await axios.post("http://localhost:4000/admin/project", data);
      alert("Project saved successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error uploading project");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      {/* ================= FORM CARD ================= */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          p: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={3}>
          Add Project Details
        </Typography>

        {/* ================= IMAGES ================= */}
        <Typography fontWeight="bold" mb={1}>
          Project Images
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={2}
          mb={3}
        >
          <Box>
            <FormLabel sx={{ color: "#fff" }}>Main Image</FormLabel>
            <Input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }}
              sx={{ color: "#fff" }}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                style={{ width: "100%", marginTop: 8, borderRadius: 12 }}
              />
            )}
          </Box>

          <Box>
            <FormLabel sx={{ color: "#fff" }}>Background Image</FormLabel>
            <Input
              type="file"
              onChange={(e) => {
                setBgImage(e.target.files[0]);
                setBgPreview(URL.createObjectURL(e.target.files[0]));
              }}
              sx={{ color: "#fff" }}
            />
            {bgPreview && (
              <img
                src={bgPreview}
                alt="preview"
                style={{ width: "100%", marginTop: 8, borderRadius: 12 }}
              />
            )}
          </Box>
        </Box>

        <FormLabel sx={{ color: "#fff" }}>Brochure (PDF)</FormLabel>
        <Input
          type="file"
          fullWidth
          sx={{ mb: 3, color: "#fff" }}
          onChange={(e) => setBrochure(e.target.files[0])}
        />

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* ================= BASIC INFO ================= */}
        <Typography fontWeight="bold" mb={1}>
          Basic Information
        </Typography>

        <FormLabel sx={{ color: "#fff" }}>Project Type</FormLabel>
        <RadioGroup row name="type" onChange={handleChange} sx={{ mb: 2 }}>
          <FormControlLabel value="commercial" control={<Radio />} label="Commercial" />
          <FormControlLabel value="residential" control={<Radio />} label="Residential" />
        </RadioGroup>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={2}
        >
          <TextField label="Project Name" name="name" onChange={handleChange} variant="filled" InputProps={{ disableUnderline: true }} sx={{ background: "rgba(255,255,255,0.95)", borderRadius: 1 }} />
          <TextField label="Possession" name="possession" onChange={handleChange} variant="filled" InputProps={{ disableUnderline: true }} sx={{ background: "rgba(255,255,255,0.95)", borderRadius: 1 }} />
          <TextField label="Status" name="status" onChange={handleChange} variant="filled" InputProps={{ disableUnderline: true }} sx={{ background: "rgba(255,255,255,0.95)", borderRadius: 1 }} />
          <TextField label="Location" name="location" onChange={handleChange} variant="filled" InputProps={{ disableUnderline: true }} sx={{ background: "rgba(255,255,255,0.95)", borderRadius: 1 }} />
        </Box>

        <Box display="flex" gap={2} mt={2}>
          <TextField label="Min Price" name="minPrice" onChange={handleChange} fullWidth variant="filled" InputProps={{ disableUnderline: true }} sx={{ background: "rgba(255,255,255,0.95)", borderRadius: 1 }} />
          <TextField label="Max Price" name="maxPrice" onChange={handleChange} fullWidth variant="filled" InputProps={{ disableUnderline: true }} sx={{ background: "rgba(255,255,255,0.95)", borderRadius: 1 }} />
        </Box>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* ================= BHK ================= */}
        <Typography fontWeight="bold">Available BHK</Typography>
        <Box display="flex" gap={3} mt={1}>
          {BHK_OPTIONS.map((b) => (
            <FormControlLabel
              key={b}
              control={<Checkbox checked={bhk[b]} onChange={() => toggleBhk(b)} />}
              label={b}
            />
          ))}
        </Box>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        {/* ================= AMENITIES ================= */}
        <Typography fontWeight="bold">Amenities</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 1,
            mt: 1,
          }}
        >
          {AMENITIES.map((a) => (
            <FormControlLabel
              key={a.key}
              control={
                <Checkbox
                  checked={amenities[a.key]}
                  onChange={() => toggleAmenity(a.key)}
                />
              }
              label={a.label}
            />
          ))}
        </Box>

        {/* ================= ACTION ================= */}
        <Button
          fullWidth
          sx={{
            mt: 4,
            py: 1.6,
            borderRadius: "30px",
            fontWeight: 700,
            fontSize: "16px",
            background: "linear-gradient(135deg, #f2c185, #e8a84d)",
            color: "#111",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
          onClick={handleSubmit}
        >
          Save Project
        </Button>
      </Box>
    </Box>
  );
}

export default AdminPage;
