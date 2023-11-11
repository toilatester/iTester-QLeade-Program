var a=[1,'a',2]

var b = a.filter(function(element) {
    return typeof element === 'number';
});

console.log(b)