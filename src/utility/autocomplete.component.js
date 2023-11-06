// src/components/AutocompleteComponent.js
import React, { useState, useEffect, useContext } from 'react';
import { Autocomplete } from '@mantine/core';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import cartContext from '../Context/cart-context';
import dayjs from 'dayjs';

function AutocompleteComponent(props) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const context = useContext(cartContext);

  useEffect(() => {
    
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    if(value && value.indexOf('-') == -1 && value.length >=3){
      axios.get(process.env.REACT_APP_API_URL + `/Irctc/searchByTrainNo/${value}`)
        .then((response) => {
          if(response && response?.data?.body){
              if(response?.data?.success){
                  if(response?.data?.body?.trains && response?.data?.body?.trains.length > 0){
                    let list = [];
                    response.data.body.trains.forEach(element => {
                      list.push(element.trainNo+ "-"+element.trainName );
                    });
                    setSuggestions(list);
                  }
              }

          }
        setLoading(false);
         console.log("in  completed");
        console.log(context);
      });
    }
  }, [value, context]);

  const handleChange = (newValue) => {
      setValue(newValue);
      if(newValue){
        let array = newValue?.split("-");
        if(newValue && newValue.split("-").length > 1){ 
          let trainNo = array[0];
          let trainName = array[1];      
          context.trainInfo = {
              "trainNo" : trainNo,
              "trainName" : trainName,
              "travelDate" : dayjs(new Date()).format('YYYY-MM-DD')
          }
          axios.get(process.env.REACT_APP_API_URL + `/Irctc/getStationsForTrainNo/${trainNo}:${context.trainInfo.travelDate}`)
        .then((response) => {
          if(response && response?.data?.body){
              if(response?.data?.success){
                if(response?.data?.body?.stations && response?.data?.body?.stations.length>0){
                  let startingSttn = response.data?.body?.stations[0].code;
                  context.trainInfo.startStation = startingSttn;
                  console.log(context);
                  axios.get(process.env.REACT_APP_API_URL + `/Irctc/getStationsWithScheduleForTrainNo/${trainNo}:${context.trainInfo.travelDate}:${context.trainInfo.startStation}`)
                  .then((response) => {
                    if(response && response?.data?.body){
                      console.log(response);
                      context.trainInfo.stations = response?.data?.body.stations;
                    }});

                }
              }
            }
          })
          props.onData(context.trainInfo);
          console.log("in auto completed");
          console.log(context);
        }
      }
  };


  return (
    <div>
  
      <Autocomplete
        data={suggestions}
        value={value}
        onChange={handleChange}
        label=""
        placeholder="Enter Train Number"
        loading={loading.toString()}
      />
    </div>
  );
}

export default AutocompleteComponent;
