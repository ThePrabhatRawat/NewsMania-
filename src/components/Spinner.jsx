import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

// loader component
const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <BootstrapSpinner animation="border" role="status" className="spinner-element">
          <span className="sr-only">Loading...</span>
        </BootstrapSpinner>
      </div>
    </div>
  );
};

export default Spinner;
