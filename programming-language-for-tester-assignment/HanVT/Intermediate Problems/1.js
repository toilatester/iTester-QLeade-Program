var currentDate=new Date()
var currentDayOfWeek = currentDate.getDay();
var day;
switch (currentDayOfWeek){
    case 0:
        day='Sunday'
        break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;

    default:
        day = 'Invalid day code';
}
console.log('Hello, It is '+day)