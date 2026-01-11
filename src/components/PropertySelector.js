import React, { useState } from "react";

const PropertySelector = ({ properties }) => {
  const [selectedBhk, setSelectedBhk] = useState("ALL");

  // Filter by BHK
  const filtered =
    selectedBhk === "ALL"
      ? properties
      : properties.filter((p) => p.bhk === selectedBhk);

  // Sort area low → high
  const sorted = [...filtered].sort((a, b) => a.area - b.area);

  return (
    <>
      <style>{`
        .property-wrapper {
          max-width: 420px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          padding: 24px;
          border-radius: 16px;
          color: #fff;
          font-family: "Inter", sans-serif;
        }

        .title {
          font-size: 26px;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .bhk-filter {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .bhk-filter button {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .bhk-filter button:hover,
        .bhk-filter .active {
          background: #ffffff;
          color: #000;
        }

        .property-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .property-card {
          display: flex;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.08);
          padding: 14px 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .property-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .label {
          font-size: 12px;
          opacity: 0.7;
        }

        .value {
          font-size: 16px;
          font-weight: 600;
        }
      `}</style>

      <div className="property-wrapper">
        <h1 className="title">Select Your Apartment</h1>

        {/* BHK Filter */}
        <div className="bhk-filter">
          {["ALL", "2BHK", "3BHK", "4BHK"].map((bhk) => (
            <button
              key={bhk}
              className={selectedBhk === bhk ? "active" : ""}
              onClick={() => setSelectedBhk(bhk)}
            >
              {bhk}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="property-list">
          {sorted.map((item, index) => (
            <div key={index} className="property-card">
              <div>
                <p className="label">Area</p>
                <p className="value">{item.area} sq.ft</p>
              </div>
              <div>
                <p className="label">Bedrooms</p>
                <p className="value">{item.bhk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertySelector;
