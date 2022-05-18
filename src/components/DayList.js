import React from "react";

import DayListItem from "./DayListItem";

export default function DayList({ days, setDay }) {

  const allDays = days.map(({id, name, spots }) => {
  
  return(
    
    <DayListItem
      key={id}
      id={id}
      name={name}
      spots={spots}
      // css selected 
      selected={name === id}
      // function call is on all days (props) not day of days
      setDay={setDay}
      />
      );
    })

    return(
    <ul>
      {allDays}
    </ul>
    );
}