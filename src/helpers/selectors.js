// functions for managing appointments

export function getAppointmentsForDay(state, day) {
  let scheduleForDay = [];

  if (state.length === 0) {
    return scheduleForDay;
  }

  const { days, appointments: dayApps } = state;

  for (const d of days) {
    if (d.name === day) {
      for (const key of d.appointments) {
        scheduleForDay.push(dayApps[key]);
      }
    }
  }
  return scheduleForDay;
}

export function getInterviewersForDay(state, day) {
  const currentDay = state.days.find((d) => d.name === day);

  if (!currentDay) {
    return [];
  }

  return currentDay.interviewers.map((id) => state.interviewers[id]);
}

export function getInterview(state, interview) {
  const { interviewers } = state;
  if (!interview) {
    return null;
  }

  return { ...interview, interviewer: interviewers[interview.interviewer] };
}
