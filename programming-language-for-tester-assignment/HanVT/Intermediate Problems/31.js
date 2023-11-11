function scheduleEvent(eventName, minutes) {
    const delayInMillis = minutes * 60 * 1000;
    setTimeout(() => {
        console.log(`(After ${minutes} minutes) Reminder: You have a ${eventName}`);
    }, delayInMillis);
}

scheduleEvent('Doctor Appointment', 30);