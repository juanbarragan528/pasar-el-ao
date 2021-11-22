let numeroaleatorio = 0
input.onButtonPressed(Button.A, function () {
    numeroaleatorio = randint(1, 3)
    if (numeroaleatorio == 1) {
        basic.showString("E")
    } else if (numeroaleatorio == 2) {
        basic.showString("G")
    } else if (numeroaleatorio == 3) {
        basic.showString("P")
    }
})
input.onButtonPressed(Button.AB, function () {
    numeroaleatorio = randint(1, 3)
    if (numeroaleatorio == 1) {
        basic.showString("G")
    } else if (numeroaleatorio == 2) {
        basic.showString("P")
    } else if (numeroaleatorio == 3) {
        basic.showString("E")
    }
})
input.onButtonPressed(Button.B, function () {
    numeroaleatorio = randint(1, 3)
    if (numeroaleatorio == 1) {
        basic.showString("P")
    } else if (numeroaleatorio == 2) {
        basic.showString("E")
    } else if (numeroaleatorio == 3) {
        basic.showString("G")
    }
})
basic.forever(function () {
    numeroaleatorio = randint(1, 3)
    basic.showNumber(numeroaleatorio)
    if (numeroaleatorio == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (numeroaleatorio == 2) {
        basic.showIcon(IconNames.Square)
    } else if (numeroaleatorio == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
