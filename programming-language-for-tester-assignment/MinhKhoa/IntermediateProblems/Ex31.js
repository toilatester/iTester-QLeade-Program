function eventSchedule (event, minutes){
    specifiedTime = minutes * 60 * 1000;
    setTimeout(() => {
        console.log(`You have a ${event}`)
    }, specifiedTime);
}

eventSchedule('Doctor Appoinment', 1);