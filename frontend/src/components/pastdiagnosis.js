import React from 'react';
import '../assets/css/styles.css';

export default function PastDiagnosis() {
  // Sample data - replace with API call
  const diagnoses = [
    { date: '2023-08-01', condition: 'Common Cold', severity: 'Mild' },
    { date: '2023-07-25', condition: 'Allergy', severity: 'Moderate' }
  ];

  return (
    <div className="diagnosis-history">
      <h2>Past Diagnoses</h2>
      <div className="diagnosis-list">
        {diagnoses.map((diagnosis, index) => (
          <div key={index} className="diagnosis-card">
            <div className="diagnosis-date">{diagnosis.date}</div>
            <div className="diagnosis-info">
              <h3>{diagnosis.condition}</h3>
              <p>Severity: {diagnosis.severity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
