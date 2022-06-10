import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem({ spots, name, setDay, selected }) {
  function formatSpots() {
    // refactored with Ahana's help!
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1) {
      return "1 spot remaining";
    }
    return `${spots} spots remaining`;
  }

  const dayClass = classNames("day-list__item", {
    " day-list__item--selected": selected,
    " day-list__item--full": spots === 0,
  });

  return (
    <li className={dayClass} onClick={() => setDay(name)} selected={selected} data-testid="day" >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
