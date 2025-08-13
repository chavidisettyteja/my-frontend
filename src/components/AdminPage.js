import React, { useState } from 'react';
import { Input } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    possession: '',
    status: '',
    location: '',
  });

  const [image, setImage] = useState(null);
  const [brochure, setBrochure] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate=useNavigate();

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append('image', image);
      data.append('brochure', brochure);

      // Append text fields
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      // const response = await axios.post('http://localhost:5000/admin/project', data);
        const response = await axios.post('https://my-backend-omw2.onrender.com/admin/project', data);
      alert('Project saved successfully!');
    } catch (err) {
      alert('Error uploading project');
      console.error(err);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8d2dc", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="container p-4" style={{ backgroundColor: "pink", display: "flex", flexDirection: "column", gap: "20px", maxWidth: "600px", width: "100%", borderRadius: "10px" }}>

        <div className="mb-3">
          <label>Upload Image</label>
          <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Project Name</span>
          <input name="name" onChange={handleChange} className="form-control" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Type</span>
          <input name="type" onChange={handleChange} className="form-control" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Possession</span>
          <input name="possession" onChange={handleChange} className="form-control" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Status</span>
          <input name="status" onChange={handleChange} className="form-control" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Location</span>
          <input name="location" onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label>Upload Brochure</label>
          <Input type="file" onChange={(e) => setBrochure(e.target.files[0])} />
        </div>

        <button onClick={handleSubmit} className="btn btn-primary" style={{ borderRadius: "30px" }}>
          Submit
        </button>
         {/*Logout*/ }
          <div>
        <button
          type="button"
          className="btn btn-primary"
          style={{
            backgroundColor: '#007bff',
            borderRadius: '30px',
            padding: '10px 20px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
          onClick={()=>{navigate('/')}}
        >
          Logout
        </button>
      </div>
      </div>
    </div>
  );
}

export default AdminPage;
