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

const amenities = [
  { icon: <FaCouch />, name: "Welcome Lounge" },
  { icon: <FaGlassCheers />, name: "Banquet Hall" },
  { icon: <FaSwimmer />, name: "Swimming Pool" },
  { icon: <FaGamepad />, name: "Indoor Games" },
  { icon: <FaFilm />, name: "Theatre" },
  { icon: <FaDumbbell />, name: "Gym" },
  { icon: <FaCoffee />, name: "Café" },
  { icon: <FaChargingStation />, name: "EV Charging" },
  { icon: <FaSpa />, name: "Spa" },
  { icon: <FaBook />, name: "Library" },
  { icon: <FaBasketballBall />, name: "Basketball Court" },
  { icon: <FaUsers />, name: "Community Space" },
  { icon: <FaBirthdayCake />, name: "Party Lawn" },
  { icon: <FaVolleyballBall />, name: "Volleyball Court" },
  { icon: <FaGopuram />, name: "Temple" },
  { icon: <FaFire />, name: "Barbeque" },
  { icon: <FaGolfBall />, name: "Mini Golf Court" },
];

const AmenitiesStatic = () => (
  <div style={styles.section}>
    <h2 style={styles.title}>Amenities</h2>
    <div style={styles.underline} />

    <div style={styles.grid}>
      {amenities.map((item, i) => (
        <div key={i} style={styles.card}>
          <div style={styles.icon}>{item.icon}</div>
          <p style={styles.text}>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AmenitiesStatic;

/* styles same as before */
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
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "120px",
    padding: "30px 20px",
    textAlign: "center",
  },
  icon: {
    fontSize: "40px",
    color: "#f2c185",
    marginBottom: "12px",
  },
  text: {
    fontSize: "14px",
  },
};
