import React from "react";
import "./styles.scss";


export default function Empty(props) {
  const add = () => {
    props.onAdd("onAdd");
  }
  return (
    <main className="appointment__add">
      <img 
      className="appointment__add-button"
      src="images/add.png"
      alt="Add"
      onClick={add}
      />
    </main>
  )
}