import { useState, useEffect } from "react";
import axios from "axios";

// all state managed from this custom hook

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const updatedDays = state.days.map((d) =>
      d.name === state.day && state.appointments[id].interview === null
        ? { ...d, spots: d.spots - 1 }
        : d
    );

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({ ...state, appointments, days: updatedDays });
        return true;
      })
      .catch((error) => Promise.reject(error));
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const updatedDays = state.days.map((d) =>
      d.name === state.day ? { ...d, spots: d.spots + 1 } : d
    );

    return axios
      .delete(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({ ...state, appointments, days: updatedDays });
        return true;
      })
      .catch((error) => Promise.reject(error));
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
