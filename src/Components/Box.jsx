import React from 'react';

function Box({ data }) {
  return (
    <div className="max-w-sm rounded overflow-hidden border-2 shadow-lg border-white">
      <img className="w-full" src={data.flags.png} alt="Flag" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name.common}</div>
        <p><strong>Population:</strong> {data.population}</p>
      </div>
    </div>
  );
}

export default Box;