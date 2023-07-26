// import React, { useState, useEffect } from 'react';
// import Box from './Box';

// function Heading({ countryData }) {
//   const [countryName, setCountryName] = useState('');
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState('');

//   useEffect(() => {
//     if (countryData) {
//       const uniqueRegions = [...new Set(countryData.map((country) => country.region))];
//       setRegions(uniqueRegions);
//     }
//   }, [countryData]);

//   useEffect(() => {
//     if (countryData) {
//       let filteredData = countryData;

//       // Filter by country name
//       if (countryName) {
//         filteredData = countryData.filter((country) =>
//           country.name.common.toLowerCase().includes(countryName.toLowerCase())
//         );
//       }

//       // Filter by region
//       if (selectedRegion) {
//         filteredData = filteredData.filter((country) => country.region === selectedRegion);
//       }

//       setFilteredCountries(filteredData);
//     }
//   }, [countryData, countryName, selectedRegion]);

//   const handleRegionChange = (e) => {
//     setSelectedRegion(e.target.value);
//   };

//   return (
//     <>
//       <h1 className="text-white text-4xl text-center my-10">Discover Country Details</h1>
//       <div className="flex justify-around text-white text-2xl">
//         <input
//           className="p-4 mx-2 w-2/4 bg-customBlue border-2"
//           type="text"
//           placeholder="Search Country Name..."
//           value={countryName}
//           onChange={(e) => setCountryName(e.target.value)}
//         />
//         <select onChange={handleRegionChange}>
//           <option value="">Filter by Region</option>
//           {regions.map((region, index) => (
//             <option key={index} value={region}>
//               {region || 'Unknown'}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
//         {filteredCountries.map((country, index) => (
//           <Box key={index} data={country} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Heading;
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
          filteredData.sort((a, b) => a.languages[Object.keys(a.languages)[0]].localeCompare(b.languages[Object.keys(b.languages)[0]]));
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
      <h1 className="text-white text-4xl text-center my-10">Discover Country Details</h1>
      <div className="flex justify-around text-white text-2xl">
        <input
          className="p-4 mx-2 w-2/4 bg-customBlue border-2"
          type="text"
          placeholder="Search Country Name..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <select onChange={handleRegionChange} className='bg-customBlue'>
          <option value="">Filter by Region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region || 'Unknown'}
            </option>
          ))}
        </select>
        <select onChange={handleFilterChange} className='bg-customBlue'>
          <option value="">Additional Filters</option>
          <option value="AtoZ">A to Z (Country Name)</option>
          <option value="ZtoA">Z to A (Country Name)</option>
          <option value="Language">Language</option>
          <option value="Population">Population (greater than 100,000)</option>
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