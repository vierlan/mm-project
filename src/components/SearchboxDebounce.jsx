import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import '../assets/stylesheets/spaces.css';


const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchResults = async (searchTerm) => {
    if (searchTerm) {
      try {
        const response = await axios.get(`http://localhost:5002/api/spaces?query=${searchTerm}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    } else {
      setResults([]);
    }
  };

  // Debounce fetchResults to limit API calls
  const debouncedFetchResults = debounce(fetchResults, 300);

  useEffect(() => {
    debouncedFetchResults(query);
    // Cleanup debounce on unmount
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [query]);

  return (
    <div className='search-box'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for spaces"
      />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name} - {result.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
