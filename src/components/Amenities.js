import React from "react";
import {
  FaCouch,
  FaGlassCheers,
  FaSwimmer,
  FaGamepad,
  FaFilm,
  FaDumbbell,
  FaCoffee,
  FaChargingStation,
  FaSpa,
  FaBook,
  FaBasketballBall,
  FaUsers,
  FaBirthdayCake,
  FaVolleyballBall,
  FaGopuram,
  FaFire,
  FaGolfBall,
} from "react-icons/fa";

/* 🔑 Map DB keys → UI icon + label */
const AMENITY_MAP = {
  welcomeLounge: { icon: <FaCouch />, label: "Welcome Lounge" },
  banquetHall: { icon: <FaGlassCheers />, label: "Banquet Hall" },
  badminton: { icon: <FaSwimmer />, label: "Badminton Court" },
  swimmingPool: { icon: <FaSwimmer />, label: "Swimming Pool" },
  indoorGames: { icon: <FaGamepad />, label: "Indoor Games" },
  theatre: { icon: <FaFilm />, label: "Theatre" },
  gym: { icon: <FaDumbbell />, label: "Gym" },
  cafe: { icon: <FaCoffee />, label: "Café" },
  evCharging: { icon: <FaChargingStation />, label: "EV Charging" },
  spa: { icon: <FaSpa />, label: "Spa" },
  library: { icon: <FaBook />, label: "Library" },
  basketball: { icon: <FaBasketballBall />, label: "Basketball Court" },
  community: { icon: <FaUsers />, label: "Community Space" },
  partyLawn: { icon: <FaBirthdayCake />, label: "Party Lawn" },
  volleyball: { icon: <FaVolleyballBall />, label: "Volleyball Court" },
  temple: { icon: <FaGopuram />, label: "Temple" },
  barbeque: { icon: <FaFire />, label: "Barbeque" },
  miniGolf: { icon: <FaGolfBall />, label: "Mini Golf Court" },
};

const Amenities = ({ amenitiesData = {} }) => {
  /* ✅ FILTER ONLY TRUE AMENITIES */
  const activeAmenities = Object.keys(amenitiesData).filter(
    (key) => amenitiesData[key] === true
  );

  /* If no amenities, don't render section */
  if (activeAmenities.length === 0) return null;

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Amenities</h2>
      <div style={styles.underline} />

      <div style={styles.grid}>
        {activeAmenities.map((key) => (
          <div key={key} style={styles.card}>
            <div style={styles.icon}>{AMENITY_MAP[key]?.icon}</div>
            <p style={styles.text}>{AMENITY_MAP[key]?.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "80px 40px",
    background: "radial-gradient(circle at top, #444 0%, #000 70%)",
    color: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  underline: {
    width: "60px",
    height: "4px",
    background: "#d6a36c",
    margin: "0 auto 40px",
    borderRadius: "4px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(6px)",
    borderRadius: "120px",
    padding: "30px 20px",
    textAlign: "center",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  icon: {
    fontSize: "40px",
    color: "#f2c185",
    marginBottom: "12px",
  },
  text: {
    fontSize: "14px",
    fontWeight: "500",
  },
};
