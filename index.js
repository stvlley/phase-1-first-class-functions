function receivesAFunction(whatsThis) {
    console.log("hello")
    console.log(whatsThis())

};

function returnsANamedFunction() {

    return function namedFunction(){}
};

function returnsAnAnonymousFunction(){
    return function(){}
};
