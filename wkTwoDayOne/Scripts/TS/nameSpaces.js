'use strict';
var FirstNamespace;
(function (FirstNamespace) {
    function doSomething() {
        console.log('I was declared first!');
    }
    doSomething();
})(FirstNamespace || (FirstNamespace = {}));
var SecondNamespace;
(function (SecondNamespace) {
    function doSomething() {
        console.log('I was declared second!');
    }
    doSomething();
})(SecondNamespace || (SecondNamespace = {}));
//check out the javascript code, it shows that the namespace is generating self executing functions
/*
namespace FirstNamespace {

    export function doSomething() {
        console.log('I was declared first!');
    }
}

namespace SecondNamespace {

    export function doSomething() {
        console.log('I was declared first!');
    }
}

FirstNamespace.doSomething();
SecondNamespace.doSomething();
*/ 
