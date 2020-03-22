let textOutput = document.getElementById(`textOutput`);
let acBtn = document.getElementById(`acButton`);
let cBtn = document.getElementById(`cButton`);
let divideBtn = document.getElementById(`divideButton`);
let sevenBtn = document.getElementById(`sevenButton`);
let eightBtn = document.getElementById(`eightButton`);
let nineBtn = document.getElementById(`nineButton`);
let multiplyBtn = document.getElementById(`multiplyButton`);
let fourBtn = document.getElementById(`fourButton`);
let fiveBtn = document.getElementById(`fiveButton`);
let sixBtn = document.getElementById(`sixButton`);
let subtractBtn = document.getElementById(`subtractButton`);
let oneBtn = document.getElementById(`oneButton`);
let twoBtn = document.getElementById(`twoButton`);
let threeBtn = document.getElementById(`threeButton`);
let addBtn = document.getElementById(`addButton`);
let zeroBtn = document.getElementById(`zeroButton`);
let dotBtn = document.getElementById(`dotButton`);
let equalsBtn = document.getElementById(`equalsButton`);


let outputArray = [];


oneBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 1;
    outputArray.push(1);
    }
});
twoBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 2;
    outputArray.push(2);
    }
});
threeBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 3;
    outputArray.push(3);
    }
});
fourBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 4;
    outputArray.push(4);
    }
});
fiveBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 5;
    outputArray.push(5);
    }
});
sixBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 6;
    outputArray.push(6);
    }
});
sevenBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 7;
    outputArray.push(7);
    }
});
eightBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 8;
    outputArray.push(8);
    }
});
nineBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 9;
    outputArray.push(9);
    }
});
zeroBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += 0;
    outputArray.push(0);
    }
});
dotBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += `.`;
    outputArray.push(`.`);
    deleteUnnecessaryOperators(`.`);
    }
});


cBtn.addEventListener(`click`, () => {
    outputArray.pop();
    textOutput.textContent = textOutput.textContent.slice(0, textOutput.textContent.length - 1);
});
acBtn.addEventListener(`click`, () => {
    textOutput.textContent = ``
    outputArray = [];
});


divideBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += `/`
    outputArray.push(`/`);
    deleteUnnecessaryOperators(`/`);
    }
});
multiplyBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += `*`
    outputArray.push(`*`);
    deleteUnnecessaryOperators(`*`);
    }
});
subtractBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += `-`
    outputArray.push(`-`);
    deleteUnnecessaryOperators(`-`);
    }
});
addBtn.addEventListener(`click`, () => {
    if (outputArray.length == 15) {} else {
    textOutput.textContent += `+`
    outputArray.push(`+`);
    deleteUnnecessaryOperators(`+`);
    }
});
equalsBtn.addEventListener(`click`, operation);


function operation () {
    if (outputArray.length == 1 || outputArray.length == 2) {
        textOutput.textContent = outputArray[0];
        outputArray.splice(1);
        return outputArray[0];
    }
    if (outputArray.length == 0) {
        textOutput.textContent = ``;
        return outputArray;
    }
    if (typeof outputArray[outputArray.length - 1] == `string`) outputArray.pop();

    joinNumbers();
    
    if (outputArray.indexOf(`.`) != -1) {dot()};
    if (outputArray.indexOf(`/`) != -1) {divide()};
    if (outputArray.indexOf(`*`) != -1) {multiply()};
    if (outputArray.indexOf(`-`) != -1) {subtract()};
    if (outputArray.indexOf(`+`) != -1) {add()};


    textOutput.textContent = outputArray;
}


    function add () {
        for (let i = 0; i < outputArray.length; i++) {
            if (outputArray[i] == `+`) {
                outputArray.splice([i - 1], 3, outputArray[i - 1] + outputArray[i + 1]);
                i = 0;
            }
        }
    }
    function subtract () {
        for (let i = 0; i < outputArray.length; i++) {
            if (outputArray[i] == `-`) {
                outputArray.splice([i - 1], 3, outputArray[i - 1] - outputArray[i + 1]);
                i = 0;
            }
        }
    }
    function multiply() {
        for (let i = 1; i < outputArray.length; i++) {
            if (outputArray[i] == `*`) {
                outputArray.splice([i - 1], 3, outputArray[i - 1] * outputArray[i + 1]);
                i = 0;
            }
        }
    }
    function divide () {
        for (let i = 0; i < outputArray.length; i++) {
            if (outputArray[i] == `/`) {
                outputArray.splice([i - 1], 3, outputArray[i - 1] / outputArray[i + 1]);
                i = 0;
            }
        }
    }
    function dot() {
        for (let i = 1; i < outputArray.length; i++) {
            if (outputArray[i] == `.`) {
                outputArray.splice(i - 1, 3, +`${outputArray[i - 1]}.${outputArray[i + 1]}`);
                i = 0;
            }
        }
    }


    function deleteUnnecessaryOperators(operator) {
        if (outputArray[0] == operator) {
            textOutput.textContent = ``;
            outputArray.pop();
        }
        for (let i = 0; i < outputArray.length; i++) {
            if (typeof outputArray[i] == `string` && typeof outputArray[i + 1] == `string`) {
                outputArray.pop();
                textOutput.textContent = outputArray.join(``);
            }
        }
    }
    function joinNumbers() {
        for (let i = 0; i < outputArray.length; i++) {
            if (typeof outputArray[i] == `number` && typeof outputArray[i + 1] == `number`) {
                outputArray.splice(outputArray.indexOf(outputArray[i]), 2, outputArray[i] * 10 + outputArray[i + 1]);
                i = -1;
            }
        }
    }