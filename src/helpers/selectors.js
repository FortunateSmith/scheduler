export function getAppointmentsForDay(state, day) {
  let scheduleForDay = [];

  if (state.length === 0) {
    return scheduleForDay;
  }
  const {days, appointments: dayApps} = state;
 
  for (const d of days) {
    //tuesday
    if (d.name === day) {
      for (const key of d.appointments) {
        // if d.appointment in tuesday [4, 5] === dayApps[key];
        scheduleForDay.push(dayApps[key]);
      }
    }
  }
  return scheduleForDay;
}