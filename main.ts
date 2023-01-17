let reading = 0
basic.forever(function () {
    reading = input.temperature()
    led.plotBarGraph(
    reading,
    100
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showNumber(reading)
        basic.pause(500)
    }
})
