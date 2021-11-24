function receivesAFunction(thing){
    return thing();

}
receivesAFunction(function(){console.log('Hello')});

function doAThing(thing1){
    let x = thing1 => "Hi" + thing1;
    return x;
}

function returnsANamedFunction(){
   return doAThing();
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Meep');
    }
}