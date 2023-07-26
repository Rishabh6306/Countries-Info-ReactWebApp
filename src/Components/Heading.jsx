import React, { useState, useEffect } from 'react';
import Box from './Box';

function Heading({ countryData }) {
  const [countryName, setCountryName] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (countryData) {
      const filteredData = countryData.filter((country) =>
        country.name.common.toLowerCase().includes(countryName.toLowerCase())
      );
      setFilteredCountries(filteredData);
    }
  }, [countryData, countryName]);

  return (
    <>
      <h1 className="text-white text-4xl text-center my-10">
        Discover Country Details
      </h1>
      <div className="flex justify-around text-white text-2xl">
        <input
          className="p-4 mx-2 w-2/4 bg-customBlue border-2"
          type="text"
          placeholder="Search Country Name..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <select>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
        {filteredCountries.map((country, index) => (
          <Box key={index} data={country} />
        ))}
      </div>
    </>
  );
}

export default Heading;