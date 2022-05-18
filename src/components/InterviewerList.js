import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

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
    // ISSUE: onClick action printing one empty array and one array with id when in section tag or <ul>. But prints only once when in <h4>. Why?
    //
    <section className="interviewers">
      <h4
        className="interviewers__header text--light"
        onClick={() => setInterviewer(interviewer)}
      >
        Interviewer
      </h4>
      <ul className="interviewers__list">{allInterviewers}</ul>
    </section>
  );
}
