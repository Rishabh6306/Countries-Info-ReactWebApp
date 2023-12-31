import React, { useState, useEffect } from 'react';
import Box from './Box';

function Heading({ countryData }) {
  const [countryName, setCountryName] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    if (countryData) {
      const uniqueRegions = [...new Set(countryData.map((country) => country.region))];
      setRegions(uniqueRegions);
    }
  }, [countryData]);

  useEffect(() => {
    if (countryData) {
      let filteredData = countryData;

      // Filter by country name
      if (countryName) {
        filteredData = countryData.filter((country) =>
          country.name.common.toLowerCase().includes(countryName.toLowerCase())
        );
      }

      // Filter by region
      if (selectedRegion) {
        filteredData = filteredData.filter((country) => country.region === selectedRegion);
      }

      // Apply additional filters
      switch (selectedFilter) {
        case 'AtoZ':
          filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
          break;
        case 'ZtoA':
          filteredData.sort((a, b) => b.name.common.localeCompare(a.name.common));
          break;
        case 'Language':
          filteredData.sort((a, b) => {
            const langA = Object.values(a.languages)[0];
            const langB = Object.values(b.languages)[0];
            return langA && langB ? langA.localeCompare(langB) : 0;
          });
          break;
        case 'Population':
          filteredData = filteredData.filter((country) => country.population > 100000);
          break;
        default:
          break;
      }

      setFilteredCountries(filteredData);
    }
  }, [countryData, countryName, selectedRegion, selectedFilter]);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <>
      <h1 className="text-white sm:text-3xl text-5xl text-center my-10">Discover Country Details</h1>
      <div className="flex flex-wrap justify-around text-white text-xl">
        <input
          className="p-4 mx-2 sm:w-56 md:w-2/4 bg-customBlue border-2"
          type="text"
          placeholder="Search Country Name..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <select onChange={handleRegionChange} className='bg-customBlue my-4'>
          <option value="">Filter by Region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region || 'Unknown'}
            </option>
          ))}
        </select>
        <select onChange={handleFilterChange} className='bg-customBlue mt-3 '>
          <option value="">Additional Filters</option>
          <option value="ZtoA">A to Z (Country Name)</option>
          <option value="AtoZ">Z to A (Country Name)</option>
          <option value="Language">Language</option>
          <option value="Population">Population (greater than 100,000)</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-7 my-12">
        {filteredCountries.map((country, index) => (
          <Box key={index} data={country} />
        ))}
      </div>
    </>
  );
}

export default Heading;
