'use strict';

namespace FirstNamespace {

    function doSomething() {
        console.log('I was declared first!');
    }
    doSomething();
}

namespace SecondNamespace {

    function doSomething() {
        console.log('I was declared second!');
    }
    doSomething();
}

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