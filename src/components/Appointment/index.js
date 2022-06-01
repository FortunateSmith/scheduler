import React from "react";

import "./styles.scss";

// CHILD COMPONENTS
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
///////////////////////

import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  // ternary is used to set initial state of mode
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show student={props.interview.student} interviewer={props.interview.interviewer} />
      )}
      {mode === CREATE && (<Form interviewers={[]} 
       onCancel={back}
      />)}

      {/* CODE BEING REPLACED:: {interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )} */}
    </article>
  );
}
