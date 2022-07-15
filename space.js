const { keyboard, Key } = require("@nut-tree/nut-js");


main();
async function main() {
    console.log('started')
    while (true) {
        await sleep(1)
        await keyboard.type(Key.Space);
    }
}

function sleep(n) {
    return new Promise(r => setTimeout(r, n * 1000))
}