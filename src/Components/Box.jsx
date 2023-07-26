import React from 'react';

function Box({ data }) {
  // Check if data is not provided or does not have the 'name' property
  if (!data || !data.name) {
    return <div>No data available</div>;
  }

  const { name, flags, currencies, capital, languages, population, region, area, maps, startOfWeek } = data;

  return (
    <div className="max-w-sm rounded overflow-hidden border-2 shadow-lg border-white h-[900px]">
      <img className="w-full h-60" src={flags.png} alt={flags.alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name.common}</div>
        <p><strong>Official Name:</strong> {name.official}</p>
        <p><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Area:</strong> {area} km²</p>
        <p><strong>Languages:</strong> {Object.values(languages).join(', ')}</p>
        {currencies && Object.keys(currencies).length > 0 && (
          <p><strong>Currency:</strong> {Object.values(currencies)[0].name} ({Object.values(currencies)[0].symbol})</p>
        )}
        {startOfWeek && (
          <p><strong>Start of Week:</strong> {startOfWeek}</p>
        )}
        {maps && (
          <p>
            <strong>Maps:</strong>
            <a href={maps.googleMaps}>Google Maps</a>
            <span> | </span>
            <a href={maps.openStreetMaps}>OpenStreetMaps</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Box;