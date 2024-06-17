let groceryList = [];

function addItem (item){
    if (!groceryList.includes(item)){
        groceryList.push(item);
    } else {
        console.log(`${item} is existed in list`)
    }
}

function removeItem(item){
  const index = groceryList.indexOf(item);
  if (index !== -1) {
    groceryList.splice(index, 1);
  } else {
    console.log(`${item} is not in the list.`);
  }
}

function display() {
    console.log(groceryList);
}

addItem("apple");
addItem('oranges');
addItem('bananas');
display();
addItem("apple");
removeItem('oranges');
display();
removeItem('oranges');