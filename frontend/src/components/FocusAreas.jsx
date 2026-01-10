import React from 'react';
import '../styles/FocusAreas.scss'; // Make sure to import your styles

const FocusAreas = ({ org }) => {
  
  // The list of your 5 specific areas
  const focusAreas = [
    {
      id: 1,
      title: "Community Resilience",
      text: "Building community resilience against organized crime"
    },
    {
      id: 2,
      title: "Harm Reduction",
      text: "Harm reduction and support for drug-affected communities"
    },
    {
      id: 3,
      title: "Women's Empowerment",
      text: "Empowerment and capacity building for women"
    },
    {
      id: 4,
      title: "Psychosocial Support",
      text: "Psychosocial support and recovery"
    },
    {
      id: 5,
      title: "Research & Solutions",
      text: "Community-driven research and solutions"
    }
  ];

  return (
    <section className="focus-section">
      <div className="section-header">
        <h2>Our Focus Areas</h2>
        <div className="header-underline"></div>
        {/* I removed the old mission subtitle here */}
      </div>

      <div className="focus-grid">
        {focusAreas.map((area) => (
          <div key={area.id} className="focus-card fade-in-up">
            <div className="card-icon">
              {/* You can add icons here later if you want, e.g. <i className="fa fa-users"></i> */}
            </div>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;