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
    useBtn(1);
});
twoBtn.addEventListener(`click`, () => {
    useBtn(2);
});
threeBtn.addEventListener(`click`, () => {
    useBtn(3);
});
fourBtn.addEventListener(`click`, () => {
    useBtn(4);
});
fiveBtn.addEventListener(`click`, () => {
    useBtn(5);
});
sixBtn.addEventListener(`click`, () => {
    useBtn(6);
});
sevenBtn.addEventListener(`click`, () => {
    useBtn(7);
});
eightBtn.addEventListener(`click`, () => {
    useBtn(8);
});
nineBtn.addEventListener(`click`, () => {
    useBtn(9);
});
zeroBtn.addEventListener(`click`, () => {
    useBtn(0);
});
dotBtn.addEventListener(`click`, () => {
    useBtn(`.`);
    deleteUnnecessaryOperators(`.`);
    for (let i = outputArray.length - 2; i >= 0; i--) {
        if (typeof outputArray[i] == `string`) {
            if (outputArray[i] == `.`) {
                outputArray.pop();
                textOutput.textContent = textOutput.textContent.slice(0, textOutput.textContent.length - 1);
            }
            break;
        }
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
    useBtn(`/`);
    deleteUnnecessaryOperators(`/`);
    }
);
multiplyBtn.addEventListener(`click`, () => {
    useBtn(`*`);
    deleteUnnecessaryOperators(`*`);
    }
);
subtractBtn.addEventListener(`click`, () => {
    useBtn(`-`);
    deleteUnnecessaryOperators(`-`);
    }
);
addBtn.addEventListener(`click`, () => {
    useBtn(`+`);
    deleteUnnecessaryOperators(`+`);
    }
);
equalsBtn.addEventListener(`click`, operation);


document.addEventListener(`keydown`, (event) => {
    if (event.key == 1) {
        useBtn(1);
    }
    if (event.key == 2) {
        useBtn(2);
    }
    if (event.key == 3) {
        useBtn(3);
    }
    if (event.key == 4) {
        useBtn(4);
    }
    if (event.key == 5) {
        useBtn(5);
    }
    if (event.key == 6) {
        useBtn(6);
    }
    if (event.key == 7) {
        useBtn(7);
    }
    if (event.key == 8) {
        useBtn(8);
    }
    if (event.key == 9) {
        useBtn(9);
    }
    if (event.keyCode == 48) {
        useBtn(0);
    }
    if (event.key == `.`) {
        useBtn(`.`);
        deleteUnnecessaryOperators(`.`);
        for (let i = outputArray.length - 2; i >= 0; i--) {
            if (typeof outputArray[i] == `string`) {
                if (outputArray[i] == `.`) {
                    outputArray.pop();
                    textOutput.textContent = textOutput.textContent.slice(0, textOutput.textContent.length - 1);
                }
                break;
            }
        }
    }
    if (event.keyCode == 8) {
        outputArray.pop();
        textOutput.textContent = textOutput.textContent.slice(0, textOutput.textContent.length - 1);
    }
    if (event.key == `/`) {
        useBtn(`/`);
        deleteUnnecessaryOperators(`/`);
    }
    if (event.key == `*`) {
        useBtn(`*`);
        deleteUnnecessaryOperators(`*`);
    }
    if (event.key == `-`) {
        useBtn(`-`);
        deleteUnnecessaryOperators(`-`);
    }
    if (event.key == `+`) {
        useBtn(`+`);
        deleteUnnecessaryOperators(`+`);
    }
    if (event.keyCode == 13) {
        operation();
    }
})


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


    function useBtn(btn) {
        if (outputArray.length == 15) {} else {
            textOutput.textContent += btn;
            outputArray.push(btn);
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