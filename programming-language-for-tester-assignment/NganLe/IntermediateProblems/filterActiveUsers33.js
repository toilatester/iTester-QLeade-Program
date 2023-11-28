/**
 * 33. **Write a JavaScript function filterActiveUsers that takes a JSON array of user objects and returns a new array containing only the objects where the isActive property is true.**
 */
function filterActiveUsers(arrUsers){
    return arrUsers.filter(function(user){
        return user.isActive === true;
    })
}
console.log(filterActiveUsers([
    {
      "id": 166,
      "name": "ewuvri",
      "age": 24,
      "email": "mrx@example.com",
      "isActive": false
    },
    {
      "id": 699,
      "name": "tfmmfv",
      "age": 54,
      "email": "eeh@example.com",
      "isActive": true
    },
    {
      "id": 101,
      "name": "madnqx",
      "age": 59,
      "email": "xol@example.com",
      "isActive": true
    }]));