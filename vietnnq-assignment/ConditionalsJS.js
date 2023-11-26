class ConditionalsJs {
    isDataGreaterThan(inputNumber) {
        if (inputNumber > 10) {
            console.log("1.Basic If Statement ---> " + "Greater than 10");
        }
    }
    isAgeMatching(inputAge) {
        if (inputAge >= 18) {
            console.log("2.If-Else Condition ---> " + "Adult");
        }
        else {
            console.log("2.If-Else Condition ---> " + "Minor");
        }
    }
}
const run = new ConditionalsJs;
run.isDataGreaterThan(12);
run.isAgeMatching(17);
