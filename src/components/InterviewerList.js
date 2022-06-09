import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  const allInterviewers = interviewers.map((i) => {
    return (
      <InterviewerListItem
        key={i.id}
        id={i.id}
        name={i.name}
        avatar={i.avatar}
        selected={i.id === interviewer}
        setInterviewer={() => setInterviewer(i.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{allInterviewers}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
