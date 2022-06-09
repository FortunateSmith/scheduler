import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  // props.student** student is the value targeted in the html name attribute, must match in test (as well as parent components)
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const reset = () => {
    // no function call necessary, only value neede to reset student and interviewer
    setInterviewer(null);
    setStudent("");
  };

  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  };

  const validate = () => {
    if (student === "") {
      setError("student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("please select an interviewer");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            // "student" as target, matches props and test
            name="name"
            type="text"
            placeholder="Enter Student Name"
            data-testid="student-name-input"
            value={student}
            // capture happens here!!!
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
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
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
