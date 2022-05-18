import React from "react";

import DayListItem from "./DayListItem";

export default function DayList({ days, onChange, value }) {
  const allDays = days.map(({ id, name, spots }) => {
    return (
      <DayListItem
        key={id}
        id={id}
        name={name}
        spots={spots}
        // css selected
        selected={name === value}
        // function call is on all days (props) not day of days
        setDay={onChange}
      />
    );
  });

  return <ul>{allDays}</ul>;
}
