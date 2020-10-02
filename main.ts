input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
