import React, { useState, useEffect } from 'react';
import Box from './Box';
import Heading from './Heading';

function Data() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,population,capital,currencies,languages,region,area,maps,startOfWeek'
        );
        const jsonData = await response.json();
        setCountriesData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Heading countryData={countriesData} />
      <div id="grid-container" className="grid sm:grid-cols-2 lg:grid-cols-3 md:grid-3 lg:gap-7 mx-auto" >
        {countriesData.map((country, index) => (
          <Box key={index} data={country} />
        ))}
      </div>
      
      </>
  );
}

export default Data;