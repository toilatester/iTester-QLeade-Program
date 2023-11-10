const nestObj = {
    nestObjChild: {
        nestProp:"Hello world"
    }
}

console.log(nestObj.nestObjChild.nestProp)
console.log(nestObj['nestObjChild']['nestProp'])