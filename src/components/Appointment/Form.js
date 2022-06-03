import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  const reset = () => {
    setInterviewer(() => null);
    setStudent(() => "");
  };

  const cancel = () => {
    reset();
    props.onCancel("Cancel Request");
  };

  const saveReq = () => {
    props.onSave(student, interviewer);
  };


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            // capture happens here!!!
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          setInterviewer={setInterviewer}
          interviewers={props.interviewers}
          interviewer={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={saveReq}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
