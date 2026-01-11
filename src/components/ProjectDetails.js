import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Amenities from "../components/Amenities";
import LastPart from "./LastPart";

const API_BASE = "http://localhost:4000";

const formatPrice = (value) => {
  if (!value) return "";
  if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
  return value.toLocaleString();
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <p style={{ padding: 40, color: "#fff" }}>Loading...</p>;

  const resolveUrl = (path) => (path ? `${API_BASE}${path}` : "");

  const bgImage = resolveUrl(project.bgimageUrl);
  const brochureUrl = resolveUrl(project.brochureUrl);

  const activeBhks = project.bhk
    ? Object.keys(project.bhk).filter((b) => project.bhk[b])
    : [];

  const minPrice = project.priceRange?.min;
  const maxPrice = project.priceRange?.max;

  return (
    <div style={{ background: "#000" }}>
      {/* ================= HERO ================= */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: `
            linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.95)),
            url("${bgImage}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "flex-end",
          padding: "70px",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <span
            style={{
              padding: "6px 14px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: 20,
              fontSize: 13,
            }}
          >
            {project.status}
          </span>

          <h1 style={{ fontSize: 54, fontWeight: 700, margin: "20px 0 10px" }}>
            {project.name}
          </h1>

          <p style={{ fontSize: 18, opacity: 0.9 }}>
            📍 {project.location}
          </p>

          {/* PRICE */}
          <h2 style={{ marginTop: 25, color: "#f2c185" }}>
            {minPrice && maxPrice
              ? `₹ ${formatPrice(minPrice) +"Cr" } – ₹ ${formatPrice(maxPrice) +"Cr"}`
              : "Price on Request"}
          </h2>

          {/* BHK */}
          {activeBhks.length > 0 && (
            <div
              style={{
                marginTop: 25,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              {activeBhks.map((b) => (
                <span
                  key={b}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 30,
                    background: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    fontSize: 15,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* ACTIONS */}
          <div style={{ marginTop: 40, display: "flex", gap: 20 }}>
            {brochureUrl && (
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "14px 34px",
                  borderRadius: 30,
                  background:
                    "linear-gradient(135deg, #f2c185, #e8a84d)",
                  color: "#111",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                📄 Download Brochure
              </a>
            )}

            <button
              onClick={() =>
                document
                  .getElementById("amenities")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "14px 34px",
                borderRadius: 30,
                border: "1px solid rgba(255,255,255,0.4)",
                background: "transparent",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Explore Amenities ↓
            </button>
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <div
        id="amenities"
        style={{
          background: "#000",
          margin: 0,
          padding: 0,
        }}
      >
        {project.amenities && (
          <Amenities amenitiesData={project.amenities} />
        )}
      </div>

      {/* ================= FOOTER / CONTACT ================= */}
      <div
        style={{
          background: "#000",
          margin: 0,
          padding: 0,
        }}
      >
        <LastPart />
      </div>
    </div>
  );
};

export default ProjectDetails;
