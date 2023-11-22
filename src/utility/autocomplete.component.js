// src/components/AutocompleteComponent.js
import React, { useState, useEffect, useContext } from "react";
import { Autocomplete } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import cartContext from "../Context/cart-context";
import dayjs from "dayjs";

function AutocompleteComponent(props) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [stationNamesArr, setStationNamesArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const context = useContext(cartContext);

  useEffect(() => {
    if (props.name === "TRAINNO") {
      if (value.trim() === "") {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      if (value && value.indexOf("-") == -1 && value.length >= 3) {
        axios
          .get(
            process.env.REACT_APP_API_URL + `/Irctc/searchByTrainNo/${value}`
          )
          .then((response) => {
            if (response && response?.data?.body) {
              if (response?.data?.success) {
                if (
                  response?.data?.body?.trains &&
                  response?.data?.body?.trains.length > 0
                ) {
                  let list = [];
                  response.data.body.trains.forEach((element) => {
                    list.push(element.trainNo + "-" + element.trainName);
                  });
                  console.log("train-list", list);
                  setSuggestions(list);
                }
              }
            }
            setLoading(false);
            console.log("in  completed");
            console.log(context);
          });
      }
    }
  }, [value, context]);
  const handleChange = async (newValue) => {
    setValue(newValue);
    props.trainNoCallBack(newValue);
    if (newValue && props.name === "TRAINNO") {
      const array = newValue?.split("-");
      if (newValue && newValue.split("-").length > 1) {
        const trainNo = array[0];
        const trainName = array[1];
        context.trainInfo = {
          trainNo: trainNo,
          trainName: trainName,
          travelDate: dayjs(new Date()).format("YYYY-MM-DD"),
        };

        try {
          const stationsResponse = await axios.get(
            process.env.REACT_APP_API_URL +
              `/Irctc/getStationsForTrainNo/${trainNo}:${context.trainInfo.travelDate}`
          );

          if (
            stationsResponse &&
            stationsResponse.data.body &&
            stationsResponse.data.success
          ) {
            const startingSttn = stationsResponse.data.body.stations[0].code;
            context.trainInfo.startStation = startingSttn;

            const scheduleResponse = await axios.get(
              process.env.REACT_APP_API_URL +
                `/Irctc/getStationsWithScheduleForTrainNo/${trainNo}:${context.trainInfo.travelDate}:${context.trainInfo.startStation}`
            );

            if (scheduleResponse && scheduleResponse.data.body) {
              context.trainInfo.stations = scheduleResponse.data.body.stations;
            }
          }

          props.onData(context.trainInfo);
          props.getTheTrainNbrValue(newValue);
          console.log("in auto completed");
          console.log(context);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }

    if (newValue && props.name === "STATIONNAME") {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL +
            `/stations/getStationsByName/${newValue}`
        );
        console.log("station-res", response.data.success, response.data.body);
        let list = [];
        if (response?.data?.body && response?.data?.body?.length > 0) {
          response.data.body.forEach((element) => {
            list.push(element.StationName);
            setSuggestions(list);
          });

          props.getTheStaionName(newValue);
        }
      } catch (error) {
        console.error("Error fetching station names:", error);
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
        placeholder={props.placeholder}
        loading={loading.toString()}
      />
    </div>
  );
}

export default AutocompleteComponent;
