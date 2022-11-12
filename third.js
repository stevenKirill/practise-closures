function toggle(...words) {
    var index = -1;
    return function() {
        if (index === words.length - 1) index = 0;
        else index++;
        return words[index];
    }
}

var hello = toggle('hello');

var onOff = toggle('on', 'off', 'lol', 'troll', 'jog');

console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())

