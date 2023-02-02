function writing(e){
    const screens = document.querySelector (".inp")
    if (screens.value === "0") {screens.value = ""}
    screens.value += e.textContent
}

function clearScreen(){
    const screens = document.querySelector (".inp")
    const ttt = document.getElementById("ttt")
    ttt.textContent = "0"
    screens.value = "0"
}

function deleteItem(){
    const screens = document.querySelector (".inp")
    if (screens.value.length === 1 ){
    screens.value = 0 
    return
    }
    screens.value = screens.value.slice(0, screens.value.length - 1)
}

function operations(e){
    const screens = document.querySelector (".inp")
    const ttt = document.getElementById("ttt")
    ttt.textContent = screens.value + e.textContent
    screens.value = "0"
}

function equals(){
    const screens = document.querySelector (".inp")
    const ttt = document.getElementById("ttt")
    let a = ttt.textContent.slice(0, ttt.textContent.length - 1)
    let op = ttt.textContent.slice(ttt.textContent.length - 1, ttt.textContent.length) 
    let b = screens.value
    switch (op) {
        case "/":
            screens.value = +a / +b
            break;
        case "*":
            screens.value = +a * +b
            break;
        case "-":
            screens.value = +a - +b
            break;
        case "+":
            screens.value = +a + +b
            break;
        default:
            return
    }
    ttt.textContent = "0"
}

function dot(){
    const screens = document.querySelector (".inp")
    if (screens.value.includes(".")) return
    screens.value += "."
}

function prons(){
    const screens = document.querySelector (".inp")
    if (screens.value.includes("%")) return
    screens.value += "%"
}

function brac(){
    const screens = document.querySelector (".inp")
    
}