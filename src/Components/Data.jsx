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
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto w-full"> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto w-full">
        {countriesData.map((country, index) => (
          <Box key={index} data={country} />
        ))}
      </div>
      
      </>
  );
}

export default Data;