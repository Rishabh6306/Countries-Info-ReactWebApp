import React from 'react';

function Heading({ countryName, onInputChange, onSearch, countriesData }) {
  const dataToRender = countriesData ?? [];

  return (
    <div>
      <h1 className="text-white text-4xl text-center my-10">
        Discover Country Details
      </h1>
      <div className="flex justify-around text-white text-2xl">
        <input
          className="p-4 mx-6 w-1/4 bg-customBlue border-2"
          type="text"
          placeholder="Search Country Name..."
          value={countryName}
          onChange={onInputChange}
        />
        <button
          className="p-4 mx-6 w-1/4 bg-customBlue border-2"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Heading;
