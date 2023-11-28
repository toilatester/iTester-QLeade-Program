/**
 * 31.  **Event Scheduler**
   - Problem: Create a JavaScript function that schedules an event after a given number of minutes. The function should take the event name and the minutes as arguments and then logs out a reminder message with the event name after the specified time.
   - Example Input: `scheduleEvent('Doctor Appointment', 30)`
   - Example Output: (After 30 minutes) `Reminder: You have a Doctor Appointment`
   - Explanation: The function uses `setTimeout` to log a reminder to the console after a delay of 30 minutes.
 */
function scheduleEvent(eventName, minutes){
    if(minutes < 0) {
        console.log('invalid time');
        return;
    }
    let ms = minutes * 60 * 1000;
    setTimeout(() => {
        console.log(`Reminder: You have a ${eventName}`);
    }, ms);
}
scheduleEvent('Doctor Appointment', 1);