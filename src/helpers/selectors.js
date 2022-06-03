export function getAppointmentsForDay(state, day) {
  let scheduleForDay = [];

  if (state.length === 0) {
    return scheduleForDay;
  }
  // destructure state for easier functionality with nested objects/arrays
  const { days, appointments: dayApps } = state;

  for (const d of days) {
    //tuesday
    if (d.name === day) {
      for (const key of d.appointments) {
        // if d.appointment in tuesday [4, 5] === dayApps[key];
        scheduleForDay.push(dayApps[key]);
      }
    }
  }
  // console.log(scheduleForDay);
  return scheduleForDay;
}


/////////////////
export function getInterviewersForDay(state, day) {
  const currentDay = state.days.find(d => d.name === day);

  if (!currentDay) {
    return [];
  }

  return currentDay.interviewers.map((id) => state.interviewers[id]);

  // let scheduleForDay = [];

  // if (state.length === 0) {
  //   return scheduleForDay;
  // }
  // // destructure state for easier functionality with nested objects/arrays
  // const { days, interviewers: dailyInterviewers } = state;

  // for (const d of days) {
  //   //tuesday
  //   if (d.name === day) {
  //     for (const interviewer of d.appointments) {
  //       // if d.appointment in tuesday [4, 5] === dailyInterviewers[interviewer];
  //       scheduleForDay.push(dailyInterviewers[interviewer]);
  //     }
  //   }
  // }
  // return scheduleForDay;
}

////////////////////////////






export function getInterview(state, interview) {
  
  const { interviewers } = state;
  if (!interview) {
      return null;    
  }
// interview{student: name, interviewer: id}
/* spread operator creates copy, then interviewer (id) is overwritten with
interviewer object that shares the same id (look at test data) */
  return {...interview, interviewer: interviewers[interview.interviewer]}
}
