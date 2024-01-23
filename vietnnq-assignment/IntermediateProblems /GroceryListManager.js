class GroceryListManager {
    constructor() {
        this.items = ['oranges'];
    }

    add(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
            console.log(item + " - added to the list.");
        } else {
            console.log(item + " - is already in the list.");
        }
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(item + " - removed from the list.");
        } else {
            console.log(item + " - is not in the list.");
        }
    }

    display() {
        console.log('Display list:', this.items);
    }
}

const groceryList = new GroceryListManager();
groceryList.add('apples');
groceryList.remove('oranges');
groceryList.display();