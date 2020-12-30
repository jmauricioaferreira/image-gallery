import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex item-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(event) => setText(event.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-tea-500 hover:bg-teal-700 border-gray-200 hover:border-gray-300 text-sm border-4 text-purple-300 py-1 px-2 rounded focus:outline-none"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
