let Běží = false
let dobaBěhu = 0

radio.setGroup(10)

Sensors.SetLightLevel()

Sensors.OnLightDrop(function () {
    if (Běží === false) {
        music.playTone(Note.C, 500)
        radio.sendNumber(53)
        Běží = true
    }

})

radio.onReceivedNumber(function (receivedNumber: number) {
    music.playTone(Note.C, 500)
    basic.showNumber(receivedNumber)
    dobaBěhu = receivedNumber
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Sensors.SetLightLevel()
    Běží = false
})