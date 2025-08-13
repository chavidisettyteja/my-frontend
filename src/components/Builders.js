import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Builders() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      // .get('http://localhost:5000/admin/project')
       .get('https://my-backend-omw2.onrender.com/admin/project')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="mt-4 mb-5" style={{ width: '90%', margin: '0 auto' }}>
      {projects.length > 0 && (
        <div
          id="projectCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="2500"
          data-bs-pause="false"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <img
                  // src={`http://localhost:5000${project.imageUrl}`}
                   src={`https://my-backend-omw2.onrender.com${project.imageUrl}`}
                  className="d-block w-100"
                  alt={`Project ${index}`}
                  style={{
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    cursor: 'pointer',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Builders;
