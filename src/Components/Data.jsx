import React, { useState, useEffect } from 'react';
import Card from './Box';
import Heading from './Heading';

function Data() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population');
        const jsonData = await response.json();
        setCountriesData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="main-container" className="my-12">
      <Heading countriesData={countriesData} />
    </div>
  );
}

export default Data;