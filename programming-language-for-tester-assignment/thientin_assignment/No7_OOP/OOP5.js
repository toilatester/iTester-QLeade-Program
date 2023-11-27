class ParentClass {
    constructor(value){
        this.value = value;
      }
      testMethod(){
        console.log("Parent method");
      }

}
class ChildClass {
    testMethod(){
        console.log("Child method");
    }
}

const object_1 = new ChildClass();
object_1.testMethod();