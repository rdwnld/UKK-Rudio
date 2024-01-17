const display = document.getElementById('display')

function Operator(char){
    const Operator = ['%','/','*','-','+']
    return Operator.includes(char)
}

function view(x){
    const lastchar = display.value.slice(-1)
    if(Operator(lastchar)&& Operator(x)){
        display.value = display.value.slice(0,-1)
    }else{
        display.value += x
    }
}

function evl() {
    display.value = eval(display.value)
}

function clr() {
    display.value = ''
}

function bs() {
    display.value = display.value.toString().slice(0, -1)
}

function satuperx() {
    display.value = eval(1 / (display.value))
}

function kuadrat() {
    display.value = eval(display.value * display.value)
}

function akar() {
    display.value = eval(Math.sqrt(display.value))
}

function negate() {
    if (display.value >= 0) {
        display.value = eval(-Math.abs(display.value))
    } else {
        display.value = eval(Math.abs(display.value))
    }
}