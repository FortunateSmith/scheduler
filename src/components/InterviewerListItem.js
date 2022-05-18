import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem({
  selected,
  setInterviewer,
  avatar,
  name,
}) {
  const interviewerClass = classNames("interviewers__item", {
    " interviewers__item--selected ": selected,
  });

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        // for seo and accessibility reasons
        alt={name}
      />
      {/* conditional rendering of name, using && what is on the right will execute if what is on the left is true */}
      {selected && name}
    </li>
  );
}
