import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const cancelReq = () => {
    props.onCancel("Cancel Request")
  }

  const saveReq = () => {
    props.onSave("Save Request")
  }

  return(
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name={props.student} 
        type="text"
        placeholder="Enter Student Name"
        /*
          This must be a controlled component
          your code goes here
        */
      />
    </form>
    {/* <InterviewerList   your code goes here /> */}
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancelReq}>Cancel</Button>
      <Button confirm onClick={saveReq}>Save</Button>
    </section>
  </section>
</main>
  )
}