const currentDay = new Date().getDay();

switch (currentDay) {
    case 1:
        console.log("Hello Monday!");
        break;
    case 2:
        console.log("Hello Tuesday!");
        break;
    case 3:
        console.log("Hello Wednesday!");
        break;
    case 4:
        console.log("Hello Thursday!");
        break;
    case 5:
        console.log("Hello Friday!");
        break;
    case 6:
        console.log("Hello Saturday!");
        break;
    case 0:
        console.log("Happy Sunday! ĐI CHƠI");
        break;
    default:
        console.log("Wrong Days not in week");
}