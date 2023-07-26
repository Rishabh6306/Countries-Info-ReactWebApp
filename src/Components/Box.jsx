import React from 'react';

function Box({ country }) {
  return (
    <div className="max-w-sm rounded overflow-hidden border-2 shadow-lg border-white">
      <img className="w-full" src={country.flags.png} alt="Flag" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{country.name.common}</div>
        <p><strong>Population:</strong> {country.population}</p>
      </div>
    </div>
  );
}

export default Box;