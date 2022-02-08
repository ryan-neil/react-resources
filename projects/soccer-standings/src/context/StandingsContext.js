// For checking API status updates
// 'https://v3.football.api-sports.io/status'

import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useLocalStorage } from "../hooks/useLocalStorage";

const StandingsContext = createContext({});

export const StandingsDataProvider = ({ children }) => {
  // set request state
  const [reqType, setReqType] = useState("league=39"); // default premier league
  // useFetch custom hook
  const { data, loading, error } = useFetch(
    `https://v3.football.api-sports.io/standings?${reqType}&season=2021`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": "d519eb6732f354b0cb31666aa27df821",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    },
    [reqType]
  );
  // useLocalStorage custom hook
  const [standings, setStandings] = useLocalStorage("standings", data);

  // check if local standings data exists before setting state
  useEffect(() => {
    if (data) return setStandings(data);
  }, [data]);

  return (
    <StandingsContext.Provider
      value={{
        reqType,
        setReqType,
        standings,
        loading,
        error,
      }}
    >
      {children}
    </StandingsContext.Provider>
  );
};

export default StandingsContext;
