function tryCatch(value){
    try{
        if (typeof value !== 'number') {
            throw new Error("It is not a valid number");
        }
       console.log(value); 
    } catch (e){
        console.error(e.message);
    }
}

tryCatch(0.0314E+2);
tryCatch("a");