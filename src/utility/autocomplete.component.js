// src/components/AutocompleteComponent.js
import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@mantine/core';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function AutocompleteComponent(props) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    if(value && value.length >=3){
      axios.get(process.env.REACT_APP_API_URL + `/Irctc/searchByTrainNo/${value}`)
        .then((response) => {
          if(response && response?.data?.body){
              if(response?.data?.success){
                  if(response?.data?.body?.trains && response?.data?.body?.trains.length > 0){
                    let list = [];
                    response.data.body.trains.forEach(element => {
                      list.push(element.trainNo+ "  "+element.trainName );
                    });
                    setSuggestions(list);
                  }
              }

          }
        setLoading(false);
        
      });
    }
  }, [value]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
  
      <Autocomplete
        data={suggestions}
        value={value}
        onChange={handleChange}
        label=""
        placeholder="Search by Train Number"
        loading={loading.toString()}
      />
    </div>
  );
}

export default AutocompleteComponent;
