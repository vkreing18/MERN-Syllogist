//  call back function


const sayHello = (name)=>{
    console.log(`Hello ! ${name}`)
}

const takeInput = (sayHello)=>{
    const fullName = 'John Doe';
    sayHello(fullName);
}

takeInput(sayHello);