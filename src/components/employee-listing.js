import React from 'react';

const EmployeeDetails = ({ name, line1, city, country, zipCode }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{line1}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{zipCode}</p>
    </div>
  );
};

export default EmployeeDetails;