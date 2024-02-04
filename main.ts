serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(500)
    pins.digitalWritePin(DigitalPin.P0, 1)
    serial.writeLine("" + (pins.pulseIn(DigitalPin.P0, PulseValue.Low)))
})
