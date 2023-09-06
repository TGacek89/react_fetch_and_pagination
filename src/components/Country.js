import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  let { id } = useParams();
  console.log(id);
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const contryData = response.data.find((contry) => contry.cca2 === id);
        console.log(contryData);
        setCount(contryData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountry();
  }, [id]);

  return (
    <div>
      {count ? (
        <div>
          <h1>{count.name.common}</h1>
          <div className="flag">
            <img
              className="flagImg"
              src={`${count.flags.svg}`}
              alt={`${count.flags.alt}`}
            />
          </div>
        </div>
      ) : (
        <p>..loading</p>
      )}
    </div>
  );
};

export default Country;
