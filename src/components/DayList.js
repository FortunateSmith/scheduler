import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {

  const days = props.days.map(day => {
  
  return(
    
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      // css selected 
      selected={day.name === props.day}
      // function call is on all days (props) not day of days
      setDay={props.setDay}
      />
      );
    })

    return(
    <ul>
      {days}
    </ul>
    );
}