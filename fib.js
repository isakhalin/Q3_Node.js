function fib(num) {
    if (num === 0) return num;
    if (num === 1) return num;
    return fib(num - 1) + fib(num - 2);
}

const startTime = new Date().getTime();
console.log("1")


const fibHandler = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(fib(43));
    }, 0)
})

console.log("2")
console.log("3")
console.log("4")

fibHandler.then(data => console.log(data));

console.log("final")

// console.log(fib(47));
const endTime = new Date().getTime();
// console.log("Затрачено секунд: ", (endTime - startTime)/1000);