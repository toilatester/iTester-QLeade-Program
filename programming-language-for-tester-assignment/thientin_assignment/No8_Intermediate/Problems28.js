let groceryList = [];

function add(item) {
    if (!groceryList.includes(item)) {
        groceryList.push(item);
        console.log(`'${item}' was added`);
    } else {
        console.log(`'${item}' is already in the grocery list.`);
    }
}

function remove(item) {
    const index = groceryList.indexOf(item);
    if (index !== -1) {
        groceryList.splice(index, 1);
        console.log(`'${item}' has been removed`);
    } else {
        console.log(`'${item}' is not in the grocery list.`);
    }
}

function display() {
    console.log('Grocery List:', groceryList);
}

add('apples');
remove('oranges');
display();
