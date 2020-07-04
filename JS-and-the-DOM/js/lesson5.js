const t0 = performance.now();

setTimeout(hello, 2000);
clearTimeout(hello, 2000);

const t1 = performance.now();
console.log(`Time to execute JS Code ${(t1 - t0).toFixed(4)}`);

function hello() {
    console.log('hello setTimeout!')
};