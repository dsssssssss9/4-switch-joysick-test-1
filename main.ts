pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
basic.clearScreen()
basic.showString("Joystick Test")
basic.pause(100)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showString("LEFT")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showString("RIGHT")
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showString("UP")
    } else if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        basic.showString("DOWN")
    }
    basic.pause(100)
})
