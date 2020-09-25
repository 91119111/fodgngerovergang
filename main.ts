radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        tinkercademy.LED(DigitalPin.P0, OnOff.On)
        basic.pause(16500)
        tinkercademy.LED(DigitalPin.P0, OnOff.Off)
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.pause(15000)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        tinkercademy.LED(DigitalPin.P0, OnOff.On)
        basic.pause(3500)
    }
})
tinkercademy.LED(DigitalPin.P0, OnOff.Off)
tinkercademy.LED(DigitalPin.P1, OnOff.Off)
radio.setGroup(199)
