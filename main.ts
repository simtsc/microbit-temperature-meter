let maxval = 0
let reading = 0
let toggle = true
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        toggle = !(toggle)
        basic.pause(500)
    }
    if (toggle) {
        reading = input.temperature()
        maxval = 50
    } else {
        reading = input.soundLevel()
        maxval = 255
    }
    led.plotBarGraph(
    reading,
    maxval
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showNumber(reading)
        basic.pause(500)
    }
})
