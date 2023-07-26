import React from 'react';

function Box({ data }) {
  // Check if data is not provided or does not have the 'name' property
  if (!data || !data.name) {
    return <div>No data available</div>;
  }

  const { name, flags, currencies, capital, languages, population } = data;

  return (
    <div className="max-w-sm rounded overflow-hidden border-2 shadow-lg border-white">
      <img className="w-full h-60 " src={flags.png} alt={flags.alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name.common}</div>
        <p className='mt-2'><strong>Official Name:</strong> {name.official}</p>
        <p className='mt-2'><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
        <p className='mt-2'><strong>Population:</strong> {population}</p>
        {currencies && currencies.USD && (
          <p className='mt-2'><strong>Currency:</strong> {currencies.USD.name}</p>
        )}
        {languages && (
          <p className='mt-2'>
            <strong>Languages:</strong> {Object.values(languages).join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}

export default Box;