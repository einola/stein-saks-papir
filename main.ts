let Rock_paper_scissors = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showString("   I love you!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    Rock_paper_scissors = randint(1, 5)
    if (Rock_paper_scissors == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (Rock_paper_scissors == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Rock_paper_scissors == 3) {
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # # .
            . # . # #
            # . . # #
            `)
    } else if (Rock_paper_scissors == 4) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . .
            # . . . .
            . # # # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # # # #
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
