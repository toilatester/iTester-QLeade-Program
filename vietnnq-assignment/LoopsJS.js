let count = 5;
const arrFruit = ["apple", "banana", "cherry"];
class Loops {
    loopCounter() {
        for (let i = 0; i < count; i++) {
            console.log("1.For Loop Counter ---> " + i);
        }
    }
    whileLoop() {
        while (count >= 1) {
            console.log("2.While loop ---> " + count);
            count--;
        }
    }
    loopArray() {
        for (let i = 0; i < arrFruit.length; i++) {
            console.log("3.Loop Through Array ---> " + arrFruit[i]);
        }
    }
    loopSum(numbers) {
        let sumArr = 0;
        for (let i = 0; i < numbers.length; i++) {
            sumArr += numbers[i];
        }
        console.log("4.Loop Sum ---> " + sumArr);
    }
}
const loops = new Loops();
loops.loopCounter();
loops.whileLoop();
loops.loopArray();
loops.loopSum([1, 3, 5, 7, 9]);
