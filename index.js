//The receivesAFunction function should
function receivesAFunction(cb) {
    return cb();
}

//"returnsANamedFunction()"
function returnsANamedFunction() {
    return function receivesAFunction(name) {
        console.log(name);
    }
}


//returnsAnAnonymousFunction
function returnsAnAnonymousFunction(){
    return function(){
        console.log('Wassup')
    }
}
