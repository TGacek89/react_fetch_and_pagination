import React, { useEffect, useState } from "react";
import axios from "axios";
import { Countries } from "./components/Countries";
import Pagination from "./components/Pagination";

export const Get = () => {
  const [country, setCounty] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://restcountries.com/v3.1/all "
        );
        setCounty(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Cant fetch pokemons", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = country.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Countries</h1>
      <Countries countries={currentPosts} loading={loading} />
      <Pagination
        countriesPerPage={postPerPage}
        totalCountries={country.length}
        paginate={paginate}
      />
    </div>
  );
};
