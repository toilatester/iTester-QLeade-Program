/**
 * 28.  **Grocery List Manager**
   - Problem: Write a JavaScript program that can add items to a grocery list, remove items, and display the list. Ensure that the list maintains unique items.
   - Example Input: `add('apples'), remove('oranges'), display()`
   - Example Output: `['apples']`
   - Explanation: After adding 'apples' and attempting to remove 'oranges' which is not in the list, the display should show the current list containing only 'apples'.
 */
var grocery = [];
function add(item){
    return grocery.push(item);
}
function remove(item){
    const index = grocery.indexOf(item);
    if (index != -1){
        grocery.splice(index, 1);
    }
}
function display(){
    console.log(grocery);
}
add('apples');
remove('oranges');
display();