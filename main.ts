input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    HomersekletKiiras_betunkent(convertToText(input.temperature()), CharShowDelay)
    basic.pause(2000)
    basic.clearScreen()
})
function HomersekletKiiras_betunkent (TString: string, CharShowms: number) {
    KiirasBetunkent(TString, CharShowms)
    basic.clearScreen()
    basic.pause(200)
    basic.showLeds(`
        # . # # .
        . # . . #
        . # . . .
        . # . . #
        . . # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
}
radio.onReceivedValue(function (name, value) {
    if (name == "Temp2") {
        HomersekletKiiras_betunkent(convertToText(value), CharShowDelay)
    } else if (name == "Temp3") {
        HomersekletKiiras_betunkent(convertToText(value), CharShowDelay)
    } else {
        SHiba = 0
        KiirasBetunkent(convertToText(value), 1)
    }
})
function KiirasBetunkent (SInput: string, NOneCharShow_ms: number) {
    for (let index = 0; index <= SInput.length - 1; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(NOneCharShow_ms)
        c1 = SInput.substr(index, 1)
        basic.showString(c1)
        basic.pause(NOneCharShow_ms)
    }
}
let c1 = ""
let SHiba = 0
let CharShowDelay = 0
led.setBrightness(15)
CharShowDelay = 200
basic.forever(function () {
    radio.setGroup(1)
    radio.sendString("Temp2")
    basic.pause(100)
})
