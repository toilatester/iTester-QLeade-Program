class groceryList {
    constructor(){
        this.list=[]
    }

    add(newItem){
        if (!this.list.includes(newItem))
        this.list.push(newItem)
    }
    remove(item){
        this.list=this.list.filter(a=>a!=item)
    }
    display(){
        console.log(this.list)
    }
}


myGroceryList=new groceryList()

myGroceryList.add("apples")

myGroceryList.display()

myGroceryList.add("oranges")

myGroceryList.add("apples")

myGroceryList.display()

myGroceryList.remove("oranges")

myGroceryList.remove("bananas")

myGroceryList.display()