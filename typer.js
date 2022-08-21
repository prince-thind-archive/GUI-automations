const { keyboard, Key } = require("@nut-tree/nut-js");
const fs = require('fs');
const text = fs.readFileSync('./data/input.txt').toString().split('');

const shiftChars = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '+', ':', "<", '>', '+', '{', '}', '"']

main();

async function main() {
    console.log('started');
    await sleep(3);
    for (const ch of text) {
        await sleep(0.05)
        if (shiftChars.includes(ch)) {
            keyboard.pressKey(Key.LeftShift);
            keyboard.type(ch);
            keyboard.releaseKey(Key.LeftShift);
        }
        else {
            keyboard.type(ch);

        }
    }
    console.log('done')
}

function sleep(n) {
    return new Promise(r => setTimeout(r, n * 1000))
}