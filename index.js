function receivesAFunction (functionOne) {
    console.log(functionOne())
}
receivesAFunction(function () {return "function two"})

function returnsANamedFunction () {
     return function NewFunction() { 
        console.log()
     }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log()
    }
}
