let Běží = false
let dobaBěhu = 0

radio.setGroup(10)

input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
    Běží = false
})

Sensors.OnLightDrop(function () {
    if (Běží === false) {
        music.playTone(Note.C, 500)
        radio.sendNumber(53)
        Běží = true
    }

})

radio.onReceivedNumber(function (přijatéČíslo: number) {
    music.playTone(Note.C, 500)
    basic.showNumber(přijatéČíslo)
    dobaBěhu = přijatéČíslo
    basic.showNumber(dobaBěhu)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Sensors.SetLightLevel()
    Běží = false
})