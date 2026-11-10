// code Synchronous
console.log('Synchronus');

console.log('Output 1');
console.log('Output 2');
console.log('Output 3');
console.log('Output 4');
console.log('Output 5');



// code Asynchronous
console.log('\nAsynchronus');
setTimeout(() => {
console.log('Output 1');
}, 1000);

setTimeout(() => {
console.log('Output 2');
}, 2000);

setTimeout(() => {
console.log('Output 3');
}, 5000);

setTimeout(() => {
console.log('Output 4');
}, 3000);

setTimeout(() => {
console.log('Output 5');
}, 4000);
