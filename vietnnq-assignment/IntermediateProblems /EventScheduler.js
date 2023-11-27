function scheduleEvent(eventName, minutes) {
    const seconds = minutes * 60;
    setTimeout(() => {
        console.log(`(After ${minutes} minutes) Reminder: You have a ${eventName}`);
    }, seconds);
}
scheduleEvent('Doctor Appointment', 30);