function scheduleEvent(eventName, minutes) {
    if (minutes >= 0) {
        const milliseconds = minutes * 60 * 1000; // Chuyển đổi phút thành mili giây
        setTimeout(() => {
            console.log(`(After ${minutes} minutes) Reminder: You have a ${eventName}`);
        }, milliseconds);
    } else {
        console.log('Invalid input. Please provide a non-negative value for minutes.');
    }
}

scheduleEvent('Doctor Appointment', 0.1);
