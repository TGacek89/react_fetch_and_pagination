import React from "react";
import { Link } from "react-router-dom";

export const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {countries.map((country) => (
        <li key={country.cca2} className="list-group-item">
          <h5>{country.name.common}</h5>
          <Link to={`./${country.cca2}`}>
            <h1>{country.flag}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};
